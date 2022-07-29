import React from 'react'
import UserProvider from './Components/Context/UserContext'
import ListaUsuarios from './Components/ListaUsuarios'


const App22 = () => {

  return (
    <>
 <UserProvider>
    <ListaUsuarios/>
 </UserProvider>
    </>
  )
}

export default App22