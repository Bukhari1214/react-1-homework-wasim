// TASK - React 1 week 1

import React from "react";
import Image from "next/image";
import crewData from "@/data/react1-week1/ourCrewData";
import styles from "./OurCrew.module.css";

const OurCrew = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Our Crew</h2>
      <div className={styles.grid}>
        {crewData.map((member, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className={styles.image}
              />
            </div>
            <h3 className={styles.name}>{member.name}</h3>
            <p className={styles.role}>{member.role}</p>
            <p className={styles.bio}>{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurCrew;
