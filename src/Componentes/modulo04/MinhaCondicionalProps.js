 import React from 'react'
 import {useState} from "react"
 const MinhaCondicionalProps = (props) => {
    const [nomeUsuario, setNomeUsuario] =  useState (props.nome);
    console.log("Nome: ",nomeUsuario)
  return (
    <div>
      <h1>Nome foi recebido como parâmetro.</h1>
      {nomeUsuario ? (
        <p>Nome recebido: {nomeUsuario}</p>
      ) : (
        <p>Nenhum nome recebido</p>
      )}

      <h1>Componente com Comparação de strings</h1>
      {nomeUsuario === "Admin" ? (
        <p>Bem-vindo, {nomeUsuario}!</p>
      ) : (
        <p>Você não tem acesso como {nomeUsuario}.</p>
      )}
      <button
        onClick={() => setNomeUsuario("Admin")}
        style={{
          padding: "10px 24px",
          background: "linear-gradient(90deg, #4f8cff 0%, #38e7b0 100%)",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          fontSize: "1rem",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
          transition: "transform 0.2s",
        }}
        onMouseOver={e => (e.currentTarget.style.transform = "scale(1.10)")}
        onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
      >
        Ajustar nome para Admin
      </button>
    </div>
  )
 }
 
 export default MinhaCondicionalProps
