import AcessoForm from "./AcessoForm";
import styles from "./acesso.module.css";

export const metadata = {
  title: "Acesso restrito | Nora Educação",
  robots: { index: false, follow: false },
};

export default async function AcessoPage({ searchParams }) {
  const sp = await searchParams;
  const next = typeof sp?.next === "string" ? sp.next : "/";

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        {/* eslint-disable-next-line @next/next/no-img-element -- logo estática, tela fora do layout principal */}
        <img
          src="/assets/nora-educacao-horizontal.png"
          alt="Nora Educação"
          className={styles.logo}
        />
        <h1 className={styles.title}>Acesso restrito</h1>
        <p className={styles.text}>Digite a senha para ver o site.</p>
        <AcessoForm next={next} />
      </div>
    </main>
  );
}
