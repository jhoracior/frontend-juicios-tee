//iniciar sesion con contra
import React, { useState} from 'react';
import ReactDOM from "react-dom";
import '../css/EstiloA.css'
import {useNavigate} from 'react-router-dom'
import { validarUsuario } from '../api';
import { Navigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

export function IScontra() {
  
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [proceder, setProceder] = useState(null);
  const [mensaje, setMensaje] = useState(null);

  const handleFormSubmit = async (event) => {
      event.preventDefault();

      const valido = await validarUsuario(username, password)
      if ( valido ) {
          sessionStorage.setItem('correo', username);
          sessionStorage.setItem('usuariovalidado', 'ok');
          setProceder('ok');
      } else {
          setMensaje("Usuario / contraseña incorrectos");
      }


      
  
}
  return (
    <>
      <div className="topbar2">
        <img src="https://www.techihuahua.org.mx/wp-content/uploads/2023/03/logo-pagina.png" alt="logo" />
        <a style={{ paddingLeft: "2%"  }}><b>Iniciar sesion</b></a>
      </div>

      <div className="main2">
        <div className="container2">
          <h1 style={{ textAlign: "center", padding: "20px",marginTop:"6%"}}><b>Ingresa tus datos</b></h1>
           <form onSubmit={handleFormSubmit}>
          <div className="form2">
            <input type="text" placeholder="Usuario" name="uname" required style={{ fontSize: "16px" }} onChange={e => setUserName(e.target.value)} />
          </div>

          <div className="form2">
            <input type="password" placeholder="Contrasena" name="psw" required style={{ fontSize: "16px" }} onChange={e => setPassword(e.target.value)} />
            
          </div>

          <div className="form2">
            <a><button type="submit">Login</button></a>
          </div>

          <div className="form2">
            <Link to="/CrearUsuario">
             <button type="submit">Registrate</button>
            </Link>
          </div>
          <Link to="/ISFirel">
          <a className="button2">Acceso con FIREL</a>
          </Link>
          
          </form>
          {proceder && ( <Navigate to="/" replace={true} /> )}
        </div>
        <p style={{ textAlign: "center", fontSize: "24px", padding: "10px", paddingLeft:"2%"}}>
          Si tienes un problema con el registro o inicio de sesion<br />
          <a href="#">contactanos</a>
        </p>
      </div>
    
    </>
  );
}

