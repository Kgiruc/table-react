import { useAppSelector } from '../../../store/store';

interface BooksDetailsProps {
  id: string;
}

function BooksDetails({ id }: BooksDetailsProps) {
  const details = useAppSelector((state) => state.details);
  console.log(details);
  return details.isOpen && id === details.book.id ? (
    <ul>
      <li>czesc</li>
    </ul>
  ) : null;
}

export default BooksDetails;
