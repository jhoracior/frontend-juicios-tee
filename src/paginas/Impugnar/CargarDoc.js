import React from 'react';
import '../Css/CargarDoc.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import FormData from 'form-data';

export function CargarDoc() {

    const [selectedFile, setSelectedFile] = useState(null);
	const [isFilePicked, setIsFilePicked] = useState(false);


    const handleFile = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
        console.log(selectedFile);
    };

  return (
        <div className="main">
            <div className="inline">
                <div className="box0">
                    <text ><b></b></text>
                </div>

                <div>
                    <button className="btn-primary-active">
                    <Link to="/CargarDoc" className="link-style">
                        1.Cargar Documento
                    </Link>
                    </button>
                    <button className="btn-primary">
                    <Link to="/AdjuntarP" className="link-style" state={selectedFile}>
                        2.Adjuntar pruebas
                    </Link>
                    </button>
                    <button className="btn-primary">
                    <Link to="/FirmarP" className="link-style" state={selectedFile}>
                        3.Firmar Recurso
                    </Link>
                    </button> 
                </div>
            </div>
            <div>
                <div className="opciones1">
                    <p>
                        Recuerda que el documento debe contener:<br/>
                        •	Hechos en que se basa la inconformidad o impugnación<br/>
                        •	Agravios que causa el acto o resolución impugnado<br/>
                        •	Preceptos presuntamente violados (opcional)
                    </p>
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
            <Link to="/AdjuntarP"  state={selectedFile}>
                <button className="next-button">
                Siguiente
                </button>
            </Link>
            </a>
            
            <a>
            <Link to="/casos_activos">
                <button className="cancelar-button">
                Cancelar
            </button>
            </Link>
            </a>

        </div>
  );
}

