import os
import logging
from typing import Dict

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class Engine:
    def __init__(self, name: str, version: str, description: str):
        self.name = name
        self.version = version
        self.description = description
        self.files: Dict[str, Dict[str, str]] = {}

    def add_file(self, file_path: str, file_content: str):
        self.files[file_path] = file_content

    def get_file(self, file_path: str) -> str:
        return self.files.get(file_path)

    def remove_file(self, file_path: str):
        if file_path in self.files:
            del self.files[file_path]
        else:
            logger.warning(f"File {file_path} not found")

    def update_file(self, file_path: str, new_content: str):
        if file_path in self.files:
            self.files[file_path] = new_content
        else:
            logger.warning(f"File {file_path} not found")

    def list_files(self) -> Dict[str, str]:
        return self.files

def main():
    engine = Engine("Core Engine", "1.0.0", "Core Engine")
    engine.add_file("file1.txt", "This is the content of file1.txt")
    engine.add_file("file2.txt", "This is the content of file2.txt")
    engine.update_file("file1.txt", "New content for file1.txt")
    engine.list_files()
    engine.remove_file("file2.txt")
    engine.list_files()

if __name__ == "__main__":
    main()