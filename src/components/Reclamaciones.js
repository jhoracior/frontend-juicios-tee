import React from 'react'
import { Link } from 'react-router-dom'

export function Reclamaciones( {ID_rec, fecha_inicio,ID_usuario} ) {
   
  
    const data = {
        usuario: {ID_usuario},
        expediente: {ID_rec}
      };

  return (
    <tr style={{backgroundColor: "#e0d4af"}}>
    <td style={{textAlign: "center"}}>{ID_rec}</td>
    <td style={{textAlign: "center"}}>{ID_usuario}</td>
    <td style={{textAlign: "center"}}>{fecha_inicio.slice(0,10)}</td>
    {/* <td style={{textAlign: "center"}}>{asunto}</td> */}
    <td style={{textAlign: "center"}}>
        <Link to="/SG/GenerarFolio" state={data}>Verificar</Link>
      </td>
  </tr>
      

    
  )
}