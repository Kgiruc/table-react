import { Book } from '../../../models/book';
import { openDetails } from '../../../store/features/detailsSlice';
import { useAppDispatch } from '../../../store/store';
import BooksDetails from './BooksDetails';

type Props = {
  books: Book[];
  author: boolean;
};

function BooksList({ books, author }: Props) {
  const dispatch = useAppDispatch();
  return (
    <tbody>
      {books.map((book) => (
        <tr key={book.id} onClick={() => dispatch(openDetails)}>
          <td>{book.volumeInfo.title}</td>
          <td>{book.volumeInfo.authors}</td>
          <td>{book.kind}</td>
          <td>{book.id && <BooksDetails id={book.id} author={author} />}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default BooksList;
