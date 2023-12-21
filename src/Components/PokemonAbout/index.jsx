import styles from "./styles.module.css";
import balanza from "/public/img/Weight.svg"
import regla from "/public/img/Height.svg"

export default function PokemonAbout({peso, altura, habilidades, color}){
    return(
        <>
        <div className={`${styles.about} grass`}>
          <p className={color}>About</p>
        </div>

        <div className={styles.contenedorCaracteristicas}>

          <div className={styles.caracteristicas}>
            <div className={styles.caracteristicas__numeros}>
              <img src={balanza} alt="" />
              <span>{peso} kg</span>
            </div>
            <div className={styles.caracteristicas__nombre}>
              <span>Weight</span>
            </div>
          </div>

          <div className={`${styles.caracteristicas} ${styles.caracteristicas__peso}`}>
            <div className={styles.caracteristicas__numeros}>
              <img src={regla} alt="" />
              <span>{altura}0 cm</span>
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