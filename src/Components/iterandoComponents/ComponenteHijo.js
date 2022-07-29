import React from 'react'

const ComponenteHijo = (props) => {
  return (
    <>
    <h3>Componente Hijo</h3>
    <li>{props.listnombre}</li>
    </>
  )
}

export default ComponenteHijo