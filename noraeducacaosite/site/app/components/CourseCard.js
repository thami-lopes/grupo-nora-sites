import Link from "next/link";
import Reveal from "./Reveal";
import {
  formatBRL,
  isPurchasable,
  courseAvailabilityLabel,
  nextClassLabel,
} from "../lib/courses";
import { whatsappLink } from "../lib/contato";
import styles from "./CourseCard.module.css";

export default function CourseCard({ course, delay = 0 }) {
  const isHsi = course.certifier === "hsi";
  const purchasable = isPurchasable(course);
  const availability = courseAvailabilityLabel(course);
  const infoHref = whatsappLink(
    `Olá! Gostaria de informações sobre o curso ${course.name}.`,
  );

  return (
    <Reveal as="article" from="scale" delay={delay} className={styles.card}>
      <span className={styles.band} />
      <div className={styles.top}>
        <span
          className={`${styles.badge} ${isHsi ? styles.badgeHsi : styles.badgeNora}`}
        >
          {isHsi ? "Certificação HSI" : "Certificado Nora Educação"}
        </span>
      </div>

      <h3 className={styles.name}>{course.name}</h3>
      <p className={styles.fullName}>{course.fullName}</p>

      <div className={styles.meta}>
        <span>{course.duration}</span>
        <span className={styles.metaDot} />
        <span>{course.format}</span>
      </div>

      <p className={styles.next}>
        Próxima turma: <strong>{nextClassLabel(course)}</strong>
      </p>

      <Link href={`/cursos/${course.slug}`} className={styles.more}>
        Ver mais <span className={styles.moreIcon}>→</span>
      </Link>

      <div className={styles.footer}>
        <div className={styles.priceBlock}>
          <span className={styles.priceLabel}>
            {purchasable ? "Investimento" : "Disponibilidade"}
          </span>
          <span className={styles.price}>
            {purchasable ? formatBRL(course.price) : availability}
          </span>
        </div>
        {purchasable ? (
          <Link href={`/checkout/${course.slug}`} className={styles.buy}>
            Comprar <span>→</span>
          </Link>
        ) : course.comingSoon ? (
          <span className={styles.soon}>Em breve</span>
        ) : (
          <a href={infoHref} target="_blank" rel="noopener" className={styles.buy}>
            Informações <span>→</span>
          </a>
        )}
      </div>
    </Reveal>
  );
}
