"use client";

import { forwardRef, useEffect, useRef, useState } from "react";

function mergeRefs(...refs) {
  return (node) => {
    refs.forEach((r) => {
      if (!r) return;
      if (typeof r === "function") r(node);
      else r.current = node;
    });
  };
}

const Reveal = forwardRef(function Reveal(
  { as: Tag = "div", from, delay = 0, className = "", ...rest },
  forwardedRef
) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.unobserve(el);
          window.setTimeout(() => setVisible(true), delay);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  const dataFrom = from ? { "data-from": from } : {};

  return (
    <Tag
      ref={mergeRefs(ref, forwardedRef)}
      data-reveal
      {...dataFrom}
      className={`${className}${visible ? " is-visible" : ""}`.trim()}
      {...rest}
    />
  );
});

export default Reveal;
