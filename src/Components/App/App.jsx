import { useState } from 'react'
import  styles  from "./styles.module.css"
import Pokemon from '../Pokemon'
import Mainpoke from '../Mainpoke'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.contenedor}>
      <Mainpoke />
      <Pokemon/>
    </div>
  )
}

export default App
