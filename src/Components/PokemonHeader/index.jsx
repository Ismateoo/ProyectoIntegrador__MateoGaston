import styles from "./styles.module.css";

export default function PokemonHeader() {
  return (
    <>
      <div className={styles.pokeball__contenedor}>
        <img src="public/img/Pokeball.png" alt="" className={styles.pokeball} />
      </div>

      <div className={styles.nombreNumero}>
        <div className={styles.flechaNombre}>
          <img src="public/img/arrow-left.svg" alt="" />
          <span className={styles.nombrePokemon}>Bulbasaur</span>
        </div>
        <span className={styles.numeroPokemon}>#001</span>
      </div>

      <div className={styles.imagen}>
        {
          <img
            src="public/img/bulbasaur.png"
            alt=""
            className={styles.imagen2}
          />
        }
      </div>
    </>
  );
}
