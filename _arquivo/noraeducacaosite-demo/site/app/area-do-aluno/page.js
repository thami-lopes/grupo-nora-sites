import Header from "../components/Header";
import Footer from "../components/Footer";
import { CONTATO, whatsappLink } from "../lib/contato";
import AreaDoAlunoForm from "./AreaDoAlunoForm";
import styles from "./area-do-aluno.module.css";

export const metadata = {
  title: "Área do Aluno | Nora Educação",
  description:
    "Acesse materiais, certificados e informações das suas turmas no Centro de Ensino Nora Educação.",
};

const BENEFITS = [
  "Certificado do curso disponível para download",
  "Materiais de apoio e apostilas das turmas",
  "Confirmação de presença e frequência",
  "Avisos sobre novas turmas e recertificação",
];

export default function AreaDoAlunoPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.grid}>
          <section className={styles.infoCard}>
            <h1 className={styles.title}>Tudo do seu curso em um só lugar.</h1>
            <p className={styles.lead}>
              O portal do aluno está em preparação. Quando estiver no ar, você
              vai encontrar por aqui:
            </p>
            <ul className={styles.benefits}>
              {BENEFITS.map((b) => (
                <li key={b}>
                  <span className={styles.check} aria-hidden="true">
                    ✓
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <p className={styles.helpText}>
              Já é aluno e precisa do certificado ou de algum material agora?
              Fale direto com a coordenação pelo{" "}
              <a
                href={whatsappLink("Olá, preciso de acesso à área do aluno")}
                target="_blank"
                rel="noopener"
              >
                WhatsApp
              </a>{" "}
              ou pelo{" "}
              <a href={`mailto:${CONTATO.email}`}>e-mail</a>.
            </p>
          </section>

          <section className={styles.formCard}>
            <h2 className={styles.formTitle}>Acessar minha conta</h2>
            <AreaDoAlunoForm />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
