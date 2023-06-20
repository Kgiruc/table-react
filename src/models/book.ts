export interface Book {
  id: string;
  kind: string;
  volumeInfo: {
    kind: string;
    title: string;
    authors: string[];
  };
}

export interface BookResponse {
  items: Book[];
}
