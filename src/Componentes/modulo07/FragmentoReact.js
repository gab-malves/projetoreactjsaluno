const FragmentoReact = () => {
    /*Aqui temos um **React Fragment**. 
Ele é usado para agrupar múltiplos elementos JSX sem adicionar um novo nó ao DOM.
### Por que usar Fragmentos?
No React, cada componente deve retornar um único elemento pai. 
Se você quiser retornar múltiplos elementos, normalmente teria que envolvê-los em uma `<div>`. 
Porém, isso adiciona uma `<div>` extra ao DOM, o que pode afetar o layout ou a semântica do HTML.
### Como funciona?
O fragmento pode ser escrito de duas formas:
- `<React.Fragment> ... </React.Fragment>`
- `<> ... </>`
Aqui usamos a forma curta (`<> ... </>`):
Isso permite retornar múltiplos elementos sem criar um novo nó no DOM.
### Pontos de atenção
- Fragmentos não aceitam atributos (exceto a versão completa, que aceita `key`).
- Útil para listas ou quando não quer alterar a estrutura do DOM.    */
  return (
    <>
            <h2>01 - FragmentoReac. Não lembrei onde usei, porém é um recurso :)</h2>
            <h2>02 - FragmentoReact</h2>
    </>
  )
}
export default FragmentoReact