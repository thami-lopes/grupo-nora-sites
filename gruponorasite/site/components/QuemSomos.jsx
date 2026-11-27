"use client";

import Reveal from "./Reveal";
import StatCard from "./StatCard";

const STATS = [
  { target: 24, prefix: "+", label: "Instituições de saúde", desc: "Parcerias sólidas com hospitais de referência e unidades de atendimento.", delay: 0 },
  { target: 1500, prefix: "+", label: "Médicos prestadores", desc: "Uma rede qualificada, engajada e em constante crescimento profissional.", delay: 80 },
  { target: 10, prefix: "+", label: "Municípios atendidos", desc: "Presença estratégica em diversas regiões, levando gestão de qualidade.", delay: 160 },
  { target: 9, prefix: "", label: "Operadoras de saúde", desc: "Integração e atuação conjunta com os principais players do mercado.", delay: 240 },
];

export default function QuemSomos() {
  return (
    <section className="section" id="quem-somos">
      <div className="container">
        <Reveal className="panel panel--navy panel--somos">
          <div className="somos-grid">
            <Reveal as="div" from="left" className="somos-intro">
              <div className="eyebrow eyebrow--light">Quem Somos</div>
              <div className="somos-kicker">Muito prazer, somos o</div>
              <h2 className="somos-title">Grupo Nora</h2>
              <div className="somos-since">
                <span className="somos-since__year">2020</span>
                <span className="somos-since__rule"></span>
                <span className="somos-since__label">
                  <span>Desde</span>
                  <span>origem contadoc</span>
                </span>
              </div>
            </Reveal>
            <div className="somos-body">
              <Reveal as="p" from="right" delay={60} className="somos-lead">
                O que começou em 2020 como contadoc evoluiu para um{" "}
                <strong>ecossistema de soluções</strong> pensado para acompanhar as
                necessidades e a complexidade do <strong>setor da saúde</strong>.
              </Reveal>
              <div className="somos-cols">
                <Reveal as="div" from="right" delay={140} className="somos-col">
                  <div className="somos-col__kicker">Expertise</div>
                  <p>
                    Criado por médicos, contadores e economistas, unimos a expertise do
                    mercado financeiro ao conhecimento do universo da saúde — contabilidade
                    digital, seguros especializados, planejamento financeiro e gestão de
                    equipes médicas.
                  </p>
                </Reveal>
                <Reveal as="div" from="right" delay={230} className="somos-col">
                  <div className="somos-col__kicker">Propósito</div>
                  <p>
                    Acreditamos que, quando a gestão é bem estruturada, o profissional de
                    saúde pode focar no que realmente importa: o cuidado com as pessoas.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="panel panel--white panel--legado">
          <Reveal as="h3" className="legado-title">
            Nosso legado na saúde
          </Reveal>
          <div className="stats-grid">
            {STATS.map((s) => (
              <StatCard key={s.label} from="scale" {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
