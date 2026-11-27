"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function LeaderCard({ name, role, img, objectPosition, shortBio, fullBio, from, delay }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal as="article" from={from} delay={delay} className="leader-card">
      <span className="leader-card__band"></span>
      <div className="leader-card__ring">
        <img
          src={img}
          alt={name}
          className="leader-card__img"
          style={{ objectPosition }}
        />
      </div>
      <div className="leader-card__body">
        <div>
          <h3>{name}</h3>
          <div className="leader-card__role">{role}</div>
        </div>
        <p className="leader-card__bio">
          <span className="bio-short">{shortBio}</span>
          {open && <span className="bio-full"> {fullBio}</span>}
        </p>
        <button
          className="bio-toggle"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Recolher biografia" : "Ler biografia completa"}{" "}
          <span aria-hidden="true">↕</span>
        </button>
      </div>
    </Reveal>
  );
}
