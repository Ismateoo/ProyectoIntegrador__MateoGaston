import styles from "./styles.module.css";

export default function Pokemon() {
  return (
    <div className={styles.container}>
      <div className={styles.pokeball__contenedor}>
        <img src="public/img/Pokeball.png" alt="" />
      </div>

      <div className={styles.nombreNumero}>
        <div className={styles.flechaNombre}>
          <img src="public/img/arrow-left.svg" alt="" />
          <span>Bulbasaur</span>
        </div>
        <span>#001</span>
      </div>

      <div className={styles.datos}>
        <div className={styles.datos__imagen}>
          {<img src="public/img/bulbasaur.png" alt="" />}
        </div>
        <div className={styles.tipos}>
                <span className={styles.tipo}>Grass</span>
                <span className={styles.tipo}>Poison</span>   
        </div>
        <div className={styles.about}>
            
        </div>
      </div>
    </div>
  );
}
