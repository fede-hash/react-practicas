import React from 'react'

const Comunicacion1 = (props) => {
  
  if(props.cambioEstado === true){
    console.log("el estado es true")
    }
 
    return (
    <div>
      <button onClick={props.llamado}>Boton en Hijo</button>
      <button onClick={props.llamaHermano2}>Llamar al Hermano</button>
    </div>
  )
}

export default Comunicacion1