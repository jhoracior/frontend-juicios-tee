import React from 'react'
import '../Css/CasosActAcuerdos.css'
import { useState } from "react";

export function Acuerdo({documento, n_magistrado, a_magistrado, url}) {

  const [showViewer, setShowViewer] = useState(false);

  const handleOpen = () => setShowViewer(true);
  const handleClose = () => setShowViewer(false);
  const handleDownload = () => {
    const url_d = url;
    const id = url_d.split('/')[5].split('?')[0];
    const fileName = url_d.split('/')[6];
    const downloadURL = `https://drive.google.com/u/0/uc?id=${id}&export=download`;
    const link = document.createElement('a');
    link.href = downloadURL;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div onClick={handleOpen} style={{ cursor: "pointer" }}>
        <div className="contenedor-acuerdo">
          <p className="nombre-acuerdo">Acuerdo {documento}</p>
          <img className="imagen-doc" src="https://cdn-icons-png.flaticon.com/512/6747/6747196.png" alt="document" />
          <p className="nombre-mag">Magistrado: {n_magistrado} {a_magistrado}</p>
        </div>
      </div>
      {showViewer && (
        <div className="modal" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <iframe src={url} width="640" height="480" allow="autoplay"></iframe>
            <button className="buttonDesc" onClick={handleDownload}> Descargar documento</button>
          </div>
        </div>
      )}
    </div>


  )
}