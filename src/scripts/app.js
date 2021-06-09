import React from 'react';
import ReactDOM from 'react-dom';

import '../scss/main.scss';


/**
 * Component
  //tudo no react é component que pode ser uma FUNCTION ou uma CLASS

  Props
  //props são propriedades passadas por parâmetro para o component
  //única forma de passar informação entre componentes é  através de props

  Context
  //para passar uma valor/variárel do avô diretoa para o filho você cria um contexto
  //utilizando Context.Provider(component que provê) e Context.Consumer 
  //(component que consome)

  State
  //cria-se o state em um component para valores dinâmicos/reativos
  //se criar uma variável que de acordo com outro elemento pode ser alterado
  //utiliza-se o state para isso

  Fragment
  //utilizado quando você quer retornar um ou mais components em outro component

  Composition ->Injeção de Component em outro Component sem precisar de Context



  State (duas formas de trabalhar, setState ou Hooks)
  state !== props
  state faz parte do component
  enquanto o props o component recebe

  Hook useEffect (life cicle, ciclo de vida do component)

 */
/*
const NomeContext = React.createContext('nome');

const MeuComponente1 = (props) => {
  const nome = 'Maychon Douglas Dutra Pires'
  return (
    <div className="componente" id="componente-1">
      <MeuComponente2/>
    </div>
  )
}

const MeuComponente2 = (props) => {
  return (
    <div className="componente" id="componente-2">
      <MeuComponente3/>
    </div>
  )
    
}
const MeuComponente3 = (props) => {
  const [sexo, setSexo] = React.useState("masculino");
  const [idade, setIdade] = React.useState(22);

  setTimeout(() => {
    setSexo("feminino");
  }, 3000);

  setTimeout(() => {
    setIdade(23);
  }, 5000);

  return (
    <div id="componente-3" className="componente">
      <MeuComponente4>
        <h1>Meu sexo é: {sexo}</h1>
        <h2>Minha Idade é: {idade}</h2>
      </MeuComponente4>
    </div>
  );
}

//para o NomeContext consumir o valor, precisa ter como filho uma arrow  () => ()
//function com return imediato que tem como parâmetro o meu context

const MeuComponente4 = (props) => {
  return (
    <div id="componente-4" className="componente">
      <p>Meu sexo é: {props.children}</p>
    </div>
  ); 
}*/

const Semaforo = (props) => {
  return (
    <React.Fragment> 
      <div className={(props.contador> 20 && props.contador <= 30)?'vermelho current':'vermelho' }></div>
      <div className={(props.contador> 10 && props.contador <= 20)?'amarelo current':'amarelo' }></div>
      <div className={(props.contador> 0 && props.contador <= 10)?'verde current':'verde' }></div>
    </React.Fragment>
  );
}

const ComponenteA = (props) => {
  return (
    <div className="main-component componente-a">
      <Semaforo contador={props.contador} />
    </div>
  );
}

const ComponenteB = (props) => {
  return (
    <div className="main-component componente-b">
      <p>É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível</p>
      <Contador contador={ props.contador } setContador={ props.setContador } />
    </div>
  );
}

const Contador = (props) => {
  return (
    <div>
      <h1>{ props.contador }</h1>
      <button onClick={ props.setContador }>Contar</button>
    </div>
  );
}

const App = () => {

  const [contador, setContador] = React.useState(parseInt(localStorage.getItem('contador') || 0));

  return (
    <div className="container">
      <ComponenteA contador={ contador } />
      <ComponenteB contador={ contador } setContador={ () => {
        localStorage.setItem('contador', contador + 1);
        setContador(contador + 1);
        
      } } />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'))
