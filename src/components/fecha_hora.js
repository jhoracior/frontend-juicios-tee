import React, { useState, useEffect } from 'react';
import '../css/fecha_hora.css'

export function FechaHora() {
  const [fechaHora, setFechaHora] = useState('');

  useEffect(() => {
    function actualizarFechaHora() {
      const ahora = new Date();
      const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const dia = ahora.toLocaleDateString("es-ES", opcionesFecha).replace(/^\w/, (c) => c.toUpperCase());
      const hora = ahora.toLocaleString("en-US", { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
      setFechaHora(dia + " " + hora);
    }

    actualizarFechaHora();
    const intervalId = setInterval(actualizarFechaHora, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="fecha-hora" id="fecha-hora">{fechaHora}</div>
  );
}