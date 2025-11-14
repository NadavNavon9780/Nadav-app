"use client";

import { useState } from "react";
import styles from "../design.module.css"; // or your CSS module

export default function CameraIcon() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active); // toggle image on click
  };

  return (
    <img
      src={active || active ? "/icons/Camera 2.svg" : "/icons/Camera.svg"} // swap on hover or click
      alt="Camera Icon"
      className={`${styles.aboutIcon} ${styles.cameraIcon}`}
      width={24}
      height={24}
      onMouseEnter={() => setActive(true)} // hover start
      onMouseLeave={() => setActive(false)} // hover end
      onClick={handleClick} // toggle on click
    />
  );
}
