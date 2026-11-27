"use client";

import { useEffect, useRef } from "react";
import Reveal from "./Reveal";
import { ContatoLink } from "./ScrollLink";
import styles from "./Educacao.module.css";

export default function Educacao() {
  const videoRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const panel = panelRef.current;
    if (!video || !panel) return;

    const arm = () => {
      if (video.dataset.armed) return;
      video.dataset.armed = "1";
      video.preload = "auto";
      video.load();
      const p = video.play();
      if (p && p.catch) p.catch(() => {});
    };

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              arm();
              io.disconnect();
            }
          });
        },
        { threshold: 0.25 },
      );
      io.observe(panel);
      return () => io.disconnect();
    }
    arm();
  }, []);

  return (
    <section className={styles.section}>
      <Reveal className={styles.card}>
        <div className={styles.grid}>
          <Reveal from="left" delay={80} className={styles.text}>
            <div className={styles.pill}>Nora Educação</div>
            <h2 className={styles.title}>
              Com o serviço de Gestão de Equipes Médicas, você também tem
              acesso à Nora Educação.
            </h2>
            <div className={styles.actions}>
              <ContatoLink className={styles.cta}>
                Fale Conosco <span>→</span>
              </ContatoLink>
              <span className={styles.flag}>Vídeo em aprovação</span>
            </div>
          </Reveal>

          <Reveal from="right" delay={180} className={styles.videoPanel}>
            <div ref={panelRef} className={styles.videoInner}>
              <video
                ref={videoRef}
                muted
                loop
                playsInline
                preload="none"
                poster="/assets/hero-nora-care-poster.png"
                className={styles.video}
              >
                <source src="/assets/hero-nora-care.mp4" type="video/mp4" />
              </video>
              <div className={styles.scrim} />
              <div className={styles.caption}>
                <div className={styles.badge}>
                  <span className={styles.badgeDot} />
                  Vídeo provisório
                </div>
                <div className={styles.captionText}>
                  Slot de vídeo · Nora Educação
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Reveal>
    </section>
  );
}
