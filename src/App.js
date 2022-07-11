import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Login from './pages/Login';
import Portfolio from './pages/Portfolio';
import Projetos from './pages/Projetos';
import Contatos from './pages/Contatos';
import SobreMim from './pages/SobreMim';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/projects" component={Projetos} />
          <Route exact path="/contacts" component={Contatos} />
          <Route exact path="/aboult" component={SobreMim} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
