import React, {useState, useEffect} from "react";
import {Navigate, useNavigate} from 'react-router-dom'
import '../css/Dashboard.css'
import {getUsuario, usuarioAutenticado} from "../api";
import {Link, Outlet} from "react-router-dom"
import { FechaHora } from "../components/fecha_hora";

export function DashboardMag(props) {

    if ( !usuarioAutenticado() ) {
        return <Navigate replace to="/LoginTEE"/>;
    }

    return(
        <>
        <body >
            <nav>
                <div  className="topbar">
                    <Link to="/LoginTEE">{sessionStorage.getItem("nombreTEE")} {sessionStorage.getItem("paternoTEE")} {sessionStorage.getItem("maternoTEE")}</Link>
                </div>

                <div className="sidebar">
                    <img src="https://www.techihuahua.org.mx/wp-content/uploads/2023/03/logo-pagina.png" width="150"/>
                        <p>Chihuahua, Chihuahua, México</p>
                    <ul>
                            <li>
                                <Link to='/M/inicio'>Inicio</Link>
                            </li>
                            <li>
                                <Link to='/M/Expedientes'>Expedientes</Link>
                            </li>
                            <li>
                                <Link to='/M/RedactarNotificacion'>Redactar Notificaciones</Link>
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
