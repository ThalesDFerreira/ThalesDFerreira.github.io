import React from 'react';
import Header from '../components/Header';
import "./SobreMim.css";
import fotoThales from '../assets/fotoThales.jpg'

class SobreMim extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className="container-main">
          <div className="container-aboult">
            <div className="abolt-img">
              <h1 className="text">Sobre Mim</h1>
              <img id="minha-imagem" src={fotoThales} alt="Thales" />
              <div>
                <div className="container-sobre-mim">
                  <p className="text">Olá novamente! Como dito anteriormente eu me chamo Thales David Ferreira !</p>
                  <p className="text">Se chegou até aqui, você provavelmente gostaria de saber mais sobre mim e minha trajetória, não é mesmo?</p>
                  <p className="text">Sou natural de Porto Velho, Estado de Rondônia.</p>
                  <p className="text">Atualmente moro na cidade de Franca, Estado de São Paulo.</p>
                  <p className="text">Tenho formação de bacharel em Direito pela Universidade de Franca e conquistei o título de Advogado ao passar na Ordem dos Advogados do Brasil.</p>
                  <p className="text">Em toda a minha vida, sempre me brilhou os olhos, no que diz respeito à programação e a tecnologia de um modo geral.</p>
                  <p className="text">Certamente, irei alcançar meus objetivos pessoais e profissionais, após o período de aprendizado na Trybe.</p>
                  <p className="text">Acredito ser bem determinado, assertivo, organizado e resiliênte.</p>
                  <p className="text">Ficou interessado(a), e quer saber mais sobre mim? Entre em contato comigo !</p>
                  <p className="text">Ficarei aguardando o seu contato !</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default SobreMim;
