import React from 'react'

export const MeuTemplate = () => {
    const nome = "Douglas"
    const empregado = {
        id: 1,
        nome: "Douglas",
        cargo: "Desenvolvedor"
    }
  return (
    <div>
        MeuTemplate - {nome}
        Empregado: {empregado.nome} - Cargo: {empregado.cargo}
        {console.log(empregado)}
    </div>   
  )
}
