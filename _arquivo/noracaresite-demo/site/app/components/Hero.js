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
  const videoRef = useRef(null);
  const copyRef = useRef(null);
  const [reduced] = useState(prefersReducedMotion);
  const [playing, setPlaying] = useState(() => !prefersReducedMotion());

  useEffect(() => {
    const video = videoRef.current;
    if (reduced) {
      if (video) video.pause();
      return;
    }

    let ticking = false;
    const parallax = () => {
      ticking = false;
      const h = window.innerHeight || 900;
      const t = Math.min(1, window.scrollY / h);
      if (video) {
        video.style.transform = `scale(${1.1 + t * 0.06}) translateY(${-t * 34}px)`;
      }
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

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !playing;
    try {
      if (next) video.play();
      else video.pause();
    } catch {
      /* autoplay-block edge cases are non-fatal */
    }
    setPlaying(next);
  };

  return (
    <section id="top" className={styles.section}>
      <div className={styles.frame}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/hero-nora-care-poster.png"
          className={styles.video}
        >
          <source src="/assets/hero-nora-care.mp4" type="video/mp4" />
        </video>
        <div className={styles.scrim} />
        {/* eslint-disable-next-line @next/next/no-img-element -- decorative, fluid % positioning, not LCP */}
        <img
          src="/assets/nora-symbol.png"
          alt=""
          aria-hidden="true"
          className={styles.mark}
        />

        <div ref={copyRef} className={styles.copyWrap}>
          <div className={styles.copy}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              <span>Nora Care</span>
            </div>
            <h1 className={styles.headline}>
              Conectando Saúde.
              <br />
              Gerando Resultado.
            </h1>
            <p className={styles.lead}>
              Contratamos e gerimos médicos para clínicas e hospitais: escalas
              cobertas, honorários pagos em dia e compliance tributário do
              início ao fim.
            </p>
            <div className={styles.actions}>
              <button
                type="button"
                onClick={() => scrollToId("sobre", 96)}
                className={styles.primaryBtn}
              >
                Conheça <span>→</span>
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
              <span>Gestão de escalas</span>
              <span className={styles.dot} />
              <span>Capacitação médica</span>
              <span className={styles.dot} />
              <span>Pagamento de honorários</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={togglePlay}
          aria-label={
            playing ? "Pausar vídeo institucional" : "Reproduzir vídeo institucional"
          }
          className={styles.playBtn}
        >
          {playing ? (
            <span className={styles.pauseIcon}>
              <span />
              <span />
            </span>
          ) : (
            <span className={styles.playIcon} />
          )}
          <span className={styles.playLabel}>
            {playing ? "Pausar vídeo institucional" : "Reproduzir vídeo institucional"}
          </span>
        </button>
      </div>
    </section>
  );
}
