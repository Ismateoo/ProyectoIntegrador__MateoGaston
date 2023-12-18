import { useState, useEffect } from "react";

export default function usePokemon(){
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
        obtenerPokemon(50);
      }, []);
    

    return(
       { listapokemon}
    )
}