import React from 'react';
import ReactDOM from 'react-dom';

import '../scss/main.scss';

const Header = (props) => {
  return (
    <header>
      <div className={`container ${props.name}`}>
        <a href="https://anhanguera.edu.br"><img height='40' width="auto" src="images/unigoias.svg"/></a>
      </div>
    </header>
  );
}

const Section = (props) => {
  return (
    <section className={`section_${props.name}`}>
      <div className={`container ${props.name}`}>
        {props.children}
      </div>
    </section>
  );
}

const Button = (props) => {
  return (
    <button className={`btn ${ props.secondaryClass }`} onClick={ props.btnClick }  disabled={ props.btnDisabled?true:false }>{props.children}</button>
  );
}

const App = () => {

  return (
    <React.Fragment>
        <Header />
        <Section name='sec-01'>
          <div className='presentation-text'>
            <h1>Olá, Acadêmica(o)!</h1>
            <p>It is a long established fact that a reader wily the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that </p>
            <div className='presentation_buttons'>
              <Button secondaryClass='btn-secondary'>ainda não sei.</Button>
              <Button secondaryClass='btn-primary'>vou fazer ENADE!</Button>
            </div>
          </div>
          <div className='presentation-image'>
            <img className='call-image' src='images/menino-mochila.png' height='400' />
          </div>
        </Section>
        <Section name='secao-02' />
        <Section name='secao-03' />
        <Section name='secao-04' />
        <Section name='secao-05' />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('app'))
