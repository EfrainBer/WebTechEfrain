import React from 'react';
import '../../assets/css/index_css.css';
import Imagen from '../../assets/img/LogoEfrain.png';

const Header = () => (
        <div class="container">
            <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <div class="col-md-3 mb-2 mb-md-0">
                <a href="https://www.bginversiones.com/" target='blank' class="d-inline-flex link-body-emphasis text-decoration-none">
                    <img src={Imagen} class = "Logo" alt="WebTechEfrain"/>
                </a>
            </div>

            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 text-dark">
                <li><a href="/"><button class="btn btn-outline-dark mr-3">Index</button></a></li>
                <li><a href="/Contacto"><button class="btn btn-outline-dark">Contact</button></a></li>
            </ul>
            </header>
        </div>
);

export default Header;