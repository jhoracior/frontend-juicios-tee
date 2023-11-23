import React from 'react'
import { ListaAcciones } from '../components/ListaAcciones'
import { useState } from 'react';
import { getNotisExp } from '../api';
import { useLocation } from 'react-router-dom';
import { getExpediente } from '../api';
import '../css/historialFormato.css'


export function HistorialAcciones({props}) {

  const location = useLocation();
  const state = location.state;

  console.log(state.expediente)

  const expediente = sessionStorage.getItem('ID_usuario')
  console.log('HERE: HistorialAcciones')
  // let acciones = 
  //     [{fecha: '1-Abril 1, 2023', edicion: 'Entregado', autor: 'Cliente1'}, 
  //      {fecha: '2-Abril 2, 2023', edicion: 'Notifico de falta de documentos', autor: 'TEE'},
  //      {fecha: '3-Abril 5, 2023', edicion: 'Actualizacion', autor: 'Cliente1'},
  //      {fecha: '4-Abril 5, 2023', edicion: 'Confirmacion', autor: 'TEE'}];
  
       const [acciones_ws, setAcciones_ws] = useState([]);
       const [isFuncCalled, setIsFuncCalled] = useState(false);
       const [folio, setFolio] = useState("");
     
       const onClick = async (event) => {
         const response = await getNotisExp(state.expediente.expediente);
         
         if (response.status == 200) {
             if (response.data == "")
                 setAcciones_ws([]);
             else 
               setAcciones_ws(response.data);
               const response2 = await getExpediente(state.expediente.expediente);
               if (response2.status == 200) {
                if (response2.data == "")
                    setFolio("");
                else 
                  setFolio(response2.data[0].folio);
              } else {
                setFolio("");
              }
         } else {
           setAcciones_ws([]);
         }

       };

       if (!isFuncCalled){
        onClick();
        setIsFuncCalled(true);
      };

      const handleBack = () => {
        window.history.back();
      };

  return (
    <div>
        <div className="main_HA">
        <div>
            <h1 className="header-HA">Historial de Acciones:</h1>
            <a>
                <button onClick={handleBack}className="return-button-HA"> 
                    Regresar
                </button>
            </a>
        </div> 
        
        <div className="inline_HA">
            <div className="box_HA">
                <p><b>Expediente</b></p>
            </div>
                <div className="box2_HA">
                <p><b>{folio}</b></p>
            </div>
        </div>
        <ListaAcciones acciones={acciones_ws}/>
    </div>
    </div>
  )
}

