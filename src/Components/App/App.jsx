import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Pokemon from "../Pokemon";
import Mainpoke from "../Mainpoke";
import Iconos from "../Iconos";
import usePokemon from "../../Hooks/usePokemon";
import letra from "/public/img/Height.svg";
import arrow from "/public/img/Arrow.svg"; 

function App() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState('');
  const [imagen, setImagen] = useState("arrow");
  const [ordenamiento, setOrdenamiento] = useState("numerico");

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  }; 

 const cambiarOrdenamiento = () => {   
    if (ordenamiento === "numerico") {
      setOrdenamiento("alfabetico");
      setImagen(letra);
    } else {
      setOrdenamiento("numerico");
      setImagen(arrow);
    }
  } 


  return (
    <>
      <div className={styles.contenedor}>
        <Mainpoke search={search} handleSearchChange={handleSearchChange} cambiarOrdenamiento={cambiarOrdenamiento} imagen={imagen}/>
        <Iconos search={search} ordenamiento={ordenamiento}  />
      </div>
    </>
  );
}

export default App;