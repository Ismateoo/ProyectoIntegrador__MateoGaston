import styles from "./styles.module.css";
import "../../coloresTipos.css";
import PokemonHeader from "../PokemonHeader";
import PokemonTipos from "../PokemonTipos";
import PokemonAbout from "../PokemonAbout";
import PokemonDescription from "../PokemonDescription";
import PokemonStats from "../PokemonStats";
import { useParams } from "react-router-dom";
import usePokemon from "../../Hooks/usePokemon";
import { useEffect } from "react";

export default function Pokemon() {

  const {id} = useParams();


  const {mostrarUnPokemon, pokemon} = usePokemon()

  useEffect(() => {
    mostrarUnPokemon(id);
  }, []);
  
 
  
  let pokemonId = pokemon.id
  let pokemonName = pokemon.name
  let pokemonImagen = pokemon.imagen
 /*  let pokemonTipo1 = pokemon.tipo1
  let pokemonTipo2 = pokemon.tipo2 */
  let tipos = pokemon.tipos
  let pokemonHabilidad = pokemon.habilidad
  let pokemonHabilidad2= pokemon.habilidad2
  let pokemonAltura= pokemon.habilidad2
  


  return (
    <div className={styles.container}>
      <PokemonHeader name={pokemonName} id={pokemonId} imagen={pokemonImagen}/>

      <div className={styles.datos}>
        <PokemonTipos tipos={tipos}/>

        <PokemonAbout />

        <PokemonDescription />

        <PokemonStats />
      </div>
    </div>
  );
}
