import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import { useBooksQuery } from '../../services/ApiService';
import BooksList from '../../components/book/BooksList';
import BookView from '../../components/book/BookView';
import MoreDetailsLayout from '../../layouts/MoreDetailsLayot';
import BookListLayout from '../../layouts/BookListLayot';

function MoreDetails() {
  const { author } = useParams<{ author: string }>();
  const query = author ? `${author}` : '';
  const { data, error, isLoading, isSuccess } = useBooksQuery(query);
  return (
    <MoreDetailsLayout>
      <Breadcrumbs />
      <BookView />
      <BookListLayout isAuthor>
        {isLoading && (
          <tr>
            <td colSpan={4}>Loading...</td>
          </tr>
        )}
        {error && (
          <tr>
            <td colSpan={4}>Not found...</td>
          </tr>
        )}
        {isSuccess && <BooksList books={data.items} author />}
      </BookListLayout>
    </MoreDetailsLayout>
  );
}

export default MoreDetails;
