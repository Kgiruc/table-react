import { Book } from './book';

export interface Details {
  bookId: string;
  book: Book;
  isOpen: boolean;
}
