import styles from "./styles.module.css";

export default function PokemonAbout({peso, altura, habilidades, color}){
    return(
        <>
        <div className={`${styles.about} grass`}>
          <p className={color}>About</p>
        </div>

        <div className={styles.contenedorCaracteristicas}>

          <div className={styles.caracteristicas}>
            <div className={styles.caracteristicas__numeros}>
              <img src="public/img/Weight.svg" alt="" />
              <span>{peso} kg</span>
            </div>
            <div className={styles.caracteristicas__nombre}>
              <span>Weight</span>
            </div>
          </div>

          <div className={`${styles.caracteristicas} ${styles.caracteristicas__peso}`}>
            <div className={styles.caracteristicas__numeros}>
              <img src="public/img/Height.svg" alt="" />
              <span>{altura} m</span>
            </div>
            <div className={styles.caracteristicas__nombre}>
              <span>Height</span>
            </div>
          </div>

          <div className={styles.caracteristicas}>
            <div className={styles.caracteristicas__habilidades}>
              {habilidades && habilidades.map((habilidad) => <span>{habilidad.ability.name}</span>)}
            </div>
            <div className={styles.caracteristicas__nombre}>
              <span>Moves</span>
            </div>
          </div>


        </div>
        </>
    )
}