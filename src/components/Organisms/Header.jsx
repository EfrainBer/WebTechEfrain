import React from 'react';
import '../../assets/css/index_css.css';

const Header = () => (
    <div className = "">

    <div class="container">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
            <img src={''} class = "Logo" alt="PlundejererProject" />
        </a>

        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a class="nav-link px-2 link-dark" aria-current="page" href="/">Index</a></li>
            <li><a class="nav-link px-2 link-dark" href="/Contacto">Contact</a></li>
            {/*<li><a href="#" class="nav-link px-2 link-dark">About</a></li> */}
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" class="form-control form-control-light" placeholder="Search..." aria-label="Search"/>
        </form>
        </header>
    </div>
        {/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <img src={Logo} class= "Logo"alt="" />
                <a class="navbar-brand" href="/">Plunderer</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="/">Index</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/Personajes">Characters</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/Contacto">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav> */}
    </div>
);

export default Header;