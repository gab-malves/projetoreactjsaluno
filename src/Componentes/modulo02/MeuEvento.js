import React from 'react'

const MeuEvento = () => {

  const funcaoCliquei = (event) => {
    console.log("Cliquei");
    console.log("Tipo do evento:", event.type);
    console.log("Elemento alvo:", event.target);
    console.log("Valor do alvo:", event.target.value);
    console.log("Dados do objeto event:",event) 
    console.log("Apos Event");
  };
  return (
    <div>
      <button
        onClick={funcaoCliquei}
        style={{
          backgroundColor: "#007bff", // Cor de fundo do botão
          color: "#fff", // Cor do texto
          padding: "20px 30px", // Espaçamento interno
          border: "none", // Sem borda
          borderRadius: "5px", // Arredondar bordas
          fontSize: "16px", // Tamanho da fonte
          cursor: "pointer", // Cursor de ponteiro ao passar o mouse
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)", // Sombra do botão
          transition: "background 0.2s" // Transição suave para a cor de fundo
        }}
        onMouseOver={e => e.target.style.backgroundColor = "#ec0f97ff"}
        onMouseOut={e => e.target.style.backgroundColor = "#007bff"}
      >
        Clique-me
      </button>
    </div>
  )
}
export default MeuEvento