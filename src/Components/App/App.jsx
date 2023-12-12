import { useState } from 'react'
import  styles  from "./styles.module.css"
import Pokemon from '../Pokemon'
import Mainpoke from '../Mainpoke'
import Iconos from '../Iconos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.contenedor}>
      {/* <Mainpoke />
      <Iconos/> */}
      <Pokemon/>
    </div>
  )
}

export default App
