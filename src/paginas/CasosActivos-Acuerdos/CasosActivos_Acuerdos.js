import React from 'react';
import '../Css/CasosActAcuerdos.css';
import { getCasosAct } from '../../api';
import { useState } from 'react'
import { Conjunto_Acuerdos } from './Conjunto_Acuerdos';
import { useLocation, Link } from "react-router-dom";
import { nuevoDocumento } from '../../api';


export function CasosActAcuerdos({props}) {

  const location = useLocation();
  const state = location.state;
  console.log(state);


  const id_usuario = sessionStorage.getItem('ID_usuario');
  sessionStorage.setItem("ID_exp",state.expediente.expediente)
  
  const [isFuncCalled, setIsFuncCalled] = useState(false);
  const [proceder, setProceder] = useState('')
  const [acuerdos_ws, setAcuerdos_ws] = useState([]);

  const onClick = async (event) => {  
      
      const response = await getCasosAct(id_usuario, state.expediente.expediente);
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

  const [selectedFile, setSelectedFile] = useState(null);
	const [isFilePicked, setIsFilePicked] = useState(false);


    const handleFile = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
        console.log(selectedFile);
    };

    const handleSubmission = async (event) => {
      event.preventDefault();
      let formdata = new FormData();
  
      console.log(formdata)
  
      formdata.append(
          "doc",
          selectedFile
      );
  
      const responseDoc = await nuevoDocumento(state.expediente.expediente, id_usuario, formdata);
      setProceder(true);
      console.log(proceder);
    }

  if (!isFuncCalled) {
      onClick();
      setIsFuncCalled(true);
  }

  const handleBack = () => {
    window.history.back();
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
          <p><b>{state.folio.folio}</b></p>
        </div>
      </div>
      <Conjunto_Acuerdos conjunto_acuerdos={acuerdos_ws} />
      <Link to="/nuevoAcuerdo">
        <div className="contenedor-acuerdo">
          <p className="nombre-acuerdo">Nuevo acuerdo</p>
          <img className="imagen-doc" src="https://cdn-icons-png.flaticon.com/512/976/976696.png" alt="add" />
          <p> </p>
        </div>
      </Link>
    </div>
  );
}