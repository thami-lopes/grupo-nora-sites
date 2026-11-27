"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const TESTIMONIALS = [
  {
    text: "O Grupo Nora trouxe mais clareza para nossa gestão financeira e contábil. Hoje temos mais segurança nas decisões e uma rotina muito mais organizada.",
    initials: "RA",
    name: "Dr. Ricardo Almeida",
  },
  {
    text: "Encontramos um atendimento extremamente profissional, com entendimento real das necessidades da área da saúde. Isso faz toda a diferença no dia a dia.",
    initials: "FM",
    name: "Dra. Fernanda Martins",
  },
  {
    text: "Com o apoio do Grupo Nora, ganhamos eficiência na gestão e mais tranquilidade para focar no que realmente importa: a qualidade do cuidado prestado aos pacientes.",
    initials: "RA",
    name: "Dr. Ricardo Almeida",
  },
];

const POS = [
  { x: 0, s: 1, o: 1, z: 30 },
  { x: -26, s: 0.965, o: 0.5, z: 20 },
  { x: -48, s: 0.93, o: 0, z: 10 },
];

const n = TESTIMONIALS.length;

export default function Depoimentos() {
  const [active, setActive] = useState(0);
  const [entering, setEntering] = useState(null);
  const timerRef = useRef(null);
  const reduceRef = useRef(false);

  useEffect(() => {
    reduceRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function start() {
    if (reduceRef.current || timerRef.current) return;
    timerRef.current = setInterval(() => {
      setActive((cur) => go(cur, (cur + 1) % n));
    }, 4200);
  }

  function stop() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  function go(cur, next) {
    if (next === cur) return cur;
    setEntering(next);
    // matches the original: entrance transform applied instantly (no transition),
    // then released on the next frame so it animates in.
    requestAnimationFrame(() => setEntering(null));
    return next;
  }

  function handleDotClick(i, e) {
    e.stopPropagation();
    stop();
    setActive((cur) => go(cur, i));
    start();
  }

  function handleStackClick() {
    stop();
    setActive((cur) => go(cur, (cur + 1) % n));
    start();
  }

  return (
    <section className="section" id="depoimentos">
      <div className="container">
        <Reveal className="depo-grid">
          <div className="depo-intro">
            <div className="eyebrow">Depoimentos</div>
            <h2 className="section-title" style={{ maxWidth: "16ch" }}>
              O que dizem nossos clientes.
            </h2>
            <p>
              Depoimentos de clientes que encontraram no Grupo Nora mais segurança,
              organização e inteligência para a gestão no setor da saúde.
            </p>
            <div className="depo-dots">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className={`depo-dot${i === active ? " is-active" : ""}`}
                  aria-label={`Depoimento ${i + 1}`}
                  onClick={(e) => handleDotClick(i, e)}
                />
              ))}
            </div>
          </div>
          <div
            className="depo-stack"
            onMouseEnter={stop}
            onMouseLeave={start}
            onClick={handleStackClick}
          >
            <div className="depo-stack__shadow"></div>
            {TESTIMONIALS.map((t, i) => {
              const isEntering = entering === i;
              const pos = POS[Math.min((active - i + n) % n, POS.length - 1)];
              const style = isEntering
                ? { transition: "none", transform: "translateX(96px) scale(1.03)", opacity: 0, zIndex: 40 }
                : { transform: `translateX(${pos.x}px) scale(${pos.s})`, opacity: pos.o, zIndex: pos.z };
              return (
                <article className="depo-card" key={i} style={style}>
                  <div className="depo-card__stars" aria-hidden="true">
                    ★★★★★
                  </div>
                  <p>{t.text}</p>
                  <div className="depo-card__author">
                    <span className="depo-card__avatar">{t.initials}</span>
                    <span>{t.name}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
