import { Book } from '../../models/book';
import { openDetails } from '../../store/features/detailsSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import BooksDetails from './BooksDetails';

type Props = {
  books: Book[];
  author: boolean;
};

function BooksList({ books, author }: Props) {
  const dispatch = useAppDispatch();
  const details = useAppSelector((state) => state.details);
  return (
    <>
      {books.map((book) => (
        <tr
          key={book.id}
          onClick={() =>
            dispatch(
              openDetails({
                bookId: book.id,
              })
            )
          }
          className={`cursor-pointer border-b-4 border-b-gray-500 font-jost hover:bg-gray-400 ${
            details.isOpen && details.bookId === book.id ? 'bg-gray-400' : ''
          }`}
        >
          <td className="border-2 px-2 py-1 md:px-4 md:py-2">
            {book.volumeInfo.title}
          </td>
          <td className="border-2 px-2 py-1 md:px-4 md:py-2">
            {book.volumeInfo.authors}
          </td>
          <td className="border-2 px-2 py-1 md:px-4 md:py-2">
            {book.kind.replace('books', '')}
          </td>
          <td className="border-2 px-2 py-1 md:px-4 md:py-2">
            {book.id && (
              <BooksDetails id={book.id} author={author} book={book} />
            )}
          </td>
        </tr>
      ))}
    </>
  );
}

export default BooksList;
