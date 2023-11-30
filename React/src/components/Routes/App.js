import React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from '../Organisms/Header';
import MainMenu from '../Pages/MainMenu';
import Contacto from '../Molecules/Contacto';
import Tech from './Tech';


const App = () => (
  <Router> 
    <Header/>
    <Switch>
        <Route path="/" exact component={MainMenu}/>
        <Route path="/Contacto" exact component={ Contacto }/>
    </Switch>
  </Router>
)

export default App;
