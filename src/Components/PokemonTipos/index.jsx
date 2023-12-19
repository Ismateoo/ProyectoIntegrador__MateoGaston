import styles from "./styles.module.css";

export default function PokemonTipos({tipos}){
    return(
        <div className={styles.tipos}>          
          {tipos && tipos.map((tipo) => <span className={`${tipo.type.name}--background ${styles.tipo}`}>{tipo.type.name}</span>)}     
        </div>
    )
}