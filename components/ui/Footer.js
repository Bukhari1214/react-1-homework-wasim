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
      {/* TASK - React 1 week 2 */}
      {/* Create a new List for the Pages */}
      {/* We need to use the <Link /> component here */}

      {/* Instead of creating List Component I exported and used navbarItems from Navbar.js with Link next/link */}

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
              // <NavItems title={item.title} link={item.link} />
            ))}
        </ul>
      </div>
      {/* Docs for the Link: https://nextjs.org/docs/pages/api-reference/components/link */}

      {/* TASK - React 1 week 1 */}
      {/* Add a new list item for LINKEDIN */}
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
          {/* 
          <li>
            <a href="https://facebook.com">Facebook</a>
          </li>
          <li>
            <a href="https://instagram.com">Instagram</a>
          </li>
          <li>
            <a href="https://tiktok.com">Tiktok</a>
          </li>
          <li>
            <a href="https://google.com">On the streets at night</a>
          </li>
          <li>
            <a href="https://linkedin.com">LinkedIn</a>
          </li> */}

          {/* TASK - React 1 week 2 */}
          {/* Create a <SocialMediaItem /> component and replace all of the list items! */}
          {/* it should accept the following props */}
          {/* url, title, icon */}
          {/* For the icons, you can download 1-2 social media icons for testing and put it in the /public/socialmedia/ folder */}
        </ul>
      </div>
    </footer>
  );
};
