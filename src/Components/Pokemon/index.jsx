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

      <div className={styles.imagen}>
        {<img src="public/img/bulbasaur.png" alt="" />}
      </div>

      <div className={styles.datos}>
        <div className={styles.tipos}>
          <span className={styles.tipo}>Grass</span>
          <span className={styles.tipo}>Poison</span>
        </div>
        <div className={styles.about}>
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

          <div className={styles.caracteristicas}>
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

        <div className={styles.descripcion}>
          <p>There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.</p>
        </div>

        <div className={styles.contenedorStats}>
            <div className={styles.statsTitulo}>
                <p>Base Stats</p>
            </div>
            <div className={styles.stats}>
                <div className={styles.stats__nombre}>
                  <span>HP</span>
                  <span>ATK</span>
                  <span>DEF</span>
                  <span>SATK</span>
                  <span>SDEF</span>
                  <span>SPD</span>
                </div>

                <div className={styles.stats__cantidad}>
                  <span>045</span>
                  <span>049</span>
                  <span>049</span>
                  <span>065</span>
                  <span>065</span>
                  <span>045</span>
                </div>

                <div className={styles.stats__barra}>
                  <span>---------------------------------------------</span>
                  <span>---------------------------------------------</span>
                  <span>---------------------------------------------</span>
                  <span>---------------------------------------------</span>
                  <span>---------------------------------------------</span>
                  <span>---------------------------------------------</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
