import { useAppSelector } from '../../../store/store';

function BookView() {
  const book = useAppSelector((state) => state.details);
  return (
    <section>
      <ul>
        {book.book.volumeInfo.imageLinks ? (
          <img
            src={book.book.volumeInfo.imageLinks.thumbnail}
            alt={book.book.volumeInfo.title}
          />
        ) : (
          <p>Brak zdjęcia</p>
        )}
        <li>{book.book.volumeInfo.authors}</li>
        <li>{book.book.volumeInfo.categories}</li>
        <li>{book.book.volumeInfo.language}</li>
        <li>{book.book.volumeInfo.pageCount}</li>
        <li>{book.book.volumeInfo.publishedDate}</li>
        <a
          href={book.book.volumeInfo.infoLink}
          target="_blank"
          rel="noreferrer"
        >
          Strona
        </a>
      </ul>
    </section>
  );
}

export default BookView;
