"use client";

import NavLink from "./NavLink";
import Reveal from "./Reveal";

const OPERADORAS = ["Hapvida", "AMI", "Athena Saúde", "DaVita", "Grupo Assim"];
const HOSPITAIS = ["Hapvida NotreDame", "HCJ", "HSCOR", "SAMP", "Santa Marta", "Vitória Apart", "NotreDame"];

function Marquee({ items, direction, count }) {
  const track = [...items, ...items];
  return (
    <div className="marquee-mask">
      <div className={`marquee marquee--${direction}`} data-marquee>
        <div className="marquee__track">
          {track.map((name, i) => (
            <span className="logo-tile" data-logo key={i}>
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Parceiros() {
  return (
    <section className="section" id="parceiros">
      <div className="container">
        <Reveal from="left" className="panel panel--white panel--parceiros">
          <div className="parceiros-head">
            <div className="parceiros-head__copy">
              <div className="eyebrow">Nossos Parceiros</div>
              <h2 className="section-title" style={{ maxWidth: "26ch" }}>
                Ao lado de quem move a saúde.
              </h2>
              <p>
                Atuamos ao lado de instituições e empresas que compartilham o mesmo
                compromisso com excelência, confiança e resultados no setor da saúde.
              </p>
            </div>
            <NavLink href="#contato" className="btn btn--dark parceiros-head__cta">
              Seja um parceiro <span aria-hidden="true">→</span>
            </NavLink>
          </div>

          <div className="marquee-group">
            <div className="marquee-group__head">
              <span>Operadoras</span>
              <span className="marquee-group__count">{OPERADORAS.length} parceiros</span>
            </div>
            <Marquee items={OPERADORAS} direction="left" />
          </div>

          <div className="marquee-group">
            <div className="marquee-group__head">
              <span>Hospitais</span>
              <span className="marquee-group__count">{HOSPITAIS.length} parceiros</span>
            </div>
            <Marquee items={HOSPITAIS} direction="right" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
