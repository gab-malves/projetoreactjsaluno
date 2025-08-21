
import React, { useState } from 'react'

const RenderizaListasIndice = () => {
    const [aluno] = useState ([
        {id:1,nome:"Douglas",matricula:12345},
        {id:2,nome:"Pedro",matricula:34567},
        {id:3,nome:"Ricardo",matricula:67890},
        {id:4,nome:"Caio",matricula:901909}
    ])

  return (
    <div>
        RenderizaListasIndice
        <ul>
            {aluno.map((item) => (
                <li key={item.id}>
                    {item.nome} - {item.matricula}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default RenderizaListasIndice