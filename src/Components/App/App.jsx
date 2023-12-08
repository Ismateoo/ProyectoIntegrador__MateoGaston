import { useState } from 'react'
import  styles  from "./styles.module.css"
import Pokemon from '../Pokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.contenedor}>
      <Pokemon/>
    </div>
  )
}

export default App
