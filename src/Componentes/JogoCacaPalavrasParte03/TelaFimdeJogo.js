import React from 'react'
import "./TelaFimdeJogo.css"
export const TelaFimdeJogo = ({voltarInicio,pontuacao}) => {
  return (
    <div>
      <h1>Fim do Jogo meu Garotinho </h1>
      <h2> A sua pontuação foi: 
        <span> {pontuacao} </span>
      </h2>
      <button onClick={voltarInicio}> Resetar o jogo</button>
    </div>

  )
}
