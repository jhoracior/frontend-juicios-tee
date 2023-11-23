import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import '../css/EstiloA.css'
import {ContainerBox3} from '../components/Container3';



export function ISFirel() {
  return (
    <>
      <div className="topbar2">
        <img src="https://www.techihuahua.org.mx/wp-content/uploads/2023/03/logo-pagina.png" alt="logo" />
        <a style={{ padding: "2%"  }}><b>Iniciar sesion</b></a>
      </div>

      <div className="main">
        <div>
            <ContainerBox3/>
        </div>
        
        <p style={{ textAlign: "center", fontSize: "24px", padding: "10px", paddingRight:"24%"}}>
          Si tienes un problema con el registro o inicio de sesion<br />
          <a href="#">contactanos</a>
        </p>
      </div>
    
    </>
  );
}

