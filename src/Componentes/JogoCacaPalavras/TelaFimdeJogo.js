import React from 'react'
import "./TelafimdeJogo.css"
export const TelaFimdeJogo = () => {
  return (
    <div>
      <h1>Fim do Jogo meu Garotinho </h1>
      <h2> A sua pontuação foi: 
        <span> {pontuacao} </span>
      </h2>
      <button onClick={gameOverRetry}> Resetar o jogo</button>
    </div>

  )
}
