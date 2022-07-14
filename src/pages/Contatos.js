import React from 'react';
import Header from '../components/Header';
import LogoGmail from '../assets/gmail.png';
import LogoLinkedin from '../assets/linkedin.png';
import LogoWhatsApp from '../assets/whatsapp.png';
import LogoGitHub from '../assets/github.png';
import LogoFacebook from '../assets/facebook.png';
import LogoYouTube from '../assets/youtube.png';
import "./Contatos.css";

class Contatos extends React.Component {
  render() {
    return (
      <div className="container-contatos">
        <Header />
        <main>
          <div>
            {/* <img className="image-avatar" src={} alt="Contatos" /> */}
            <h1 className="text">Contatos</h1>
          </div>
          <div className="div-container-contatos">
            <div className="links-contatos">
              <a className="link-logo" href="mailto:thalesferreira190@gmail.com/">
                <img className="image-logo" src={LogoGmail} alt="Gmail" />
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
              <a className="link-logo" href="https://api.whatsapp.com/send?phone=5516992746725">
                <img className="image-logo" src={LogoWhatsApp} alt="WhatsApp" />
              </a>
            </div>
            <div className="links-contatos">
              <a className="link-logo" href="https://www.facebook.com/thalesferreira190/">
                <img className="image-logo" src={LogoFacebook} alt="Facebook" />
              </a>
            </div>
            <div className="links-contatos">
              <a className="link-logo" href="https://www.youtube.com/channel/UC3wRFQjIerrCPONRPcf112w">
                <img className="image-logo" src={LogoYouTube} alt="YouTube" />
              </a>
            </div>
          </div>
        </main>
      </div>

    );
  }
}

export default Contatos;
