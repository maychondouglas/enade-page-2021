import React from 'react';

export const SchenduleDate = (props) => {

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