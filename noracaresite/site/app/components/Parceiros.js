import Reveal from "./Reveal";
import { ContatoLink } from "./ScrollLink";
import styles from "./Parceiros.module.css";

const OPERADORAS = ["Hapvida", "AMI", "Athena Saúde", "DaVita", "Grupo Assim"];
const HOSPITAIS = [
  "Hapvida NotreDame",
  "HCJ",
  "HSCOR",
  "SAMP",
  "Santa Marta",
  "Vitória Apart",
  "NotreDame",
];

function Marquee({ names, repeat, animation, duration }) {
  const tiles = Array.from({ length: repeat }, () => names).flat();
  return (
    <div className={styles.marqueeMask}>
      <div
        className={styles.track}
        style={{
          animationName: animation,
          animationDuration: `${duration}s`,
        }}
      >
        {tiles.map((name, i) => (
          <div key={i} className={styles.tile}>
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Parceiros() {
  return (
    <section className={styles.section}>
      <Reveal from="left" className={styles.card}>
        <div className={styles.header}>
          <div className={styles.headerText}>
            <div className={styles.pill}>Nossos Parceiros</div>
            <h2 className={styles.title}>Ao lado de quem move a saúde.</h2>
            <p className={styles.text}>
              Atuamos ao lado de instituições e empresas que compartilham o
              mesmo compromisso com excelência, confiança e resultados no
              setor da saúde.
            </p>
          </div>
          <ContatoLink className={styles.cta}>
            Seja um parceiro <span>→</span>
          </ContatoLink>
        </div>

        <div className={styles.rows}>
          <div className={styles.row}>
            <div className={styles.rowLabel}>
              <div className={styles.rowName}>Operadoras</div>
              <div className={styles.rowCount}>5 parceiros</div>
            </div>
            <Marquee
              names={OPERADORAS}
              repeat={4}
              animation="gnMarqueeL"
              duration={34}
            />
          </div>
          <div className={styles.row}>
            <div className={styles.rowLabel}>
              <div className={styles.rowName}>Hospitais</div>
              <div className={styles.rowCount}>7 parceiros</div>
            </div>
            <Marquee
              names={HOSPITAIS}
              repeat={2}
              animation="gnMarqueeR"
              duration={24}
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
