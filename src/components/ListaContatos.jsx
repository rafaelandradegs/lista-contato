import React from 'react'

export function ListaContatos({ listaContatos }) {
  return (
    <>
      <ul>
        {listaContatos.map(contato => {
          return (
            <li
              key={uuid()}
            >{`Nome: ${contato.nome} - Telefone: ${contato.telefone}`}</li>
          )
        })}
      </ul>
    </>
  )
}
