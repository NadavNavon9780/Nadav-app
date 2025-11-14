"use client";

import { useState } from "react";
import styles from "../design.module.css"; // or your CSS module

export default function CameraIcon() {
  const [hovered, setHovered] = useState(false);

  return (
    <img
      src={hovered ? "/icons/Camera 2.svg" : "/icons/Camera.svg"} // switch images
      alt="Crane Icon"
      className={`${styles.aboutIcon} ${styles.cameraIcon}`}
      width={24}
      height={24}
      onMouseEnter={() => setHovered(true)} // hover start
      onMouseLeave={() => setHovered(false)} // hover end
    />
  );
}
