import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Projetos from './pages/Projetos';
import Contatos from './pages/Contatos';
import SobreMim from './pages/SobreMim';
import Redirects from './pages/Redirects';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/redirect" component={Redirects} />
          <Route path="/projects" component={Projetos} />
          <Route path="/contacts" component={Contatos} />
          <Route path="/aboult" component={SobreMim} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
