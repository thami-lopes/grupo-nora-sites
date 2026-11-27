import Header from "../components/Header";
import Footer from "../components/Footer";
import { CONTATO } from "../lib/contato";
import styles from "./privacidade.module.css";

export const metadata = {
  title: "Política de Privacidade | Nora Educação",
  description:
    "Como a Nora Educação coleta, usa e protege os dados pessoais de alunos e visitantes, em conformidade com a LGPD.",
};

export default function PrivacidadePage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <article className={styles.article}>
          <h1 className={styles.title}>Política de Privacidade</h1>
          <p className={styles.updated}>Última atualização: 24 de agosto de 2026</p>

          <p>
            A Nora Educação, unidade de ensino do Grupo Nora, respeita a sua
            privacidade e trata os seus dados pessoais em conformidade com a
            Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD). Esta
            página explica quais dados coletamos, para que usamos e como
            protegemos essas informações.
          </p>

          <h2>1. Quais dados coletamos</h2>
          <ul>
            <li>
              <strong>Formulário de contato:</strong> nome, e-mail, telefone
              e a mensagem enviada.
            </li>
            <li>
              <strong>Inscrição em cursos:</strong> nome completo, e-mail e
              telefone, usados para gerar sua inscrição e o link de
              pagamento.
            </li>
            <li>
              <strong>Dados de pagamento:</strong> não coletamos nem
              armazenamos número de cartão, validade ou CVV. O pagamento é
              processado inteiramente pelo Mercado Pago, em ambiente próprio
              certificado PCI-DSS; recebemos apenas a confirmação do status
              do pagamento (aprovado, pendente ou recusado).
            </li>
          </ul>

          <h2>2. Para que usamos seus dados</h2>
          <p>
            Usamos os dados exclusivamente para: (a) processar sua inscrição
            e emitir o certificado do curso; (b) enviar confirmações,
            lembretes e informações sobre a turma; (c) responder a dúvidas
            enviadas pelo formulário de contato; e (d) cumprir obrigações
            legais e regulatórias.
          </p>

          <h2>3. Com quem compartilhamos</h2>
          <p>
            Compartilhamos dados estritamente necessários com o{" "}
            <strong>Mercado Pago</strong>, para processar o pagamento, e com
            o <strong>HSI — Health & Safety Institute</strong>, quando
            aplicável, para emissão de certificados internacionais (ACLS e
            BLS). Não vendemos nem alugamos seus dados a terceiros.
          </p>

          <h2>4. Segurança</h2>
          <p>
            O site utiliza conexão criptografada (HTTPS/TLS). O checkout de
            pagamento acontece no ambiente do Mercado Pago, sem que dados de
            cartão trafeguem ou fiquem armazenados em nossos servidores.
          </p>

          <h2>5. Seus direitos</h2>
          <p>
            Você pode solicitar a qualquer momento a confirmação, o acesso,
            a correção ou a exclusão dos seus dados pessoais, entrando em
            contato pelo e-mail{" "}
            <a href={`mailto:${CONTATO.email}`}>{CONTATO.email}</a>.
          </p>

          <h2>6. Contato</h2>
          <p>
            Dúvidas sobre esta política podem ser enviadas para{" "}
            <a href={`mailto:${CONTATO.email}`}>{CONTATO.email}</a> ou pelo
            WhatsApp {CONTATO.telefone}.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
