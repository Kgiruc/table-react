import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useBooksQuery } from '../../services/ApiService';
import BooksList from '../Books/components/BooksList';
import BookView from './components/BookView';

function MoreDetails() {
  const { author } = useParams<{ author: string }>();
  const query = author ? `${author}` : '';
  const { data, error, isLoading, isSuccess } = useBooksQuery(query);
  return (
    <div>
      <Breadcrumbs />
      <BookView />
      <h1>more books with this author </h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Not found...</p>}
      {isSuccess && (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Authors</th>
              <th>Kind</th>
              <th>Details</th>
            </tr>
          </thead>
          <BooksList books={data.items} author />
        </table>
      )}
    </div>
  );
}

export default MoreDetails;
