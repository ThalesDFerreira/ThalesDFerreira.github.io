import React from 'react';
import Header from '../components/Header';
import "./SobreMim.css";
import avatarBracos from '../assets/avatar-bracos.png';

class SobreMim extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <div>
            <img className="image-avatar" src={avatarBracos} alt="Projetos" />
            <h1 className="text">Sobre Mim</h1>
          </div>
          <div>
            <div>
              <p className="text">Olá, eu sou o Thales David Ferreira !</p>
              <p className="text">Se chegou até aqui, você provavelmente gostaria de saber mais sobre mim e minha trajetória, não é mesmo?</p>
              <p className="text">Sou natural de Porto Velho, Estado de Rondônia.</p>
              <p className="text">Atualmente moro na cidade de Franca, Estado de São Paulo.</p>
              <p className="text">Sou bacharel em Direito pela Universidade de Franca e Advogado.</p>
              <p className="text">Em toda a minha vida, sempre me brilhou os olhos, no que diz respeito à programação e a tecnologia de um modo geral.</p>
              <p className="text">Certamente, irei alcançar meus objetivos pessoais e profissionais, após o período de aprendizado na Trybe.</p>
              <p className="text">Acredito ser bem determinado, assertivo, organizado e resiliênte.</p>
              <p className="text">Ficou interessado(a), e quer saber mais sobre mim? Entre em contato comigo !</p>
              <p className="text">Ficarei aguardando o seu contato !</p>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default SobreMim;
