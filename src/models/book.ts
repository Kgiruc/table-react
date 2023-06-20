export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
  };
}

export interface BookResponse {
  items: Book[];
}
