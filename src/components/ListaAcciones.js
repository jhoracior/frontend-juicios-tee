import React from 'react'
import { Accion } from './Accion'
import '../css/historialFormato.css'

export function ListaAcciones( {acciones} ) {
  const componentesAcciones = acciones.map( (a_actual) => {
    return <Accion fecha_envio={a_actual.fecha_envio.substr(0, 10).replace('T', ' ')} descripcion={a_actual.descripcion} emisor={a_actual.emisor} />;;
  } );


  return (
    <>
    {/* <Dashboard/> */}
    <div>

        <table className="table">
          <tr style={{backgroundColor: "#ccbd81"}}>
            <td><b>Fecha</b></td><td><b>Edición</b></td><td><b>Autor</b></td>
          </tr>
            { componentesAcciones }
        </table>

    </div>
  </>
  )
}
