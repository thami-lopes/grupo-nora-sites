import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { whatsappLink } from "../../lib/contato";
import styles from "../status.module.css";

export const metadata = { title: "Pagamento não aprovado | Nora Educação" };

export default async function ErroPage() {
  const whatsappHref = whatsappLink(
    "Olá! Meu pagamento não foi aprovado, podem me ajudar?",
  );

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={`${styles.icon} ${styles.iconError}`}>!</div>
          <h1 className={styles.title}>Pagamento não aprovado</h1>
          <p className={styles.text}>
            Não conseguimos confirmar o pagamento. Nenhum valor foi
            debitado sem aprovação. Você pode tentar novamente ou falar com
            a nossa equipe.
          </p>
          <div className={styles.actions}>
            <Link href="/#cursos" className={styles.primaryBtn}>
              Tentar novamente
            </Link>
            <a href={whatsappHref} target="_blank" rel="noopener" className={styles.secondaryBtn}>
              Falar no WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
