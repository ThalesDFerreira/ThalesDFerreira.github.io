import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <div id="container-div-main">
            <div>
              <img className="image-cards" src="./" alt="Projetos" />
              <h1 className="text" id="text1">Seja Bem Vindo !</h1>
              <h2 className="text" id="text2">Muito prazer, eu sou o Thales Ferreira e esse é o meu portfólio.</h2>
              <h2 className="text" id="text3">Vamos nos conhecer melhor ? O que gostaria de vêr primeiro ?</h2>
            </div>
            <div className="div-container-conteudo">
              <div className="links-conteudo">
                <Link className="link-cards" to="/projects">
                  <img className="image-cards" src="https://programathor.com.br/blog/wp-content/uploads/2018/05/projetos-de-programa%C3%A7%C3%A3o-676x451.jpg" alt="Projetos" />
                  <h2>Acesse o Portfólio Aqui</h2>
                </Link>
              </div>
              <div className="links-conteudo">
                <Link className="link-cards" to="/contacts">
                  <img className="image-cards" src="https://programathor.com.br/blog/wp-content/uploads/2018/05/projetos-de-programa%C3%A7%C3%A3o-676x451.jpg" alt="Contatos" />
                  <h2>Acesse os Contatos Aqui</h2>
                </Link>
              </div>
              <div className="links-conteudo">
                <Link className="link-cards" to="/aboult">
                  <img className="image-cards" src="https://programathor.com.br/blog/wp-content/uploads/2018/05/projetos-de-programa%C3%A7%C3%A3o-676x451.jpg" alt="Sobre Mim" />
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
