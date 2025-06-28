import React from "react";
import styles from "./RoverPhoto.module.css";

export default function RoverPhoto({ date, src, roverName }) {
  return (
    <div>
      {" "}
      <p>Date {date}</p>
      <p>Rover Name: {roverName}</p>
      <img className={styles.nasaPicOfTheDayImg} src={src} alt={roverName} />
    </div>
  );
}
