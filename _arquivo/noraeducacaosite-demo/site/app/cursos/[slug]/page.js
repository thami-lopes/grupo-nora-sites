import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  COURSES,
  getCourseBySlug,
  formatBRL,
  isPurchasable,
  nextClassLabel,
} from "../../lib/courses";
import { whatsappLink } from "../../lib/contato";
import CourseTabs from "./CourseTabs";
import styles from "./course.module.css";

export function generateStaticParams() {
  return COURSES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  return {
    title: course
      ? `${course.name} — ${course.fullName} | Nora Educação`
      : "Curso | Nora Educação",
    description: course?.summary,
  };
}

export default async function CourseDetailPage({ params }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const isHsi = course.certifier === "hsi";

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.heroCard}>
          <span
            className={`${styles.badge} ${isHsi ? styles.badgeHsi : styles.badgeNora}`}
          >
            {isHsi ? "Certificação HSI" : "Certificado Nora Educação"}
          </span>
          <h1 className={styles.name}>{course.name}</h1>
          <p className={styles.fullName}>{course.fullName}</p>
          <p className={styles.summary}>{course.summary}</p>

          <div className={styles.meta}>
            <span>{course.duration}</span>
            <span className={styles.metaDot} />
            <span>{course.format}</span>
          </div>

          <p className={styles.nextClass}>
            Próxima turma: <strong>{nextClassLabel(course)}</strong>
          </p>

          <div className={styles.actions}>
            {isPurchasable(course) ? (
              <Link href={`/checkout/${course.slug}`} className={styles.buy}>
                Comprar · {formatBRL(course.price)} <span>→</span>
              </Link>
            ) : course.comingSoon ? (
              <span className={styles.buyDisabled}>Turmas em breve</span>
            ) : (
              <a
                href={whatsappLink(
                  `Olá! Gostaria de informações sobre o curso ${course.name}.`,
                )}
                target="_blank"
                rel="noopener"
                className={styles.buy}
              >
                Solicitar informações e valor <span>→</span>
              </a>
            )}
            <Link href="/treinamento" className={styles.trainingLink}>
              Solicitar turma fechada para minha equipe
            </Link>
          </div>
        </section>

        <CourseTabs course={course} />
      </main>
      <Footer />
    </>
  );
}
