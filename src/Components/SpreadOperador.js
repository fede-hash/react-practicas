import React from 'react'

const SpreadOperador = () => {
//   const animales1 = [' lobo ',' leon ',' tigre ']
//   const animales2 = [' gato ',' perro ',' liebre ']
//    const animales = [...animales1,...animales2]

    const marcasJapon = {
        toyota :'Hilux',
        honda : 'Civir',
        nissan :'Skyline',
        volswagen : 'Golf',
    }
    const marcasAleman = {
        volswagen : 'Gol',
        seat : 'Cordoba',
        audi : 'A4'
    }

    const allMarc = {...marcasAleman,...marcasJapon}
    console.log(allMarc);
    return (
   <>
   <h1>Este es el Spread Operator</h1>
   
   {/* <h1>{animales1}</h1>
   <h1>{animales2}</h1>
   <h1>{animales[0]}</h1>
   <h1>{animales[3]}</h1> */}

   </>
  )
}

export default SpreadOperador