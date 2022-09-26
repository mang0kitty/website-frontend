import os
from typing import List, Tuple
from multiprocessing.pool import ThreadPool
from azure.storage.blob import BlobClient
from azure.identity import DefaultAzureCredential
import requests
import logging


class VolumeInfo(object):
    def __init__(
        self, isbn: str, dateRead: str = None, imageLink: str = None, **kwargs
    ):
        self.isbn = isbn
        self.dateRead = dateRead
        self.imageLink = imageLink

        for key, value in kwargs.items():
            setattr(self, key, value)


class Image:
    def __init__(self, isbn: str, link: str, *source_urls: str):
        self.isbn = isbn
        self.link = link
        self.source_urls = source_urls


class AzureBlobFileUploader(object):
    def __init__(self):
        self.AZURE_STORAGE_BLOB_URL = os.environ.get(
            "AZURE_STORAGE_BLOB_URL", "https://cdneaideenstorage.blob.core.windows.net"
        )
        self.BLOB_CONTAINER_NAME = os.environ.get("BLOB_CONTAINER_NAME", "$web")
        self.credential = DefaultAzureCredential()

    def run(self, images: List[Image]):
        with ThreadPool(processes=int(10)) as pool:
            return pool.map(self.upload_file, images)

    def upload_file(self, image: Image):
        blob_client = blob_client = BlobClient(
            self.AZURE_STORAGE_BLOB_URL,
            self.BLOB_CONTAINER_NAME,
            image.link.lstrip("/"),
            credential=self.credential,
        )

        try:
            if blob_client.get_blob_properties():
                return
        except:
            pass

        # get the file contents from the URL
        for source_url in image.source_urls:
            try:
                response = requests.get(source_url)
                response.raise_for_status()

                # We only upload images that are >5kB in size
                if len(response.content) > 5 * 1024:
                    blob_client.upload_blob(response.content)
                    return
            except Exception as ex:
                logging.exception(
                    f"Exception occurred while fetching image for book {image.isbn}: {ex}"
                )
        
        logging.error(f"Could not find a valid image for book {image.isbn}")
