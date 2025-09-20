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
  {/* Relacionados ao formulário. Etapa 02 */}
  const [letraDigitada,setLetraDigitada] = useState ("");
  const letraDigitadaRef = useRef (null)

  

  // Etapa 03 - Função para o formulário 
  const handleFuncaoSubmeter = (e) => {
    e.preventDefault(); // Evitar o recarregamento da página
    /*
Evitar o recarregamento da página em aplicações React é importante porque:

React é uma SPA (Single Page Application): O React gerencia a interface do usuário no navegador sem recarregar a página inteira. Isso permite uma navegação mais rápida e uma experiência de usuário mais fluida.
Estado da aplicação: Se a página recarrega, todo o estado mantido em memória (como variáveis de componentes, dados do usuário, progresso do jogo, etc.) é perdido.
Performance: Recarregar a página faz com que todos os arquivos JavaScript, CSS e imagens sejam carregados novamente, o que é desnecessário e deixa a aplicação mais lenta.
Controle: Ao evitar o recarregamento, você pode controlar exatamente o que acontece na interface, mostrando apenas as mudanças necessárias.
Exemplo prático:
Ao usar formulários, normalmente você previne o recarregamento padrão do navegador usando event.preventDefault():

Resumo:
Evitar o recarregamento mantém a experiência do usuário rápida, preserva o estado da aplicação e aproveita ao máximo o React. */
    // funcao para processar a letra em JogoCacaPalavrasPrincipal.js
    console.log("Letra Digitada: ",letraDigitada)
    processarLetraJogoFunc(letraDigitada);
    setLetraDigitada (""); // Limpar o campo de entrada após o envio
    letraDigitadaRef.current.focus(); // Manter o foco no campo de entrada
  }

  // Teste etapa 03
  console.log(`Variaveis Globais TelaJogando.js: 
         CategoriaDoJogo: ${obterCategoriaDoJogo} 
         VetorletrasDoJogo: ${letrasDoJogo}`)
  return (
    <div className='css_telajogando'>
       <h1>Tela Jogando 03</h1>
        <p className="css_pontuacao">
                <span> Pontuação: {pontuacao} </span>
                </p>
                <h1> Advinhe a palavra </h1>
                <h3 className="css_dica"> Dica sobre a palavra. 
                    <span> {obterCategoriaDoJogo} </span>
                </h3>
                <p>Você ainda tem {tentativas} tentativas</p>

                {/* Quadrado Amarelo. */}
                {/* Etapa 03, vai gerar os quadros brancos
                O que esse código faz?
Verifica se letrasDoJogo existe (não é null ou undefined).
Se existir, chama o método .map() para percorrer cada elemento do array letrasDoJogo.
Para cada elemento, recebe dois parâmetros: letra (o valor atual) e indice (a posição no array).
Verifica se a letra atual já foi adivinhada.
Usa o método .includes() para checar se letra está presente no array letrasAdivinhadasVetor.
Se a letra foi adivinhada (true):
Renderiza um elemento <span> mostrando a letra.
key={indice} é uma chave única para ajudar o React a identificar cada elemento.
className="css_letras" aplica um estilo CSS específico.
Se a letra NÃO foi adivinhada (false):
Renderiza um <span> vazio (sem letra), apenas com um espaço em branco.
Usa uma classe CSS diferente: css_quadrado_branco.
Fecha o método .map() e o bloco JSX.
O resultado é uma lista de <span>s, cada um representando uma letra (ou espaço em branco) da palavra do jogo.
Resumindo
Esse trecho de código exibe uma palavra do jogo, mostrando as letras já adivinhadas e escondendo as que ainda faltam, usando React e JSX. Cada letra (ou espaço) é um <span> estilizado, facilitando a visualização para o usuário.
                */}
            <div className="css_container_palavra"> 
                { letrasDoJogo && letrasDoJogo.map ((letra,indice) => (
                    letrasAdivinhadasVetor.includes(letra) 
                      ? 
                        ((<span key={indice} className="css_letras">{letra}</span> )) 
                      : 
                        ((<span key={indice} className="css_quadrado_branco">-</span> )) 
                ))} 
            </div >
            <div className="css_container_letra">
                <p> Tente Advinhar uma letra da palavra </p>
                {/* Criar o formulário */}
                <form  onSubmit={handleFuncaoSubmeter}>
                    <input   type="text" name="Letra" maxLength="1" required
                          onChange={(e) => setLetraDigitada (e.target.value)}
                          value={letraDigitada}
                          ref = {letraDigitadaRef}/><br />
                          <button>
                            Jogar
                          </button>
                          {console.log ("Dica letraDigitada",letraDigitada)}
                          {console.log ("Dica letraDigitadaRef", letraDigitadaRef)}
                    </form>
              </div >
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

