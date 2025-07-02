import Link from "next/link";
import React from "react";
import styles from "./NavItems.module.css";
import classNames from "classnames";

export default function NavItems({ title, link, isActive }) {
  return (
    <li
      className={classNames(styles.navbarLinks, {
        [styles.isLinkActive]: isActive,
      })}
    >
      <Link href={link}>
        <b>{title}</b>
      </Link>
    </li>
  );
}
