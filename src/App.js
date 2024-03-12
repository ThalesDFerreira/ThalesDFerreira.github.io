import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Projetos from './pages/Projetos';
import SobreMim from './pages/SobreMim';
import Curriculo from './pages/Curriculo';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/projects' component={Projetos} />
          <Route path='/curriculo' component={Curriculo} />
          <Route path='/aboult' component={SobreMim} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
