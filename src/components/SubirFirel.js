import React from 'react'
// import { Accion } from './Accion'
import '../css/subirFirel.css'
// import Dashboard from "../../components/Dashboard";
import { Datos } from './Datos';
// import Dashboard from "./Dashboard";
import { useLocation } from "react-router-dom";

//dentro de aqui, hay varios componentes "accion." makes sense. all of them are inside of here.
export function SubirFirel({ datos }) {
  // const componentesCasos = datos.map((a_actual) => {
  //   return <Datos expediente={a_actual.expediente} asunto={a_actual.asunto} acuerdo={a_actual.acuerdo} />;

  // });

  const location = useLocation();
  const state = location.state;
  console.log(state);

  return (

    <div className="main_SF">
      <div className="contenedor-firmar">
        <h1>FIRMAR</h1>
        <div>
          <p className="titulo">Folio</p>
          <p className="descripcion">{state.folio.folio}</p>
        </div>
        {/* <div>
          <p className="titulo">Asunto</p>
          <p className="descripcion">{componentesCasos[1]}</p>
        </div>
        <div>
          <p className="titulo">Acuerdo</p>
          <p className="descripcion">{componentesCasos[2]}</p>
        </div> */}
        <div className="contenedor-doc">
          <p>Aqui va FIREL</p>
        </div>
        <button className="subir-firel">Subir FIREL</button>
      </div>
    </div>
    
  );
}
