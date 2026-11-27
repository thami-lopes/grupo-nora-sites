"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { CONTATO, whatsappLink } from "../lib/contato";
import styles from "./Contato.module.css";

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
              <h2 className={styles.title}>Tudo em um só lugar.</h2>
              <div className={styles.infoList}>
                <a
                  href={whatsappLink("Olá, gostaria de mais informações sobre os cursos")}
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
                    <span className={styles.infoValue}>{CONTATO.telefone}</span>
                  </span>
                </a>
                <a
                  href={`mailto:${CONTATO.email}`}
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
                    <span className={styles.infoValue}>{CONTATO.email}</span>
                  </span>
                </a>
              </div>
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
                  placeholder="Conte pra gente qual curso te interessa"
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
                  Mensagem enviada. Em breve nossa equipe entra em contato.
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
