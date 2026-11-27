import Reveal from "./Reveal";
import { HYBRID_STEPS } from "../lib/courses";
import styles from "./ComoFunciona.module.css";

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className={styles.section}>
      <div className={styles.wrap}>
        <Reveal className={styles.header}>
          <h2 className={styles.title}>Como funcionam os cursos.</h2>
          <p className={styles.text}>
            Todos os cursos são híbridos: você estuda e é avaliado online, e
            treina na prática no dia presencial.
          </p>
        </Reveal>

        <ol className={styles.grid}>
          {HYBRID_STEPS.map((step, i) => (
            <Reveal
              key={step.title}
              as="li"
              from="up"
              delay={i * 70}
              className={styles.card}
            >
              <span className={styles.num}>{i + 1}</span>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardText}>{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
