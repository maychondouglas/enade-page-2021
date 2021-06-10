import React from 'react';
import ReactDOM from 'react-dom';

import '../scss/main.scss';

const courses = [
  { nome: "Ciências Biológicas" },
  { nome: "Pedagogia" },
  { nome: "Química" },
  { nome: "Análise e Desenvolvimento de Sistemas" },
  { nome: "Análise e Desenvolvimento de Sistemas" },
  { nome: "Direito" },
  { nome: "Ciências Contábeis" },
  { nome: "Publicidade e Propaganda" },
  { nome: "Gestão Comercial" },
  { nome: "Gestão de Recursos Humanos" },
  { nome: "Gestão Financeira" },
  { nome: "Gestão Pública" },
  { nome: "Gestão em Logística" },
  { nome: "Gestão de Marketing" },
  { nome: "Processos Gerenciais " },
  { nome: "Agronomia" },
  { nome: "Arquitetura e Urbanismo" },
  { nome: "Enfermagem" },
  { nome: "Engenharia Civil " },
  { nome: "Engenharia Elétrica" },
  { nome: "Farmácia" },
  { nome: "Medicina Veterinária" },
  { nome: "Gestão Ambiental" },
  { nome: "Engenharia da Computação" },
];

const dates = [
  {
    description: 'Liberação das regras do ENADE;',
    initialDate: new Date("2021-05-25T00:00:00"),
    finalDate: null,
  },
/*   {
    description: 'Inscrição dos alunos classificados para o ENADE;',
    initialDate: new Date("2021-07-02T00:00:00"),
    finalDate: new Date("2021-08-12T00:00:00"),
  }, */
  {
    description: 'Teste de dentro do período Ocorrendo;',
    initialDate: new Date("2021-06-02T00:00:00"),
    finalDate: new Date("2021-08-12T00:00:00"),
  },
  {
    description: 'Inscrição dos alunos concluintes;',
    initialDate: new Date("2021-08-14T00:00:00"),
    finalDate: new Date("2021-11-21T00:00:00"),
  },
  {
    description: 'Liberação dos locais de prova;',
    initialDate: new Date("2021-11-09T00:00:00"),
    finalDate: null,
  },
  {
    description: 'Realização da prova ENADE',
    initialDate: new Date("2021-11-25T00:00:00"),
    finalDate: null,
  },
];

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

  switch (props.type) {
    case 'button-with-icon':
      return (
        <button className={`btn ${ props.secondaryClass }`}  onClick={ props.setScrollPage }  disabled={ props.btnDisabled?true:false }><span class="button-icon"><img src={`images/icons/${props.iconName}.svg`}/></span><span>{props.children}</span></button>
      );  
      break;
  
    default:
      return (
        <button className={`btn ${ props.secondaryClass }`} onClick={ props.setScrollPage }  disabled={ props.btnDisabled?true:false }>{props.children}</button>
      );  
      break;
  }

}

const Attributes = (props) => {
  return (
    <div className="attribute">
      <div className="attribute_icon">
        <img src={`images/icons/${props.iconName}.svg`} />
      </div>
      <span>{props.children}</span>
    </div>
  );
}

const SchenduleDate = (props) => {

  //data que o cliente (navegador) acessou a página
  let baseDate = new Date();
  let todayIs;

  //testando data do cronograma para ser customizado conforme a data atual
  if(props.finalDate != null){

    if(baseDate < props.initialDate){
      //não chegou ainda
      todayIs = 'before';

    }else if(baseDate > props.initialDate && baseDate < props.finalDate){
      //durante
      todayIs = 'during';
    }else if(baseDate > props.finalDate){
      //já ocorreu
      todayIs = 'after';
    }

  }else{

    //é só um dia, nào tem data final
    if(baseDate < props.initialDate){
      //não chegou ainda
      todayIs = 'before';
      
    }else if(baseDate - props.initialDate < 24*3600*1000 ){
      //estou no dia do evento
      todayIs = 'during';
    }else{
      //já ocorreu
      todayIs = 'after';
    }
  }

  //mostrar o período ou a data
  let textDateLabel = (props.finalDate)?`${("00" + (props.initialDate.getDate())).slice(-2)}/${("00" + (props.initialDate.getMonth() + 1)).slice(-2)} até ${("00" + (props.finalDate.getDate())).slice(-2)}/${("00" + (props.finalDate.getMonth() + 1)).slice(-2)}`:`${("00" + (props.initialDate.getDate() )).slice(-2)}/${("00" + (props.initialDate.getMonth() + 1)).slice(-2)}`;

  return(
    <div className={`date-schendule date-schendule_${todayIs}`}>
      <div className="schendule_date_period">{textDateLabel}</div>
      <div className="schendule_date_description">{props.children}</div>
      <div className="schendule_date_icon">
        <img src={`images/icons/${todayIs}.svg`} />
      </div>
    </div>
  );
}

const App = () => {

  const [scrollPage, setScrollPage] = new React.useState(0);

  return (
    <React.Fragment>
        <Header />
        <Section name='sec-01'>
          <div className='presentation-text'>
            <h1>Olá, Acadêmica(o)!</h1>
            <p>It is a long established fact that a reader wily the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that </p>
            <div className='presentation_buttons'>
              <Button setScrollPage={() => scroll(0, window.innerHeight) } secondaryClass='btn-secondary'>ainda não sei.</Button>
              <Button setScrollPage={() => scroll(0, 2*window.innerHeight) } secondaryClass='btn-primary'>vou fazer ENADE!</Button>
            </div>
          </div>
          <div className='presentation-image'>
            <img className='call-image' src='images/menino-mochila.png' height='400' />
          </div>
        </Section>
        <Section name='sec-02'>
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
            <form>
              <label>Confira se você está convocado para o ENADE 2021:</label>
              <input type="text" placeholder="digite sua matrícula ou CPF..."></input>
            </form>
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
        <Section name='sec-03'>
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
            <Button setScrollPage={() => scroll(0,  3*window.innerHeight) } secondaryClass="btn-with-icon" iconName="video-two" type="button-with-icon">COMO FUNCIONA?</Button>
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
        <Section name='sec-05' />
    </React.Fragment>
  );
}


ReactDOM.render(<App />, document.getElementById('app'))
