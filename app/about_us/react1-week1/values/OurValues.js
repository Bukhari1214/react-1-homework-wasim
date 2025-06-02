// TASK - React 1 week 1

import React from "react";
import ourValuesData from "@/data/react1-week1/ourValuesData";
import styles from "./OurValues.module.css";

const OurValues = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Our Values</h2>
      <ul className={styles.list}>
        {ourValuesData.map((value, index) => (
          <li key={index} className={styles.item}>
            <h3 className={styles.title}>{value.title}</h3>
            <p className={styles.description}>{value.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OurValues;
