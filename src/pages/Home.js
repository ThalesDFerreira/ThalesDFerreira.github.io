import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import "./Home.css";
import LogoProjects from '../assets/projetos.jpg';
import LogoContats from '../assets/contatos.jpg';
import LogoAboult from '../assets/aboult.jpg';

class Home extends React.Component {
  render() {
    return (
      <div className="container-main">
        <Header />
        <main>
          <div id="container-div-main">
            <div>
              {/* <img className="image-avatar" src={} alt="Home" /> */}
              <h1 className="text" id="text1">Seja Bem Vindo !</h1>
              <h2 className="text" id="text2">Olá, muito prazer! Meu nome é Thales Ferreira sou advogado e esses são alguns trabalhos do meu portfólio.</h2>
              <h2 className="text" id="text3">O que você gostaria de ver primeiro?</h2>
            </div>
            <div className="div-container-conteudo">
              <div className="links-conteudo">
                <Link className="link-cards" to="/projects">
                  <img className="image-cards" src={LogoProjects} alt="Projetos" />
                  <h2>Acesse o Portfólio Aqui</h2>
                </Link>
              </div>
              <div className="links-conteudo">
                <Link className="link-cards" to="/contacts">
                  <img className="image-cards" src={LogoContats} alt="Contatos" />
                  <h2>Acesse os Contatos Aqui</h2>
                </Link>
              </div>
              <div className="links-conteudo">
                <Link className="link-cards" to="/aboult">
                  <img className="image-cards" src={LogoAboult} alt="Sobre Mim" />
                  <h2>Acesse Sobre Mim Aqui</h2>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
