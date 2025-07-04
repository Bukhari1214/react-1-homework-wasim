import React from "react";
import styles from "./PlanetCard.module.css";

export default function PlanetCard({
  planetItem,
  onAddOrRemoveDestination,
  destinationTogo,
}) {
  const { name, description, thumbnail } = planetItem;
  const isSelected = destinationTogo.some((item) => item.id === planetItem.id);
  return (
    <div className={styles.planetCard}>
      <img className={styles.planetThumbnail} src={thumbnail} alt={name} />
      <div className={styles.planetDescription}>
        <h2>
          {name}
          {isSelected ? "SELECTED" : ""}
        </h2>
        <p>{description}</p>
      </div>
      <button className={styles.roundButton} onClick={onAddOrRemoveDestination}>
        {isSelected ? "REMOVE" : "ADD A PLANET"}
      </button>
    </div>
  );
}
