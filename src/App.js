import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Portfolio from './pages/Portfolio';
import Projetos from './pages/Projetos';
import Contatos from './pages/Contatos';
import SobreMim from './pages/SobreMim';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" component={ Login } />
        <Route exact path="/portfolio" component={ Portfolio } />
        <Route exact path="/projects" component={ Projetos } />
        <Route exact path="/contacts" component={ Contatos } />
        <Route exact path="/aboult" component={ SobreMim } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
