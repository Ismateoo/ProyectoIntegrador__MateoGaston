import styles from "./styles.module.css";

export default function PokemonAbout(){
    return(
        <>
        <div className={`${styles.about} grass`}>
          <p>About</p>
        </div>

        <div className={styles.contenedorCaracteristicas}>

          <div className={styles.caracteristicas}>
            <div className={styles.caracteristicas__numeros}>
              <img src="public/img/Weight.svg" alt="" />
              <span>6,9 kg</span>
            </div>
            <div className={styles.caracteristicas__nombre}>
              <span>Weight</span>
            </div>
          </div>

          <div className={`${styles.caracteristicas} ${styles.caracteristicas__peso}`}>
            <div className={styles.caracteristicas__numeros}>
              <img src="public/img/Height.svg" alt="" />
              <span>0,7 m</span>
            </div>
            <div className={styles.caracteristicas__nombre}>
              <span>Height</span>
            </div>
          </div>

          <div className={styles.caracteristicas}>
            <div>
              <span>Chlorophyll</span> <br />
              <span>Overgrow</span>
            </div>
            <div className={styles.caracteristicas__nombre}>
              <span>Moves</span>
            </div>
          </div>


        </div>
        </>
    )
}