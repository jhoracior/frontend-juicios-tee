import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import '../css/VerificarReclamaciones.css'
import { actualizaRepresentante, getMiembrosPon, trabajaEn } from "../api";

export function ChoosePonencia(){
    const [ponencia, setPonencia] = useState('');
    const [miembros, setMiembros] = useState([])
    const navigate = useNavigate();

    const handleClick = async (event) => {
        event.preventDefault();
  
        const response = await getMiembrosPon(ponencia);
  
        if (response.status == 200) {
            if (response.data == "")
                setMiembros([]);
            else 
              setMiembros(response.data);
              const response2 = actualizaRepresentante(response.data[0].ID_mTEE, sessionStorage.getItem("ID_exp"));
              const response3 = trabajaEn(response.data[0].ID_mTEE, sessionStorage.getItem("ID_exp"));
              navigate("/SG/VerificarReclamaciones")
        } else {
          setMiembros([]);
        }
    }

  return (
    <>
        <div className="main">
            <div className="top2">
                ESCOGE LA PONENCIA QUE TRABAJARÁ EN EL EXPEDIENTE:
            </div>
            <div className="opciones1">
                <p><label for="sala">Ponencias:</label></p>
                <select  className="caja" id="sala" name="sala" onChange={(event) => setPonencia(event.target.value)}>
                    <option value="Ponencia_1">Ponencia 1</option>
                    <option value="Ponencia_2">Ponencia 2</option>
                </select>
            </div>
            <div>
                <button onClick={handleClick}>SIGUIENTE</button>
            </div>
        </div>
    </>
    
  );
}