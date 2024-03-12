import React from 'react';
import Header from '../components/Header';
import PDF from '../assets/Curriculo.pdf';
import './Curriculo.css';

class Curriculo extends React.Component {
  render() {
    return (
      <>
        <Header />
        <section className='container-main'>
          <main className='container-main-curriculo'>
            <div className='pdf-container'>
              <iframe src={PDF} title='Visualização Curriculo' />
            </div>
          </main>
        </section>
      </>
    );
  }
}

export default Curriculo;
