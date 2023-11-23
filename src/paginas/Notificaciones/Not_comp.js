import React from 'react'
import '../Css/Notificacion.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { agregarLeidoNotificacion } from '../../api';

export function Not_comp({numero_not, descripcion, expediente, folio}) {

  const data = {
    expediente: {expediente},
    folio: {folio}
  };

  const [isFuncCalled, setIsFuncCalled] = useState(false);

  const onClick = async (event) => {  
      
    agregarLeidoNotificacion(numero_not);

    };

    if (!isFuncCalled) {
        onClick();
        setIsFuncCalled(true);
    }


  return (
    <div className="notif">
        <h1>Notificacion {numero_not}</h1>
        <p>{descripcion}</p>
        <Link to="/Acuerdos" state={data}><a style={{textAlign: 'center'}}><b>Ir al caso</b></a></Link>
    </div>

  )
}
