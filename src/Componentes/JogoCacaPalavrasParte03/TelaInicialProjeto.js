
import React from 'react'
import "./TelaInicialProjeto.css"
// iniciarJogo - Ponteiro para função que vimos na aula passada.
export const TelaInicialProjeto = ({iniciarJogo}) => {
  return (
    <div className='tela_inicial'>
      <h1>Tela Inicial do Projeto</h1>
      <p>Bem-vindo ao jogo Caça Palavras!</p>
      <p> Clique no botão abaixo para iniciar o jogo. </p>
      <button onClick={iniciarJogo}> Começar o jogo</button>
    </div>
  )
}
