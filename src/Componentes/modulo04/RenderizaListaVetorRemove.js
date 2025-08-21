import React from 'react'
import { useState } from 'react'

const RenderizaListaVetorRemove = () => {
  const [alunos, setAlunos] = useState([
    { id: 1, nome: "Douglas", matricula: 12345 },
    { id: 2, nome: "Pedro", matricula: 34567 },
    { id: 3, nome: "Ricardo", matricula: 67890 },
    { id: 4, nome: "Caio", matricula: 901909 }
  ])

  const removeAluno = (id) => {

    /*
    Explicação:

setAlunos(...): Esta função atualiza o estado alunos no React. Sempre que você chama setAlunos, o componente é re-renderizado com a nova lista de alunos.
alunos.filter(...): O método .filter() cria um novo array, incluindo apenas os elementos que passam no teste da função fornecida.
aluno => aluno.id !== id: Para cada aluno, verifica se o id dele é diferente do id passado como argumento. Se for diferente, o aluno permanece na lista; se for igual, ele é removido.
Resumo:
Esta linha remove o aluno com o id especificado da lista, criando uma nova lista sem esse aluno e atualizando o estado do componente.

Exemplo prático:
Se você tem [ {id: 1}, {id: 2} ] e chama removeAluno(2), o resultado será [ {id: 1} ].
    */
    setAlunos(alunos.filter(aluno => aluno.id !== id))
  }
  return (
    <div>
      <h2>Lista de Alunos</h2>
      <ul>
        {alunos.map((aluno) => (
          <li key={aluno.id}>
            {aluno.nome} - {aluno.matricula}
            <button onClick={() => removeAluno(aluno.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RenderizaListaVetorRemove