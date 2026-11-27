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
              <div className={styles.pill}>Quem somos</div>
              <p className={styles.kicker}>Muito prazer, somos o</p>
              <h2 className={styles.title}>Nora Care</h2>
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
                Soluções para <strong>clínicas e hospitais</strong> que
                precisam contratar médicos com mais eficiência, otimizar
                resultados e organizar{" "}
                <strong>escalas de forma estratégica</strong>.
              </p>
              <div className={styles.columns}>
                <div className={styles.column}>
                  <div className={styles.columnLabel}>Expertise</div>
                  <p className={styles.columnText}>
                    Contratação e gestão profissional de médicos, unindo
                    eficiência operacional e compliance tributário.
                  </p>
                </div>
                <div className={styles.column}>
                  <div className={styles.columnLabel}>Propósito</div>
                  <p className={styles.columnText}>
                    Otimizar plantões hospitalares e garantir total
                    transparência no repasse de honorários.
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
