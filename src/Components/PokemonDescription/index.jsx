import styles from "./styles.module.css";

export default function PokemonDescription({descripcion}){
    return(
        <>
         <div className={styles.descripcion}>
          <p>{descripcion}</p>
        </div>
        </>
    )
}