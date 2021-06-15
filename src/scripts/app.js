import React from 'react';
import ReactDOM from 'react-dom';

import '../scss/main.scss';
import { data } from './data.js';



const MD5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_};
/*
let teste = MD5('teste');
console.log(teste); */

const retornarNomeEnadinte = (chave, chaveNumber) => {
  if(chaveNumber == 1){
    //chave matrícula
    let enader = data.enadintes.filter(enadinte => enadinte.matricula == chave);
    console.log(enader[0])
    return enader[0].nome;

  }else{  
    //chave cpf

    let enader = data.enadintes.filter(enadinte => enadinte.cpf == chave);
    console.log(enader[0])
    return enader[0].nome;
  }
}

const encontrar = () => {
  let textInputed = document.querySelector('#encontrar').value;
  let chave = MD5(textInputed);
  if(textInputed.length + 1 == 9){
    //digitou matrícula
    
    let nome = retornarNomeEnadinte(chave, 1);
    console.log(nome || " ");
    document.querySelector('.msg-result').classList.remove('hide');
    document.querySelector('.msg-result .result-name').innerHTML = nome || "";
    
  }else if(textInputed.length + 1 == 11){
    //digitou cpf
    let nome = retornarNomeEnadinte(chave, 2);
    console.log(nome);
    document.querySelector('.msg-result').classList.remove('hide');
    document.querySelector('.msg-result .result-name').innerHTML = nome || "";
  }
}


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
    <section id={ props.id } className={`section_${props.name}`}>
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
        <a href={props.href} className={`btn ${ props.secondaryClass }`} disabled={ props.btnDisabled?true:false }><span class="button-icon"><img src={`images/icons/${props.iconName}.svg`}/></span><span>{props.children}</span></a>
      );  
      break;
  
    default:
      return (
        <a href={props.href} className={`btn ${ props.secondaryClass }`} disabled={ props.btnDisabled?true:false }>{props.children}</a>
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

  return (
    <React.Fragment>
        <Header />
        {/* <ScrollBarLeft percentScroll={percentScroll} /> */}
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
            <form>
              <label>Confira se você está convocado para o ENADE 2021:</label>
              <input onInput={encontrar} id="encontrar" type="text"  maxlength="11" placeholder="digite sua matrícula ou CPF..."></input>
            </form>
            <div className="msg-result hide">
              <h4 className="result"><span className="result-name">Maychon</span>, você foi selecionado!</h4>
              <span className="result-text">Agoras é hora de se preparar e tals.</span>
              <div className="result-buttons">

              </div>
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
        <Section name='sec-05' id="video-tutorial" />

    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
