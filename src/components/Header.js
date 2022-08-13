import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
  toggleMenu = (event) => {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
      event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
      event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
  }

  render() {
    return (
      <header id="header">
        <Link style={{ paddingLeft: 13, textDecoration: 'none' }} to="/">
          <h3>Developer</h3>
        </Link>
        <nav id="nav">
          <button aria-label="Abrir Menu" id="btn-mobile" aria-haspopup="true" aria-controls="menu" aria-expanded="false" onClick={this.toggleMenu}>
            <span id="hamburger" />
          </button>
          <ul id="menu" role="menu">
            <li><Link style={{ paddingLeft: 13, textDecoration: 'none' }} className="link-li" id="link1" to="/">Início</Link></li>
            <li><Link style={{ paddingLeft: 13, textDecoration: 'none' }} className="link-li" id="link2" to="/projects">Projetos</Link></li>
            <li><Link style={{ paddingLeft: 13, textDecoration: 'none' }} className="link-li" id="link4" to="/aboult">Sobre mim</Link></li>
          </ul>
        </nav>
      </header >
    );
  }
}

export default Header;