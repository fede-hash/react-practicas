import { createContext,useState,useEffect } from "react"
import axios from "axios"


export const UserContext = createContext()

const UserProvider = (props) =>{

    const [users,setUsers] = useState([])
    useEffect(() => {
        const obtenerUsuarios = async()=>{
            const url='https://jsonplaceholder.typicode.com/users'
            const usuarios = await axios(url)
            setUsers(usuarios)
         
        }
        obtenerUsuarios()
    }, [])
    return(
        <UserContext.Provider value={{users}}>
            {props.children}
        </UserContext.Provider>
    )

} 

export default UserProvider
