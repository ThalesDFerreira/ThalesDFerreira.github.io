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
                  <a style={{ textDecoration: 'none' }} className="link" href="https://github.com/tryber/sd-021-b-project-trivia-react-redux">
                    <img className="image-link" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="GitHub" />
                    <h2>Projeto Trivia</h2>
                  </a>
                </div>
                <div className="links-container">
                  <a style={{ textDecoration: 'none' }} className="link" href="https://github.com/tryber/sd-021-b-project-frontend-online-store">
                    <img className="image-link" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="GitHub" />
                    <h2>Projeto Frontend<br />Online Store</h2>
                  </a>
                </div>
                <div className="links-container">
                  <a style={{ textDecoration: 'none' }} className="link" href="https://github.com/tryber/sd-021-b-project-trybewallet">
                    <img className="image-link" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="GitHub" />
                    <h2>Projeto<br />TrybeWallet</h2>
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
