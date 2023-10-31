import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './components/Routes/App.js';
import Personajes from './components/Routes/Personajes';
import Footer from './components/Organisms/Footer_A';
import './assets/css/index_css.css';
import PersonajesAPI from './components/Routes/PersonajesAPI';


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('Page')
);

ReactDOM.render(
  <React.StrictMode>
    <Personajes/>
  </React.StrictMode>,
  document.getElementById('Element')
);

ReactDOM.render(
  <React.StrictMode>
    <PersonajesAPI/>
  </React.StrictMode>,
  document.getElementById('ElementAPI')
);

ReactDOM.render(
  <React.StrictMode>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('footer')
);







reportWebVitals();
