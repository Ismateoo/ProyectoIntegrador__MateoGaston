import { useState } from "react";
import styles from "./styles.module.css";
import Pokemon from "../Pokemon";
import Mainpoke from "../Mainpoke";
import Iconos from "../Iconos";

function App() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState('');
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <div className={styles.contenedor}>
      <Mainpoke search={search} handleSearchChange={handleSearchChange} />
      <Iconos search={search} />
      </div>
    </>
  );
}

export default App;
