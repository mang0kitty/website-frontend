from typing import List


class VolumeInfo(object):
    def __init__(
        self,
        dateRead: str = None,
        imageLink: str = None,
        **kwargs,
    ):
        self.dateRead = dateRead
        self.imageLink = imageLink

        for key, value in kwargs.items():
            setattr(self, key, value)
