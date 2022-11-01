import { Route, Routes } from 'react-router-dom';
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import ItemList from './pages/item/ItemList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      </Routes>
  );
}

export default App;
