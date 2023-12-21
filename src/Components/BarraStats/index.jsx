import styles from "./styles.module.css";

export default function BarraStats({stat, color}) {
  return (
    <>
    <div className={`${styles.barraStat} ${color}--background`}>  
    </div>
    <div className={`${styles.barraIzq} ${color}--background`} style={{width: `${(stat / 255) * 100}%`}}>
    </div>
    </>
  );
}
