import React, { useState } from 'react'
import {palavrasLista} from "./Util/Word"
import { TelaInicialProjeto } from './TelaInicialProjeto'
import { TelaJogando } from './TelaJogando'
import { TelaFimdeJogo } from './TelaFimdeJogo'
import "./JogoCacaPalavrasPrincipal.css"

  // Estágios do jogo
  const estagios = [
  {id:1,nome: "Início"}, // 0
  {id:2,nome: "Jogando"}, // 1
  {id:3,nome: "Fimjogo"} ] // 2

const JogoCacaPalavrasPrincipal = () => {

  const [estagioJogo,setEstagiodoJogo] = useState (estagios[0].nome) // Posção 0 = Início
  const [palavrasJogo] = useState (palavrasLista)
  console.log("Palavras do Jogo: ",palavrasJogo)

  const funcaoIniciarJogo = () => {
    setEstagiodoJogo (estagios[1].nome)
  }

  return (
    <div className="jogo-caca-palavras-container">
        {/* <TelaInicialProjeto /> */}
        
        {console.log("Dica estagioJogo: ",estagioJogo)}
        {/* Como a posição 0 contem Inicio será apresentado o conteúdo do componente TelaInicial na tela. */}
        {estagioJogo === "Início" && <TelaInicialProjeto iniciarJogo={funcaoIniciarJogo}/>}
        {estagioJogo === "Jogando" && <TelaJogando />}
        {estagioJogo === "Fimjogo" && <TelaFimdeJogo />}
    </div>
  )
}

export default JogoCacaPalavrasPrincipal