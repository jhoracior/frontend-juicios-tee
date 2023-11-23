import React from 'react'
import { AcuerdoReclamacion } from './AcuerdoReclamacion';
import '../../paginas/Css/CasosActAcuerdos.css'


export  function Conjunto_AcuerdosReclamacion({conjunto_acuerdos}) {

    const componentesAcuerdos = conjunto_acuerdos.map( (valoractual) => {
        return <AcuerdoReclamacion documento={valoractual.ID_documento}  
         url={valoractual.ubicacion} />;;
      } );
    
  return (
    <div className="oneline">
        {componentesAcuerdos}

    </div>
  )
}