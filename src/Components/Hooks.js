import React,{useState,useEffect} from 'react'
// import React from 'react'
const Hooks = () => {
// const [color,setColor] = React.useState('yellow');
const [color,setColor] = useState('red');

const [contador,setContador]= useState(0);

   useEffect(() => {
        let intervalo = setInterval(()=>{setContador(contador + 1)},1000)
        return()=>{
            clearInterval(intervalo);
        }
    }, [contador])




const fondo = {
    width:'100%',
    height:'1000px',
    backgroundColor:color
}
const cambiarColor = ()=>{
    if(color==='red')
    setColor("green");
    else
    setColor('red');
}

// setTimeout(cambiarColor,1500)

    return (
        <div>
            <h1>Esto son los Hooks</h1>
            <div style={fondo}className="container">
                <button onClick={cambiarColor}>Cambiar de color</button>    
                <h1>Contador:{contador}</h1>       
                
            </div>
        </div>
    )
}

export default Hooks