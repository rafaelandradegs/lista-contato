import React from 'react'

export function Contato(props) {
  return (
    <ul>
      <li key={props.id}>
        {props.nome} - {props.telefone}
      </li>
    </ul>
  )
}
