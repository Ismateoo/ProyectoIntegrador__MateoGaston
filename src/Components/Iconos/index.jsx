import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import React from "react";
import "../../coloresTipos.css";

function Iconos() {
  const [listapokemon, setlistaPokemon] = useState([]);

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
    obtenerPokemon(1000);
  }, []);

  return (
    <>
      <div className={styles.contenedorTarjetas}>
        {listapokemon.map((pokemon) => {
          return (
              <div className={`${styles.pokemoncard} ${pokemon.tipo}--borde`}>
                <p className={`${styles.id} ${pokemon.tipo}`}>{pokemon.id}</p>
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
          );
        })}
      </div>
    </>
  );
}

export default Iconos;
