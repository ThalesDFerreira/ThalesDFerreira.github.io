import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main className="container-main">
          <div className="container-home">
            <div id="container-div-main">
              <div>
                <h2 id="text1">Olá, muito prazer!</h2>
              </div>
              <div>
                <h2 id="text2">Sou Desenvolvedor de Software !</h2>
              </div>
              <div>
                <h2 id="text3">Meu nome é Thales Ferreira e esse é meu portfólio.</h2>
              </div>
              <div className="div-container-redirects">
                <div className="links-redirects">
                  <Link to="/projects">
                    <button type="button" id="btn-works">Trabalhos (GitHub)</button>
                  </Link>
                </div>
                <div className="links-redirects">
                  <Link to="/aboult">
                    <button type="button" id="btn-aboult">Sobre Mim</button>
                  </Link>
                </div>
                <div className="links-redirects">
                  <Link to="/contacts">
                    <button type="button" id="btn-contacts">Contatos</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
