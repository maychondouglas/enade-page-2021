import React from 'react';
import ReactDOM from 'react-dom';
import { SchenduleDate } from './components/SchenduleDate';
import { Section } from './components/Section';
import { Button } from './components/Button';
import { Attributes } from './components/Attributes';
import { dates, courses } from './repository/data';
import '../scss/main.scss';

const App = () => {

  return (
    <React.Fragment>
      <header>
        <div className='container'>
          <a href="https://anhanguera.edu.br"><img height='40' width="auto" src="images/unigoias.svg"/></a>
          <a href="">Teste</a>
        </div>
      </header>
        <Section name='sec-01'>
          <div className='presentation-text'>
            <h1>Olá, Acadêmica(o)!</h1>
            <p>It is a long establiSSSSshed faDsssct that a reader wily the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that </p>
            <div className='presentation_buttons'>
              <Button  href='#o-que-e-enade' secondaryClass='btn-secondary'>ainda não sei.</Button>
              <Button href='#como-se-preparar' secondaryClass='btn-primary'>vou fazer ENADE!</Button>
            </div>
          </div>
          <div className='presentation-image'>
            <img className='call-image' src='images/menino-mochila.png' height='400' />
          </div>
        </Section>
        <Section  id="o-que-e-enade" name='sec-02'>
          <div className="o-que-e">
            <h2>Tá, mas o que é ENADE?</h2>
            <p><p>It is a long established fact that a reader wily the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that </p></p>
          </div>
          <div className="o-que-e_atributos">
            <Attributes iconColor="#5f00ba" iconName="calendar">Realizado de 3 em 3 anos no curso</Attributes>
            <Attributes iconColor="#5f00ba" iconName="book">Realizado de 3 em 3 anos no curso</Attributes>
            <Attributes iconColor="#5f00ba" iconName="trophy">Realizado de 3 em 3 anos no curso</Attributes>
          </div>
          <div className="search-content">
            <div className="msg-alert">
              Lista de Participantes será liberada em:
              <span>00 de Xxxxxx de 2021</span>
            </div>
          </div>
          <div className="courses-content">
            <h3>CURSOS PARTICIPANTES DO ENADE 2021:</h3>
              <ul  className="courses-list">
                {
                  
                  courses.map(course => {
                    return (<li key={course.nome}>{course.nome}</li>);
                  })
                }
              </ul>
          </div>
        </Section>
        <Section id="como-se-preparar" name='sec-03'>
          <div className="se-prepare_first-content">
            <h2>Como se preparar?</h2>
            <p>É hora de mostrar todo seu potencial  adquirido durante o curso. Criamos um ambiente de estudos na Plataforma Teams, onde você terá acesso </p>
            <div className="materials-list">
              <div className="materials-list_item">
                <img src="images/icons/check.svg" /><span>Exercícios para treino pré-prova ENADE</span>
              </div>
              <div className="materials-list_item">
                <img src="images/icons/video.svg" /><span>Exercícios para treino pré-prova ENADE</span>
              </div>
              <div className="materials-list_item">
                <img src="images/icons/group.svg" /><span>Exercícios para treino pré-prova ENADE</span>
              </div>
            </div>
          </div>
          <div className="se-prepare_last-content">
            <img className="img-chamada" src="images/menino-computador.png" />
            <span>Acesse as salas virtuais com conteúdos exclusívos de seu curso:</span>
            <Button  href='#video-tutorial' secondaryClass="btn-with-icon" iconName="video-two" type="button-with-icon">COMO FUNCIONA?</Button>
          </div>
        </Section>
        <Section name='sec-04'>
          <div className="schendule-part">
            <h2>Cronograma ENADE 2021</h2>
            <div className="schendule">
                {
                  dates.map(date => {
                    return (<SchenduleDate initialDate={date.initialDate} finalDate={date.finalDate}>{date.description}</SchenduleDate>)
                  })
                }
            </div>
            <span>*Datas sujeitas as alterações pelo MEC.</span>
          </div>
        </Section>
        <Section name='sec-05' id="video-tutorial">
          <h2>Veja como é simples acessar as Salas de Aula:</h2>
          {/* <iframe width="853" height="480" src=""  allowfullscreen></iframe> */}
        </Section>

    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
