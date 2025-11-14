"use client";

import { useState } from "react";
import styles from "../design.module.css"; // or your CSS module

export default function BlobIcon() {
  const [hovered, setHovered] = useState(false);

  return (
    <img
      src={hovered ? "/icons/Blob 2.svg" : "/icons/Blob.svg"} // switch images
      alt="Blob Icon"
      className={`${styles.aboutIcon} ${styles.blobIcon}`}
      width={24}
      height={24}
      onMouseEnter={() => setHovered(true)} // hover start
      onMouseLeave={() => setHovered(false)} // hover end
    />
  );
}
