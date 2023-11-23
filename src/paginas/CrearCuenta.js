import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import '../css/EstiloA.css'
import { nuevoUsuario } from '../api';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';



export function CrearC() {
    const [nombre, setNombre] = useState('');
    const [apellidoP, setApellidoP] = useState('');
    const [apellidoM, setApellidoM] = useState('');
    const [Correo, setCorreo] = useState('');
    const [contrasena, setContra] = useState('');
    const [ContrasenaF, setContraF] = useState('');
    const [mensaje, setMensaje] = useState(null);
    const [proceder, setProceder] = useState(null);
  
    const handleSubmit = async (event) => {
      event.preventDefault();

      const response = await nuevoUsuario(nombre, apellidoP, apellidoM, Correo, contrasena, ContrasenaF);

    if (response.status == 200) {  // Post regresa 201 cuando hay exito 
        setMensaje("Usuario Creado");
        console.log(mensaje);
        setProceder('ok');
    } else {
      setMensaje("Error" + response.status);
    }

    };
    return (
    <>
    <div className="topbar2">
        <img src="https://www.techihuahua.org.mx/wp-content/uploads/2023/03/logo-pagina.png" alt="logo" />
        <a style={{ paddingLeft: "2%"  }}><b>Crear cuenta</b></a>
    </div>
      <div className="main2">
      <form onSubmit={handleSubmit}>
          <div className="box0">
            <p><b>Nombre Completo:</b></p>
          </div>
            <input type="text" placeholder="Nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} />
            <input type="text" placeholder="Apellido Paterno" value={apellidoP} onChange={(event) => setApellidoP(event.target.value)} />
            <input type="text" placeholder="Apellido Materno" value={apellidoM} onChange={(event) => setApellidoM(event.target.value)} />
            <div className="box0">
            <p><b>Correo:</b></p>
          </div>
            <input type="text" placeholder="Correo" value={Correo} onChange={(event) => setCorreo(event.target.value)} />
            <div className="box0">
            <p><b>Contrasena:</b></p>
          </div>
            <input type="password" placeholder="Contrasena" value={contrasena} onChange={(event) => setContra(event.target.value)} />
            <div className="box0">
            <p><b>Contrasena Clave Privada:</b></p>
          </div>
            <input type="password" placeholder="Contrasena Clave Privada" value={ContrasenaF} onChange={(event) => setContraF(event.target.value)} />
            <div>
          <button type="submit" className="anterior-button">
            Registrate
          </button>
          
            
          <Link to="/Login">
            <button className="cancelar-button">
              Cancelar
            </button>
          </Link>
          
          </div>
       </form>
       {proceder && ( <Navigate to="/Login" replace={true} /> )}
    </div>
    </>
    )
};