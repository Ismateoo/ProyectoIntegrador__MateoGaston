import styles from "./styles.module.css";

export default function PokemonStats(){
    return(
        <>
         <div className={styles.contenedorStats}>
            <div className={`${styles.statsTitulo} grass`}>
                <p>Base Stats</p>
            </div>
            <div className={styles.stats}>
                <div className={`${styles.stats__nombre} grass`}>
                  <span>HP</span>
                  <span>ATK</span>
                  <span>DEF</span>
                  <span>SATK</span>
                  <span>SDEF</span>
                  <span>SPD</span>
                </div>

                <div className={styles.stats__cantidad}>
                  <span>045</span>
                  <span>049</span>
                  <span>049</span>
                  <span>065</span>
                  <span>065</span>
                  <span>045</span>
                </div>

                <div className={styles.stats__barra}>
                  <span>-----------------------</span>
                  <span>-----------------------</span>
                  <span>-----------------------</span>
                  <span>-----------------------</span>
                  <span>-----------------------</span>
                  <span>-----------------------</span>
                </div>
            </div>
        </div>
        </>
    )
}