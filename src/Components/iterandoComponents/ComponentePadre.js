import React from 'react'
import ComponenteHijo from './ComponenteHijo'

const ComponentePadre = () => {
const nombres = ['federico','martin','abdala']

  return (
    <>
    <h1>Iteracion de Componentes</h1>
    <ul>
      {nombres.map(nombre=>(
        <ComponenteHijo listnombre={nombre}>{nombre}</ComponenteHijo>
      ))}
    </ul>
    </>
  )
}

export default ComponentePadre