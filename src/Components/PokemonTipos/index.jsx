import styles from "./styles.module.css";

export default function PokemonTipos(){
    return(
        <div className={styles.tipos}>
          <span className={styles.tipo} id={styles.tipo1}>Grass</span>
          <span className={styles.tipo} id={styles.tipo2}>Poison</span>
        </div>
    )
}