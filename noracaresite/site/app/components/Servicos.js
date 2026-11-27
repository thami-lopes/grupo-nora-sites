import Reveal from "./Reveal";
import { ContatoLink } from "./ScrollLink";
import styles from "./Servicos.module.css";

const SERVICES = [
  {
    n: "01",
    title: "Gestão de Escalas",
    text: "Recrutamento e seleção de médicos de diversas especialidades para garantir cobertura eficiente.",
    span: 2,
  },
  {
    n: "02",
    title: "Capacitação Médica",
    text: "Treinamentos teórico-práticos para desenvolver e alinhar o corpo clínico às estratégias da instituição.",
    span: 2,
  },
  {
    n: "03",
    title: "Gestão de Processos",
    text: "Monitoramento de indicadores clínicos para melhorar resultados assistenciais e operacionais.",
    span: 2,
  },
  {
    n: "04",
    title: "Comissões Obrigatórias",
    text: "Implementação e estruturação das comissões exigidas, garantindo conformidade regulatória.",
    span: 3,
  },
  {
    n: "05",
    title: "Pagamento de Honorários",
    text: "Gestão e pagamentos com total conformidade fiscal, simplificando contratos e notas fiscais.",
    span: 3,
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className={styles.section}>
      <div className={styles.wrap}>
        <Reveal className={styles.header}>
          <div className={styles.headerRow}>
            <div className={styles.headerLeft}>
              <div className={styles.pill}>Serviços</div>
              <h2 className={styles.title}>
                Soluções estratégicas para a gestão médica.
              </h2>
            </div>
            <div className={styles.headerRight}>
              <p className={styles.text}>
                Serviços especializados para organizar equipes, otimizar
                processos e trazer mais eficiência à operação de clínicas e
                hospitais.
              </p>
              <ContatoLink className={styles.cta}>
                Solicite um contato <span>→</span>
              </ContatoLink>
            </div>
          </div>
          <div className={styles.frentes}>05 frentes de atuação</div>
        </Reveal>

        <div className={styles.grid}>
          {SERVICES.map((s, i) => (
            <Reveal
              key={s.n}
              as="article"
              from="scale"
              delay={i * 70}
              className={`${styles.card} ${s.span === 3 ? styles.spanThree : styles.spanTwo}`}
            >
              <span className={styles.band} />
              <div className={styles.cardTop}>
                <span className={styles.num}>{s.n}</span>
                <span className={styles.dot} />
              </div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardText}>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
