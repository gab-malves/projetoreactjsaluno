import React from 'react'
import {useState} from "react"

const RenderizaCondicionalElse = () => {
  const [nomeUsuario] = useState ("Douglas")
  return (
    <div>
        RenderizaCondicionalElse
         <h1> Item será mostrado dependendo da condicação.</h1>   
        {nomeUsuario === "Douglas" ? 
          (
            <div> <p> O Nome é {nomeUsuario}</p> </div>
          ) : 
          (
            <div> <p> Nome Não Localizado</p> </div>
          ) 
        }


    </div>
  )
}

export default RenderizaCondicionalElse