import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import React from "react";
import "../../coloresTipos.css";
import { Link} from "react-router-dom";
import usePokemon from "../../Hooks/usePokemon";

function Iconos({ search, listapokemon}) {
   const [listapokemon, setlistaPokemon] = useState([]); 
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const {pokemon} = usePokemon(listapokemon);
  console.log(listapokemon);

   const obtenerPokemon = async (cantidad) => {
    for (let index = 1; index <= cantidad; index++) {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${index}/`
      );
      const data = await response.json();
      setlistaPokemon((prev) => [
        ...prev,
        {
          id: data.id,
          name: data.name,
          imagen: data.sprites.other["official-artwork"].front_default,
          habilidad: data.abilities[0].ability.name,
          tipo: data.types[0].type.name,
        },
      ]);
    }
  }; 


   useEffect(() => {
    obtenerPokemon(50);
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




