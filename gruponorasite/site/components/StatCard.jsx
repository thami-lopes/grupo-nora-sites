"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

export default function StatCard({ target, prefix = "", label, desc, from, delay }) {
  const cardRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      setCount(target);
      return;
    }

    function run() {
      const t0 = performance.now();
      const dur = 1100;
      function tick(now) {
        const p = Math.min(1, (now - t0) / dur);
        const e = 1 - Math.pow(1 - p, 3);
        setCount(Math.round(target * e));
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run();
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return (
    <Reveal ref={cardRef} className="stat-card" from={from} delay={delay}>
      <span className="stat-card__band"></span>
      <div className="stat-card__num">
        {prefix && <span>{prefix}</span>}
        <span>{count}</span>
      </div>
      <div className="stat-card__label">{label}</div>
      <div className="stat-card__desc">{desc}</div>
    </Reveal>
  );
}
