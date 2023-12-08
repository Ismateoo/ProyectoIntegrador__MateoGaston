import React, { useEffect, useState } from 'react';
import logo from './Pokeball.png';
import styles from './styles.module.css' 


function Mainpoke() {
  const [pokemones, setPokemones] = useState([])

  useEffect(() => {
    const getpokemones = async () => {
      //listado de pokemones
      const response =  await fetch('https://pokeapi.co/api/v2/pokemon?limit=9&offset=0')
      const listaPokemones = await response.json()
      const { results } = listaPokemones 

      const pokemones = results.map(async (pokemon) => {
        const response = await fetch(pokemon.url)
        const poke = await response.json()
        return{
          id: poke.id,
          name: poke.name,
          img: poke.sprites.other.dream_world.front_default,
          types: poke.types.map((type) => type.type.name).join(', ')
        }
      })

      const pokemonesDetallados = await Promise.all(pokemones)
      console.log(pokemonesDetallados)

      setPokemones(pokemonesDetallados)
    }

    getpokemones() 

  }, []) 

  return (
    <>
    <header>
        <img src= {logo} alt='Logo de pokedex'/>
        <h1>Pokedéx</h1>
    </header>
    <input type="search" placeholder="Buscar pokemon"/>



      {
        pokemones.map((pokemon, index) => {
          return(
            <div key={index}>
              <img src={pokemon.img} alt={pokemon.name} />
              <p>{pokemon.name}</p>
              <p>{pokemon.weight}</p>
              <p>{pokemon.types}</p>
            </div>
          )
        })
      }
     
    </>
  )
}
export default Mainpoke;