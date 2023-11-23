import React from 'react'
import { SubirFirel } from '../components/SubirFirel';
import { useState } from 'react';
import { getFolio } from '../api';
import { useLocation } from 'react-router-dom';

export function DatosExpediente({props}) {
  // let datos = [{expediente: 'GST - #103'}, {asunto: 'Gestion tribunal'}, {acuerdo: 'Revision'}];
  const location = useLocation();
  const state = location.state;

  const [Folio, setFolio] = useState('');
  const [isFuncCalled, setIsFuncCalled] = useState(false);

  const onClick = async (event) => {
    const response = await getFolio(state.ID_expediente.ID_expediente); /////////---------------

    if (response.status == 200) {
      console.log(response.data[0])
       setFolio(response.data[0].folio)
    } else {
      
    }
  }

  if (!isFuncCalled){
    onClick();
    setIsFuncCalled(true);
  }  

  return (
    <div>
        <SubirFirel datos={Folio}/>
    </div>
  )
}