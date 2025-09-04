
const PropFilha = ({children,nomeDev}) => {
  return (
    <div>
      <p style={{ color: '#ff00b3db', fontWeight: 'bold' }}>Inicio PropFilha.js</p>
      <p style={{ color: '#4800ffdd', fontWeight: 'bold' }}>{children} </p>
      <p style={{ color: '#4800ffdd', fontWeight: 'bold' }}>Fim PropFilha.js</p>
      <h2 style={{ color: '#4800ffdd', fontWeight: 'bold' }}>Este é o título do PropFilha</h2>
      <h3 style={{ color: '#ff00b3db', fontWeight: 'bold' }}>Desenvolvedor: {nomeDev}</h3>
    </div>
  )
}
export default PropFilha