import React from 'react';
import {useNavigate} from 'react-router-dom'
import '../css/CasosActivos.css'

const CasosActivos = () => {

  return (
      <>
          <div className="main">
              <div className="inline">
                  <div className="box">
                      <p><b>CASOS ACTIVOS:</b></p>
                  </div>
              </div>


              <table className="box4">
                  <tr className="box5">
                      <th>Tipo de Expediente</th>
                      <th>Fecha de inicio</th>
                      <th>Asunto</th>
                      <th>Estado</th>
                      <th></th>
                      <th></th>
                      <th></th>
                  </tr>
                  <tr>
                      <th>JDC</th>
                      <th>02-03-2023</th>
                      <th>xxxxxxx</th>
                      <th>xxxxxxx</th>
                      <th><a href="CasosActivos-Historial.html">Ver</a></th>
                      <th><a href="../CasosActivos-Acuerdos.html">Expediente</a></th>
                      <th><a href="CasosActivos-Firmar.html">Firmar</a></th>
                  </tr>
                  <tr>
                      <th>JDC</th>
                      <th>02-03-2023</th>
                      <th>xxxxxxx</th>
                      <th>xxxxxxx</th>
                      <th><a href="CasosActivos-Historial.html">Ver</a></th>
                      <th><a href="../CasosActivos-Acuerdos.html">Expediente</a></th>
                      <th><a href="CasosActivos-Firmar.html">Firmar</a></th>
                  </tr>
                  <tr>
                      <th>RAP</th>
                      <th>02-03-2023</th>
                      <th>xxxxxxx</th>
                      <th>xxxxxxx</th>
                      <th><a href="CasosActivos-Historial.html">Ver</a></th>
                      <th><a href="../CasosActivos-Acuerdos.html">Expediente</a></th>
                      <th><a href="CasosActivos-Firmar.html">Firmar</a></th>
                  </tr>
              </table>

              <a>
                  <div className="box6">
                      <p>
                          <b>Impugnar sentencia</b>
                          <img src="https://banderasdelujo.com/img/cms/malletes/port5.png" />
                      </p>

                  </div>
              </a>
             

          </div>
      </>
  );
}

export default CasosActivos;
