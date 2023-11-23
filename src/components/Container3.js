
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

export function ContainerBox3(){
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };


  return (
    <div className="caja17">
      <h2>Iniciar sesion</h2>
      <div className="file-upload" style={{marginBottom:"25px",marginRight:"20px"}}>
        <input type="file" onChange={handleFileUpload} />
        <label htmlFor="file-upload">{selectedFile ? selectedFile.name : "Certificado"}</label>
      </div>

      <div className="file-upload">
        <input type="file" onChange={handleFileUpload} />
        <label htmlFor="file-upload">{selectedFile ? selectedFile.name : "Clave privada"}</label>
      </div>
      <div className="form">
            <input type="password" placeholder="Contraseña de la clave privada" name="psw" required style={{fontSize: "16px"}} />       
        </div>
        <div className="form">
          <a><button type="submit">Login</button></a>
        </div>
        <Link to="/Login">
        <a className="button2">Acceso con Contrasena</a>
        </Link>
    </div>
  );
};