"use client";

import { useEffect, useState } from "react";


import Link from "next/link";
import styles from "./Header.module.css";


export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll(); // чтобы при перезагрузке на середине страницы сразу было правильно
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles["nav"]}>
        <img src="/images/лого.png" className={styles["header-logo"]} alt="Le Jardin" />

        <div className={styles["nav-container"]}>
          <Link href="/" className={styles["nav-link"]}>Главная</Link>
          <Link href="/menu" className={styles["nav-link"]}>Меню</Link>
          <Link href="/banquets" className={styles["nav-link"]}>Банкеты</Link>
          <Link href="/about" className={styles["nav-link"]}>О нас</Link>
        </div>

        <button className={styles["booking-button"]}>
          Забронировать
        </button>
      </nav>
    </header>
  );
}
