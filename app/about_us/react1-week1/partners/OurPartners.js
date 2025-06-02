// TASK - React 1 week 1

import React from "react";
import Image from "next/image";
import partners from "@/data/react1-week1/ourPartnersData";
import styles from "./OurPartners.module.css";

const OurPartners = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Our Business Partners</h2>
      <div className={styles.grid}>
        {partners.map((partner, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={partner.image}
              alt={partner.name}
              width={140}
              height={70}
              className={styles.logo}
            />
            <p className={styles.name}>{partner.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPartners;
