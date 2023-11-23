import React from 'react'
import { NotS_comp } from './NotS_comp';

export  function ListaNotificaciones({lista_notificaciones}) {

    const componentesNotificaciones = lista_notificaciones.map( (valoractual) => {
        return <NotS_comp usuario={valoractual.receptor} numero_not={valoractual.ID_notificacion} descripcion={valoractual.descripcion} />;;
      } );
    
  return (
    <div>
        {componentesNotificaciones}
    </div>

  )
}