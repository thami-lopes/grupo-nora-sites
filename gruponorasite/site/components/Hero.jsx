"use client";

import { useEffect, useRef, useState } from "react";
import NavLink from "./NavLink";
import Reveal from "./Reveal";

export default function Hero() {
  const videoRef = useRef(null);
  const copyRef = useRef(null);
  const markRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);

    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      if (mq.matches) {
        video.pause();
        setPlaying(false);
      } else {
        const p = video.play();
        if (p && p.catch) p.catch(() => {});
      }
    }
  }, []);

  useEffect(() => {
    if (reduce) return;
    let ticking = false;
    function parallax() {
      ticking = false;
      const y = window.pageYOffset;
      const h = window.innerHeight || 900;
      const t = Math.min(1, y / h);
      if (videoRef.current) {
        videoRef.current.style.transform = `scale(${1.1 + t * 0.06}) translateY(${-t * 34}px)`;
      }
      if (copyRef.current) {
        copyRef.current.style.transform = `translateY(${t * 46}px)`;
        copyRef.current.style.opacity = String(Math.max(0, 1 - t * 1.35));
      }
      if (markRef.current) {
        markRef.current.style.transform = `translateY(${-t * 26}px)`;
      }
    }
    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(parallax);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    parallax();
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduce]);

  function togglePlaying() {
    const next = !playing;
    setPlaying(next);
    const video = videoRef.current;
    if (video) {
      try {
        next ? video.play() : video.pause();
      } catch (e) {}
    }
  }

  const label = playing ? "Pausar vídeo institucional" : "Reproduzir vídeo institucional";

  return (
    <section className="hero-wrap">
      <div className="hero">
        <video
          ref={videoRef}
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src="/assets/hero-nora.mp4" type="video/mp4" />
        </video>
        <div className="hero__grade hero__grade--1"></div>
        <div className="hero__grade hero__grade--2"></div>
        <div className="hero__grade hero__grade--3"></div>
        <div className="hero__grade hero__grade--4"></div>
        <div className="hero__grade hero__grade--5"></div>
        <img
          ref={markRef}
          className="hero__mark"
          src="/assets/nora-symbol-white.png"
          alt=""
          aria-hidden="true"
        />

        <div className="hero__copy-wrap">
          <Reveal ref={copyRef} className="hero__copy">
            <div className="eyebrow eyebrow--light">
              <span className="eyebrow__dot"></span>
              <span>Grupo Nora</span>
            </div>
            <h1 className="hero__title">
              Um ecossistema <br className="lg-break" />
              completo para a <br className="lg-break" />
              gestão da saúde.
            </h1>
            <div className="hero__actions">
              <NavLink href="#nossas-marcas" className="btn btn--light">
                Conheça Nossas Marcas <span aria-hidden="true">→</span>
              </NavLink>
              <NavLink href="#contato" className="btn btn--outline">
                Fale Conosco
              </NavLink>
            </div>
            <div className="hero__disciplines">
              <span>Gestão médica</span>
              <span className="dot"></span>
              <span>Contabilidade</span>
              <span className="dot"></span>
              <span>Seguros especializados</span>
            </div>
          </Reveal>
        </div>

        <button className="hero__playpause" onClick={togglePlaying} aria-label={label}>
          <span className={`icon-pause${playing ? "" : " is-paused"}`}>
            <span></span>
            <span></span>
          </span>
          <span>{label}</span>
        </button>
      </div>
    </section>
  );
}
