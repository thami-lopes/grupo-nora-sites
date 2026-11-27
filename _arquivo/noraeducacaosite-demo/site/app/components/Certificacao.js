import Reveal from "./Reveal";
import { assetExists } from "../lib/assets";
import styles from "./Certificacao.module.css";

export default function Certificacao() {
  const hsiLogoExists = assetExists("/assets/hsi-logo.jpg");

  return (
    <section id="certificacao" className={styles.section}>
      <Reveal className={styles.card}>
        <div className={styles.grid}>
          <Reveal from="left" className={styles.text}>
            <h2 className={styles.title}>
              Certificação reconhecida em cada curso.
            </h2>
            <p className={styles.lead}>
              ACLS e BLS seguem o currículo internacional do{" "}
              <strong>HSI — Health &amp; Safety Institute</strong>, com
              certificado internacional válido por 2 anos. Os demais cursos
              (POCUS, Via Aérea Difícil, Punção Venosa Guiada por USG e Punção
              Intraóssea) têm certificado emitido pelo Centro de Ensino Nora
              Educação.
            </p>
          </Reveal>

          <Reveal from="right" delay={120} className={styles.badges}>
            <div className={styles.badgeCard}>
              <div className={styles.hsiLogoSlot}>
                {hsiLogoExists ? (
                  // eslint-disable-next-line @next/next/no-img-element -- small static brand asset, no resizing needed
                  <img
                    src="/assets/hsi-logo.jpg"
                    alt="HSI - Health & Safety Institute"
                    className={styles.hsiLogoImg}
                  />
                ) : (
                  <div className={styles.hsiLogoFallback}>
                    HSI<span>Health &amp; Safety Institute</span>
                  </div>
                )}
              </div>
              <p className={styles.badgeText}>
                Parceiro autorizado para os cursos ACLS e BLS.
              </p>
            </div>
            <div className={styles.badgeCard}>
              <div className={styles.noraLogoSlot}>
                {/* eslint-disable-next-line @next/next/no-img-element -- small static brand asset, no resizing needed */}
                <img
                  src="/assets/nora-educacao-horizontal.png"
                  alt="Nora Educação"
                  className={styles.noraLogoImg}
                />
              </div>
              <p className={styles.badgeText}>
                Certificado institucional para POCUS, Via Aérea Difícil,
                Punção Venosa Guiada por USG e Punção Intraóssea.
              </p>
            </div>
          </Reveal>
        </div>
      </Reveal>
    </section>
  );
}
