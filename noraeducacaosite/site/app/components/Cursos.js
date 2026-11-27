import Reveal from "./Reveal";
import { ContatoLink } from "./ScrollLink";
import CourseCard from "./CourseCard";
import { COURSES } from "../lib/courses";
import styles from "./Cursos.module.css";

export default function Cursos() {
  return (
    <section id="cursos" className={styles.section}>
      <div className={styles.wrap}>
        <Reveal className={styles.header}>
          <div className={styles.headerRow}>
            <div className={styles.headerLeft}>
              <h2 className={styles.title}>
                Cursos do Centro de Ensino Nora Educação.
              </h2>
            </div>
            <div className={styles.headerRight}>
              <p className={styles.text}>
                Inscrição e pagamento direto pelo site, com checkout
                processado pelo Mercado Pago — seus dados de pagamento nunca
                passam pelos nossos servidores.
              </p>
              <ContatoLink className={styles.cta}>
                Fale com a coordenação <span>→</span>
              </ContatoLink>
            </div>
          </div>
          <div className={styles.frentes}>{String(COURSES.length).padStart(2, "0")} cursos no catálogo</div>
        </Reveal>

        <div className={styles.grid}>
          {COURSES.map((course, i) => (
            <CourseCard key={course.slug} course={course} delay={i * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}
