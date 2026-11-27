"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Reveal.module.css";

export default function Reveal({
  from = "up",
  delay = 0,
  as: Tag = "div",
  className = "",
  style,
  children,
}) {
  const ref = useRef(null);
  const [armed, setArmed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window) || !ref.current) return;

    setArmed(true);
    const el = ref.current;
    let timer;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timer = setTimeout(() => setVisible(true), delay);
            io.unobserve(el);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, [delay]);

  const state = armed && visible ? "visible" : armed ? "pending" : "";

  return (
    <Tag
      ref={ref}
      data-from={from}
      className={[styles.reveal, state && styles[state], className]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {children}
    </Tag>
  );
}
