import headerImg from '../../assets/img/blog-header.jpg'
import { useState, useEffect } from 'react';
import BlogInformation from './blog-info-json';
import Posts from './Post';
import Pagination from './Pagination';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const tmp = [];

  // const blogHandler = (e) => {
  //   e.preventDefault();
  //   const search = document.getElementById("#search");
  //   console.log(search);
  //   setSearchTerm(search)
  // }

  useEffect(() =>
  {
    BlogInformation.filter((val) => {
    if (searchTerm === "") {
      return val;
    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return val;
    }
    }).map((val, key) => {
      return (
        tmp.push(val)
      );
    })
    setPosts(tmp);
    console.log(posts)
  }, [searchTerm])

  /* 새로 추가한 부분 - 페이지네이션 목록 길이 계산 */
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  return (
    <>
      <main id="main">
        {/* <!-- ======= Breadcrumbs ======= --> */}
        <div
          className="breadcrumbs d-flex align-items-center"
          style={{ backgroundImage: `url(${headerImg})` }}
        >
          <div className="container position-relative d-flex flex-column align-items-center">
            <h2>Blog</h2>
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Blog</li>
            </ol>
          </div>
        </div>
        {/* <!-- End Breadcrumbs --> */}

        {/* <!-- ======= Blog Section ======= --> */}
        <section id="blog" className="blog">
          <div className="container aos-init aos-animate" data-aos="fade-up">
            <div className="row g-5">
              <div
                className="col-lg-8 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="row gy-5 posts-list">
                {/* 게시글 하나하나가 start 지점 */}
                {/* {console.log(posts)} */}
                <Posts posts={currentPosts(posts)} />
                </div>
                {/* <!-- End blog posts list --> */}
                
                {/* 페이지네이션 하는 부분 */}
                <div className="blog-pagination">
                  <ul className="justify-content-center">
                  <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={posts.length}
                    paginate={setCurrentPage}
                  ></Pagination>
                  </ul>
                </div>
                {/* <!-- End blog pagination --> */}
              </div>

              <div
                className="col-lg-4 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="sidebar ps-lg-4">
                  {/* 검색 인풋 위치 */}
                  <div className="sidebar-item search-form">
                    <h3 className="sidebar-title">Search</h3>
                    <form action="" className="mt-3">
                      <input type="text" id="search" onChange={e => {setSearchTerm(e.target.value)}} />
                      {BlogInformation.filter((val) => {
                        // console.log(val);
                        if (searchTerm === "") {
                          return ""
                        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                          return val
                        }
                      })
                        .map((val, key) => {
                        return (
                          <div>
                            <p>{val.name}</p>
                          </div>
                        );
                        })
                      }
                      <button
                        type="button"
                        // onSubmit={blogHandler}
                      >
                        <i className="bi bi-search"></i>
                      </button>
                    </form>
                  </div>
                  {/* <!-- End sidebar search formn--> */}

                  <div className="sidebar-item categories">
                    <h3 className="sidebar-title">Categories</h3>
                    <ul className="mt-3">
                      <li>
                        <a href="!#">
                          General <span>(25)</span>
                        </a>
                      </li>
                      <li>
                        <a href="!#">
                          Lifestyle <span>(12)</span>
                        </a>
                      </li>
                      <li>
                        <a href="!#">
                          Travel <span>(5)</span>
                        </a>
                      </li>
                      <li>
                        <a href="!#">
                          Design <span>(22)</span>
                        </a>
                      </li>
                      <li>
                        <a href="!#">
                          Creative <span>(8)</span>
                        </a>
                      </li>
                      <li>
                        <a href="!#">
                          Educaion <span>(14)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- End sidebar categories--> */}

                  <div className="sidebar-item recent-posts">
                    <h3 className="sidebar-title">Recent Posts</h3>

                    <div className="mt-3">
                      <div className="post-item mt-3">
                        <img
                          src="assets/img/blog/blog-recent-1.jpg"
                          alt=""
                          className="flex-shrink-0"
                        />
                        <div>
                          <h4>
                            <a href="blog-post.html">
                              Nihil blanditiis at in nihil autem
                            </a>
                          </h4>
                          <time dateTime="2020-01-01">Jan 1, 2020</time>
                        </div>
                      </div>
                      {/* <!-- End recent post item--> */}

                      <div className="post-item">
                        <img
                          src="assets/img/blog/blog-recent-2.jpg"
                          alt=""
                          className="flex-shrink-0"
                        />
                        <div>
                          <h4>
                            <a href="blog-post.html">Quidem autem et impedit</a>
                          </h4>
                          <time dateTime="2020-01-01">Jan 1, 2020</time>
                        </div>
                      </div>
                      {/* <!-- End recent post item--> */}

                      <div className="post-item">
                        <img
                          src="assets/img/blog/blog-recent-3.jpg"
                          alt=""
                          className="flex-shrink-0"
                        />
                        <div>
                          <h4>
                            <a href="blog-post.html">
                              Id quia et et ut maxime similique occaecati ut
                            </a>
                          </h4>
                          <time dateTime="2020-01-01">Jan 1, 2020</time>
                        </div>
                      </div>
                      {/* <!-- End recent post item--> */}

                      <div className="post-item">
                        <img
                          src="assets/img/blog/blog-recent-4.jpg"
                          alt=""
                          className="flex-shrink-0"
                        />
                        <div>
                          <h4>
                            <a href="blog-post.html">
                              Laborum corporis quo dara net para
                            </a>
                          </h4>
                          <time dateTime="2020-01-01">Jan 1, 2020</time>
                        </div>
                      </div>
                      {/* <!-- End recent post item--> */}

                      <div className="post-item">
                        <img
                          src="assets/img/blog/blog-recent-5.jpg"
                          alt=""
                          className="flex-shrink-0"
                        />
                        <div>
                          <h4>
                            <a href="blog-post.html">
                              Et dolores corrupti quae illo quod dolor
                            </a>
                          </h4>
                          <time dateTime="2020-01-01">Jan 1, 2020</time>
                        </div>
                      </div>
                      {/* <!-- End recent post item--> */}
                    </div>
                  </div>
                  {/* <!-- End sidebar recent posts--> */}

                  <div className="sidebar-item tags">
                    <h3 className="sidebar-title">Tags</h3>
                    <ul className="mt-3">
                      <li>
                        <a href="!#">App</a>
                      </li>
                      <li>
                        <a href="!#">IT</a>
                      </li>
                      <li>
                        <a href="!#">Business</a>
                      </li>
                      <li>
                        <a href="!#">Mac</a>
                      </li>
                      <li>
                        <a href="!#">Design</a>
                      </li>
                      <li>
                        <a href="!#">Office</a>
                      </li>
                      <li>
                        <a href="!#">Creative</a>
                      </li>
                      <li>
                        <a href="!#">Studio</a>
                      </li>
                      <li>
                        <a href="!#">Smart</a>
                      </li>
                      <li>
                        <a href="!#">Tips</a>
                      </li>
                      <li>
                        <a href="!#">Marketing</a>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- End sidebar tags-->. */}
                </div>
                {/* <!-- End Blog Sidebar --> */}
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Blog Section --> */}
      </main>
    </>
  );
};

export default Blog;
