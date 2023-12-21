import styles from "./styles.module.css"; 
import React from "react";



 
function Mainpoke({ search, handleSearchChange, cambiarOrdenamiento, imagen, ordenamiento}) {



  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.title}>
          <img src="public/img/Pokeball.png" alt="Logo pokemon" />
          <h1>Pokédex</h1>
        </div>
        <button className={styles.arrowButton} onClick={cambiarOrdenamiento} >
        <h1>{ordenamiento === "numerico" ? "#" : "@"}</h1>
          <img
            src={"public/img/Arrow.svg"}
            alt="Arrow"
            className={styles.arrow}
          />
        </button>
      </header>
      <div className={styles.searchContainer}>
        <input
          type="search"
          placeholder="Buscar"
          className={styles.searchBar}
          value={search}
          onChange={handleSearchChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="black"
          viewBox="0 0 24 24"
          className={styles.searchIcon} 
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
}

export default Mainpoke;