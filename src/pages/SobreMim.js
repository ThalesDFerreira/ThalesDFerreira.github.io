import React from 'react';
import Header from '../components/Header';
import './SobreMim.css';
import fotoThales from '../assets/fotoThales.jpg';

class SobreMim extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className='container-main'>
          <div className='container-aboult'>
            <div className='abolt-img'>
              <h1 className='text'>Sobre Mim</h1>
              <img id='minha-imagem' src={fotoThales} alt='Thales' />
            </div>
          </div>
          <div className='container-abolt'>
            <div className='box-abolt'>
              <div className='content'>
                <p>
                  Olá novamente! Como dito anteriormente eu me chamo Thales
                  David Ferreira !{' '}
                </p>
                <p>
                  Se chegou até aqui, você provavelmente gostaria de saber mais
                  sobre mim e minha trajetória, não é mesmo?{' '}
                </p>{' '}
                <p>Sou natural de Porto Velho, Estado de Rondônia.</p>
                <p>Atualmente moro na cidade de Franca, Estado de São Paulo.</p>
                <p>
                  Sou Desenvolvedor Full-Stack, tendo completado o curso
                  abrangente de Desenvolvimento Web Full-Stack na Trybe.{' '}
                </p>
                <p>
                  Durante este programa, adquiri habilidades sólidas em todos os
                  aspectos do desenvolvimento web, desde os fundamentos até as
                  tecnologias mais avançadas.{' '}
                </p>{' '}
                <p>
                  Além disso, desenvolvi competências interpessoais trabalhando
                  em equipe, utilizando metodologias ágeis como Scrum e Kanban.{' '}
                </p>{' '}
                <p>
                  Estou comprometido com o crescimento contínuo, tanto pessoal
                  quanto profissional, e estou ansioso para contribuir de forma
                  significativa em um ambiente dinâmico de desenvolvimento de
                  software.{' '}
                </p>{' '}
                <p>Ficou interessado(a), e quer saber mais sobre mim? </p>{' '}
                <p>Entre em contato comigo !</p>{' '}
                <p>Ficarei aguardando o seu contato !</p>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default SobreMim;
