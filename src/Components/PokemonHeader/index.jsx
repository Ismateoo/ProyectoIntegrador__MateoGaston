import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export default function PokemonHeader({name, id, imagen}) {
  return (
    <>
      <div className={styles.pokeball__contenedor}>
        <img src="../public/img/Pokeball.png" alt="" className={styles.pokeball} />
      </div>

      <div className={styles.nombreNumero}>
        <div className={styles.flechaNombre}>
          <Link to = {`/`}>
          <img src="../public/img/arrow-left.svg" alt="" className={styles.flechaVolver}/>
          </Link>
          <span className={styles.nombrePokemon}>{name}</span>
        </div>
        <span className={styles.numeroPokemon}>{"#" + String(id).padStart(3, '0')}
        </span>
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
