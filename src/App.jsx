import React, { useState } from 'react'
import { Contato } from './components/Contato'
import { v4 as uuid } from 'uuid'

// import { ListaContatos } from './components/ListaContatos'

export function App() {
  const [contato, setContato] = useState(() => {
    return { nome: '', telefone: '' }
  })

  const [listaContatos, setListaContatos] = useState(() => {
    return []
  })

  function definirNome(e) {
    setContato({ ...contato, nome: e.target.value })
  }

  function definirTelefone(e) {
    setContato({ ...contato, telefone: e.target.value })
  }

  function adicionarContato() {
    if (contato.nome !== '' && contato.telefone.length >= 9) {
      setListaContatos([...listaContatos, contato])
    }
  }

  return (
    <>
      <h1>Minha lista de contactos</h1>
      <hr />
      <div>
        <label>Nome: </label>
        <br />
        <input type="text" onChange={definirNome} value={contato.nome} />
      </div>
      <div>
        <label>Telefone: </label>
        <br />
        <input
          type="number"
          onChange={definirTelefone}
          value={contato.telefone}
        />
      </div>
      <br />
      <button onClick={adicionarContato}>Adicionar Contato</button>
      <hr />
      {/* <ListaContatos listaContatos={listaContatos} /> */}
      {listaContatos.map(contato => {
        return (
          <Contato
            key={uuid()}
            nome={contato.nome}
            telefone={contato.telefone}
          />
        )
      })}
    </>
  )
}
