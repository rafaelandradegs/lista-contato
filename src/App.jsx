import React, { useEffect, useRef, useState } from 'react'
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

  const inputNome = useRef()
  const inputTelefone = useRef()

  function definirNome(e) {
    setContato({ ...contato, nome: e.target.value })
  }

  function definirTelefone(e) {
    setContato({ ...contato, telefone: e.target.value })
  }

  function adicionarContato() {
    let duplicado = listaContatos.find(
      valueExiste =>
        valueExiste.nome === contato.nome &&
        valueExiste.telefone === contato.telefone
    )
    if (duplicado === undefined) {
      if (contato.nome !== '' && contato.telefone.length >= 9) {
        setListaContatos([...listaContatos, contato])
      }
      setContato({ nome: '', telefone: '' })
      inputNome.current.focus()
    } else {
      inputTelefone.current.focus()
    }
  }

  function enterAdicionarContato(e) {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      adicionarContato()
    }
  }

  useEffect(() => {
    if (localStorage.getItem('meus_contatos') !== null) {
      setListaContatos(JSON.parse(localStorage.getItem('meus_contatos')))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('meus_contatos', JSON.stringify(listaContatos))
  }, [listaContatos])

  return (
    <>
      <h1>Minha lista de contactos</h1>
      <hr />
      <div>
        <label>Nome: </label>
        <br />
        <input
          type="text"
          ref={inputNome}
          onChange={definirNome}
          value={contato.nome}
        />
      </div>
      <div>
        <label>Telefone: </label>
        <br />
        <input
          type="number"
          ref={inputTelefone}
          onKeyUp={enterAdicionarContato}
          onChange={definirTelefone}
          value={contato.telefone}
        />
      </div>
      <br />
      <button onClick={adicionarContato}>Adicionar Contato</button>
      <hr />
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
