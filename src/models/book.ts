export interface Book {
  id: string;
  kind: string;
  volumeInfo: {
    title: string;
    authors: string[];
    categories: string[];
    description: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    industryIdentifiers: {
      identifier: string;
      type: string;
    };
    infoLink: string;
    language: string;
    pageCount: string;
    publishedDate: string;
  };
}

export interface BookResponse {
  items: Book[];
}
