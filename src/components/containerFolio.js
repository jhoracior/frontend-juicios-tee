import React, { useState } from "react";
import {Link} from 'react-router-dom';
import { nuevoFolio } from "../api";
import { useNavigate } from "react-router-dom";
import '../css/EstiloA.css'

export function ContainerBoxFolio(){
  const [folio, setFolio] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [proceder, setProceder] = useState('');
  const navigate = useNavigate();

  //const handleSubmit = async (event) => {
  // event.preventDefault();

  // const response = await nuevoFolio(folio, {ID_exp});

  //if (response.status == 200) {  // Post regresa 201 cuando hay exito 
  //    setMensaje("Folio Creado");
  //   console.log(mensaje);
  //   setProceder('ok');
  //} else {
  //  setMensaje("Error" + response.status);
  //}

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await nuevoFolio(folio, sessionStorage.getItem("ID_exp"));

    if (response.status == 200) {  // Post regresa 201 cuando hay exito 
       setMensaje("Folio Creado");
       console.log(mensaje);
       setProceder('ok');
       navigate("/SG/GenerarFolio/Ponencias")
    } else {
     setMensaje("Error" + response.status);
    }
  }


  return (
    <div className="caja2">
      <h2>Generar folio</h2>
      <form onSubmit={handleSubmit}>
         <input type="text" placeholder="Folio" value={folio} onChange={(event) => setFolio(event.target.value)} />
         <button type="submit">
            Generar
          </button>
         
      </form>
    </div>
  );
};
