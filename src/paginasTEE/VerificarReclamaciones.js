import React, { useState } from "react";
import {Link} from "react-router-dom";
import {getAllExpedientesSinFolio} from '../api.js';
import { ListaReclamaciones } from "../components/ListaReclamaciones.js";
import '../css/VerificarReclamaciones.css'

export function VerificarReclamaciones(){
  const [reclamaciones, setReclamaciones] = useState([]);
  const [isFuncCalled, setIsFuncCalled] = useState(false);
  // acciones = getAcciones('folio1');
  // const onClick = async (event) => {
  //   event.preventDefault();

  const onClick = async (event) => {

    //   const response = await getAcciones(id_usuario); //ARRIBA SE IMPORTO ESTA FUNCION.
    const response = await getAllExpedientesSinFolio();

    if (response.status == 200) {
        if (response.data == "")
            setReclamaciones([]);
        else 
          setReclamaciones(response.data);
    } else {
      setReclamaciones([]);
    }

    
  }

  if (!isFuncCalled){
    onClick();
    setIsFuncCalled(true);
  }  
  return (
    <>
        <div>
            <ListaReclamaciones reclamaciones={reclamaciones}/> 
        </div>
        
    </>
    
  );
};