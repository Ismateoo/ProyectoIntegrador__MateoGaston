import { useState} from "react";

export default function usePokemon(){
    const [listapokemon, setlistaPokemon] = useState([]);
    const [pokemon, setPokemon] = useState({});

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
              tipo: data.types[0].type.name,
            },
          ]);
        }
      };

      const mostrarUnPokemon = async (id) => {
        const response2 = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${id}/`
        );
        const data2 = await response2.json();
        setPokemon ({
          id: data2.id,
          name: data2.name,
          imagen: data2.sprites.other["official-artwork"].front_default,          
          /* tipo1: data2.types[0].type.name,
          tipo2: data2.types[1].type.name, */
          tipos: data2.types,
          habilidad1: data2.abilities[0].ability.name,
          habilidad2: data2.abilities[1].ability.name,
          altura: data2.height
        })
      }

    return(
       {listapokemon, obtenerPokemon, mostrarUnPokemon, pokemon}
    )
}