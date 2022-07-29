import React,{useContext} from "react";
import { UserContext } from "./Context/UserContext";

const ListaUsuarios = () => {
    const {users} = useContext(UserContext) 
   const usuarios = users.data
    console.log(usuarios)  
    return (
    <>
    <ul>
        {usuarios.map(usuario=>(
            <li>{usuario}</li>
        ))}        
    </ul>
    </>
  )
}

export default ListaUsuarios