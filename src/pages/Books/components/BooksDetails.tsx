import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { detailsBook } from '../../../store/features/detailsSlice';

interface BooksDetailsProps {
  id: string;
  author: boolean;
}

function BooksDetails({ id, author }: BooksDetailsProps) {
  const details = useAppSelector((state) => state.details);
  const dispatch = useAppDispatch();
  return details.isOpen && id === details.book.id ? (
    <Link
      to={author ? './' : `./${details.book.volumeInfo.authors}`}
      onClick={dispatch(detailsBook({ book }))}
    >
      More details
    </Link>
  ) : null;
}

export default BooksDetails;
