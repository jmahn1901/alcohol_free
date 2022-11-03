const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
      <>
            <div className="blog-pagination">
                <ul className="justify-content-center">
                    {pageNumbers.map((number) => (
                    <li key={number}>
                            <a onClick={() => paginate(number)} className="active">{ number }</a>
                    </li>
                    ))}
                </ul>
            </div>
      </>
    );
  };
  

export default Pagination;
  


{/* <div className="blog-pagination">
                  <ul className="justify-content-center">
                    <li>
                      <a href="!#">1</a>
                    </li>
                    <li className="active">
                      <a href="!#">2</a>
                    </li>
                    <li>
                      <a href="!#">3</a>
                    </li>
                  </ul>
                </div> */}