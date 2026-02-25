"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Footer.module.css";


export default function Footer() {
  
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          io.disconnect(); // как в оригинале: анимация один раз
        }
      },
      {
        // аналог rect.top < windowHeight * 0.9
        root: null,
        threshold: 0,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <footer
      ref={ref}
      className={`${styles["site-footer"]} ${isVisible ? styles.visible : ""}`}
    >
      <div className={styles["footer-content"]}>

        <div className={styles["footer-logo"]}>
          <img src="/images/лого.png" alt="Le Jardin" className={styles["logo-img"]} />
          <p className={styles["restaurant-tagline"]}>Французский ресторан у моря</p>
        </div>

        <div className={styles["footer-contacts"]}>
          <h3 className={styles["footer-heading"]}>Контакты</h3>
          <p className={styles["contact-item"]}>Верхняя Набережная улица, 25, Анапа</p>
          <p className={styles["contact-item"]}>+7 (998) 787-23-55</p>
          <p className={styles["contact-item"]}>restaurantumorya@lejardin.ru</p>
        </div>

        <div className={styles["footer-hours"]}>
          <h3 className={styles["footer-heading"]}>Часы работы</h3>
          <p>Ежедневно: 9:00 – 00:00</p>
          <p>Бранч: Сб.-Вс. 10:00 – 12:00</p>
        </div>

        <div className={styles["footer-social"]}>
  <h3 className={styles["footer-heading"]}>Следуйте за нами</h3>

  <div className={styles["social-icons"]}>
    <a className={styles["social-link"]} href="#" aria-label="ВКонтакте">
      <img src="/images/вк.png" alt="" className={styles["social-icon"]} />
    </a>

    <a className={styles["social-link"]} href="#" aria-label="Instagram">
      <img src="/images/инстаграм.png" alt="" className={styles["social-icon"]} />
    </a>

    <a className={styles["social-link"]} href="#" aria-label="Telegram">
      <img src="/images/телеграм.png" alt="" className={styles["social-icon"]} />
    </a>
  </div>
</div>


        <div className={styles["footer-bottom"]}>
          <p>© 2026 Le Jardin</p>
        </div>

      </div>
    </footer>
  );
}
