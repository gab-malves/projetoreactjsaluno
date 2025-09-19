// Relacionados ao formulário. 
import React, { useRef, useState } from 'react'
import "./TelaJogando.css"
export const TelaJogando = ({processarLetraJogoFunc,
          pontuacao,
          obterCategoriaDoJogo,
          tentativas,
                  letrasAdivinhadasVetor,
                  letrasDoJogo ,
                         letrasErradasVetor

}) => {
  {/* Relacionados ao formulário. */}
  const [letraDigitada,setLetraDigitada] = useState ("");
  const letraDigitadaRef = useRef (null)
  return (
    <div className='css_telajogando'>
       <h1>Tela Jogando 02</h1>
        <p className="css_pontuacao">
                <span> Pontuação: {pontuacao} </span>
                </p>
                <h1> Advinhe a palavra </h1>
                <h3 className="css_dica"> Dica sobre a palavra. 
                    <span> {obterCategoriaDoJogo} </span>
                </h3>
                <p>Você ainda tem {tentativas} tentativas</p>

                {/* Quadrado Amarelo. 
                Mostrar a palavra com as letras adivinhadas */}
                {/*o método map vai gerar um loop e mostrar múltiplos quadrados brancos.*/}
                {/* Se a letra tiver sido advinhinhada vou mostrar ela.*/}
                <div className="css_container_palavra"> 
                    { letrasDoJogo && letrasDoJogo.map ((letra,indice) => (
                        letrasAdivinhadasVetor.includes(letra) 
                    ))} 
                </div>
                {/* Criar o formulário */}
                 <p> Tente Advinhar uma letra da palavra </p>
                    {/* onSubmit={handleFuncaoSubmeter} */}
                    <form >
                        <input type="text" name="Letra" maxLength="1" required 
                          onChange={(e) => setLetraDigitada (e.target.value)}
                          value={letraDigitada}
                          ref = {letraDigitadaRef}/>
                          <button>
                            Jogar
                          </button>
                          {console.log ("Dica letraDigitada",letraDigitada)}
                          {console.log ("Dica letraDigitadaRef", letraDigitadaRef)}
                    </form>
                <div className="css_letras_erradas">
                {/* Espaço para as letras incorretas */}
                <p> Letras já utilizadas</p>
                {/* Se a letra tiver sido advinhinhada vou mostrar ela.*/}
                { letrasErradasVetor && letrasErradasVetor.map ((letra,indice) => (
                        (<span key={indice}> {letra}, </span> )  ))}
                </div>
            <button onClick={processarLetraJogoFunc}>Finalizar Jogo</button>
    </div>
  )
}

