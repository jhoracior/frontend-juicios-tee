import React from 'react';
import '../CssTEE/CasosActAcuerdos.css';
import '../../css/EstiloA.css';
import { getCasosAct, getIDexpTrabaja, getExpedienteMiembro } from '../../api';
import { useState, useEffect } from 'react'
//import { Conjunto_Acuerdos } from './Conjunto_Acuerdos';
import { useLocation, Link, useNavigate } from "react-router-dom";
import {ContainerBoxRes} from '../../components/containerResolucion';
import { CasosMag } from '../../components/CasosMag';


export function ExpedientesMag({props}) {
  const id_miembro = sessionStorage.getItem('ID_miembro')
  const [componentesExpedientes, setComponentesExpedientes] = useState([]);
  const [idsExp, setIdsExp] = useState([]);
  const [isFuncCalled, setIsFuncCalled] = useState(false);

  const [folio, setFolio] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');

  // acciones = getAcciones('folio1');
  // const onClick = async (event) => {
  //   event.preventDefault();

  const onClick = async (event) => {

    //   const response = await getAcciones(id_usuario); //ARRIBA SE IMPORTO ESTA FUNCION.
    const response = await getIDexpTrabaja(id_miembro);
    if (response.status == 200) {
          console.log(response.data)
          sessionStorage.setItem("ID_exp", response.data[0].ID_expediente)
          const response1 = await getExpedienteMiembro(response.data[0].ID_expediente);
          setFolio(response1.data[0].folio);
          setFechaInicio(response1.data[0].fecha_inicio);
          console.log(folio)
    } else {
      setIdsExp([]);
    }
  }

  if (!isFuncCalled){
    onClick();
    setIsFuncCalled(true);
  }  

  return (
    <div>
        <div className="main_CA">
        <div>
            <h1>EXPEDIENTES:</h1>
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
              <b>Acuerdos</b>
            </th>
          </tr>
          </thead>

          <tbody>
            <CasosMag folio={folio} fecha_inicio={fechaInicio}/>;
          </tbody>

        </table>

     </div>
     </div>
  )
}