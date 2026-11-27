"use client";

import { useState } from "react";
import { whatsappLink } from "../lib/contato";
import styles from "./area-do-aluno.module.css";

export default function AreaDoAlunoForm() {
  const [values, setValues] = useState({ email: "", senha: "" });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (field) => (e) =>
    setValues((v) => ({ ...v, [field]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.field}>
        <label htmlFor="aluno-email" className={styles.label}>
          E-mail
        </label>
        <input
          id="aluno-email"
          type="email"
          placeholder="voce@email.com"
          className={styles.input}
          value={values.email}
          onChange={onChange("email")}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="aluno-senha" className={styles.label}>
          Senha
        </label>
        <input
          id="aluno-senha"
          type="password"
          placeholder="••••••••"
          className={styles.input}
          value={values.senha}
          onChange={onChange("senha")}
        />
      </div>
      <button type="submit" className={styles.submit}>
        Entrar
      </button>

      {submitted && (
        <div className={styles.notice}>
          O portal do aluno com login está em preparação. Enquanto isso, fale
          com a coordenação para receber seu certificado ou materiais do
          curso.{" "}
          <a
            href={whatsappLink("Olá, preciso de acesso à área do aluno")}
            target="_blank"
            rel="noopener"
          >
            Falar no WhatsApp →
          </a>
        </div>
      )}
    </form>
  );
}
