import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "../status.module.css";

export const metadata = { title: "Pagamento em análise | Nora Educação" };

export default async function PendentePage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={`${styles.icon} ${styles.iconPending}`}>⏳</div>
          <h1 className={styles.title}>Pagamento em análise</h1>
          <p className={styles.text}>
            Recebemos sua solicitação e o Mercado Pago está processando o
            pagamento (comum em boleto e alguns métodos de débito). Você
            receberá a confirmação da sua vaga por e-mail assim que for
            aprovado.
          </p>
          <div className={styles.actions}>
            <Link href="/" className={styles.primaryBtn}>
              Voltar ao início
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
