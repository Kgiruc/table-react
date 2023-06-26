import Breadcrumbs from '../../components/breadcrumbs/BreadCrumbs';
import BookListLayout from '../../layouts/BookListLayot';
import { useBooksQuery } from '../../services/ApiService';
import { useAppSelector } from '../../store/store';
import BooksList from '../../components/book/BooksList';

function Books() {
  const searchBook = useAppSelector((state) => state.search);
  const { data, error, isLoading, isSuccess } = useBooksQuery(
    searchBook.search
  );

  return (
    <>
      <Breadcrumbs />
      <BookListLayout isAuthor={false}>
        {isLoading && (
          <tr>
            <td colSpan={4} className="py-8 text-center">
              <img src="/gifs/loading.gif" alt="loading" className="mx-auto" />
            </td>
          </tr>
        )}
        {error && (
          <tr>
            <td
              colSpan={4}
              className="py-14 text-center font-belanosima text-4xl"
            >
              Not found...
            </td>
          </tr>
        )}
        {isSuccess && <BooksList books={data.items} author={false} />}
      </BookListLayout>
    </>
  );
}

export default Books;
