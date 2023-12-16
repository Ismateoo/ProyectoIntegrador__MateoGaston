import styles from "./styles.module.css";
import "../../coloresTipos.css";
import PokemonHeader from "../PokemonHeader";
import PokemonTipos from "../PokemonTipos";
import PokemonAbout from "../PokemonAbout";
import PokemonDescription from "../PokemonDescription";
import PokemonStats from "../PokemonStats";

export default function Pokemon() {
  return (
    <div className={styles.container}>
      <PokemonHeader />

      <div className={styles.datos}>
        <PokemonTipos />

        <PokemonAbout />

        <PokemonDescription />

        <PokemonStats />
      </div>
    </div>
  );
}
