import React from 'react'

const Eventos = () => {
  const mensaje = () => console.log("Evento OnFocus")
  const mensajeBlur = () => console.log("Evento OnBlur")
  const mensajeOnChange = () => console.log("Evento onChange")
  const mensajeClick = ()=> alert("se hiso click")
  const mensajeOnKey = ()=> alert("se preciono una tecla");  
  
  return (
    <>
    <h1>Eventos</h1>    
    <form>
        <input onFocus={mensaje} onBlur={mensajeBlur} onChange={mensajeOnChange} type="text"/>
        <input type="text" onKeyDown={mensajeOnKey}/>
    </form>
    <button onClick={mensajeClick}>Pulsar</button>
    <button onDoubleClick={mensajeClick}>Pulsar x2</button>
    </>
  )
}

export default Eventos