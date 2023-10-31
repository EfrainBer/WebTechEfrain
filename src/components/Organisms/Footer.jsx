import React from 'react';

const Footer = () => (
    <div class="footer position-fixed w-100 bottom-0">
        <footer class="d-flex flex-wrap justify-content-between py-3 border-top">
            <div class="col-md-4 d-flex align-items-center">
                <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"/>
                <span class="text-muted">&copy; 2021 Efrain Bermudez</span>
            </div>
            <ul class="nav col-md-4 justify-content-end list-unstyled">
                <li class="ms-3"><a class="text-muted" href="https://github.com/EfrainBer"><img src={''}/></a></li>
                <li class="ms-3"><a class="text-muted" href="#"></a></li>
                <li class="ms-3"><a class="text-muted" href="#"></a></li>
            </ul>
        </footer>
    </div>
);

export default Footer;