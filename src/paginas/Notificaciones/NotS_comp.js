import React from 'react'
import '../Css/Notificaciones.css'
import { Link } from "react-router-dom";


export function NotS_comp({usuario, numero_not, descripcion}) {

  const data = {
    id_notificacion: {numero_not},
    id_usuario: {usuario},
  };

  return (
    <div className="notifs">
      <nav>
        <h1 className='btn'><Link to="/Notificacion" state={data}>Notificacion {numero_not}</Link></h1>
      </nav>
      <p>{descripcion}</p>
    </div>

  )
}
