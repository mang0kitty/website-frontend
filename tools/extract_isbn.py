import json
from typing import List


with open('./public/api/books.json', 'r') as f:
    isbns: List[str] = []
    books = json.load(f)
    for book in books:
        if 'isbn' in book:
            isbns.append(book['isbn'])
        else:
            print('No ISBN')
    with open('./books/books.txt', 'w') as f:
        f.write('\n'.join(isbns))