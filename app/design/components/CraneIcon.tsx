"use client";

import { useState } from "react";
import styles from "../design.module.css"; // or your CSS module

export default function CraneIcon() {
  const [hovered, setHovered] = useState(false);

  return (
    <img
      src={hovered ? "/icons/Crane 2.png" : "/icons/Crane.svg"} // switch images
      alt="Crane Icon"
      className={`${styles.aboutIcon} ${styles.craneIcon}`}
      width={24}
      height={24}
      onMouseEnter={() => setHovered(true)} // hover start
      onMouseLeave={() => setHovered(false)} // hover end
    />
  );
}
