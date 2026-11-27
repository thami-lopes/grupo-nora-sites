"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { ContatoLink } from "./ScrollLink";
import styles from "./Faq.module.css";

const ITEMS = [
  {
    q: "O que é o Nora Care?",
    a: "O Nora Care é a solução do Grupo Nora voltada para a gestão profissional e hospitalar, oferecendo suporte completo na contratação, organização e gestão de médicos, além da otimização de processos assistenciais e administrativos em clínicas e hospitais.",
  },
  {
    q: "Para quais instituições o Nora Care é indicado?",
    a: "O serviço é indicado para hospitais, clínicas e instituições de saúde que buscam maior eficiência na gestão de equipes médicas, organização de escalas, controle de indicadores e conformidade regulatória.",
  },
  {
    q: "Como funciona a gestão de escalas médicas?",
    a: "O Nora Care realiza o recrutamento e a seleção de médicos de diversas especialidades, garantindo cobertura adequada de plantões e escalas organizadas de forma estratégica para cada instituição.",
  },
  {
    q: "O Nora Care também cuida da contratação dos médicos?",
    a: "Sim. O Nora Care atua no processo de recrutamento, seleção e gestão profissional de médicos, garantindo transparência, eficiência operacional e conformidade tributária.",
  },
  {
    q: "Como funciona o pagamento de honorários médicos?",
    a: "Realizamos a gestão completa dos pagamentos de honorários, garantindo conformidade fiscal, organização de contratos e emissão correta de notas fiscais, oferecendo segurança tanto para a instituição quanto para os profissionais.",
  },
  {
    q: "O Nora Care ajuda na melhoria da qualidade assistencial?",
    a: "Sim. Através do monitoramento de indicadores clínicos e operacionais, o Nora Care contribui para a melhoria contínua dos resultados assistenciais e da eficiência das unidades de saúde.",
  },
  {
    q: "O serviço inclui capacitação para médicos?",
    a: "Sim. Oferecemos treinamentos teórico-práticos para alinhar o corpo clínico às diretrizes e estratégias da instituição, fortalecendo a qualidade do atendimento e o desenvolvimento profissional.",
  },
  {
    q: "O Nora Care auxilia na implementação de comissões obrigatórias?",
    a: "Sim. Estruturamos e implementamos as comissões obrigatórias exigidas pelos órgãos reguladores, garantindo que a instituição esteja em conformidade com as normas do setor.",
  },
  {
    q: "O Grupo Nora já atende grandes instituições de saúde?",
    a: "Sim. O Grupo Nora é reconhecido por grandes grupos de saúde e atua com foco em eficiência, inovação e segurança na gestão hospitalar.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className={styles.section}>
      <Reveal className={styles.card}>
        <div className={styles.blobTop} />
        <div className={styles.blobBottom} />
        <div className={styles.topLine} />
        <div className={styles.grid}>
          <Reveal from="left" className={styles.header}>
            <div className={styles.pill}>FAQ</div>
            <h2 className={styles.title}>Perguntas Frequentes</h2>
            <p className={styles.text}>
              Não encontrou o que procurava? Fale com a nossa equipe.
            </p>
            <ContatoLink className={styles.cta}>
              Fale Conosco <span>→</span>
            </ContatoLink>
          </Reveal>

          <div className={styles.list}>
            {ITEMS.map((item, i) => {
              const open = i === openIndex;
              return (
                <Reveal
                  key={item.q}
                  from="up"
                  delay={i * 60}
                  className={`${styles.item} ${open ? styles.itemOpen : ""}`}
                >
                  <button
                    type="button"
                    className={styles.itemBtn}
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    aria-expanded={open}
                  >
                    <span className={styles.num}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.q}>{item.q}</span>
                    <span className={styles.icon}>+</span>
                  </button>
                  <div className={styles.panelWrap}>
                    <div className={styles.panelInner}>
                      <p className={styles.a}>{item.a}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
