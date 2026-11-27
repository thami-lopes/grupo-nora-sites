"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import styles from "./Lideranca.module.css";

export default function LeadershipCard({
  name,
  role,
  photo,
  objectPosition,
  short,
  full,
  from,
  delay,
}) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal as="article" from={from} delay={delay} className={styles.card}>
      <span className={styles.band} />
      <div className={styles.ring}>
        <Image
          src={photo}
          alt={name}
          fill
          sizes="148px"
          className={styles.photo}
          style={{ objectPosition }}
        />
      </div>
      <h3 className={styles.name}>{name}</h3>
      <div className={styles.role}>{role}</div>
      <p className={styles.bio}>
        {short}
        {open && <span className={styles.bioFull}> {full}</span>}
      </p>
      <button
        type="button"
        className={styles.bioBtn}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Recolher texto" : "Ler mais"}{" "}
        <span
          className={styles.caret}
          style={{ transform: open ? "rotate(180deg)" : "none" }}
        >
          ↓
        </span>
      </button>
    </Reveal>
  );
}
