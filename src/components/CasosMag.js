import React from 'react'
import { Link } from 'react-router-dom'

export function CasosMag( {folio, fecha_inicio} ) {

  const data = {
    folio: folio
  };

  return (
    <tr style={{backgroundColor: "#e0d4af"}}>
      <td style={{textAlign: "center"}}>{folio}</td>
      <td style={{textAlign: "center"}}>{fecha_inicio.slice(0,10)}</td>

      <td style={{textAlign: "center"}}>
        <a>Ver</a></td>
      <td style={{textAlign: "center"}}>
        <Link to="/M/Acuerdos" state={data}>Expediente</Link></td>
      <td style={{textAlign: "center"}}>
        <a>Firmar</a></td>
      <td style={{textAlign: "center"}}>
        <a>Redactar</a></td>
    </tr>

    
  )
}