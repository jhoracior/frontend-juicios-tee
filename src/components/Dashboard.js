import React, {useState, useEffect} from "react";
import {Navigate, useNavigate} from 'react-router-dom'
import '../css/Dashboard.css'
import {getUsuario, usuarioAutenticado} from "../api";
import {Link, Outlet} from "react-router-dom"
import { FechaHora } from "./fecha_hora";

export function Dashboard(props) {
    const [nombre, setNombre] = useState('');
    const [paterno, setPaterno] = useState('');
    const [materno, setMaterno] = useState('');

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        const response = await getUsuario(sessionStorage.getItem('correo'));
        console.log(response.status)

        if (response.status == 200) {
            console.log(response.data)
            setNombre(response.data[0].nombre);
            setPaterno(response.data[0].ap_paterno);
            setMaterno(response.data[0].ap_materno);
            sessionStorage.setItem("ID_usuario",response.data[0].ID_usuario)
            console.log(response.data[0].ID_usuario)
        } else {
            setNombre("Error" + response.status);
        }
        //return <Nombre name={nombre} paterno={paterno} materno={materno}/>
    };
     

    // const navigate = useNavigate();
    if ( !usuarioAutenticado() ) {
        return <Navigate replace to="/Login"/>;
    }

    return(
        <>
        <body onLoad={handleOnSubmit}>
            <nav>
                <div onLoad={handleOnSubmit} className="topbar">
                    <Link to="/Login">{nombre} {paterno} {materno}</Link>
                </div>

                <div className="sidebar">
                    <img src="https://www.techihuahua.org.mx/wp-content/uploads/2023/03/logo-pagina.png" width="150"/>
                        <p>Chihuahua, Chihuahua, México</p>
                    <ul>
                        
                            <li>
                                <Link to='/Inicio'>Inicio</Link>
                            </li>
                            <li>
                                <Link to='/casos_activos'>Casos Activos</Link>
                            </li>
                            <li>
                                <Link to='/Notificaciones'>Notificaciones</Link>
                            </li>
                            <li>
                                <Link to='/CargarDoc'>Impugnar</Link>
                            </li>         
                        
                    </ul>
                <FechaHora/>
                </div>
                </nav>
                </body>
            <Outlet />
        </>
    )
}
