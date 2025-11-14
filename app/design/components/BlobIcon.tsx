"use client";

import { useState } from "react";
import styles from "../design.module.css";

export default function BlobIcon() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <img
      src={active ? "/icons/Blob 2.svg" : "/icons/Blob.svg"} // swap on hover or click
      alt="Blob Icon"
      className={`${styles.aboutIcon} ${styles.blobIcon}`}
      width={24}
      height={24}
      onMouseEnter={() => setActive(true)} // hover start
      onMouseLeave={() => setActive(false)} // hover end
      onClick={handleClick} // toggle on click
    />
  );
}
