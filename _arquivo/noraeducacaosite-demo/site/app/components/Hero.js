"use client";

import { useEffect, useRef, useState } from "react";
import { scrollToId } from "../lib/scroll";
import styles from "./Hero.module.css";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export default function Hero() {
  const copyRef = useRef(null);
  const [reduced] = useState(prefersReducedMotion);

  useEffect(() => {
    if (reduced) return;
    let ticking = false;
    const parallax = () => {
      ticking = false;
      const h = window.innerHeight || 900;
      const t = Math.min(1, window.scrollY / h);
      if (copyRef.current) {
        copyRef.current.style.transform = `translateY(${t * 46}px)`;
        copyRef.current.style.opacity = String(Math.max(0, 1 - t * 1.35));
      }
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(parallax);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    parallax();
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduced]);

  return (
    <section id="top" className={styles.section}>
      <div className={styles.frame}>
        <div className={styles.scrim} />

        <div ref={copyRef} className={styles.copyWrap}>
          <div className={styles.copy}>
            <h1 className={styles.headline}>
              Formação para profissionais de saúde que salvam vidas.
            </h1>
            <p className={styles.lead}>
              Cursos práticos de suporte de vida e emergências para
              profissionais de saúde, com certificação Internacional HSI e
              turmas com instrutores especialistas.
            </p>
            <div className={styles.actions}>
              <button
                type="button"
                onClick={() => scrollToId("cursos", 96)}
                className={styles.primaryBtn}
              >
                Ver Cursos <span>→</span>
              </button>
              <button
                type="button"
                onClick={() => scrollToId("contato", 20)}
                className={styles.secondaryBtn}
              >
                Fale Conosco
              </button>
            </div>
            <div className={styles.features}>
              <span>Certificação Internacional HSI</span>
              <span className={styles.dot} />
              <span>Turmas reduzidas</span>
              <span className={styles.dot} />
              <span>Compra 100% segura pelo site</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
