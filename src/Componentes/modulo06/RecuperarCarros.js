import ApresentaCarro from './ApresentaCarro'
const RecuperarCarros = () => {
    const carros = [
    {id:1,marca:"Fiat",cor:"Preto",zero:true,km:10},
    {id:2,marca:"Ford",cor:"Azul",zero:false,km:1400},
    {id:3,marca:"Volks",cor:"Amarelo",zero:true,km:0},
    {id:3,marca:"Chevrolet",cor:"Rosa",zero:false,km:50090}
  ]
  return (
    <div>
      <h1>Recuperar Carros do banco de dados</h1>
        {carros.map(carro => (
          <li key={carro.id}>
            <ApresentaCarro {...carro} />
          </li>
        ))}
    </div>
  )
}
export default RecuperarCarros