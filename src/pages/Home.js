import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <div id="container-div-main">
        <img className="image-cards" src="/01.jpg" alt="Projetos" width="400px" height="300px" />
          <h1>Seja Bem Vindo !</h1>
          <h2>Muito prazer, eu sou o Thales Ferreira e esse é o meu portfólio.</h2>
          <h2>Vamos nos conhecer melhor ? O que gostaria de vêr primeiro ?</h2>
          <div className="container-links">
            <Link id="link-card1" to="/projects">
              <img className="image-cards" src="https://programathor.com.br/blog/wp-content/uploads/2018/05/projetos-de-programa%C3%A7%C3%A3o-676x451.jpg" alt="Projetos" width="400px" height="300px" />
            <h2>Portfólio</h2>
            </Link>
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
