import React from 'react'
import { Link } from 'react-router-dom'


export function Casos( {folio, fecha_inicio, resolucion, expediente} ) {
  {resolucion == null && (
    // code to execute if `resolucion` is null or undefined
    resolucion = 'En revision'
  )}

  {folio == null && (
    // code to execute if `resolucion` is null or undefined
    folio = 'pendiente'
  )}
  
  const id_usuario = sessionStorage.getItem('ID_usuario')
  const data = {
    expediente: {expediente},
    folio: {folio}
  };

  return (
    <tr style={{backgroundColor: "#e0d4af"}}>
      <td style={{textAlign: "center"}}>{folio}</td>
      <td style={{textAlign: "center"}}>{fecha_inicio.slice(0,10)}</td>
      <td style={{textAlign: "center"}}>{resolucion}</td>

      <td style={{textAlign: "center"}}>
      <Link to='/historial_acciones' state={data}>
        Ver<button className='botn_CA' ></button> </Link>
        </td>
      <td style={{textAlign: "center"}}>
        <Link to="/Acuerdos" state={data}>Expediente</Link></td>
      <td style={{textAlign: "center"}}>
        <Link to='/firmar' state={data}>
          Firmar<button className='botn_CA' ></button> </Link>
      </td>
    </tr>
  )
}
