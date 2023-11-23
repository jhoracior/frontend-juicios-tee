import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { HistorialCasos } from './paginas/HistorialCasos';
import { HistorialAcciones } from './paginas/HistorialAcciones';
import { DatosExpediente } from './paginas/DatosExpediente';
import {AdjuntarP} from './paginas/AdjuntarPruebas';
import {FirmarDoc} from './paginas/FirmarRecurso';
import {IScontra} from './paginas/Slide12';
import {ISFirel} from './paginas/Slide13';
import {CrearC} from './paginas/CrearCuenta';
import {Dashboard} from './components/Dashboard';
import { Notificaciones } from './paginas/Notificaciones/Notificaciones';
import { Notificacion } from './paginas/Notificaciones/Notificacion';
import { CasosActAcuerdos } from './paginas/CasosActivos-Acuerdos/CasosActivos_Acuerdos';
import { VerificarReclamaciones } from './paginasTEE/VerificarReclamaciones';
import { BusquedaExp } from './paginasTEE/BusquedaExp';
import { ChoosePonencia } from './paginasTEE/ChoosePonencia';
import { GenerarFolio } from './paginasTEE/GenerarFolio/GenerarFolio';
import { CargarDoc } from './paginas/Impugnar/CargarDoc';
import { LoginTEE } from './paginasTEE/LoginTEE';
import { DashboardSG } from './paginasTEE/DashboardSG';
import { DashboardMag } from './paginasTEE/DashboardMag';
import {RedactarNotificaciones} from './paginasTEE/RedactarNotificacion';
import { ExpedientesMag } from './paginasTEE/ExpedientesMagi/ExpedientesMag';
import { ContainerBoxFolio } from './components/containerFolio';
import { ExpedientesMag_Acuerdos } from './paginasTEE/ExpedientesMagi/ExpedientesMag_Acuerdos';
import { Bienvenida } from './paginas/Bienvenida';
import { SubirDoc } from './paginas/CasosActivos-Acuerdos/subirDoc';
import { SubirDocTEE } from './paginasTEE/ExpedientesMagi/subirDocTEE';


export function App(){
    localStorage.setItem('test', 'test');

    return (
  
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard/>}>
                    <Route index element={<Bienvenida/>}/>
                    <Route path="inicio" element={<Bienvenida/>}/>
                    <Route path="casos_activos" element={<HistorialCasos/>}/>
                    <Route path="Notificaciones" element={<Notificaciones/>}/>
                    <Route path="Notificacion" element={<Notificacion/>}/>
                    <Route path="Acuerdos" element={<CasosActAcuerdos/>}/>
                    <Route path = "CargarDoc" element ={<CargarDoc/>}/>
                    <Route path="historial_acciones" element={<HistorialAcciones/>}/>
                    <Route path = "firmar" element ={<DatosExpediente/>}/>
                    <Route path = "AdjuntarP" element ={<AdjuntarP/>}/>
                    <Route path = "FirmarP" element ={<FirmarDoc/>}/>
                    <Route path = "GenerarFolio/Ponencias" element ={<ChoosePonencia/>}/>
                    <Route path = "BusquedaExpedientes" element ={<BusquedaExp/>}/>
                    <Route path = "GenerarFolio" element ={<GenerarFolio/>}/>
                    <Route path = "Expedientes" element ={<ExpedientesMag/>}/>
                    <Route path = "ActualizaFolio" element ={<ContainerBoxFolio/>}/>
                    <Route path = "nuevoAcuerdo" element ={<SubirDoc/>}/>
                </Route>  
                <Route path="/SG/" element={<DashboardSG/>}>
                    <Route index element={<Bienvenida/>}/>
                    <Route path="/SG/inicio" element={<Bienvenida/>}/>
                    <Route path = "/SG/VerificarReclamaciones" element ={<VerificarReclamaciones/>}/>
                    <Route path = "/SG/GenerarFolio" element ={<GenerarFolio/>}/>
                    <Route path = "/SG/GenerarFolio/Ponencias" element ={<ChoosePonencia/>}/>
                </Route>
                <Route path="/M/" element={<DashboardMag/>}>
                    <Route index element={<Bienvenida/>}/>
                    <Route path = "/M/inicio" element={<Bienvenida/>}/>
                    <Route path = "/M/Expedientes" element ={<ExpedientesMag/>}/>
                    <Route path = "/M/RedactarNotificacion" element ={<RedactarNotificaciones/>}/>
                    <Route path = "/M/Acuerdos" element ={<ExpedientesMag_Acuerdos/>}/>
                    <Route path = "/M/nuevoAcuerdo" element ={<SubirDocTEE/>}/>
                </Route>
                <Route path = "ISFirel" element ={<ISFirel/>}/>
                <Route path = "CrearUsuario" element ={<CrearC/>}/> 
                <Route path="Login" element={<IScontra/>}/>
                <Route path="LoginTEE" element={<LoginTEE/>}/>
                   
            </Routes>
        </BrowserRouter>
    
    );
}

