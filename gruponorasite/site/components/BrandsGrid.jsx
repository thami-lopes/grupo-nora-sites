"use client";

import NavLink from "./NavLink";
import Reveal from "./Reveal";
import { SITE_LINKS } from "@/lib/siteLinks";

const BRANDS = [
  { key: "care", name: "Care", desc: "Gestão Médica e Hospitalar", delay: 0, href: SITE_LINKS.care },
  { key: "capital", name: "Capital", desc: "Contabilidade e Gestão Financeira", delay: 70, href: SITE_LINKS.capital },
  { key: "safe", name: "Safe", desc: "Seguros e Proteção Especializada", delay: 140, href: SITE_LINKS.safe },
  { key: "edu", name: "Educação", desc: "Formação e Desenvolvimento Profissional", delay: 210, href: SITE_LINKS.educacao },
];

export default function BrandsGrid() {
  return (
    <section className="section" id="nossas-marcas">
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">Nossas Marcas</div>
          <h2 className="section-title" style={{ maxWidth: "20ch" }}>
            Quatro negócios, um só ecossistema de gestão.
          </h2>
        </Reveal>
        <div className="brands-grid">
          {BRANDS.map((brand) => (
            <Reveal
              key={brand.key}
              as={NavLink}
              href={brand.href}
              from="scale"
              delay={brand.delay}
              className={`brand-card brand-card--${brand.key}`}
            >
              <span className="brand-card__band"></span>
              <div className="brand-card__logo">
                <img src="/assets/nora-word-navy.png" alt="" />
                <span>{brand.name}</span>
              </div>
              <div className="brand-card__desc">{brand.desc}</div>
              <span className="brand-card__btn">
                Acessar <span aria-hidden="true">→</span>
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
