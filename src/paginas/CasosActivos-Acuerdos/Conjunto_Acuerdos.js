import React from 'react'
import { Acuerdo } from './Acuerdo';
import '../Css/CasosActAcuerdos.css'


export  function Conjunto_Acuerdos({conjunto_acuerdos}) {

    const componentesAcuerdos = conjunto_acuerdos.map( (valoractual) => {
        return <Acuerdo documento={valoractual.ID_documento} n_magistrado={valoractual.nombre} 
        a_magistrado={valoractual.ap_paterno} url={valoractual.ubicacion} />;;
      } );
    
  return (
    <div className="oneline">
        {componentesAcuerdos}
    </div>
  )
}