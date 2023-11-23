import axios from "axios";
import FormData from "form-data";


const getUsuario = async (username) => {

    const response = await axios.get('http://localhost:2023/api/usuarios/' + username, {
    });

    console.log(response)
    return response;
};

const nuevoUsuario = async (nombre_user, ap_paterno_user, ap_materno_user, correo_user, contrasena_user, firel_cer) => {
    const jsonData = JSON.stringify({
        nombre: nombre_user,
        paterno: ap_paterno_user,
        materno: ap_materno_user,
        correo: correo_user,
        contrasena: contrasena_user,
        firel_cer: firel_cer
    });
    const response = await axios.post('http://localhost:2023/crear_usuario/',jsonData , {
        headers: {
          'Content-Type': 'application/json'
        }}
    );
    
    console.log(response)
    return response;
};

const nuevoExpediente = async (id_usuario) => {
    const response = await axios.get('http://localhost:2023/nuevo_expediente/' + id_usuario , {

    });
    
    console.log(response.data[0].id_expediente)
    return response.data[0].id_expediente;
};

const nuevaResolucion = async (resolucion, exp) => {
    const jsonData = JSON.stringify({
        resolucion: resolucion,
        ID_expediente: exp
    });
    const response = await axios.post('http://localhost:2023/nuevo_resolucion/',jsonData , {
        headers: {
          'Content-Type': 'application/json'
        }}
    );
    
    console.log(response)
    return response;
};


const nuevoDocumento = async (id_expediente, id_usuario, formData) => {
    
    formData.append('ID_expediente', id_expediente);
    formData.append('ID_usuario', id_usuario);

    console.log(formData);

    const response = await axios.post('http://localhost:2023/documento/subir', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }}
    );
    return response;
};

const nuevoDocumentoTEE = async (id_expediente, id_usuario, formData) => {
    
    formData.append('ID_expediente', id_expediente);
    formData.append('ID_usuario', id_usuario);

    console.log(formData);

    const response = await axios.post('http://localhost:2023/documento/subirTEE', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }}
    );
    return response;
};

const getExpActivos = async (id_usuario) => {

    const response = await axios.get('http://localhost:2023/tener_expediente_activos/' + id_usuario, {
    });

    console.log(response)
    return response;
};

const getExpResolucion = async (id_usuario) => {

    const response = await axios.get('http://localhost:2023/tener_expediente_resolucion/' + id_usuario, {
    });

    console.log(response)
    return response;
};

const getDocumentos = async (id_usuario, id_expediente) => {

    const response = await axios.get('http://localhost:2023/tener_documentos/' + id_usuario + '/' + id_expediente, {
    });

    console.log(response)
    return response;
};

const getNotisUsuario = async (id_usuario) => {

    const response = await axios.get('http://localhost:2023/notificacion/mostrar/usuario/' + id_usuario, {
    });

    console.log(response)
    return response;
};

const getNotisExp = async (id_expediente) => {

    const response = await axios.get('http://localhost:2023/notificacion/mostrar/expediente/' + id_expediente, {
    });

    return response;
};

const agregarLeidoNotificacion = async (id_notificacion) => {
    const response = await axios.get('http://localhost:2023/notificacion/leer/' + id_notificacion, {});
    console.log(response);
    return response;
}

const getNotificacion = async (id_usuario, id_notificacion) => {

    const response = await axios.get('http://localhost:2023/api/notificacion/' + id_usuario + '/' + id_notificacion, {
    });
    
    console.log(response)
    return response;
};

const getExpediente = async (id_expediente) => {

    const response = await axios.get('http://localhost:2023/tener_expediente_2/' + id_expediente, {
    });
    
    console.log(response)
    return response;
};




const validarUsuario = async (username, password) => {

    const response = await getUsuario(username);
    console.log(response)

    if (response.status == 200) {
        if ( response.data[0].contrasena == password ) {
            console.log('usuario válido');
            return true;
        } else {
            console.log('usuario NO válido ');
            return false;
        }
    } else {
        console.log('Error en WS');
        return false;
    }
    
};

const getFolio = async (id_expediente) => {

    const response = await axios.get('http://localhost:2023/tener_expediente/' + id_expediente);

    console.log(response)
    return response;
};


const getMiembro = async (username) => {

    const response = await axios.get('http://localhost:2023/api/miembros/' + username, {
    });

    console.log(response)
    return response;
};

const validarMiembro = async (username, password) => {

    const response = await getMiembro(username);
    console.log(response)

    if (response.status == 200) {
        if ( response.data[0].contrasena == password ) {
            console.log('miembro válido');
            return true;
        } else {
            console.log('miembro NO válido ');
            return false;
        }
    } else {
        console.log('Error en WS');
        return false;
    }
    
};

const getRol = async (ID_miembro) => {

    const response = await axios.get('http://localhost:2023/api/miembros/rol/' + ID_miembro, {
    });

    console.log(response)
    return response;
};

const nuevaNotificacion = async (descripcion, receptor, emisor, expediente) => {

    const jsonData = JSON.stringify({
        descripcion: descripcion,
        receptor: receptor,
        emisor: emisor,
        expediente: expediente
    });

    const response = await axios.post('http://localhost:2023/nueva_notificacion/',jsonData , {
        headers: {
          'Content-Type': 'application/json'
        }}
    );
    
    console.log(response)
    return response;
};

const getAllExpedientes = async (id_usuario) => {

    const response = await axios.get('http://localhost:2023/expedientes/ver/' + id_usuario, {
    });

    console.log(response)
    return response;
};

const getAllExpedientesSinFolio = async () => {

    const response = await axios.get('http://localhost:2023/expedientes_sinfolio', {
    });

    console.log(response)
    return response;
};

const getIDexpTrabaja = async (miembro) => {

    const response = await axios.get('http://localhost:2023/expedientes/trabaja/' + miembro, {
    });

    console.log(response)
    return response;
};

const getExpedienteMiembro = async (miembro) => {

    const response = await axios.get('http://localhost:2023/tener_expediente_miembro/' + miembro, {
    });

    console.log(response)
    return response;
};


const getCasosAct = async (id_usuario, id_expediente) => {

    const response = await axios.get('http://localhost:2023/api/casos_act/acuerdos/' + id_usuario + '/' + id_expediente, {
    });
    
    console.log(response)
    return response;
};

const getCasosActMag = async (id_miembro, id_expediente) => {

    const response = await axios.get('http://localhost:2023/api/casos_act/acuerdosmag/' + id_miembro + '/' + id_expediente, {
    });
    
    console.log(response)
    return response;
};

const getCasosActRec = async (id_usuario, id_expediente) => {

    const response = await axios.get('http://localhost:2023/api/casos_act/reclamaciones/' + id_usuario + '/' + id_expediente, {
    });
    
    console.log(response)
    return response;
};

const nuevoFolio = async (folio, id_expediente) => {

    const response = await axios.get('http://localhost:2023/nuevo_folio/' + id_expediente + '/' + folio, {
    });
    
    console.log(response)
    return response;
};

const getMiembrosPon = async (ponencia) => {

    const response = await axios.get('http://localhost:2023/miembros_ponencia/' + ponencia, {
    });
    
    console.log(response)
    return response;
};

const trabajaEn = async (miembro, exp) => {

    const response = await axios.get('http://localhost:2023/trabaja_en/' + miembro + '/' + exp, {
    });
    
    console.log(response)
    return response;
};

const actualizaRepresentante = async (miembro, exp) => {

    const response = await axios.get('http://localhost:2023/actualizaRepresentante/' + miembro + '/' + exp, {
    });
    
    console.log(response)
    return response;
};






const usuarioAutenticado = () => {

    return (sessionStorage.getItem('usuariovalidado') === 'ok' );
    
}

export {validarUsuario, getUsuario, usuarioAutenticado, nuevoUsuario, getNotisUsuario, getNotificacion, getCasosAct, getAllExpedientes, getMiembro, validarMiembro, getRol,nuevoFolio,getMiembrosPon,actualizaRepresentante,trabajaEn,getIDexpTrabaja,getExpedienteMiembro,getCasosActMag,getCasosActRec,getAllExpedientesSinFolio,getFolio,nuevoExpediente,nuevoDocumento, nuevoDocumentoTEE, nuevaResolucion, nuevaNotificacion, getExpediente, getNotisExp, agregarLeidoNotificacion};
