"use client";

import { useState } from "react";
import { formatBRL, nextClassLabel } from "../../lib/courses";
import { whatsappLink } from "../../lib/contato";
import { IconLock, IconCheck } from "../../components/icons";
import styles from "./checkout.module.css";

export default function CheckoutForm({ course }) {
  const [values, setValues] = useState({ nome: "", email: "", telefone: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | error
  const [error, setError] = useState("");

  const onChange = (field) => (e) =>
    setValues((v) => ({ ...v, [field]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: course.slug, ...values }),
      });
      const data = await res.json();
      if (!res.ok || !data.checkout_url) {
        setError(data.error || "Não foi possível iniciar o pagamento.");
        setStatus("error");
        return;
      }
      window.location.href = data.checkout_url;
    } catch {
      setError("Falha de conexão. Verifique sua internet e tente novamente.");
      setStatus("error");
    }
  };

  const whatsappHref = whatsappLink(
    `Olá! Gostaria de me inscrever no curso ${course.name} (${course.fullName}).`,
  );

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.summary}>
          <h1 className={styles.courseName}>{course.name}</h1>
          <p className={styles.courseFullName}>{course.fullName}</p>
          <div className={styles.summaryRow}>
            <span>{course.duration}</span>
            <span className={styles.dot} />
            <span>{course.format}</span>
          </div>
          <p className={styles.nextClass}>
            Próxima turma: <strong>{nextClassLabel(course)}</strong>
          </p>
          <p className={styles.overview}>{course.overview}</p>

          <div className={styles.priceCard}>
            <span className={styles.priceLabel}>Investimento</span>
            <span className={styles.price}>{formatBRL(course.price)}</span>
          </div>

          <div className={styles.program}>
            <span className={styles.programLabel}>Conteúdo programático</span>
            <ul className={styles.programList}>
              {course.programTopics.map((topic) => (
                <li key={topic}>
                  <span className={styles.programCheck} aria-hidden="true">
                    <IconCheck />
                  </span>
                  {topic}
                </li>
              ))}
            </ul>
            <a href={`/cursos/${course.slug}`} className={styles.programLink}>
              Ver detalhes completos do curso →
            </a>
          </div>

          <div className={styles.trust}>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon} aria-hidden="true">
                <IconLock />
              </span>
              Pagamento processado pelo Mercado Pago — seus dados de cartão
              não passam pelo nosso servidor.
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon} aria-hidden="true">
                <IconCheck />
              </span>
              Confirmação de inscrição enviada por e-mail.
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon} aria-hidden="true">
                <IconCheck />
              </span>
              Curso híbrido: pré-teste online (mínimo de 70% para seguir),
              prática presencial e pós-teste (70%) para receber o certificado.
              Sem a nota mínima, é preciso se reinscrever no curso.
            </div>
          </div>
        </div>

        <form className={styles.form} onSubmit={onSubmit}>
          <h2 className={styles.formTitle}>Seus dados</h2>
          <p className={styles.formSubtitle}>
            Usados apenas para gerar sua inscrição e o link de pagamento.
          </p>

          <div className={styles.field}>
            <label htmlFor="ck-nome" className={styles.label}>
              Nome completo *
            </label>
            <input
              id="ck-nome"
              type="text"
              required
              minLength={2}
              autoComplete="name"
              placeholder="Seu nome completo"
              className={styles.input}
              value={values.nome}
              onChange={onChange("nome")}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="ck-email" className={styles.label}>
              E-mail *
            </label>
            <input
              id="ck-email"
              type="email"
              required
              autoComplete="email"
              placeholder="voce@email.com"
              className={styles.input}
              value={values.email}
              onChange={onChange("email")}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="ck-tel" className={styles.label}>
              Telefone / WhatsApp *
            </label>
            <input
              id="ck-tel"
              type="tel"
              required
              autoComplete="tel"
              placeholder="(00) 00000-0000"
              className={styles.input}
              value={values.telefone}
              onChange={onChange("telefone")}
            />
          </div>

          <button
            type="submit"
            className={styles.submit}
            disabled={status === "sending"}
          >
            {status === "sending" && <span className={styles.spinner} />}
            {status === "sending"
              ? "Gerando pagamento…"
              : `Ir para pagamento seguro · ${formatBRL(course.price)}`}
          </button>

          {status === "error" && (
            <div className={styles.errorBox}>
              <p className={styles.errorText}>{error}</p>
              <a href={whatsappHref} target="_blank" rel="noopener" className={styles.errorLink}>
                Prefere finalizar por WhatsApp? Fale com a coordenação →
              </a>
            </div>
          )}

          <p className={styles.legal}>
            Ao continuar você será redirecionado ao ambiente seguro do
            Mercado Pago para concluir o pagamento. Consulte nossa{" "}
            <a href="/privacidade" className={styles.legalLink}>
              Política de Privacidade
            </a>
            .
          </p>
        </form>
      </div>
    </section>
  );
}
