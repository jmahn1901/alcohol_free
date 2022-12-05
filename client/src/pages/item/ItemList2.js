// import img from "./../../assets/img/portfolio/"
import headerImg from './../../assets/img/blog-header.jpg'

// 요가정보 페이지
let ItemList = () => {



  
    return (
      <body className="page-portfolio" data-aos-easing="slide" data-aos-duration="800" data-aos-delay="0">
        <main id="main">
          {/*     <!-- ======= Breadcrumbs ======= --> */}
      
          <div className="breadcrumbs d-flex align-items-center"
                style={{ backgroundImage: `url(${headerImg})` }}
              >
            <div className="container position-relative d-flex flex-column align-items-center">

              <h2>Portfolio</h2>
              <ol>
                <li><a href="index.html">Home</a></li>
                <li>Portfolio</li>
              </ol>

            </div>
          </div>
          {/* <!-- End Breadcrumbs --> */}

          <section id="portfolio" className="portfolio">
            <div className="container aos-init aos-animate" data-aos="fade-up">

              <div className="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry" data-portfolio-sort="original-order">

                <ul className="portfolio-flters aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                  <li data-filter="*" className="filter-active">전체</li>
                  <li data-filter=".filter-app">과실주</li>
                  <li data-filter=".filter-product">증류주</li>
                  <li data-filter=".filter-branding">탁주</li>
                  <li data-filter=".filter-books">기타</li>
                </ul>
                {/* <!-- End Portfolio Filters --> */}
                {/* <div className="row gy-4 portfolio-container aos-init aos-animate" data-aos="fade-up" data-aos-delay="300" style={{position: "relative", height: "984px", margin: "30px"}}></div>                                                                                  */}
                <div className="row gy-4 portfolio-container aos-init aos-animate" data-aos="fade-up" data-aos-delay="300" style={{position: "relative", height: "1343.95px"}}>
                  
                  <div className="col-lg-4 col-md-6 portfolio-item filter-app" style={{position: "absolute", left: "0px", top: "0px"}}>
                    <img src={require("./../../assets/img/portfolio/app-1.jpg")} className="img-fluid" alt=""/>
                    <div className="portfolio-info">
                      <h4>App 1</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href="assets/img/portfolio/app-1.jpg" title="App 1" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                      <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                    </div>
                  </div>
                  {/* <!-- End Portfolio Item --> */}

                  <div className="col-lg-4 col-md-6 portfolio-item filter-product" style={{position: "absolute", left: "439.987px", top: "0px"}}>
                    <img src={require("./../../assets/img/portfolio/product-1.jpg")} className="img-fluid" alt=""/>
                    <div className="portfolio-info">
                      <h4>Product 1</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href="assets/img/portfolio/product-1.jpg" title="Product 1" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                      <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                    </div>
                  </div>
                  {/* <!-- End Portfolio Item --> */}

                  <div className="col-lg-4 col-md-6 portfolio-item filter-branding" style={{position: "absolute", left: "879.974px", top: "0px"}}>
                    <img src={require("./../../assets/img/portfolio/branding-1.jpg")} className="img-fluid" alt=""/>
                    
                    <div className="portfolio-info">
                      <h4>Branding 1</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href="assets/img/portfolio/branding-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                      <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                    </div>
                  </div>
                  {/* <!-- End Portfolio Item --> */}

                  <div className="col-lg-4 col-md-6 portfolio-item filter-books" style={{position: "absolute", left: "0px", top: "335.987px"}}>
                    <img src={require("./../../assets/img/portfolio/books-1.jpg")} className="img-fluid" alt=""/>
                    <div className="portfolio-info">
                      <h4>Books 1</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href="assets/img/portfolio/books-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                      <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                    </div>
                  </div>
                  {/* <!-- End Portfolio Item --> */}

                  <div className="col-lg-4 col-md-6 portfolio-item filter-app" style={{position: "absolute", left: "439.987px", top: "335.987px"}}>
                    <img src={require("./../../assets/img/portfolio/app-2.jpg")} className="img-fluid" alt=""/>
                    <div className="portfolio-info">
                      <h4>App 2</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href="assets/img/portfolio/app-2.jpg" title="App 2" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                      <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                    </div>
                  </div>
                  {/* <!-- End Portfolio Item --> */}

                  <div className="col-lg-4 col-md-6 portfolio-item filter-product" style={{position: "absolute", left: "879.974px", top: "335.987px"}}>
                    <img src={require("./../../assets/img/portfolio/product-2.jpg")} className="img-fluid" alt=""/>
                    <div className="portfolio-info">
                      <h4>Product 2</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href="assets/img/portfolio/product-2.jpg" title="Product 2" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                      <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                    </div>
                  </div>
                  {/* <!-- End Portfolio Item --> */}

                  <div className="col-lg-4 col-md-6 portfolio-item filter-branding" style={{position: "absolute", left: "0px", top: "671.974px"}}>
                    <img src={require("./../../assets/img/portfolio/branding-2.jpg")} className="img-fluid" alt=""/>
                    <div className="portfolio-info">
                      <h4>Branding 2</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href="assets/img/portfolio/branding-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                      <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                    </div>
                  </div>
                  {/* <!-- End Portfolio Item --> */}

                  <div className="col-lg-4 col-md-6 portfolio-item filter-books" style={{position: "absolute", left: "439.987px", top: "671.974px"}}>
                    <img src={require("./../../assets/img/portfolio/books-2.jpg")} className="img-fluid" alt=""/>
                    <div className="portfolio-info">
                      <h4>Books 2</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href="assets/img/portfolio/books-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                      <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                    </div>
                  </div>
                  {/* <!-- End Portfolio Item --> */}

                  <div className="col-lg-4 col-md-6 portfolio-item filter-app" style={{position: "absolute", left: "879.974px", top: "671.974px"}}>
                    <img src={require("./../../assets/img/portfolio/app-3.jpg")} className="img-fluid" alt=""/>
                    <div className="portfolio-info">
                      <h4>App 3</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href="assets/img/portfolio/app-3.jpg" title="App 3" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                      <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                    </div>
                  </div>
                  {/* <!-- End Portfolio Item --> */}

                  <div className="col-lg-4 col-md-6 portfolio-item filter-product" style={{position: "absolute", left: "0px", top: "1007.96px"}}>
                    <img src={require("./../../assets/img/portfolio/product-3.jpg")} className="img-fluid" alt=""/>
                    <div className="portfolio-info">
                      <h4>Product 3</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href="assets/img/portfolio/product-3.jpg" title="Product 3" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                      <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                    </div>
                  </div>
                  {/* <!-- End Portfolio Item --> */}

                  <div className="col-lg-4 col-md-6 portfolio-item filter-branding" style={{position: "absolute", left: "439.987px", top: "1007.96px"}}>
                    <img src={require("./../../assets/img/portfolio/branding-3.jpg")} className="img-fluid" alt=""/>
                    <div className="portfolio-info">
                      <h4>Branding 3</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href="assets/img/portfolio/branding-3.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                      <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                    </div>
                  </div>
                  {/* <!-- End Portfolio Item --> */}

                  <div className="col-lg-4 col-md-6 portfolio-item filter-books" style={{position: "absolute", left: "879.974px", top: "1007.96px"}}>
                    <img src={require("./../../assets/img/portfolio/books-3.jpg")} className="img-fluid" alt=""/>
                    <div className="portfolio-info">
                      <h4>Books 3</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href="assets/img/portfolio/books-3.jpg" title="Branding 3" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                      <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                    </div>
                  </div>
                  {/* <!-- End Portfolio Item --> */}

                </div>
                {/* <!-- End Portfolio Container --> */}

              </div>

            </div>
          </section>

        </main>

        {/* <a href="#" class="scroll-top d-flex align-items-center justify-content-center active"><i class="bi bi-arrow-up-short"></i></a> */}



        {/* <!-- Vendor JS Files --> */}
        {/* <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/vendor/aos/aos.js"></script>
        <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
        <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
        <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
        <script src="assets/vendor/php-email-form/validate.js"></script> */}

    
        <script src="./../../assets/js/main.js"></script>

      </body>

    );
  };
  
  export default ItemList;
  