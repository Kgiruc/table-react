import { useAppSelector } from '../../../store/store';

interface BooksDetailsProps {
  id: string;
}

function BooksDetails({ id }: BooksDetailsProps) {
  const details = useAppSelector((state) => state.details);
  console.log(details.book.volumeInfo);
  return details.isOpen && id === details.book.id ? (
    <ul>
      {details.book.volumeInfo.imageLink ? (
        <img
          src={details.book.volumeInfo.imageLinks.smallThumbnail}
          alt="ksiazka"
        />
      ) : (
        <p>brak zdjęcia</p>
      )}
    </ul>
  ) : null;
}

export default BooksDetails;
