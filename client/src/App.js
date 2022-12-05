import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home";
import Header from './Header';
import Footer from './Footer'
import ItemList from './pages/item/ItemList';
import ItemList2 from './pages/item/ItemList2';
import BlogDetail from './pages/Blog/BlogDetail';
import BlogInformation from './pages/Blog/blog-info-json';


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="/item" element={<ItemList2/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;

// <body class="page-portfolio" data-aos-easing="slide" data-aos-duration="800" data-aos-delay="0">



// <main id="main">

// </main><!-- End #main -->



// <a href="#" class="scroll-top d-flex align-items-center justify-content-center active"><i class="bi bi-arrow-up-short"></i></a>



// <!-- Vendor JS Files -->
// <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
// <script src="assets/vendor/aos/aos.js"></script>
// <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
// <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
// <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
// <script src="assets/vendor/php-email-form/validate.js"></script>

// <!-- Template Main JS File -->
// <script src="assets/js/main.js"></script>



// </body>