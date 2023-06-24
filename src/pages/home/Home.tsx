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
        placeholder="min. 3 znaki"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm.length >= 3 && (
        <button type="button" onClick={handleSearch}>
          Szukaj
        </button>
      )}
    </HomeLayout>
  );
}

export default Home;
