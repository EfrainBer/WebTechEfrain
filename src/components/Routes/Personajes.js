import React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Contenedor from '../Molecules/Contenedor';
import PersonajeDetalle from '../Pages/PersonajeDetalle';
import PersonajesApi from '../Molecules/PersonajesApi';



const PersonajesConst = () => (
  <Router> 
    <Switch>
        <Route path="/Personajes" exact component={ Contenedor }/>
        <Route path="/Personajes/:id" exact component={ PersonajeDetalle }/>
        <Route path="/"/>
        <Route path="/Contacto"/>
        <Route path="/Moments"/>
        <Route component={() =>(
          <h1>Pagina no encontrada</h1>
        )} />
    </Switch>
  </Router>
)

export default PersonajesConst;
