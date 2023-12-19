import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import React from "react";
import "../../coloresTipos.css";
import { Link} from "react-router-dom";
import usePokemon from "../../Hooks/usePokemon";

function Iconos({ search}) {
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const {listapokemon, obtenerPokemon} = usePokemon()

  useEffect(() => {
    obtenerPokemon(1000);
  }, []);

  useEffect(() => {
    if (search) {
      setFilteredPokemons(listapokemon.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase())));
    } else {
      setFilteredPokemons(listapokemon);
    }
  }, [listapokemon, search]);

  return (
      <div className={styles.contenedorTarjetas}>
      {filteredPokemons.map((pokemon) => {
        return (
          <Link to={`/pokemon/${pokemon.id}`}>
          <div  key={pokemon.id} className={`${styles.pokemoncard} ${pokemon.tipo}--borde`}>
            <p className={`${styles.id} ${pokemon.tipo}`}>#{String(pokemon.id).padStart(3,"0")}</p>
            <div className={styles.imagencentrada}>
              <img
                src={pokemon.imagen}
                alt=""
                className={styles.pokemonimagen}
              />
            </div>
            <div
              className={`${styles.backfondo} ${pokemon.tipo}--background ${pokemon.tipo}--borde`}
            >
              <p>{pokemon.name}</p>
            </div>
          </div>
          </Link>
        );
      })}
    </div>
   
    
      
      
    
  ); 

  
}

export default Iconos;




/* ULTILZIAR .sort para filtrar y .filter para el filtro */




