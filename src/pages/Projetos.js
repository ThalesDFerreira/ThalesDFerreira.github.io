import React from 'react';
import Header from '../components/Header';
import "./Projetos.css";

class Projetos extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className="container-main">
          <div className="container-projetos">
            <div>
              <h1 className="text">Principais Projetos</h1>
            </div>
            <div>
              <div className="div-container-projects">
                <div className="links-container">
                  <a style={{ textDecoration: 'none' }} className="link" href="https://playful-frangollo-ecde6a.netlify.app/">
                    <img className="image-link" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="GitHub" />
                    <h2>Projeto Trivia</h2>
                  </a>
                  <a style={{ textDecoration: 'none' }} className="link" href="https://github.com/ThalesDFerreira/Projeto-Trivia">
                    <h2>Código</h2>
                  </a>
                </div>
                <div className="links-container">
                  <a style={{ textDecoration: 'none' }} className="link" href="https://tasty-food-chi.vercel.app/">
                    <img className="image-link" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="GitHub" />
                    <h2>Projeto App de Receitas</h2>
                  </a>
                  <a style={{ textDecoration: 'none' }} className="link" href="https://github.com/ThalesDFerreira/Projeto-Frontend-Online-Store">
                    <h2>Código</h2>
                  </a>
                </div>
                <div className="links-container">
                  <a style={{ textDecoration: 'none' }} className="link" href="https://glittery-wisp-b83799.netlify.app/">
                    <img className="image-link" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="GitHub" />
                    <h2>Projeto<br />TrybeWallet</h2>
                  </a>
                  <a style={{ textDecoration: 'none' }} className="link" href="https://github.com/ThalesDFerreira/Projeto-TrybeWallet">
                    <h2>Código</h2>
                  </a>
                </div>
                <div className="links-container">
                  <a style={{ textDecoration: 'none' }} className="link" href="https://ng-cash-frontend-23v2c26xp-thalesdferreira.vercel.app/">
                    <img className="image-link" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="GitHub" />
                    <h2>Projeto<br />NGCash</h2>
                  </a>
                  <a style={{ textDecoration: 'none' }} className="link" href="https://github.com/ThalesDFerreira/NGCash">
                    <h2>Código</h2>
                  </a>
                </div>
                <div className="links-container">
                  <a style={{ textDecoration: 'none' }} className="link" href="https://github.com/ThalesDFerreira/Projeto-App-Delivery">
                    <img className="image-link" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="GitHub" />
                    <h2>Projeto<br />App Delivery</h2>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default Projetos;
