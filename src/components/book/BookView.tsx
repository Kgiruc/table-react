import { useAppSelector } from '../../store/store';

function BookView() {
  const book = useAppSelector((state) => state.details);

  return (
    <section className="rounded-lg bg-white p-6 font-jost shadow-lg">
      <ul>
        {book.book.volumeInfo.imageLinks ? (
          <img
            src={book.book.volumeInfo.imageLinks.thumbnail}
            alt={book.book.volumeInfo.title}
            className="mx-auto h-auto w-40 rounded-md"
          />
        ) : (
          <p className="text-center text-gray-600">Brak zdjęcia</p>
        )}
        <li className="text-lg font-bold">
          Author/s: {book.book.volumeInfo.authors}
        </li>
        <li className="text-lg">Category: {book.book.volumeInfo.categories}</li>
        <li className="text-lg">Language: {book.book.volumeInfo.language}</li>
        <li className="text-lg">Pages: {book.book.volumeInfo.pageCount}</li>
        <li className="text-lg">
          Date of published: {book.book.volumeInfo.publishedDate}
        </li>
        <li className="text-lg">
          <a
            href={book.book.volumeInfo.infoLink}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 underline"
          >
            Strona
          </a>
        </li>
      </ul>
    </section>
  );
}

export default BookView;
