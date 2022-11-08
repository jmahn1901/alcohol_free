import React from 'react';

let Header = () => {
    return (
        <>
            <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                    <a href="index.html" className="logo d-flex align-items-center">
                        {/* <img src="assets/img/logo.png" alt=""> */}
                        <h1 className="d-flex align-items-center">Nova</h1>
                    </a>

                    <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                    <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a href="index.html" className="active">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="portfolio.html">Portfolio</a></li>
                            <li><a href="team.html">Team</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li className="dropdown"><a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                                <ul>
                                    <li><a href="#">Dropdown 1</a></li>
                                    <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                                        <ul>
                                            <li><a href="#">Deep Dropdown 1</a></li>
                                            <li><a href="#">Deep Dropdown 2</a></li>
                                            <li><a href="#">Deep Dropdown 3</a></li>
                                            <li><a href="#">Deep Dropdown 4</a></li>
                                            <li><a href="#">Deep Dropdown 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Dropdown 2</a></li>
                                    <li><a href="#">Dropdown 3</a></li>
                                    <li><a href="#">Dropdown 4</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>

                </div>
            </header>
        </>
    )
}

export default Header