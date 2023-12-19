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
        const responseDescripcion= await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${id}/`
        )
        const data2 = await response2.json();
        const dataDescripcion = await responseDescripcion.json();
        setPokemon ({
          id: data2.id,
          name: data2.name,
          imagen: data2.sprites.other["official-artwork"].front_default,          
          color: data2.types[0].type.name,
          tipos: data2.types,
          habilidades: data2.abilities,
          altura: data2.height,
          peso: data2.weight,
          descripcion: dataDescripcion.flavor_text_entries[1].flavor_text,
          hp: data2.stats[0].base_stat,
          atk: data2.stats[1].base_stat,
          def: data2.stats[2].base_stat,
          satk: data2.stats[3].base_stat,
          sdef: data2.stats[4].base_stat,
          spd: data2.stats[5].base_stat,
        })
      }

    return(
       {listapokemon, obtenerPokemon, mostrarUnPokemon, pokemon}
    )
}