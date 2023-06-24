import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../store/store';

interface BooksDetailsProps {
  id: string;
}

function BooksDetails({ id }: BooksDetailsProps) {
  const details = useAppSelector((state) => state.details);
  console.log(details.book.volumeInfo);
  return details.isOpen && id === details.book.id ? (
    <ul>
      {details.book.volumeInfo.imageLinks ? (
        <img
          src={details.book.volumeInfo.imageLinks.smallThumbnail}
          alt="ksiazka"
        />
      ) : (
        <p>brak zdjęcia</p>
      )}
      <Link to={`./${details.book.volumeInfo.authors}`}>More details</Link>
    </ul>
  ) : null;
}

export default BooksDetails;
