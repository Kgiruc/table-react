import { Book } from '../../../models/book';

type Props = {
  books: Book[];
};

function BooksList({ books }: Props) {
  return (
    <tbody>
      {books.map((book) => (
        <tr key={book.id}>
          <td>{book.volumeInfo.title}</td>
          <td>{book.volumeInfo.authors.join(', ')}</td>
          <td>{book.kind}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default BooksList;
