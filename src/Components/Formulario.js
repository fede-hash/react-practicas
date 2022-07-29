import React,{useState} from 'react'

const Formulario = () => {
const [nombre,setNombre] = useState(false);
const [apellido,setApellido] = useState(false);
const [email,setEmail] = useState(false);
const [password,setPassword] = useState(false);

const nombreRegex = /^[a-zA-Z]{3,16}$/
const apellidoRegex = /^[a-zA-Z]{3,16}$/
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]{2,30}[.][a-zA-Z]{2,4}$/
const passwordRegex = /^[a-zA-Z0-9_-]{6,18}$/

const valorNombre = (nombreValidar)=>{
    if(nombreValidar.trim()){
        if(nombreRegex.test(nombreValidar)){
            setNombre(true)
        }
    }
}
const valorApellido = (apellidoValidar)=>{
    if(apellidoValidar.trim()){
        if(apellidoRegex.test(apellidoValidar)){
            setApellido(true)
        }
    }
}
const valorEmail = (emailValidar)=>{
    if(emailValidar.trim()){
        if(emailRegex.test(emailValidar)){
            setEmail(true)
        }
    }
}
const valorPassword = (passwordValidar)=>{
    if(passwordValidar.trim()){
        if(passwordRegex.test(passwordValidar)){
            setPassword(true)
        }
    }
}

const enviar = (e)=>{
    e.preventDefault();
    if(nombre===true && apellido === true && email === true && password === true){
        alert('los datos se enviaron correctamente')
        setTimeout(()=>{window.location.reload()},2500)
    }else{
        alert('los datos estan incompletos')
    }
}
  return (
    <div>
        <h1>Formulario</h1>
        <form onSubmit={e=>enviar(e)}>
            <div >
                <h3>Escribe tu Nombre</h3>
                <input type='text' onChange={e=>valorNombre(e.target.value)}></input>
            </div>
            <div>
                <h3>Escribe tu Apellido</h3>
                <input type='text' onChange={e=>valorApellido(e.target.value)}></input>
            </div>
            <div>
                <h3>Escribe tu Email</h3>
                <input type='text' onChange={e=>valorEmail(e.target.value)}></input>
            </div>
            <div>
                <h3>Escribe tu Password</h3>
                <input type='password' onChange={e=>valorPassword(e.target.value)}></input><br/>
                <button type='submit'>Enviar</button>
            </div>

            
        </form>
    </div>
  )
}

export default Formulario