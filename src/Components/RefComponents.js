import React,{createRef} from 'react'

const RefComponents = () => {
    const cambiarColor = createRef();

    const cambioColorText = () => {
        cambiarColor.current.style.color = 'blue';
    }
    
    return (
    <>
        <h1 ref={cambiarColor}>Estas son las Ref</h1>
        <button onClick={cambioColorText}>Cambiar de Color</button>
    </>
  )
}

export default RefComponents