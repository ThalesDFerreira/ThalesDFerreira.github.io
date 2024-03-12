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
            <div className="links-contatos item-link">
              <a className="link-logo" href="https://api.whatsapp.com/send?phone=5516992746725" target="_blank" rel="noopener noreferrer">
                <img className="image-logo" src={LogoWhatsApp} alt="WhatsApp" />
              </a>
            </div>
            <div className="links-contatos">
              <a className="link-logo" href="https://www.linkedin.com/in/thales-david-ferreira-a47378107/" target="_blank" rel="noopener noreferrer">
                <img className="image-logo" src={LogoLinkedin} alt="LinkedIn" />
              </a>
            </div>
            <div className="links-contatos">
              <a className="link-logo" href="https://github.com/ThalesDFerreira/" target="_blank" rel="noopener noreferrer">
                <img className="image-logo" src={LogoGitHub} alt="GitHub" />
              </a>
            </div>
            <div className="links-contatos">
              <a className="link-logo" href="https://www.facebook.com/thalesferreira190/" target="_blank" rel="noopener noreferrer">
                <img className="image-logo" src={LogoFacebook} alt="Facebook" />
              </a>
            </div>
            <div className="links-contatos">
              <a className="link-logo" href="mailto:thalesferreira190@gmail.com/" target="_blank" rel="noopener noreferrer">
                <img className="image-logo" src={LogoGmail} alt="Gmail" />
              </a>
            </div>
          </div>
          <div className="container-home">
            <div id="container-div-main">
              <div>
                <h2 id="text1">Olá, eu sou Thales.</h2>
              </div>
              <div>
                <h2 id="text2">Muito prazer ! Sou Desenvolvedor de Software.</h2>
              </div>
              <div className="div-container-redirects">
                <div className="links-redirects">
                  <Link to="/projects">
                    <button type="button" className="btn-works">
                      PORTFÓLIO
                    </button>
                  </Link>
                </div>
                <div className="links-redirects">
                  <Link to="/aboult">
                    <button type="button" className="btn-works">
                      SOBRE MIM
                    </button>
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
