import Breadcrumbs from '../../components/Breadcrumbs';
import { useBooksQuery } from '../../services/ApiService';
import { useAppSelector } from '../../store/store';
import BooksList from './components/BooksList';

function Books() {
  const searchBook = useAppSelector((state) => state.search);
  const { data, error, isLoading, isSuccess } = useBooksQuery(
    searchBook.search
  );
  return (
    <>
      <Breadcrumbs />
      <main>
        <h1>Books:</h1>
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
            <BooksList books={data.items} author={false} />
          </table>
        )}
      </main>
    </>
  );
}

export default Books;
