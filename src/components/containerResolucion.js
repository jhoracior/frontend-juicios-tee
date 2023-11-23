import React, { useState } from "react";
import {Link} from 'react-router-dom';
import '../css/EstiloA.css'
import { nuevaResolucion } from "../api";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

export function ContainerBoxRes(){
  const [resolucion, setResolucion] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [proceder, setProceder] = useState('')
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await nuevaResolucion(resolucion, sessionStorage.getItem("ID_exp"));
    if (response.status == 201) {  // Post regresa 201 cuando hay exito 
       setMensaje("Resolucion Creada");
       console.log(mensaje);
       setProceder('ok');
       navigate("/M/Expedientes")
    } else {
     setMensaje("Error" + response.status);
    }
  }

  return (
    <div className="caja2">
      <h2>Redactar resolucion</h2>
      <form onSubmit={handleSubmit} >
         <input type="text" placeholder="Resolucion" value={resolucion} onChange={(event) => setResolucion(event.target.value)} />
         <Link to="/M/Expedientes">
            <button type="submit">
              Salir
            </button>
         </Link>
          <button type="submit">
              Generar
            </button>
      </form>
      {proceder && ( <Navigate to="/M/Expedientes" replace={true} /> )}
    </div>
  );
};