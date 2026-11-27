import Reveal from "./Reveal";
import { ContatoLink } from "./ScrollLink";
import styles from "./Sobre.module.css";

export default function Sobre() {
  return (
    <section id="sobre" className={styles.section}>
      <div className={styles.card}>
        <div className={styles.inner}>
          <div className={styles.grid}>
            <Reveal from="left" className={styles.left}>
              <p className={styles.kicker}>Muito prazer, somos o</p>
              <h2 className={styles.title}>Nora Educação</h2>
              <div className={styles.chip}>
                <div className={styles.chipLeft}>
                  <span className={styles.chipLabel}>Parte do</span>
                  <span className={styles.chipBrand}>Grupo Nora</span>
                </div>
                <span className={styles.chipDivider} />
                <span className={styles.chipText}>
                  ecossistema de soluções para a saúde
                </span>
              </div>
              <ContatoLink className={styles.cta}>
                Fale Conosco <span>→</span>
              </ContatoLink>
            </Reveal>

            <Reveal from="right" delay={120} className={styles.right}>
              <p className={styles.lead}>
                O <strong>Centro de Ensino Nora Educação</strong> forma
                médicos, enfermeiros e profissionais de saúde em suporte de
                vida e emergência, com metodologia prática e{" "}
                <strong>Certificação Internacional HSI</strong>.
              </p>
              <div className={styles.columns}>
                <div className={styles.column}>
                  <div className={styles.columnLabel}>Metodologia</div>
                  <p className={styles.columnText}>
                    Turmas reduzidas, estações práticas e simulação realística
                    conduzidas por instrutores especialistas.
                  </p>
                </div>
                <div className={styles.column}>
                  <div className={styles.columnLabel}>Propósito</div>
                  <p className={styles.columnText}>
                    Capacitar profissionais que fazem a diferença no momento
                    mais crítico do atendimento.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
