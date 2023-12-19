import styles from "./styles.module.css";

export default function PokemonHeader({name, id, imagen}) {
  return (
    <>
      <div className={styles.pokeball__contenedor}>
        <img src="public/img/Pokeball.png" alt="" className={styles.pokeball} />
      </div>

      <div className={styles.nombreNumero}>
        <div className={styles.flechaNombre}>
          <img src="public/img/arrow-left.svg" alt="" />
          <span className={styles.nombrePokemon}>{name}</span>
        </div>
        <span className={styles.numeroPokemon}>{id}</span>
      </div>

      <div className={styles.imagen}>
        {
          <img
            src={imagen}
            alt=""
            className={styles.imagen2}
          />
        }
      </div>
    </>
  );
}
