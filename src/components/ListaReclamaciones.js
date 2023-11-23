import React from 'react'
import { Casos } from './Casos'
import '../css/casos_activos.css'
import { Link } from 'react-router-dom';
import { Reclamaciones } from './Reclamaciones';
// import Dashboard from "./Dashboard";


export function ListaReclamaciones( {reclamaciones} ) {
  //acomodar a segun la tabla en la BD
  const componentesReclamaciones = reclamaciones.map( (a_actual) => {
    // return <Casos folio={a_actual.folio} fechaInicio={a_actual.fechaInicio} 
    // estado={a_actual.estado}/>;

    // return <Casos ID_expediente={a_actual.ID_expediente} resolucion={a_actual.resolucion} representante={a_actual.representante}
    // usuario={a_actual.usuario} fecha_inicio={a_actual.fecha_inicio} fecha_final={a_actual.fecha_final}
    // folio={a_actual.folio}/>;

    return <Reclamaciones ID_rec={a_actual.ID_expediente} fecha_inicio={a_actual.fecha_inicio} ID_usuario={a_actual.usuario} />;


    // ID_expediente={a_actual.ID_expediente}  representante={a_actual.representante}
    // usuario={a_actual.usuario}  fecha_final={a_actual.fecha_final}
    // />;


  } );
  //edicion: titulo de notificacion
  //autor: emisor

  return (
    <div>
        <div className="main_CA">
        <div>
            <h1>Reclamaciones:</h1>
            <a href="CasosActivos-Casos.html">
            </a>
        </div>
      

        <table className="table_CA">
          <thead>
          <tr style={{backgroundColor: "white"}}>
            <th>
              <b>Reclamacion</b>
            </th>
            <th>
              <b>Autor</b>
            </th>
            <th>
              <b>Fecha de inicio</b>
            </th>
            <th>
              <b>Verificar</b>
            </th>
          </tr>
          </thead>
          <tbody>
            { componentesReclamaciones }
          </tbody>

        </table>

    </div>
</div>

  )
}
