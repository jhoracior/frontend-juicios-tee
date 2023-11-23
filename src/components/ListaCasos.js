import React from 'react'
import { Casos } from './Casos'
import '../css/casos_activos.css'
import { Link } from 'react-router-dom';


export function ListaCasos( {casos} ) {
  const componentesCasos = casos.map( (a_actual) => {
    return <Casos folio={a_actual.folio} fecha_inicio={a_actual.fecha_inicio} resolucion={a_actual.resolucion} 
    expediente={a_actual.ID_expediente}/>;

  } );

  return (
    <div>
        <div className="main_CA">
        <div>
            <h1>CASOS ACTIVOS:</h1>
            <a href="CasosActivos-Casos.html">
            </a>
        </div>
      

        <table className="table_CA">
          <thead>
          <tr style={{backgroundColor: "white"}}>
            <th>
              <b>Folio</b>
            </th>
            <th>
              <b>Fecha de inicio</b>
            </th>
            <th>
              <b>Estado</b>
            </th>
            <th>
              <b>Historial</b>
            </th>
            <th>
              <b>Acuerdos</b>
            </th>
            <th>
              <b>Firmar</b>
            </th>
          </tr>
          </thead>

          <tbody>
            { componentesCasos }
          </tbody>

        </table>
        
        <Link to="/CargarDoc">
        <a>
          <div className="box_big_CA" style={{color: '#000000'}}>
            <b>Impugnar Sentencia</b>
            <img src="https://banderasdelujo.com/img/cms/malletes/port5.png" />
          </div>
        </a>
        </Link>

    </div>
</div>

  )
}
