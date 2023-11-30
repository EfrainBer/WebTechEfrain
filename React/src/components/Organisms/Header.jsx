import React from 'react';
import '../../assets/css/index_css.css';
import Imagen from '../../assets/img/LogoEfrain.png';

const Header = () => (
    <div className = "">
        <div class="container">
            <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <img src={Imagen} class = "Logo" alt="WebTechEfrain" />
            </a>

            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a class="nav-link px-2 link-dark" aria-current="page" href="/">Index</a></li>
                <li><a class="nav-link px-2 link-dark" href="/Contacto">Contact</a></li>
            </ul>

            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input type="search" class="form-control form-control-light" placeholder="Search..." aria-label="Search"/>
            </form>
            </header>
        </div>
    </div>
);

export default Header;