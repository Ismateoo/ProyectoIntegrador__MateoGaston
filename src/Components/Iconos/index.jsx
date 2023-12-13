import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import React from "react";

function Iconos() {
  const [listapokemon, setlistaPokemon] = usestate([]);

  const obtenerPokemon = async () => {
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
    obtenerPokemon(2);
  }, []);

  /*  const [pokemon, setPokemones] = useState(null);

  useEffect(() => {
    const getPokemones = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/1/");
      const p = await response.json();
      setPokemones(p);
      console.log(p);
    };
    getPokemones();
  }, []);

  return (
    <>
      {pokemon && (
        <div className={styles.pokemoncard}>
          <p className={styles.id}>{pokemon.id}</p>
          <div className={styles.imagencentrada}>
            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              className={styles.pokemonimagen}
            />
          </div>
          <div className={styles.backfondo}>
            <p>{pokemon.name}</p>
          </div>
        </div>
      )}
    </>
  );
}*/

  return (
    <>
      {listapokemon.map((pokemon) => {
        return (
          <div className={styles.backfondo}>
              <p>{pokemon.name}</p>
            </div>
        );
      })}
    </>
  );
}

export default Iconos;
