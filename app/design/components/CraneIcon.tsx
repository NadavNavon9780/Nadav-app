"use client";

import { useState } from "react";
import styles from "../design.module.css"; // or your CSS module

export default function CraneIcon() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active); // toggle on click
  };

  return (
    <img
      src={active ? "/icons/Crane 2.png" : "/icons/Crane.svg"} // swap image
      alt="Crane Icon"
      className={`${styles.aboutIcon} ${styles.craneIcon}`}
      width={24}
      height={24}
      onMouseEnter={() => setActive(true)} // also swap on hover
      onMouseLeave={() => setActive(false)}
      onClick={handleClick} // swap on click
    />
  );
}
