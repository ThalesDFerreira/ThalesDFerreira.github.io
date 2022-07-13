import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import "./Home.css";
import AvatarJoia from '../assets/avatar-joia.png';
import LogoProjects from '../assets/projetos.jpg';
import LogoContats from '../assets/contatos.jpg';
import LogoAboult from '../assets/aboult.jpg';

class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <div id="container-div-main">
            <div>
              <img className="image-avatar" src={AvatarJoia} alt="Home" />
              <h1 className="text" id="text1">Seja Bem Vindo !</h1>
              <h2 className="text" id="text2">Muito prazer, eu sou o Thales Ferreira e esse é o meu portfólio.</h2>
              <h2 className="text" id="text3">Vamos nos conhecer melhor ? O que gostaria de vêr primeiro ?</h2>
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
      </>
    );
  }
}

export default Home;
