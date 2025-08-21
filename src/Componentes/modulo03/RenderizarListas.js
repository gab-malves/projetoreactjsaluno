import React from 'react'

const RenderizarListas = () => {
  const [minhaListaNomes] = React.useState(["João", "Maria", "Pedro"])
  return (
    <div>
      <h2>Lista de Nomes</h2>
      <ul>
        {minhaListaNomes.map((mNome, index) => (
          <li key={index}>{mNome}</li>
        ))}
      </ul>
    </div>
  )
}

export default RenderizarListas