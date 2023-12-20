import styles from "./styles.module.css";
import "../../coloresTipos.css";
import PokemonHeader from "../PokemonHeader";
import PokemonTipos from "../PokemonTipos";
import PokemonAbout from "../PokemonAbout";
import PokemonDescription from "../PokemonDescription";
import PokemonStats from "../PokemonStats";
import { Link, useParams } from "react-router-dom";
import usePokemon from "../../Hooks/usePokemon";
import { useEffect } from "react";

export default function Pokemon() {

  const {id} = useParams();
  let idNumero = Number(id)
  /* const [idNumero, set] */

  const {mostrarUnPokemon, pokemon} = usePokemon()

  useEffect(() => {
    mostrarUnPokemon(id);
  }, [id]);
  
 
  
  let pokemonId = pokemon.id
  let pokemonName = pokemon.name
  let pokemonImagen = pokemon.imagen
  let color = pokemon.color
  let tipos = pokemon.tipos
  let pokemonHabilidades = pokemon.habilidades;
  let pokemonAltura= pokemon.altura
  let pokemonPeso= pokemon.peso
  let pokemonDescripcion= pokemon.descripcion
  let pokemonHp = pokemon.hp
  let pokemonAtk = pokemon.atk
  let pokemonDef = pokemon.def
  let pokemonSatk = pokemon.satk
  let pokemonSdef = pokemon.sdef
  let pokemonSpd = pokemon.spd
  
  return (
    <div className={`${color}--background ${styles.container}`}>
      <PokemonHeader name={pokemonName} id={pokemonId} imagen={pokemonImagen}/>

      <div className={styles.datos}>
        <PokemonTipos tipos={tipos}/>
        
      <div className={styles.flechasNavegacion}>      
      <Link to={`/pokemon/${idNumero-1}`}>   
          {(idNumero!= 1 ?
          <span className={styles.flechas}>{"<"}</span>
          : <span> </span>)}
      </Link>

      <Link to={`/pokemon/${idNumero+1}`}>  
        {(idNumero!= 151 ? 
          <span className={styles.flechas}>{">"}</span> 
          : <span> </span>)}  
      </Link>
      </div>
      
        <PokemonAbout peso={pokemonPeso} altura={pokemonAltura} habilidades={pokemonHabilidades} color={color}/>

        <PokemonDescription descripcion={pokemonDescripcion}/>

        <PokemonStats color={color} hp={pokemonHp} atk={pokemonAtk} def={pokemonDef} satk={pokemonSatk} sdef={pokemonSdef} spd={pokemonSpd}/>
      </div>
    </div>
  );
}
