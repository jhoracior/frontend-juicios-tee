import React from 'react';
import '../CssTEE/CasosActAcuerdos.css';
import '../../css/EstiloA.css';
import { getCasosAct, getCasosActMag } from '../../api';
import { useState, useEffect } from 'react'
import { Conjunto_Acuerdos } from '../../paginas/CasosActivos-Acuerdos/Conjunto_Acuerdos';
import { useLocation, Link, useNavigate } from "react-router-dom";
import { ContainerBoxRes } from '../../components/containerResolucion';


export function ExpedientesMag_Acuerdos({props}) {

  const location = useLocation();
  const state = location.state;
  console.log(state);


  const id_miembro= sessionStorage.getItem('ID_miembro');
  
  const [isFuncCalled, setIsFuncCalled] = useState(false);

  const [acuerdos_ws, setAcuerdos_ws] = useState([]);

  const onClick = async (event) => {  
      
      const response = await getCasosActMag(id_miembro, sessionStorage.getItem("ID_exp"));
      console.log(response.data);
  
      if (response.status == 200) {
          if (response.data == "")
              setAcuerdos_ws([]);
          else 
              setAcuerdos_ws(response.data);
      } else {
          setAcuerdos_ws([]);
      }

  };

  if (!isFuncCalled) {
      onClick();
      setIsFuncCalled(true);
  }

  const handleBack = () => {
    window.history.back();
  };

  const [showContainer, setShowContainer] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const containerBox = document.getElementById('caja2');
    if (showContainer) {
      containerBox.style.display = 'block';
    } else {
      containerBox.style.display = 'none';
    }
  }, [showContainer]);

  const handleCheckboxChange = (event) => {
    setShowContainer(event.target.checked);
    console.log(showContainer);
  };


  return (
    <div className="main">
      <div>
        <h1 className="header-acuerdos">Acuerdos:</h1>
          <button onClick={handleBack} className="return-button"> 
            Regresar
          </button>
      </div>
      <hr />
      <div className="inline">
        <div className="box">
          <p><b>Expediente</b></p>
        </div>
        <div className="box2">
          <p><b>{state.folio}</b></p>
        </div>
      </div>
      <Conjunto_Acuerdos conjunto_acuerdos={acuerdos_ws} />
      <Link to="/M/nuevoAcuerdo">
        <div className="contenedor-acuerdo">
          <p className="nombre-acuerdo">Nuevo acuerdo</p>
          <img className="imagen-doc" src="https://cdn-icons-png.flaticon.com/512/976/976696.png" alt="add" />
          <p>ㅤ</p>
        </div>
      </Link>
      <div className="caja">
          <p style={{ display: 'inline-block' }}><b>¿Desea redactar una resolucion?</b></p>
          <input type="checkbox" className="mycheck" id="mycheck" value="caja2" onChange={handleCheckboxChange} /> <label htmlFor="mycheck">Si</label>
      </div>
      <div id="caja2" style={{ display: 'none' }}>
          <ContainerBoxRes/>
      </div>
    </div>
  );
}