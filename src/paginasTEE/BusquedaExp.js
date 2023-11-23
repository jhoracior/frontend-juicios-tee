import React, { useState } from "react";
import {Link} from "react-router-dom";
import '../css/VerificarReclamaciones.css';

export function BusquedaExp(){
  return (
    <>
        <div className="main">
            <div className="top2">
                BUSQUEDA DE EXPEDIENTES
            </div>
            <div className="opciones1">
                <p><label for="sala">Expedientes:</label></p>
                <select className="caja" id="sala" name="sala">
                    <option value="sala1">Sala 1</option>
                    <option value="sala2">Sala 2</option>
                    <option value="sala3">Sala 3</option>
                </select>
            </div>
            <div>
                <Link to="/"><button>SIGUIENTE</button></Link>
            </div>
        </div>
    </>
    
  );
};