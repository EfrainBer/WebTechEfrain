import React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from '../Organisms/Header';
import MainMenu from '../Pages/MainMenu';
import Contacto from '../Molecules/Contacto';
import Moments from '../Pages/Moments';
import PersonajesApi from '../Molecules/PersonajesApi';


const App = () => (
  <Router> 
    <Header/>
    <Switch>
        <Route path="/" exact component={MainMenu}/>
        <Route path="/Contacto" exact component={ Contacto }/>
        <Route path="/Moments" exact component={Moments}/>
    </Switch>
  </Router>
)

export default App;
