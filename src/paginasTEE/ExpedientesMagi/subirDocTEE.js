import React from 'react';
import '../../paginas/Css/CargarDoc.css';
import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import FormData from 'form-data';
import { nuevoDocumentoTEE } from '../../api';


export function SubirDocTEE() {

    const [selectedFile, setSelectedFile] = useState(null);
	const [isFilePicked, setIsFilePicked] = useState(false);
    const [proceder, setProceder] = useState(false);

    const id_usuario = sessionStorage.getItem('ID_miembro');
    const id_expediente = sessionStorage.getItem('ID_exp');

    console.log(id_expediente);

    const handleFile = (event) => {
        
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
        console.log(selectedFile);
        // console.log(event.target.files[0]);
    };

    const handleBack = () => {
        window.history.back();
      };

    const handleSubmission = async (event) => {
        event.preventDefault();

        console.log(selectedFile);
    
        let formdata = new FormData();
    
        formdata.append(
            "doc",
            selectedFile
        );

        console.log(formdata)

        const responseDoc = await nuevoDocumentoTEE(id_expediente, id_usuario, formdata);
        setProceder(true);
        console.log(proceder);
      }

  return (
        <div className="main">
            <div className="inline">
                <div className="box0">
                    <text ><b></b></text>
                </div>
            </div>
            <div className="cargar">
                <h1>Adjuntar recurso</h1>
                <div className="input">
                    <img src="https://cdn-icons-png.flaticon.com/512/6747/6747196.png" style={{ width: '30vh' }}/><br/><br/>
                    <input type="file" name="file" onChange={handleFile}/>
                </div>
            </div>

            <a>
                <button className="next-button" onClick={handleSubmission} type='submit'>
                Siguiente
                </button>
            </a>
            
            <a>
                <button className="cancelar-button" onClick={handleBack}>
                Cancelar
            </button>
            </a>
            {proceder && ( <Navigate to="/M/inicio" replace={true} /> )}

        </div>
  );
}

