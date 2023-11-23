import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import '../css/EstiloA.css'
// import Dashboard from '../components/Dashboard';
import {ContainerBox} from '../components/container';
import { Link } from 'react-router-dom';

import { useLocation } from "react-router-dom";

export function AdjuntarP({props}) {

  const location = useLocation();
  const state = location.state;
  console.log(state);
  let file = state;


  const [showContainer, setShowContainer] = useState(false);

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
  };

  return (
    <div className="main16">
      <div className="inline"/>
        <div className="box0">
          <p><b>Inconformidad:</b></p>
        </div>
        <div>
          <button className="btn-primary" >
          <Link to="/CargarDoc" className="link-style" >
            1.Cargar Documento
          </Link>
          </button>
          
          <button className="btn-primary-active">
          <Link to="/AdjuntarP" className="link-style" state={file}>
            2.Adjuntar pruebas
          </Link>
          </button>
          <button className="btn-primary">
          <Link to="/FirmarP" className="link-style"  state={file}>
            3.Firmar Recurso
          </Link>
          </button>
        </div>
        <div className="caja">
          <p style={{ display: 'inline-block' }}><b>¿Desea adjuntar pruebas?</b></p>
          <input type="checkbox" className="mycheck" id="mycheck" value="caja2" onChange={handleCheckboxChange} /> <label htmlFor="mycheck">Si</label>
        </div>
        <div id="caja2" style={{ display: 'none' }}>
          <ContainerBox/>
        </div>
      <div>
      <a>
      <Link to="/CargarDoc">
        <button className="anterior-button" state={file}>
         Anterior
        </button>
      </Link>
      </a>
  
      <a>
      <Link to="/firmarP">
        <button className="next-button" state={file}>
          Siguiente
        </button>
      </Link>
      </a>
  
      <a>
      <Link to="/casos_activos">
      <button className="cancelar-button">
         Cancelar
      </button>
      </Link>
      </a>
      </div>
    </div>
  );
}
