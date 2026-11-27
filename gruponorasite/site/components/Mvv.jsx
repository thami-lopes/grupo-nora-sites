"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";

const VALUES = [
  {
    key: "humana",
    num: "01",
    label: "Humana",
    text: "Valorizamos as pessoas como o centro de tudo que fazemos. Nossa equipe coloca o ser humano em primeiro lugar, cuidando de clientes, parceiros e colegas com empatia, atenção e respeito genuíno.",
  },
  {
    key: "responsavel",
    num: "02",
    label: "Responsável",
    text: "Nosso compromisso vai além do trabalho diário. Cultivamos uma responsabilidade coletiva que reflete cuidado com o outro e com o ambiente ao nosso redor, atuando de forma consciente e gentil em todas as nossas interações.",
  },
  {
    key: "inovadora",
    num: "03",
    label: "Inovadora",
    text: "Somos movidos pela inovação, com agilidade e eficiência para desenvolver soluções que acompanham a evolução do mercado médico. Buscamos constantemente aprimorar nossos processos e serviços para atender às necessidades de nossos clientes.",
  },
  {
    key: "etica",
    num: "04",
    label: "Ética",
    text: "Agimos com integridade e respeito às normas legais, guiados por princípios sólidos que garantem decisões responsáveis e o melhor interesse de nossos clientes e parceiros.",
  },
  {
    key: "transparente",
    num: "05",
    label: "Transparente",
    text: "A confiança é a base do nosso trabalho. Mantemos uma comunicação clara, honesta e aberta, garantindo segurança e construindo relações duradouras com nossos clientes.",
  },
];

export default function Mvv() {
  const [active, setActive] = useState("humana");
  const [hoverCapable, setHoverCapable] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setHoverCapable(mq.matches);
    const handler = (e) => setHoverCapable(e.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  function handleEnter(key) {
    if (hoverCapable) setActive(key);
  }

  function handleClick(key) {
    if (hoverCapable) {
      setActive(key);
    } else {
      setActive((cur) => (cur === key ? null : key));
    }
  }

  function handleKeyDown(e, key) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick(key);
    }
  }

  const current = VALUES.find((v) => v.key === active);

  return (
    <section className="section" id="mvv">
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">Missão, Visão e Valores</div>
          <h2 className="section-title">O que nos move e como fazemos.</h2>
        </Reveal>

        <div className="mvv-grid">
          <Reveal as="div" from="left" className="mvv-box mvv-box--mission">
            <div className="mvv-box__label">Missão</div>
            <p>
              Transformar a gestão na saúde por meio de soluções inteligentes, seguras e
              humanas, permitindo que profissionais e instituições foquem no que
              realmente importa: o cuidado com as pessoas.
            </p>
          </Reveal>
          <Reveal as="div" from="right" delay={90} className="mvv-box mvv-box--vision">
            <div className="mvv-box__label">Visão</div>
            <p>
              Ser referência no Brasil em soluções integradas de gestão para o setor da
              saúde, reconhecida pela inovação, confiança e pelo impacto positivo na vida
              de profissionais, instituições e pacientes.
            </p>
          </Reveal>
        </div>

        <Reveal delay={150} className="values-panel">
          <div className="values-list">
            <div className="values-list__head">
              <span>Valores</span>
              <span className="values-list__hint">passe o mouse</span>
            </div>

            {VALUES.map((v) => {
              const isActive = v.key === active;
              return (
                <div
                  key={v.key}
                  data-key={v.key}
                  className={`value-row${isActive ? " is-active" : ""}`}
                  tabIndex={0}
                  onMouseEnter={() => handleEnter(v.key)}
                  onClick={() => handleClick(v.key)}
                  onKeyDown={(e) => handleKeyDown(e, v.key)}
                >
                  <span className="value-row__bar"></span>
                  <span className="value-row__num">{v.num}</span>
                  <span className="value-row__label">{v.label}</span>
                  <span className="value-row__icon" aria-hidden="true">
                    {isActive ? "–" : "+"}
                  </span>
                  <div className="value-row__text">{v.text}</div>
                </div>
              );
            })}
          </div>

          <div className="values-display">
            <div className="values-display__glow"></div>
            <div className="values-display__label">{current?.label}</div>
            <p className="values-display__text">{current?.text}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
