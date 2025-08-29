
const PropFilha = ({children,nomeDev}) => {
  return (
    <div>
        <p>{children}</p>
        <h2>Este é o título do PropFilha</h2>
        <h3>Desenvolvedor: {nomeDev}</h3>
    </div>
  )
}
export default PropFilha