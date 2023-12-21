import BarraStats from "../BarraStats";
import styles from "./styles.module.css";

export default function PokemonStats({hp, atk, def, satk, sdef, spd, color}){
    return(
        <>
         <div className={styles.contenedorStats}>
            <div className={`${styles.statsTitulo}`}>
                <p className={color}>Base Stats</p>
            </div>
            <div className={styles.stats}>
                <div className={`${styles.stats__nombre} ${color}`}>
                  <span>HP</span>
                  <span>ATK</span>
                  <span>DEF</span>
                  <span>SATK</span>
                  <span>SDEF</span>
                  <span>SPD</span>
                </div>

                <div className={styles.stats__cantidad}>
                  <span>{hp}</span>
                  <span>{atk}</span>
                  <span>{def}</span>
                  <span>{satk}</span>
                  <span>{sdef}</span>
                  <span>{spd}</span>
                </div>

                <div className={styles.stats__barra}> 
                  <span><BarraStats stat={hp} color={color}/></span>  
                  <span><BarraStats stat={atk} color={color}/></span>
                  <span><BarraStats stat={def} color={color}/></span>
                  <span><BarraStats stat={satk} color={color}/></span>
                  <span><BarraStats stat={sdef} color={color}/></span>
                  <span><BarraStats stat={spd} color={color}/></span>          
                </div>
            </div>
        </div>
        </>
    )
}