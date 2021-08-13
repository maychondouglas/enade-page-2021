import React from 'react';

export const Button = (props) => {

    switch (props.type) {
      case 'button-with-icon':
        return (
          <a href={props.href} className={`btn ${ props.secondaryClass }`} disabled={ props.btnDisabled?true:false }><span class="button-icon"><img src={`images/icons/${props.iconName}.svg`}/></span><span>{props.children}</span></a>
        );  
        break;
      case 'button-submit-icon':
        return (
          <button className={`btn ${ props.secondaryClass }`} onClick={props.functionClick}>{props.children}</button>
        );  
        break;
      default:
        return (
          <a href={props.href} className={`btn ${ props.secondaryClass }`} disabled={ props.btnDisabled?true:false }>{props.children}</a>
        );  
        break;
    }
  
  }