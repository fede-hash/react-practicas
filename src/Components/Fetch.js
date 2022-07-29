import React,{useState, useEffect} from 'react'


const Fetch = () => {
    const [users,setUsers] = useState([]);
    
    useEffect(()=>{
        const cargarUser = async()=>{
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await res.json()
            setUsers(data)
            console.log(data)
        }
        cargarUser()
    },[])
    
    return (
        <>
        <h1>Fetch</h1>
        <ul>
            {users.map(user=>(
                <li key={user.id}>{user.name}</li>
            ))}
            
            
        </ul>
        </>
    )
}

export default Fetch