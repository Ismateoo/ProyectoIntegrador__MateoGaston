import styles from "./styles.module.css";

export default function PokemonTipos({tipos}){
    return(
        <div className={styles.tipos}>          
          {tipos && tipos.map((tipo) => <span>{tipo.type.name}</span>)}     
        </div>
    )
}