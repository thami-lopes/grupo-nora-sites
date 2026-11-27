import Reveal from "./Reveal";
import { IconLock, IconCard, IconNoStorage, IconDoc } from "./icons";
import styles from "./Seguranca.module.css";

const ITEMS = [
  {
    Icon: IconLock,
    title: "Conexão criptografada",
    text: "Todo o site roda em HTTPS/TLS, protegendo os dados enviados nos formulários de ponta a ponta.",
  },
  {
    Icon: IconCard,
    title: "Pagamento pelo Mercado Pago",
    text: "O checkout é processado no ambiente do Mercado Pago (certificado PCI-DSS). Os dados do seu cartão nunca chegam aos nossos servidores.",
  },
  {
    Icon: IconNoStorage,
    title: "Sem guarda de dados de cartão",
    text: "Não armazenamos número, validade ou CVV de cartão em nenhuma etapa. Guardamos apenas nome, e-mail e telefone para emitir sua inscrição.",
  },
  {
    Icon: IconDoc,
    title: "Conformidade com a LGPD",
    text: "Seus dados pessoais são usados só para a inscrição no curso, conforme nossa Política de Privacidade.",
  },
];

export default function Seguranca() {
  return (
    <section id="seguranca" className={styles.section}>
      <div className={styles.wrap}>
        <Reveal className={styles.header}>
          <h2 className={styles.title}>Seus dados 100% protegidos.</h2>
          <p className={styles.text}>
            A compra dos cursos é feita diretamente pelo site, com o mesmo
            padrão de segurança usado por grandes plataformas de pagamento.
          </p>
        </Reveal>

        <div className={styles.grid}>
          {ITEMS.map((item, i) => (
            <Reveal
              key={item.title}
              as="article"
              from="up"
              delay={i * 70}
              className={styles.card}
            >
              <span className={styles.icon} aria-hidden="true">
                <item.Icon />
              </span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
