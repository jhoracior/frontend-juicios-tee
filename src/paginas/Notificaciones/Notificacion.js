import React from 'react';
import '../Css/Notificacion.css';
import { getNotificacion } from '../../api';
import { ListaNotificacion } from './Lista_notificacion';
import { useState } from 'react'

import { useLocation, Link } from "react-router-dom";



export function Notificacion({props}) {

  const location = useLocation();
  const state = location.state;
  console.log(state);

  const [isFuncCalled, setIsFuncCalled] = useState(false);

    const [notificacion_ws, setNotificacion_ws] = useState([]);

    //Notificaciones = getNotificaciones('usuario1');
    const onClick = async (event) => {  
        
        const response = await getNotificacion(state.id_usuario.usuario, state.id_notificacion.numero_not);
        console.log(response.data);
    
        if (response.status == 200) {
            if (response.data == "")
                setNotificacion_ws([]);
            else 
                setNotificacion_ws(response.data);
        } else {
            setNotificacion_ws([]);
        }

    };

    if (!isFuncCalled) {
        onClick();
        setIsFuncCalled(true);
    }
 

  return (
    <div className="main_n">
        <ListaNotificacion lista_notificacion={notificacion_ws}/>
    </div> 

  );
}