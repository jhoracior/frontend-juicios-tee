import React, { useState, useEffect } from 'react';//Firmar recurso
import ReactDOM from "react-dom";
import '../css/EstiloA.css'
// import Dashboard from '../components/Dashboard';
import {ContainerBox2} from '../components/Container2';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import FormData from 'form-data';
import { useLocation } from "react-router-dom";

import { nuevoDocumento, nuevoExpediente } from '../api';


export function FirmarDoc({props}) {

  const location = useLocation();
  const state = location.state;
  console.log(state);
  let file = state;

  const [proceder, setProceder] = useState(false);

  const id_usuario = sessionStorage.getItem('ID_usuario');

  const handleSubmission = async (event) => {
    event.preventDefault();

    const id_expediente = await nuevoExpediente(id_usuario);

    console.log('id: ' + id_expediente);

    let formdata = new FormData();

    console.log(formdata)

    formdata.append(
        "doc",
        file
    );
    
    await nuevoDocumento(id_expediente, id_usuario, formdata);
    setProceder(true);
    console.log(proceder);
  }

    return (
      <div className="main16">
        <div className="inline"/>
        {/* <Dashboard/> */}
          <div className="box0">
            <p><b>Inconformidad:</b></p>
          </div>
          <div>
            
            <button className="btn-primary">
            <Link to="/CargarDoc" className="link-style">
              1.Cargar Documento
            </Link>
            </button>
            <button className="btn-primary">
            <Link to="/AdjuntarP" className="link-style" state={file}>
              2.Adjuntar pruebas
            </Link>
            </button>
            <button className="btn-primary-active">
            <Link to="/FirmarP" className="link-style" state={file}>
              3.Firmar Recurso
            </Link>
            </button>
          </div>
        <div id="caja16">
          <ContainerBox2/>
        </div>
      <div>
      <a>
        <Link to="/AdjuntarP">
        <button className="anterior-button">
         Anterior
        </button>
        </Link>
      </a>
  
      <a>
      {/* <Link to="/casos_activos"> */}
      <button className="next-button" onClick={handleSubmission} type='submit'>
        Terminar
      </button>
      {/* </Link> */}
      </a>
  
      <a>
      <Link to="/casos_activos">
      <button className="cancelar-button">
         Cancelar
      </button>
      </Link>
      </a>
      </div>
      {proceder && ( <Navigate to="/casos_activos" replace={true} /> )}
    </div>
    )
};
