import styles from "./styles.module.css";   // Importamos los estilos

function Iconos(){
    return(
         <>
         
        <div className={styles.pokemoncard}>
            <p className={styles.id}>01</p>
            <img src={"public/img/bulbasaur.png"} className={styles.pokemonimagen}/>
            <p>Bulbasaur</p>
        </div>
            
        

 

         </>
    );  
}
export default Iconos;
