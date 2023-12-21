import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Pokemon from "../Pokemon";
import Mainpoke from "../Mainpoke";
import Iconos from "../Iconos";
import usePokemon from "../../Hooks/usePokemon";

function App() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState('');
  const [ordenamiento, setOrdenamiento] = useState("numerico");

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  }; 

 const cambiarOrdenamiento = () => {   
    if (ordenamiento === "numerico") {
      setOrdenamiento("alfabetico");
    } else {
      setOrdenamiento("numerico");
  
    }
  } 


  return (
    <>
      <div className={styles.contenedor}>
        <Mainpoke search={search} handleSearchChange={handleSearchChange} cambiarOrdenamiento={cambiarOrdenamiento} ordenamiento={ordenamiento}/>
        <Iconos search={search} ordenamiento={ordenamiento}  />
      </div>
    </>
  );
}

export default App;