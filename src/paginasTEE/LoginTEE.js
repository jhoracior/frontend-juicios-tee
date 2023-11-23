//iniciar sesion con contra
import React, { useState} from 'react';
import ReactDOM from "react-dom";
import '../css/EstiloA.css'
import {useNavigate} from 'react-router-dom'
import { getMiembro } from '../api';
import { getRol } from '../api';
import { validarMiembro } from '../api';
import { Navigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

export function LoginTEE() {
  
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [proceder, setProceder] = useState(null);
  const [rol, setRol] = useState('');
  const [mensaje, setMensaje] = useState(null);
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
      event.preventDefault();

      const valido = await validarMiembro(username, password)
      if ( valido ) {
          sessionStorage.setItem('correo', username);
          sessionStorage.setItem('usuariovalidado', 'ok');
          //setProceder('ok');
          const response1 = await getMiembro(username);
          if (response1.status == 200) {
            sessionStorage.setItem('ID_miembro', response1.data[0].ID_miembroTEE);
            sessionStorage.setItem("nombreTEE", response1.data[0].nombre);
            sessionStorage.setItem("paternoTEE", response1.data[0].ap_paterno);
            sessionStorage.setItem("maternoTEE", response1.data[0].ap_materno);
            const response2 = await getRol(response1.data[0].ID_miembroTEE)
            if(response2.status == 200) {
                if (response2.data[0].rol == 'SG'){
                  navigate('/SG/');
                }
                else{
                  navigate('/M/');
                }
            }
            else{
                setMensaje("Error" + response2.status);
            }
        } else {
            setMensaje("Error" + response1.status);
        }
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

          <a className="button2">Acceso con FIREL</a>
          
          </form>
          {proceder && ( <Navigate to="/" replace={true} /> )}
        </div>
      </div>
    
    </>
  );
}

