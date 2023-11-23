import React from 'react'
import { Not_comp } from './Not_comp';

export  function ListaNotificacion({lista_notificacion}) {

    const componenteNotificacion = lista_notificacion.map( (valoractual) => {
        return <Not_comp numero_not={valoractual.ID_notificacion} descripcion={valoractual.descripcion} 
        expediente={valoractual.expediente} folio={valoractual.folio}/>;;
      } );
    
  return (
    <div>
        {componenteNotificacion}
    </div>

  )
}