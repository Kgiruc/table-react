import { useBooksQuery } from '../../services/ApiService';

function Home() {
  const { data, error, isLoading, isSuccess } = useBooksQuery('react');
  console.log(data);
  return (
    <main>
      <h1>Books:</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {isSuccess && <p>git</p>}
    </main>
  );
}

export default Home;
