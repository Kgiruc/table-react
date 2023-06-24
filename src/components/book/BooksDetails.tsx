import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { detailsBook } from '../../store/features/detailsSlice';
import { Book } from '../../models/book';

interface BooksDetailsProps {
  id: string;
  author: boolean;
  book: Book;
}

function BooksDetails({ id, author, book }: BooksDetailsProps) {
  const details = useAppSelector((state) => state.details);
  const dispatch = useAppDispatch();
  return details.isOpen && id === details.bookId ? (
    <Link
      onClick={() => dispatch(detailsBook({ book }))}
      to={
        author
          ? `../booklist/${book.volumeInfo.authors}`
          : `./${book.volumeInfo.authors}`
      }
    >
      More details
    </Link>
  ) : null;
}

export default BooksDetails;
