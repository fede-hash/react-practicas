import React from 'react'

const IterandoArrays = () => {
    const personajes = ['akira','tetsuo','kaneda','coronel','kai','nezu','yamagata','kaori']
    const trabajadores = [
        {
            id: 1,
            nombre: 'federico',
            puesto: 'control'
        },
        {
            id: 2,
            nombre: 'martin',
            puesto: 'repositor'
        },
        {
            id: 3,
            nombre: 'abdala',
            puesto: 'cajero'
        }
    ]
    // console.log(trabajadores);
    // console.log(trabajadores[0].id);
    // console.log(trabajadores[1].nombre);
    return (
        
        <div>
            <h1>Iterando con Arrays</h1>
            <ul>
                {personajes.map(persona=>(
                    <li>{persona}</li>
                ))}
            </ul>
            <ul>
                {trabajadores.map(trabajador=>(
                    <li key={trabajador.id}>ID : {trabajador.id} - Nombre : {trabajador.nombre} - Tarea : {trabajador.puesto}</li>
                ))}
            </ul>

        </div>
      )
}

export default IterandoArrays