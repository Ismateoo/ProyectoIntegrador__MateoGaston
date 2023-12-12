import styles from "./styles.module.css"; 

function Iconos(){
    return(
         <>
         
        <div className={styles.pokemoncard}>
            <p className={styles.id}>01</p>
            <div className={styles.imagencentrada}><img src={"public/img/bulbasaur.png"} className={styles.pokemonimagen}/></div>
            <div className={styles.backfondo}><p>Bulbasaur</p></div>
            
        </div>
            

         </>
    );  
}
export default Iconos;






