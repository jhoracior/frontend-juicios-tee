import React from 'react';
import '../CssTEE/CasosActAcuerdos.css';
import '../../css/EstiloA.css';
import { getCasosActRec } from '../../api';
import { useState, useEffect } from 'react'
import { Conjunto_AcuerdosReclamacion } from './Conjunto_AcuerdosReclamacion';
import { useLocation, Link, useNavigate } from "react-router-dom";
import {ContainerBoxFolio} from '../../components/containerFolio';


export function GenerarFolio({props}) {

  const location = useLocation();
  const state = location.state;
  console.log(state);

  sessionStorage.setItem("ID_exp", state.expediente.ID_rec)

  const [isFuncCalled, setIsFuncCalled] = useState(false);

  const [acuerdos_ws, setAcuerdos_ws] = useState([]);

  const onClick = async (event) => {  
      
      const response = await getCasosActRec(state.usuario.ID_usuario,state.expediente.ID_rec);
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

  const handleCheckboxChangeNo = (event) => {
    navigate("/SG/VerificarReclamaciones");
  };

  return (
    <div className="main">
      <div>
        <h1 className="header-acuerdos">Descripción y pruebas adjuntas:</h1>
        <Link to="/SG/VerificarReclamaciones">
          <button onClick={handleBack} className="return-button"> 
            Regresar
          </button>
        </Link>
      </div>
      <hr />
      <div className="inline">
        <div className="box">
          <p><b>Reclamación</b></p>
        </div>
        <div className="box2">
          <p><b>{state.expediente.ID_rec}</b></p>
        </div>
      </div>
      <Conjunto_AcuerdosReclamacion conjunto_acuerdos={acuerdos_ws} />
      <a>
      </a>
      <div className="caja">
          <p style={{ display: 'inline-block' }}><b>¿Desea verificar la reclamación?</b></p>
          <input type="checkbox" className="mycheck" id="mycheck" value="caja2" onChange={handleCheckboxChange} /> <label htmlFor="mycheck">Si</label>
          <input type="checkbox" className="mycheck" id="mycheck" value="caja2" onChange={handleCheckboxChangeNo} /> <label htmlFor="mycheck">No</label>
      </div>
      <div id="caja2" style={{ display: 'none' }}>
          <ContainerBoxFolio/>
      </div>
      <div>
      </div>
    </div>
  );
}