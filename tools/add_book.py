import logging
import requests
import json
from argparse import ArgumentParser
from urllib import response
from datetime import date
from typing import List
import os


from models import VolumeInfo, AzureBlobFileUploader, Image

parser = ArgumentParser(
    description="A program that finds information on books you enter!"
)
parser.add_argument(
    "--isbn",
    metavar="I",
    type=str,
    nargs="+",
    help="The ISBNs for the books you have read.",
)
parser.add_argument(
    "--file",
    metavar="F",
    type=str,
    nargs="+",
    help="The location of the file to read the list of books from.",
)

parser.add_argument(
    '--output',
    help="The path to the books.json output file.",
    default= os.path.join(os.path.dirname(__file__), '../public/api/books.json')
)

args = parser.parse_args()

images: List = []
if args.file:
    with open(args.file[0], "r") as f:
        args.isbn = list(map(lambda line: line.strip(), f.readlines()))

with open(args.output, "r", encoding="utf-8") as f:
    books = json.load(f)

existing_books = set(map(lambda book: book["isbn"], books))

for isbn in args.isbn:
    if isbn in existing_books:
        logging.warn(f"Skipping book with ISBN: {isbn} (it already exists in the output)")
        continue

    dateRead = date.today().strftime("%Y-%m-%d")
    imageLink = f"/books/images/{isbn}.jpg"
    imageSourceUrl = f"https://covers.openlibrary.org/b/isbn/{isbn}-L.jpg"

    try:
        response = requests.get(
            f"https://www.googleapis.com/books/v1/volumes?q=isbn:{isbn}"
        )
        response.raise_for_status()
        book_response = response.json()

        if book_response["totalItems"] < 1:
            logging.info("No book found with ISBN: {isbn}")
            continue

        volume = book_response["items"][0]
        book = VolumeInfo(
            isbn, **volume["volumeInfo"], dateRead=dateRead, imageLink=imageLink
        )

        images.append(Image(isbn, imageLink, imageSourceUrl, book.imageLinks["thumbnail"]))

        books.append(book.__dict__)

    except Exception as ex:
        logging.exception(
            f"Exception occurred while calling the Google books API for book {isbn}: {ex}"
        )

AzureBlobFileUploader().run(images)

with open(args.output, "w", encoding="utf-8") as f:
    books = json.dump(books, f, indent=4, ensure_ascii=False)
