import React from "react";

const Posts = ({ posts }) => {
    console.log(posts)
  return (
      <>
          {posts.map((post) => (
              <div className="col-lg-6">
              <article className="d-flex flex-column">
                <div className="post-img">
                  <img src={post.img} alt="" className="img-fluid" />
                </div>
      
                <h2 className="title">
                  <a href="blog-details.html">{post.title}</a>
                </h2>
      
                <div className="meta-top">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-person"></i>{" "}
                      <a href="blog-details.html">{post.name}</a>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-clock"></i>{" "}
                      <a href="blog-details.html">
                        <time dateTime="2022-01-01">{post.time}</time>
                      </a>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-chat-dots"></i>{" "}
                      <a href="blog-details.html">{post.comments}</a>
                    </li>
                  </ul>
                </div>
      
                <div className="content">
                  <p>{post.content}</p>
                </div>
      
                <div className="read-more mt-auto align-self-end">
                  <a href="blog-details.html">
                    Read More <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </article>
            </div>
          ))}
    </>
  );
};
export default Posts;


