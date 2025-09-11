import React from 'react'
import "./TelaJogando.css"
export const TelaJogando = ({processarLetraJogo}) => {
  return (
    <div className='css_telajogando'>
       <h1>Tela Jogando</h1>
       <button onClick={processarLetraJogo}>Finalizar Jogo</button>
    </div>
  )
}

