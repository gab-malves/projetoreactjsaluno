import React, { useState } from 'react'
import {palavrasLista} from "./Util/Word"
import { TelaInicialProjeto } from './TelaInicialProjeto'
import { TelaJogando } from './TelaJogando'
import { TelaFimdeJogo } from './TelaFimdeJogo'
import "./JogoCacaPalavrasPrincipal.css"

// Etapa 02 - Implementar a lógica do jogo
import { useCallback } from 'react'

  // Estágios do jogo
  const estagios = [
  {id:1,nome: "Início"}, // 0
  {id:2,nome: "Jogando"}, // 1
  {id:3,nome: "Fimjogo"} ] // 2

const JogoCacaPalavrasPrincipal = () => {

  const [estagioJogo,setEstagiodoJogo] = useState (estagios[0].nome) // Posção 0 = Início
  const [palavrasJogo] = useState (palavrasLista)
  
  const [obterPalavraDoJogo,setObterPalavraDoJogo] = useState("");
  const [obterCategoriaDoJogo,setObterCategoriaDoJogo] = useState("");
  const [letrasDoJogo,setLetrasDoJogo] = useState([]);

  // Variáveis que vão alterar durante o jogo
  // vão transitar com a TelaJogando.js
  const [letrasAdivinhadasVetor,setLetrasAdivinhadasVetor] = useState([])
  const [letrasErradasVetor,setLetrasErradasVetor] = useState([])
  const [tentativas,setTentativas] = useState(3)
  const [pontuacao,setPontuacao] = useState(10)

  //console.log("Palavras do Jogo: ",palavrasJogo)

// Etapa 02 - Função para carregar a palavra e categoria
  /*
Ótima pergunta! A finalidade do useCallback neste ponto é memorizar (ou "cachear") a função funcaoCarregarPalavraeCategoria para que ela só seja recriada quando a dependência palavrasJogo mudar.

Por que usar useCallback aqui?
Evita recriação desnecessária: Sem useCallback, toda vez que o componente renderiza, a função seria criada novamente. Com useCallback, ela só é recriada se palavrasJogo mudar.
Performance: Isso pode ser útil se você passar essa função para componentes filhos que dependem de referência estável (por exemplo, em otimizações com React.memo).
Consistência: Garante que a função mantém a mesma referência entre renders, a menos que as dependências mudem.
Exemplo simplificado
Só será recriada se dependencia mudar.
No seu código
No seu caso, como palavrasJogo é inicializado uma vez e nunca muda, o uso de useCallback não traz muito benefício prático. Mas, se no futuro palavrasJogo pudesse mudar, useCallback garantiria que a função fosse atualizada corretamente.

Resumo:
useCallback serve para evitar que a função seja recriada em toda renderização, melhorando performance e estabilidade de referência, especialmente ao passar funções para componentes filhos.
  */
 const funcaoCarregarPalavraeCategoria = useCallback (() =>{
    const listaCategorias = Object.keys(palavrasJogo)
    // Para arredondar para baixo -> Math.floor
    const categoria = listaCategorias[Math.floor(Math.random() * Object.keys(listaCategorias).length)]
    const palavraLocal = palavrasJogo[categoria][Math.floor(Math.random() * palavrasJogo[categoria].length)]
    // return usando {} - retorna um objeto, 
    // return usando [] retornaria um array.
    return {categoria,palavraLocal};
  }, [palavrasJogo] ); // Função acionada sempre que o valor desa variável alterar/mudar

  const funcaoIniciarJogo = () => {
    console.log("Iniciar Jogo");
    console.log("Iniciar Jogo");
    console.log("Iniciar Jogo");
    // etapa 02 - Carregar palavra e categoria
    // obter palavra e categoria. Devem ter o mesmo nome utilizado no return.
    // Aqui as variáveis são locais. Precisamos passar para a s variáveis 
    // de estado para que possam ser utilizadas na TelaJogando.js
    // A variável palavraLocal será dividida em letras e armazenada na variável de estado letrasDoJogo
    // A variável categoria será armazenada na variável de estado obterCategoriaDoJogo
    const {categoria,palavraLocal} = funcaoCarregarPalavraeCategoria();
    console.log(`Variaveis Locais: Categoria: ${categoria} Palavra: ${palavraLocal}`)

    // Etapa 03 - Caminho para termos os quadrados na tela
    // Colocar a categoria na variável de estado global
    setObterCategoriaDoJogo(categoria)
    // Colocar as letras da palavra na variável de estado
    setObterPalavraDoJogo (palavraLocal);
    
    let vetordaPalavra = palavraLocal.split("");
    // Dividir a palavra e converter em letras minusculas
    vetordaPalavra = vetordaPalavra.map((letra) => letra.toLowerCase());
    setLetrasDoJogo(vetordaPalavra) // Dividir a palavra em letras

    // Remova o console.log direto após o setState, pois o valor ainda não foi atualizado
    // Para depurar o valor atualizado, use useEffect.

    // Mudar o estágio do jogo para Jogando
    setEstagiodoJogo (estagios[1].nome)
  }
  const processarLetraJogoFunc = (letraDigitada) =>{
    setEstagiodoJogo (estagios[2].nome)
  } 
  const funcaoVoltarInicioJogo = () => {
    setEstagiodoJogo (estagios[0].nome)
  }
  
    // Use useEffect para ver o valor atualizado de obterCategoriaDoJogo
  React.useEffect(() => {
    console.log(`Valor atualizado de obterCategoriaDoJogo: ${obterCategoriaDoJogo}`);
    console.log(`Valor atualizado de obterPalavraDoJogo: ${obterPalavraDoJogo}`);
    // Se quiser ver as letras do jogo também
    console.log(`Letras do Jogo: ${letrasDoJogo}`);
  }, [obterCategoriaDoJogo, obterPalavraDoJogo, letrasDoJogo]);


  return (
    <div className="jogo-caca-palavras-container">


  return (
        {/* Mostrar o estágio do jogo 
        {console.log("Dica estagioJogo: ",estagioJogo)} */}
        {/* Como a posição 0 contem Inicio será apresentado o conteúdo do componente TelaInicial na tela. */}
        {estagioJogo === "Início" && <TelaInicialProjeto iniciarJogo={funcaoIniciarJogo}/>}
        {/* Antes estava assim:  
        {estagioJogo === "Jogando" && <TelaJogando processarLetraJogo={processarLetraJogoFunc} />} */}
        {/* Agora está assim:  */}
        {estagioJogo === "Jogando" && <TelaJogando 
          processarLetraJogoFunc={processarLetraJogoFunc}
          pontuacao = {pontuacao} 
          obterCategoriaDoJogo = {obterCategoriaDoJogo}
          tentativas = {tentativas}
          letrasAdivinhadasVetor = {letrasAdivinhadasVetor}
          letrasDoJogo = {letrasDoJogo}
          letrasErradasVetor = {letrasErradasVetor}
      />}

 


        {estagioJogo === "Fimjogo" && <TelaFimdeJogo voltarInicio={funcaoVoltarInicioJogo} />}
    </div>
  )
}

export default JogoCacaPalavrasPrincipal