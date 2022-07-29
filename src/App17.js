import React,{Fragment,useState} from 'react';
import Comunicacion1 from './Components/Comunicacion1';
import Comunicacion2 from './Components/Comunicacion2';


function App17() {
  const [estado,setEstado]= useState(false)

  const hijoLlamaPadre = ()=>{
    console.log('llamando al padre desde el hijo');
  }

  const estadoComponente = () =>{
       setEstado(true)
  }

  const brother = ()=>{
    setEstado(true)
  }
  return (
    <Fragment>
      <Comunicacion1  llamaHermano2={brother} llamado={hijoLlamaPadre} cambioEstado={estado}/>
      <Comunicacion2 nuevoEstado={estado}/>

      <button onClick={estadoComponente}>Cambiar de Estado</button>
    </Fragment>
  );
}

export default App17
