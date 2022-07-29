import React,{useEffect,useState} from "react"

export const useCount = () =>{
    const [contador,setContador] = useState(0)
    useEffect(()=>{
        let intervalo = setInterval(()=>{setContador(contador < 20 ? contador + 1: null )},1000)
        return()=>{
            clearInterval(intervalo)
        }
    },[contador])
    return [contador]
}

