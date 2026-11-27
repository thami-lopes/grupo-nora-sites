import Reveal from "./Reveal";
import { ContatoLink } from "./ScrollLink";
import styles from "./Instalacoes.module.css";

const SPACES = [
  { key: "recepcao", label: "Recepção e lounge", photo: "/assets/instalacoes/esp-recepcao.jpg" },
  { key: "estudio-ead", label: "Estúdio de gravação EAD", photo: "/assets/instalacoes/esp-estudio-ead.jpg" },
  { key: "sala-aula", label: "Sala de aula", photo: "/assets/instalacoes/esp-sala-aula.jpg" },
  { key: "circulacao", label: "Circulação e biblioteca", photo: "/assets/instalacoes/esp-circulacao.jpg" },
  { key: "sala-reuniao", label: "Sala de reunião", photo: "/assets/instalacoes/esp-sala-reuniao.jpg" },
  {
    key: "simulacao",
    label: "Sala de simulação",
    text: "Imagem de projeto.",
    photo: "/assets/instalacoes/esp-simulacao-projeto.jpg",
  },
  {
    key: "debriefing",
    label: "Debriefing e aulas",
    text: "TV para rever a gravação, quadro para ABP e mesa de discussão em grupo. Imagem de projeto.",
    photo: "/assets/instalacoes/esp-debriefing-projeto.jpg",
  },
  {
    key: "simulacao-equipada",
    label: "Sala de simulação equipada",
    text: "Manequim de alta fidelidade, monitor de sinais vitais, ventilador mecânico e carrinho de emergência. Imagem ilustrativa.",
    photo: "/assets/instalacoes/esp-simulacao-equipada.jpg",
  },
];

export default function Instalacoes() {
  return (
    <section id="instalacoes" className={styles.section}>
      <div className={styles.wrap}>
        <Reveal className={styles.header}>
          <div className={styles.headerLeft}>
            <h2 className={styles.title}>
              Estrutura pensada para o aprendizado prático.
            </h2>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.text}>
              Turmas reduzidas, manequins de alta fidelidade e estações de
              simulação dedicadas a cada curso — para treinar como se fosse
              real, antes que seja.
            </p>
            <ContatoLink className={styles.cta}>
              Agende uma visita <span>→</span>
            </ContatoLink>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {SPACES.map((s, i) => (
            <Reveal
              key={s.key}
              as="figure"
              from="scale"
              delay={i * 70}
              className={styles.card}
            >
              <div className={styles.photoFrame}>
                {/* eslint-disable-next-line @next/next/no-img-element -- plain <img> like the sibling static assets */}
                <img src={s.photo} alt={s.label} className={styles.photo} />
              </div>
              <figcaption className={styles.caption}>
                <span className={styles.captionTitle}>{s.label}</span>
                {s.text && <span className={styles.captionText}>{s.text}</span>}
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
