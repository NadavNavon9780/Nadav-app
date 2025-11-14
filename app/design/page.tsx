"use client";

import React from "react";
import styles from "./design.module.css";
import CraneIcon from "./components/CraneIcon";
import BoatIcon from "./components/BoatIcon";
import BlobIcon from "./components/BlobIcon";
import CameraIcon from "./components/CameraIcon";

export default function DesignPage() {
  const [foldTL, setFoldTL] = React.useState(true);
  const [foldTR, setFoldTR] = React.useState(false);
  const [foldBL, setFoldBL] = React.useState(false);
  const [foldBR, setFoldBR] = React.useState(true);

  return (
    <div className={styles.pageBackground}>
      <div className={styles.paperWrapper}>
        <div
          className={`${styles.corner} ${styles.topLeft} ${
            foldTL ? styles.folded : ""
          }`}
          onClick={() => setFoldTL(!foldTL)}
        >
          <div className={styles.triangleBlue}></div>
          <div className={styles.triangleGray}></div>
        </div>

        <div
          className={`${styles.corner} ${styles.topRight} ${
            foldTR ? styles.folded : ""
          }`}
          onClick={() => setFoldTR(!foldTR)}
        >
          <div className={styles.triangleBlue}></div>
          <div className={styles.triangleGray}></div>
        </div>

        <div
          className={`${styles.corner} ${styles.bottomLeft} ${
            foldBL ? styles.folded : ""
          }`}
          onClick={() => setFoldBL(!foldBL)}
        >
          <div className={styles.triangleBlue}></div>
          <div className={styles.triangleGray}></div>
        </div>

        <div
          className={`${styles.corner} ${styles.bottomRight} ${
            foldBR ? styles.folded : ""
          }`}
          onClick={() => setFoldBR(!foldBR)}
        >
          <div className={styles.triangleBlue}></div>
          <div className={styles.triangleGray}></div>
        </div>

        <div className={styles.pageContainer}>
          <img
            src="/icons/Logo DuoGami.svg"
            alt="DuoGami Logo"
            className={styles.logo}
          />
          <h1 className={styles.mainTitle}>DuoGami</h1>
          <p className={styles.subtitle}>Fold. Learn. Create.</p>
          {/* About section */}
          <h2 className={styles.aboutTitle}>About Us:</h2>
          <p className={styles.paragraph}>
            Origami is an art form that demands precision, patience, and
            creativity. Many people who want to create something beautiful often
            struggle to find clear and accessible guidance.
          </p>
          <BoatIcon />
          <p className={styles.paragraph}>
            Today’s origami apps are outdated, unintuitive, and lack engagement.
            Duogami fills this gap by combining smart, data-powered learning
            with a vibrant social platform.
          </p>

          <div className={styles.aboutItem}>
            <CraneIcon />
          </div>

          <h1 className={styles.stepTitle}>Step by step:</h1>
          <p className={styles.paragraph}>
            Users can learn step by step, track their progress, share their
            creations, and connect with other origami enthusiasts around the
            world.
          </p>

          <div className={styles.aboutItem}>
            <CameraIcon />
          </div>

          <p className={styles.paragraph}>
            With Duogami, origami becomes more than a craft, it becomes a
            creative language anyone can learn, share, and grow with.
          </p>

          <div className={styles.aboutItem}>
            <BlobIcon />
          </div>

          <div className={styles.sponsorRow}>
            <img
              src="/icons/image 1.svg"
              alt="Sponsor Logo"
              className={styles.sponsorImage}
            />
            <p className={styles.sponsorText}>
              Sponsored by:{" "}
              <a
                href="https://origamisrael.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.sponsorLink}
              >
                ORIGAMISRAEL
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
