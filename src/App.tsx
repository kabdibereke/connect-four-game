import { useState } from 'react'
import Menu from './pages/Menu/Menu'
import { Routes, Route} from 'react-router-dom'
import Ingame from './pages/Ingame/Ingame'
function App() {
  

  return (
    <Routes>
      <Route path='/' element= {<Menu  />}  />
      <Route path='/ingame' element= {<Ingame />} />
    </Routes>
  )
}

export default App
