import React from 'react'
import {useState} from "react"

const RenderizaCondicional = () => {
  //const [varTeste] = useState (false);   
  const [varTeste] = useState (true); 
  return (
    <div>
        RenderizaCondicional
        <h1> Item será mostrado dependendo da condição.</h1>   
        <h2>Valor de varTeste: {varTeste.toString()}</h2>
        {/*Condicional mais simples do React 
              Equivale a if (true) AND O resto já é verdadeito.*/} 
        {varTeste && 
            <p> Se variável for verdadeiro será mostrado.</p>
        }
        
        {/*Negando o valor da variável. 
          Equivale a if !(false) = true - e como AND a seguir é verdadeiro será mostrada esta linha.
        */} 

        {!varTeste && 
            <p> Se variável <b>NÃO</b> for verdadeiro será mostrado.</p>
        }

    </div>
  )
}

export default RenderizaCondicional