import Breadcrumbs from '../../components/Breadcrumbs';
import { useBooksQuery } from '../../services/ApiService';
import BooksList from './components/BooksList';

function Books() {
  const { data, error, isLoading, isSuccess } = useBooksQuery('harry potter');
  return (
    <main>
      <Breadcrumbs />
      <h1>Books:</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error</p>}
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
          <BooksList books={data.items} />
        </table>
      )}
    </main>
  );
}

export default Books;
