"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import styles from "./Contato.module.css";

const SOCIAL_ICONS = [
  // Instagram-style
  (
    <svg viewBox="0 0 20 20" aria-hidden="true" key="ig">
      <rect
        x="3.2"
        y="3.2"
        width="13.6"
        height="13.6"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="10" cy="10" r="3.4" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="14.1" cy="5.9" r="1" fill="currentColor" />
    </svg>
  ),
  // Facebook-style
  (
    <svg viewBox="0 0 20 20" aria-hidden="true" key="fb">
      <path
        d="M12.6 6.6h-1.4c-.6 0-1 .4-1 1v1.7h2.3l-.4 2.4h-1.9v5.1H7.7v-5.1H6V9.3h1.7V7.5c0-1.9 1.1-3.2 3-3.2h1.9v2.3Z"
        fill="currentColor"
      />
    </svg>
  ),
  // LinkedIn-style
  (
    <svg viewBox="0 0 20 20" aria-hidden="true" key="li">
      <rect
        x="3.4"
        y="3.4"
        width="13.2"
        height="13.2"
        rx="2.4"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M6.9 8.6v5m0-7.1v.1M9.7 13.6V10a1.6 1.6 0 0 1 3.2 0v3.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  ),
];

export default function Contato() {
  const [status, setStatus] = useState("default"); // default | error | sending | success
  const [values, setValues] = useState({
    nome: "",
    email: "",
    tel: "",
    msg: "",
  });

  const onChange = (field) => (e) =>
    setValues((v) => ({ ...v, [field]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const ok = values.nome.trim() && values.email.trim() && values.tel.trim() && values.msg.trim();
    if (!ok) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    setTimeout(() => setStatus("success"), 900);
  };

  const btnLabel =
    status === "sending" ? "Enviando…" : status === "success" ? "Enviado" : "Enviar";

  return (
    <section id="contato" className={styles.section}>
      <div className={styles.card}>
        <div className={styles.grid}>
          <Reveal className={styles.infoCol}>
            <div className={styles.infoCard}>
              <div className={styles.pill}>Fale Conosco</div>
              <h2 className={styles.title}>Tudo em um só lugar.</h2>
              <div className={styles.infoList}>
                <a
                  href="https://wa.me/5521980818818?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
                  target="_blank"
                  rel="noopener"
                  className={styles.infoItem}
                >
                  <span className={styles.infoIcon}>
                    <svg viewBox="0 0 20 20" aria-hidden="true">
                      <path
                        d="M4.5 3.5h3l1.2 3-1.7 1.3a10.5 10.5 0 0 0 4.7 4.7l1.3-1.7 3 1.2v3c0 .6-.5 1.1-1.1 1A13.4 13.4 0 0 1 3.5 4.6c-.1-.6.4-1.1 1-1.1Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </span>
                  <span className={styles.infoText}>
                    <span className={styles.infoLabel}>Fone/WhatsApp</span>
                    <span className={styles.infoValue}>(21) 98081-8818</span>
                  </span>
                </a>
                <a
                  href="mailto:contato@gruponora.com.br"
                  className={styles.infoItem}
                >
                  <span className={styles.infoIcon}>
                    <svg viewBox="0 0 20 20" aria-hidden="true">
                      <rect
                        x="2.6"
                        y="4.2"
                        width="14.8"
                        height="11.6"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <path
                        d="m3.4 5.6 6.6 4.7 6.6-4.7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                      />
                    </svg>
                  </span>
                  <span className={styles.infoText}>
                    <span className={styles.infoLabel}>E-mail</span>
                    <span className={styles.infoValue}>
                      contato@gruponora.com.br
                    </span>
                  </span>
                </a>
                <div className={styles.infoItem}>
                  <span className={styles.infoIcon}>
                    <svg viewBox="0 0 20 20" aria-hidden="true">
                      <path
                        d="M10 17.5s5.5-5 5.5-9a5.5 5.5 0 1 0-11 0c0 4 5.5 9 5.5 9Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <circle
                        cx="10"
                        cy="8.4"
                        r="2.1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                      />
                    </svg>
                  </span>
                  <span className={styles.infoText}>
                    <span className={styles.infoLabel}>Endereço</span>
                    <span className={styles.infoValue}>
                      Rua Teste Exemplo, 123
                      <br />
                      Rio de Janeiro/RJ
                      <br />
                      CEP 12345-678
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.socialCard}>
              {SOCIAL_ICONS.map((icon, i) => (
                <span key={i} className={styles.social}>
                  {icon}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className={styles.formCard}>
            <form className={styles.form} onSubmit={onSubmit}>
              <div className={styles.field}>
                <label htmlFor="df-nome" className={styles.label}>
                  Nome *
                </label>
                <input
                  id="df-nome"
                  type="text"
                  placeholder="Seu nome"
                  className={styles.input}
                  value={values.nome}
                  onChange={onChange("nome")}
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="df-email" className={styles.label}>
                  E-mail *
                </label>
                <input
                  id="df-email"
                  type="email"
                  placeholder="voce@email.com"
                  className={styles.input}
                  value={values.email}
                  onChange={onChange("email")}
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="df-tel" className={styles.label}>
                  Telefone ou WhatsApp *
                </label>
                <input
                  id="df-tel"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  className={styles.input}
                  value={values.tel}
                  onChange={onChange("tel")}
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="df-msg" className={styles.label}>
                  Como podemos ajudar? *
                </label>
                <textarea
                  id="df-msg"
                  rows={4}
                  placeholder="Conte pra gente"
                  className={styles.textarea}
                  value={values.msg}
                  onChange={onChange("msg")}
                />
              </div>
              <button type="submit" className={styles.submit}>
                {status === "sending" && <span className={styles.spinner} />}
                {btnLabel}
              </button>
              {status === "error" && (
                <div className={styles.error}>Campo obrigatório.</div>
              )}
              {status === "success" && (
                <div className={styles.success}>
                  <span className={styles.successIcon}>✓</span>
                  Mensagem enviada.{" "}
                  <span className={styles.successNote}>
                    · microcopy provisória
                  </span>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
