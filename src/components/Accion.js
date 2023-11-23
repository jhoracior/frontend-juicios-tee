import React from 'react'

export function Accion( {fecha_envio, descripcion, emisor} ) { 
  return (
    <tr>
      <td>{fecha_envio}</td><td>{descripcion}</td><td>{emisor}</td>
    </tr>
  )
}
