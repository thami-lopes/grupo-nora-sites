import Header from "../components/Header";
import Footer from "../components/Footer";
import TreinamentoForm from "./TreinamentoForm";
import styles from "./treinamento.module.css";

export const metadata = {
  title: "Solicitar Treinamento In Company | Nora Educação",
  description:
    "Solicite uma turma fechada dos cursos da Nora Educação para a sua clínica, hospital ou instituição de saúde.",
};

const BENEFITS = [
  "Turma fechada, exclusiva para a sua equipe",
  "Conteúdo e carga horária adaptados à rotina da instituição",
  "Aplicação no seu local ou em uma unidade parceira",
  "Mesma certificação (HSI ou Nora Educação) dos cursos abertos",
];

export default function TreinamentoPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.grid}>
          <section className={styles.infoCard}>
            <h1 className={styles.title}>
              Leve a capacitação da Nora Educação para a sua equipe.
            </h1>
            <p className={styles.lead}>
              Organizamos turmas fechadas de qualquer curso do nosso catálogo
              (ACLS, BLS, POCUS, Via Aérea Difícil, Punção Venosa Guiada por
              USG e Punção Intraóssea) para clínicas, hospitais e instituições
              de saúde.
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
          </section>

          <section className={styles.formCard}>
            <h2 className={styles.formTitle}>Solicitar proposta</h2>
            <TreinamentoForm />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
