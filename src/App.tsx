import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import MoreDetails from './pages/MoreDetails/MoreDetails';

function App() {
  return (
    <Routes>
      <Route path="/booklist" element={<Home />} />
      <Route path="/booklist/:author" element={<MoreDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
