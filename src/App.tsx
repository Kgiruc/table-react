import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import MoreDetails from './pages/MoreDetails/MoreDetails';
import Books from './pages/Books/Books';
import Home from './pages/Home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booklist" element={<Books />} />
      <Route path="/booklist/:author" element={<MoreDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
