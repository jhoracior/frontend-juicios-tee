import React from 'react';
import '../Css/Notificaciones.css';
import { ListaNotificaciones } from './Lista_notificaciones';
import { useState } from 'react'
import { getNotisUsuario } from '../../api';


export function Notificaciones() {

    const id_usuario = sessionStorage.getItem('ID_usuario');
    
    const [isFuncCalled, setIsFuncCalled] = useState(false);

    const [notificaciones_ws, setNotificaciones_ws] = useState([]);

    //Notificaciones = getNotificaciones('usuario1');
    const onClick = async (event) => {  
        
        const response = await getNotisUsuario(id_usuario);
        console.log(response.data);
    
        if (response.status == 200) {
            if (response.data == "")
                setNotificaciones_ws([]);
            else 
                setNotificaciones_ws(response.data);
        } else {
            setNotificaciones_ws([]);
        }

    };

    if (!isFuncCalled) {
        onClick();
        setIsFuncCalled(true);
    }
 
  return (
    <div className="main">
        <h1 style={{ padding: '20px' }}>NOTIFICACIONES</h1>
        <ListaNotificaciones lista_notificaciones={notificaciones_ws}/>
    </div> 
  );
}