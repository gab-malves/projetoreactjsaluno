import React from 'react'
 
const ApresentaCarro = ( carro ) => {

  return (
    <ul style={{ textAlign: 'left' }}>
      <li>Marca: {carro.marca}</li>
      <li>Cor: {carro.cor}</li>
      <li>Zero: {carro.zero}</li>
      <li>Km: {carro.km}</li>
    </ul>
  )
}

export default ApresentaCarro