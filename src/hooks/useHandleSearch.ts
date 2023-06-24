import { useDispatch } from 'react-redux';
import { NavigateFunction } from 'react-router-dom';
import { searchBook } from '../store/features/searchSlice';

const useHandleSearch = (searchTerm: string, navigate: NavigateFunction) => {
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchBook({ search: searchTerm }));
    navigate('./booklist');
  };

  return handleSearch;
};

export default useHandleSearch;
