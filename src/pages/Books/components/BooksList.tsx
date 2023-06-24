import { Book } from '../../../models/book';
import { detailsBook } from '../../../store/features/detailsSlice';
import { useAppDispatch } from '../../../store/store';
import BooksDetails from './BooksDetails';

type Props = {
  books: Book[];
};

function BooksList({ books }: Props) {
  const dispatch = useAppDispatch();
  return (
    <tbody>
      {books.map((book) => (
        <tr key={book.id} onClick={() => dispatch(detailsBook({ book }))}>
          <td>{book.volumeInfo.title}</td>
          <td>{book.volumeInfo.authors}</td>
          <td>{book.kind}</td>
          <td>{book.id && <BooksDetails id={book.id} />}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default BooksList;
