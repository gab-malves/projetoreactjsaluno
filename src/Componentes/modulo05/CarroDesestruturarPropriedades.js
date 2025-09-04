import React from 'react'
const CarroDesestruturarPropriedades = (minhaProp) => {
  // Acionado pelo UnificandoModulos.js
  return (
    <div>
            <h2>Modulo 05 - CarroDesestruturarPropriedades</h2>
            <p>Este componente demonstra como desestruturar propriedades de um objeto.</p>
            <p>Marca: {minhaProp.marca}</p>
            <p>Ano: {minhaProp.cor}</p>
            <p>Cor: {minhaProp.zero}</p>
            <p>Descrição: {minhaProp.km}</p>
    </div>
  )
}
export default CarroDesestruturarPropriedades