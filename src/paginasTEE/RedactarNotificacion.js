import React from 'react';
import {Dashboard} from "../components/Dashboard";
import {useState} from "react";
import '../css/RedactarNotificacion.css'
import { getExpediente, nuevaNotificacion } from '../api';

export function RedactarNotificaciones(){
    const [descripcion, setDesc] = useState('');
    const [ID_exp, setExp] = useState('');
    const [receptor, setReceptor] = useState(0);
    const [emisor, setEmisor] = useState(0);
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = async (event) => {
      event.preventDefault();
      const response1 = await getExpediente(ID_exp);
      if (response1.status == 200) {  // Post regresa 201 cuando hay exito 
        
        const response2 = await nuevaNotificacion(descripcion, response1.data[0].usuario, response1.data[0].representante, ID_exp );
      } else {
        setMensaje("Error" + response1.status);
      }
    }

  return (
      <>
          <div className="main">
              <div className="notif">
                  <h1>Redactar notificación</h1>

                  <form onSubmit={handleSubmit}>
                      <br/>
                      <div>Notificación a redactar:</div>

                      <input className='rednotif1' type="text" onChange={(e) => setDesc(e.target.value)}/>
                      <br />
                      <br />
                      <div>ID Expediente:</div>
                      <input className='rednotif2' type="text" onChange={(e) => setExp(e.target.value)}/>
                      <br/>
                      <br/>
                      <button type="submit">Enviar notificación</button>
                  </form>
              </div>
          </div>
      </>
  );
};


