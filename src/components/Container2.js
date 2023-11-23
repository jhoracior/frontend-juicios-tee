import React, { useState } from "react";

export function ContainerBox2(){
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };


  return (
    <div className="caja16">
      <h2>Adjuntar pruebas</h2>
      <div className="file-upload" style={{marginBottom:"25px",marginRight:"20px"}}>Certificado
        <input type="file" onChange={handleFileUpload} />
        {/* <label htmlFor="file-upload">{selectedFile ? selectedFile.name : "Certificado"}</label> */}
        <label htmlFor="file-upload"></label>
      </div>

      <div className="file-upload">Clave privada
        <input type="file" onChange={handleFileUpload} />
        <label htmlFor="file-upload"></label>
      </div>
      <div className="form">
            <input type="password" placeholder="Contraseña de la clave privada" name="psw" required style={{fontSize: "16px"}} />       
        </div>
      

    </div>
  );
};
