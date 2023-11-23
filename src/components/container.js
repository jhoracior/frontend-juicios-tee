import React, { useState } from "react";

export function ContainerBox(){
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="caja2">
      <h2>Adjuntar pruebas</h2>
      <div className="file-upload">
        <input type="file" onChange={handleFileUpload} />
        <label htmlFor="file-upload">{selectedFile ? selectedFile.name : "Choose a file"}</label>
      </div>
    </div>
  );
};