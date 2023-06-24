import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchBook } from '../../store/features/searchSlice';
import { useAppDispatch } from '../../store/store';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSearch = () => {
    dispatch(searchBook({ search: searchTerm }));
    navigate('./booklist');
  };

  return (
    <div>
      <h1>Wyszukaj książkę:</h1>
      <input
        type="text"
        placeholder="min. 3 charakters"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm.length >= 3 && (
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      )}
    </div>
  );
}

export default Home;
