"use client";

import { useState } from "react";
import styles from "../design.module.css";

export default function BoatIcon() {
  const [moved, setMoved] = useState(false);

  const handleClick = () => {
    setMoved(true);
  };

  return (
    <img
      src="/icons/Boat.svg"
      alt="Boat Icon"
      className={`${styles.aboutIcon} ${styles.boatIcon}`}
      style={{
        position: "relative",
        left: moved ? "100%" : "-150px", // moves only once
        transition: "left 2.8s linear", // smooth glide
        cursor: "pointer", // show clickable
      }}
      onClick={handleClick} // glide triggers on click/touch
      onTouchStart={handleClick} // support mobile
    />
  );
}
