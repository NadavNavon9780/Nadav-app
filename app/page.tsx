import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h2 className={styles.title}>Welcome to my new website!</h2>
        <p className={styles.subtitle}>Feel free to look around</p>

        <div className={styles.buttonsWrapper}>
          <a className={styles.button} href="./design">
            DouGami Page
          </a>
          <a className={styles.button} href="./tic-tac-toe">
            Tic Tac Toe Game
          </a>
          <a className={styles.button} href="./art">
            Art Page
          </a>
        </div>

        <div className={styles.logoRow}>
          <Image
            src="/huji.svg"
            alt="HUJI Logo"
            width={80}
            height={80}
            priority
          />
          <Image
            src="/bezalel.svg"
            alt="Bezalel Logo"
            width={80}
            height={80}
            priority
          />
        </div>
      </div>
    </main>
  );
}
