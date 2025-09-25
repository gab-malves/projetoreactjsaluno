import React, { useEffect, useState } from 'react'
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

  // Etapa 03 - Hook useEffect para monitorar as tentativas
  useEffect (() => {
    if (tentativas <= 0 ){
      console.log("Reinicializar variaveis do jogo e ir para o fim do jogo")
      // Zerar os vetores das letras para uma nova partida
      reiniciarvariaveisJogo ()
      // envia para o fim do jogo
      setEstagiodoJogo (estagios[2].nome)
    }
  }, [tentativas])

  const  reiniciarvariaveisJogo = () => {
    console.log("Reiniciando vetores e as variaveis do jogo")
    setLetrasAdivinhadasVetor ([])
    setLetrasErradasVetor ([])
  }


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

  // Etapa 03 - Adicionar useCallback para a função iniciar jogo
  // A função funcaoIniciarJogo é passada como prop para o componente TelaInicialProjeto.js
  // Quando o botão iniciar jogo for clicado, a função será executada
  // A função carrega a palavra e categoria, atualiza as variáveis de estado e muda o estágio do jogo para "Jogando"
  // Antes estava assim:
  /*
  const funcaoIniciarJogo = () => {
    console.log("Iniciar Jogo");
    setEstagiodoJogo (estagios[1].nome)
  } */
  // Agora está assim:
  // Sem Este useCallback a função seria recriada a cada renderização do componente
  // Com o useCallback a função só será recriada se a dependência funcaoCarregarPalavraeCategoria mudar
  // O que não deve acontecer, pois palavrasJogo é inicializado uma vez e nunca muda.
  // Atenção
  // Atenção
  // Atenção
  // Atenção
  // Atenção - Sem este useCallback as variáveis de estado não seriam atualizadas corretamente
  // e o jogo não funcionaria como esperado. 
  // Um erro percebido será que o vetor de letras erradas não seria atualizado corretamente.
  // Isso ocorre porque a função seria recriada a cada renderização, 
  // fazendo com que o estado capturado dentro da função não estivesse sincronizado com o estado atual do componente.
  const funcaoIniciarJogo = useCallback (() => {
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
  }, [funcaoCarregarPalavraeCategoria]);


  // Etapa 03 - Hook useEffect para monitorar as letras adivinhadas
  // Se o número de letras adivinhadas for igual ao número de letras únicas na palavra, o jogador vence
  // E soma-se 50 pontos à pontuação total e inicia uma nova rodada automaticamente chamando a função funcaoIniciarJogo ()
  
useEffect (() => {
    // UseState letrasDoJogo - contem todas as letras da plavra do jogo
    const listaLetrasUnicas = [...new Set (letrasDoJogo)]
    console.log ("Letras unicas: ",listaLetrasUnicas)
    console.log ("Letras Adivinhadas: ",letrasAdivinhadasVetor)
    console.log ("Letras unicas (letrasDoJogo): ",letrasDoJogo)
    // Quando o jogador acerta a palavra soma-se 50.
    if (listaLetrasUnicas.length === letrasAdivinhadasVetor.length){
      setPontuacao ((valorAtual) => valorAtual + 50)
      // Zerar os vetores das letras para uma nova partida
      reiniciarvariaveisJogo ()
      // Reinicia o jogo
      funcaoIniciarJogo();
    }
  }, [letrasAdivinhadasVetor,funcaoIniciarJogo,letrasDoJogo])


  // Etapa 02 - Função para processar a letra digitada
  // Antes estava assim:
  /*
  const processarLetraJogoFunc = (letraDigitada) =>{
    setEstagiodoJogo (estagios[2].nome)
  }*/
  // Agora está assim:
  // Etapa 03 - Lógica para verificar a letra
  // Função para processar a letra digitada
  // A função processarLetraJogoFunc é passada como prop para o componente TelaJogando.js
  // A letra digitada é recebida como argumento letraDigitada
  // A letra digitada é convertida para minúscula para facilitar a comparação
  // Verificamos se a letra já foi adivinhada ou errada, se sim, retornamos sem fazer nada
  // Se a letra estiver na palavra do jogo, adicionamos à lista de letras adivinhadas e aumentamos a pontuação
  // Se a letra não estiver na palavra, adicionamos à lista de letras erradas e diminuímos as tentativas
  // Se as tentativas chegarem a zero, mudamos o estágio do jogo para "Fimjogo"
  const processarLetraJogoFunc = (letraDigitada) =>{
    // Etapa 3 - No botão fim de Jogo, chamamos a função processarLetraJogoFunc sem passar nenhum argumento
    // Porque temos que verificar se letraDigitada existe e se tem tamanho maior que 0?
    // Quando chamamos a função processarLetraJogoFunc sem passar nenhum argumento
    // letraDigitada será undefined. E undefined não tem o método toLowerCase()
    // Isso causaria um erro. Então, verificamos se letraDigitada existe e se tem tamanho maior que 0
    // antes de chamar o método toLowerCase()
    console.log("Letra digitada em JogoCacaPalavrasPrincipal.js: ",letraDigitada)
    if (letraDigitada && letraDigitada.length > 0 ){
      console.log("Letra digitada em TelaJogador.js: ",letraDigitada.toLowerCase)
      const letraDigitadaNormalizada =  letraDigitada && letraDigitada.length > 0 &&letraDigitada.toLowerCase();
      // Verificar se a letra já foi utilizada
      if (letrasAdivinhadasVetor.includes(letraDigitadaNormalizada) || 
          letrasErradasVetor.includes(letraDigitadaNormalizada)){
        // da uma chance ao usuário não fazendo nada deixando ele continuar sem perder chances
        return;
      }
      // Se você acertou a letra em acordo com a palavra.
      // incluirá no vetor de letras adivinhadas
      // Se acertar a letra ganha 5 pontos
      // Se errar a letra perde 1 tentativa
      if (letrasDoJogo.includes(letraDigitadaNormalizada) ){
        setLetrasAdivinhadasVetor((valorAtual) => [...valorAtual,letraDigitadaNormalizada])
        setPontuacao ((ponto) => ponto + 5)
      }
      else {
        // Quando erra reduzimos a tentativa em uma unidade
        /*
Used 1 reference
O trecho ...valorAtual utiliza o operador spread (...) em JavaScript.

O que é o operador spread?
O operador spread (...) é usado para "espalhar" os elementos de um objeto iterável (como arrays ou objetos) em outro local.
Ele é muito comum em React para copiar ou combinar objetos/arrays de forma imutável.

Como funciona no contexto de objetos?
Se valorAtual for um objeto, ...valorAtual copia todas as propriedades desse objeto para outro objeto. Exemplo:

const valorAtual = { a: 1, b: 2 };
const novoObjeto = { ...valorAtual, c: 3 };// novoObjeto agora é { a: 1, b: 2, c: 3 }

Por que usar isso em React?
No React, é comum atualizar o estado de forma imutável. O spread ajuda a criar uma nova cópia do estado antigo, adicionando ou modificando propriedades sem alterar o original.

Possíveis gotchas
O spread faz uma cópia superficial (shallow copy). Objetos aninhados ainda são referenciados.
Se houver propriedades duplicadas, a última sobrescreve as anteriores.
Resumindo
O uso de ...valorAtual serve para copiar todas as propriedades de valorAtual para outro objeto, facilitando a atualização de estados ou a combinação de objetos de forma limpa e imutável.

        */
        setLetrasErradasVetor((valorAtual) => [...valorAtual,letraDigitadaNormalizada])
        setTentativas ((ten) => ten - 1)
      }
    }else{
      console.log("Ir para fim do jogo. Vou mudar estagio para [2].")
      setEstagiodoJogo (estagios[2].nome)
      // o que acontece depois?
      // é dado refresh na página o conteúdo do Return é carregado novamente
      // E o estágio do jogo é igual a Fim do Jogo
      // E o componente TelaFimdeJogo é carregado na tela
      // E o botão Resetar o jogo é apresentado na tela.
      // Etapa 03 -  Enviar a pontuação final para o componente TelaFimdeJogo
      // Eu preciso enviar a pontuação final para o componente TelaFimdeJogo
      
    }
  }
  const funcaoVoltarInicioJogo = () => {
    console.log("Voltar para o início do jogo - funcaoVoltarInicioJogo");
    // Etapa 03 - Antes de realmente reiniciar o jogo, vamos recolocar os valores iniciais nas variáveis.
    setTentativas (15)
    setPontuacao (0)
    // Etapa 01 - Voltar para o início do jogo
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
        {/*Etapa 02 */}
        {/*{estagioJogo === "Fimjogo" && <TelaFimdeJogo voltarInicio={funcaoVoltarInicioJogo} />} */}
        {/*Etapa 03 */}
        {estagioJogo === "Fimjogo" && <TelaFimdeJogo voltarInicio={funcaoVoltarInicioJogo} pontuacao={pontuacao} />}

    </div>
  )
}

export default JogoCacaPalavrasPrincipal