import React from 'react'

const MeuEventoRenderiza = () => {
    const funcaoRenderiza = (opcao) => {
        if (opcao === 1) {
            return <h1>Opção fornecida igual a 1.</h1>;
        }  else  {
            return <p>Opção fornecida diferente a 1.</p>;
        }
    }
  
  return (
    <div>
            {funcaoRenderiza(1)}
            {funcaoRenderiza(4)}
    </div>
  )
}

export default MeuEventoRenderiza