import React from 'react'

import {useCount} from './Components/Hooks/useCount'


const App21 = () => {
  const [contador] = useCount(0)
  return (
    <>
    <h1>{contador}</h1>
    </>
  )
}

export default App21