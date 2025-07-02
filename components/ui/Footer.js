"use client";

import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";
import SocialMediaItem from "../SocialMediaItem/SocialMediaItem";
import { navbarItems } from "./Navbar";
import Link from "next/link";
import NavItems from "../NavItems/NavItems";

export const Footer = () => {
  const path = usePathname().split("?")[0];
  return (
    <footer className={path !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>
          Explore the universe and beyond. Your journey to the stars starts
          here.
        </p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>

      <div className={styles.pages}>
        <h3>Pages</h3>
        <ul>
          {navbarItems.length > 0 &&
            navbarItems.map((item) => (
              <li key={item.title}>
                <Link href={item.link} className={styles.footerLink}>
                  {item.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>

      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerList}>
          <SocialMediaItem
            url={"https://facebook.com"}
            title={"Facebook"}
            icon={"/socialmedialogos/facebook.png"}
          />
          <SocialMediaItem
            url={"https://instagram.com"}
            title={"Instagram"}
            icon={"/socialmedialogos/instagram.png"}
          />
          <SocialMediaItem
            url={"https://tiktok.com"}
            title={"Tiktok"}
            icon={"/socialmedialogos/tiktok.webp"}
          />
          <SocialMediaItem
            url={"https://google.com"}
            title={"On the streets at night"}
            icon={"/socialmedialogos/google.png"}
          />
          <SocialMediaItem
            url={"https://linkedin.com"}
            title={"LinkedIn"}
            icon={"/socialmedialogos/linkedin.webp"}
          />
        </ul>
      </div>
    </footer>
  );
};
