import {useState} from "react";
import {useNavigate} from 'react-router-dom'
import '../css/Inicio.css'

const Inicio = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate();

  const handleLogin = async () => {
      let result = await fetch('http://localhost:2023/tener_usuario',{
          method:'post',
          body:JSON.stringify({email,password}),
          headers: {'Content-Type':'application/json'}
      })
      result = await result.json()
      console.warn(result)
      if(result.ID_Usuario){
          sessionStorage.setItem('usuariovalidado', 'ok');
          localStorage.setItem('user',JSON.stringify(result));
          navigate('/CasosActivos')
      }
      else{
          alert('Ingresa correctamente')
      }
  }

  return (
<>
    <div className="topbarr">
        <img src="https://www.techihuahua.org.mx/wp-content/uploads/2023/03/logo-pagina.png"/>
        <h3>Iniciar sesion</h3>
    </div>
    <div className='container'>
        <div className="login">

            <h1><b>Ingresa tus datos</b></h1>
            <input type="text" className='inputBox' placeholder='Correo'
                   onChange={(e) => setEmail(e.target.value)} value={email}/>
            <br/><br/>
            <input type="text" className='inputBox' placeholder='Contraseña'
                   onChange={(e) => setPassword(e.target.value)} value={password}/>
            <br/><br/>
            <button onClick={handleLogin} className="appButton" type="button">Iniciar sesion</button>
        </div>
    </div>
</>
  )
}


export default Inicio;
