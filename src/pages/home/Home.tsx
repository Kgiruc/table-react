import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useHandleSearch from '../../hooks/useHandleSearch';
import HomeLayout from '../../layouts/HomeLayot';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSearch = useHandleSearch(searchTerm, navigate);

  return (
    <HomeLayout>
      <input
        type="text"
        placeholder="min. 3 char."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-4/5 rounded-lg border-2 border-gray-300 bg-gray-50 p-4 pl-10 font-jost
         text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500
          dark:border-gray-600 dark:bg-gray-700 dark:text-white
           dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      />
      {searchTerm.length >= 3 && (
        <button
          type="button"
          onClick={handleSearch}
          className="text-2x mt-6 rounded-lg border-2 border-amber-950 bg-gray-400 px-3 py-1 font-jost
          hover:bg-gray-500 "
        >
          Szukaj
        </button>
      )}
    </HomeLayout>
  );
}

export default Home;
