import { useState } from 'react'
import './App.css'

import Requisicao from './components/Requisicao'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Requisicao/>
      </div>
    </>
  )
}

export default App;
