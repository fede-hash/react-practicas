import React from 'react'

const IterandoKeys = () => {
  const digimon = {
      nombre: 'gabumon', 
      espiece : 'cazador',
      tipo: 'fuego',
      elegido:'matt'
  }

  const digiKey = Object.keys(digimon)

  return (
    <>
      <h1>Iterando Keys</h1>
        <ul>
          {digiKey.map(digi=>(
            <li>{digi} : {digimon[digi]}</li>
          ))}
        </ul>
    </>
  )
}

export default IterandoKeys