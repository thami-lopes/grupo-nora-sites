import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getCourseBySlug } from "../../lib/courses";
import styles from "../status.module.css";

export const metadata = { title: "Pagamento aprovado | Nora Educação" };

export default async function SucessoPage({ searchParams }) {
  const sp = await searchParams;
  const course = getCourseBySlug(sp?.external_reference);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={`${styles.icon} ${styles.iconSuccess}`}>✓</div>
          <h1 className={styles.title}>Inscrição confirmada!</h1>
          <p className={styles.text}>
            {course
              ? `Seu pagamento para o curso ${course.name} foi aprovado.`
              : "Seu pagamento foi aprovado."}{" "}
            Em instantes você recebe a confirmação e os próximos passos por
            e-mail.
          </p>
          {sp?.payment_id && (
            <p className={styles.ref}>Comprovante Mercado Pago: {sp.payment_id}</p>
          )}
          <div className={styles.actions}>
            <Link href="/" className={styles.primaryBtn}>
              Voltar ao início
            </Link>
            <Link href="/#cursos" className={styles.secondaryBtn}>
              Ver outros cursos
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
