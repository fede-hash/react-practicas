import React,{useState} from 'react'

const RenderizadoCondicional = () => {
const [nombre,setNombre] = useState(null);
const [apellido,setApellido] = useState(null);
const [email,setEmail] = useState(null);
const [password,setPassword] = useState(null);

const nombreRegex = /^[a-zA-Z]{3,16}$/
const apellidoRegex = /^[a-zA-Z]{3,16}$/
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]{2,30}[.][a-zA-Z]{2,4}$/
const passwordRegex = /^[a-zA-Z0-9_-]{6,18}$/

const valorNombre = (nombreValidar)=>{
    if(nombreValidar.trim()){
        if(nombreRegex.test(nombreValidar)){
            setNombre(true)
        }else{
            setNombre(false)
        }
    }
}
const valorApellido = (apellidoValidar)=>{
    if(apellidoValidar.trim()){
        if(apellidoRegex.test(apellidoValidar)){
            setApellido(true)
        }else{
            setApellido(false)
        }
    }
}
const valorEmail = (emailValidar)=>{
    if(emailValidar.trim()){
        if(emailRegex.test(emailValidar)){
            setEmail(true)
        }else{
            setEmail(false)
        }
    }
}
const valorPassword = (passwordValidar)=>{
    if(passwordValidar.trim()){
        if(passwordRegex.test(passwordValidar)){
            setPassword(true)
        }else{
            setPassword(false)
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
                {nombre === false ? <h4>Escribe tu nombre Correctamente</h4> : null}
                <input type='text' onChange={e=>valorNombre(e.target.value)}></input>
            </div>
            <div>
                <h3>Escribe tu Apellido</h3>
                {apellido === false ? <h4>Escribe tu Apellido Correctamente</h4> : null}
                <input type='text' onChange={e=>valorApellido(e.target.value)}></input>
            </div>
            <div>
                <h3>Escribe tu Email</h3>
                {email === false ? <h4>Escribe tu Email Correctamente</h4> : null}
                <input type='text' onChange={e=>valorEmail(e.target.value)}></input>
            </div>
            <div>
                <h3>Escribe tu Password</h3>
                {password === false ? <h4>Escribe tu Password Correctamente</h4> : null}
                <input type='password' onChange={e=>valorPassword(e.target.value)}></input><br/>
                <button type='submit'>Enviar</button>
            </div>
        </form>
    </div>
  )
}

export default RenderizadoCondicional