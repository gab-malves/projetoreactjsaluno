import MinhaCondicionalProps from './MinhaCondicionalProps';
const MinhaProps = (meuParametro) => {
    return (
        <div>
            <h1>Meu Componente com Props</h1>
            Nome recebido foi: {meuParametro.nome}
            <MinhaCondicionalProps nome={meuParametro.nome} />
        </div>
    )
}
export default MinhaProps;