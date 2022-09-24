import logging
import requests
import json
from requests.exceptions import HTTPError
from argparse import ArgumentParser
from urllib import response
from datetime import date

from models import VolumeInfo

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
args = parser.parse_args()

if args.file:
    with open(args.file[0], "r") as f:
        args.isbn = list(map(lambda line: line.strip(), f.readlines()))

for isbn in args.isbn:
    dateRead = date.today().strftime("%Y-%m-%d")
    imageLink = f'https://covers.openlibrary.org/b/isbn/{isbn}-S.jpg'

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
        book = VolumeInfo(**volume["volumeInfo"], dateRead=dateRead, imageLink=imageLink)
        print(book.title)
    
    except Exception as ex:
        logging.exception(
            f"Exception occurred while calling the Google books API for book {isbn}: {ex}"
        )


    with open('result.json', 'a+') as f:
        json.dump(book.__dict__, f)
