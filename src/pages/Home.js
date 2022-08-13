import React from 'react';
import { Link } from 'react-router-dom';
import LogoWhatsApp from '../assets/whatsapp.png';
import LogoLinkedin from '../assets/linkedin.png';
import LogoGitHub from '../assets/github.png';
import LogoFacebook from '../assets/facebook.png';
import LogoGmail from '../assets/gmail.png';
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <main className="container-main-base">
          <div className="div-container-contatos1">
            <div className="links-contatos">
              <a className="link-logo" href="https://api.whatsapp.com/send?phone=5516992746725">
                <img className="image-logo" src={LogoWhatsApp} alt="WhatsApp" />
              </a>
            </div>
            <div className="links-contatos">
              <a className="link-logo" href="https://www.linkedin.com/in/thales-david-ferreira-a47378107/">
                <img className="image-logo" src={LogoLinkedin} alt="LinkedIn" />
              </a>
            </div>
            <div className="links-contatos">
              <a className="link-logo" href="https://github.com/ThalesDFerreira/">
                <img className="image-logo" src={LogoGitHub} alt="GitHub" />
              </a>
            </div>
            <div className="links-contatos">
              <a className="link-logo" href="https://www.facebook.com/thalesferreira190/">
                <img className="image-logo" src={LogoFacebook} alt="Facebook" />
              </a>
            </div>
            <div className="links-contatos">
              <a className="link-logo" href="mailto:thalesferreira190@gmail.com/">
                <img className="image-logo" src={LogoGmail} alt="Gmail" />
              </a>
            </div>
          </div>
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
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
