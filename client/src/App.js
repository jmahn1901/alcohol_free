import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Header from './Header';
import Footer from './Footer'

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
