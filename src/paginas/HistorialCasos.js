import React from 'react'
import { ListaCasos } from '../components/ListaCasos'
import { useState } from 'react';
import { getAllExpedientes } from '../api';

 

export function HistorialCasos() {
  const id_usuario = sessionStorage.getItem('ID_usuario')

  // let casos = 
  // //esto se le tiene que agregar Tipo de Expediente, fecha de inicio, asunto, estado
  //     [{folio: 'Folio 1', fechaInicio: '02-03-2023', asunto: 'Queja sobre evento', estado: 'Terminado'}, 
  //      {folio: 'Folio 2', fechaInicio: '03-03-2023', asunto: 'Solicitud a Tribunal', estado: 'En revision'},
  //      {folio: 'Folio 3', fechaInicio: '04-03-2023', asunto: 'Aclaraciones generales', estado: 'Pendiente'}];
  
  // THIS IS BACKEND STUFF-----------------------------------------------------
  const [expedientes_ws, setExpedientes_ws] = useState([]);
  const [isFuncCalled, setIsFuncCalled] = useState(false);


  const onClick = async (event) => {
    const response = await getAllExpedientes(id_usuario);

    if (response.status == 200) {
        if (response.data == "")
            setExpedientes_ws([]);
        else 
          setExpedientes_ws(response.data);
    } else {
      setExpedientes_ws([]);
    }
  }

  if (!isFuncCalled){
    onClick();
    setIsFuncCalled(true);
  }  

  return (
    <div>
        <ListaCasos casos={expedientes_ws}/>
    </div>
  )
}