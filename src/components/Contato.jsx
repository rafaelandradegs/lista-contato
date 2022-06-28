import React from 'react'

export function Contato(props) {
  return (
    <div key={props.id}>
      {props.nome} - {props.telefone}
    </div>
  )
}
