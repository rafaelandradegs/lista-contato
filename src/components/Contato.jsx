import React from 'react'

export function Contato(props) {
  return (
    <div key={props.id}>
      {props.nome} - {props.telefone}
      <span
        onClick={() => {
          props.remover({ nome: props.nome, telefone: props.telefone })
        }}
      >
        [remover]
      </span>
    </div>
  )
}
