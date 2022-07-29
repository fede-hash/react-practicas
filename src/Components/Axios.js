import axios from 'axios'
import React, { useState,useEffect } from 'react'


const Axios = () => {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    const cargarUsuarios = async()=>{
      const res = await axios('https://jsonplaceholder.typicode.com/users')
      // console.log(res.data)
      setUsers(res.data)
    }
    cargarUsuarios();
  },[])

  return (
    <>
    <h1>Axios</h1>
      <ul>
        {users.map(user=>(
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}

export default Axios