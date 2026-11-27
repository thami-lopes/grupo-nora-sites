"use client";

import { useState } from "react";
import { COURSES } from "../lib/courses";
import styles from "./treinamento.module.css";

const EMPTY = {
  instituicao: "",
  responsavel: "",
  cargo: "",
  email: "",
  telefone: "",
  participantes: "",
  cidade: "",
  mensagem: "",
};

export default function TreinamentoForm() {
  const [values, setValues] = useState(EMPTY);
  const [cursos, setCursos] = useState([]);
  const [status, setStatus] = useState("default"); // default | error | sending | success

  const onChange = (field) => (e) =>
    setValues((v) => ({ ...v, [field]: e.target.value }));

  const toggleCurso = (slug) =>
    setCursos((list) =>
      list.includes(slug) ? list.filter((s) => s !== slug) : [...list, slug],
    );

  const onSubmit = (e) => {
    e.preventDefault();
    const ok =
      values.instituicao.trim() &&
      values.responsavel.trim() &&
      values.email.trim() &&
      values.telefone.trim() &&
      cursos.length > 0;
    if (!ok) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    setTimeout(() => setStatus("success"), 900);
  };

  const btnLabel =
    status === "sending" ? "Enviando…" : status === "success" ? "Solicitação enviada" : "Solicitar turma fechada";

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="tr-instituicao" className={styles.label}>
            Empresa / Instituição *
          </label>
          <input
            id="tr-instituicao"
            type="text"
            placeholder="Nome da instituição"
            className={styles.input}
            value={values.instituicao}
            onChange={onChange("instituicao")}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="tr-cidade" className={styles.label}>
            Cidade / Local desejado
          </label>
          <input
            id="tr-cidade"
            type="text"
            placeholder="Cidade/UF"
            className={styles.input}
            value={values.cidade}
            onChange={onChange("cidade")}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="tr-responsavel" className={styles.label}>
            Nome do responsável *
          </label>
          <input
            id="tr-responsavel"
            type="text"
            placeholder="Seu nome"
            className={styles.input}
            value={values.responsavel}
            onChange={onChange("responsavel")}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="tr-cargo" className={styles.label}>
            Cargo
          </label>
          <input
            id="tr-cargo"
            type="text"
            placeholder="Ex.: Coordenador(a) médico(a)"
            className={styles.input}
            value={values.cargo}
            onChange={onChange("cargo")}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="tr-email" className={styles.label}>
            E-mail *
          </label>
          <input
            id="tr-email"
            type="email"
            placeholder="voce@empresa.com"
            className={styles.input}
            value={values.email}
            onChange={onChange("email")}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="tr-telefone" className={styles.label}>
            Telefone / WhatsApp *
          </label>
          <input
            id="tr-telefone"
            type="tel"
            placeholder="(00) 00000-0000"
            className={styles.input}
            value={values.telefone}
            onChange={onChange("telefone")}
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="tr-participantes" className={styles.label}>
          Número estimado de participantes
        </label>
        <input
          id="tr-participantes"
          type="text"
          placeholder="Ex.: 15 pessoas"
          className={styles.input}
          value={values.participantes}
          onChange={onChange("participantes")}
        />
      </div>

      <div className={styles.field}>
        <span className={styles.label}>Curso(s) de interesse *</span>
        <div className={styles.checks}>
          {COURSES.map((c) => (
            <label key={c.slug} className={styles.checkItem}>
              <input
                type="checkbox"
                checked={cursos.includes(c.slug)}
                onChange={() => toggleCurso(c.slug)}
              />
              {c.name}
            </label>
          ))}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="tr-msg" className={styles.label}>
          Mensagem
        </label>
        <textarea
          id="tr-msg"
          rows={4}
          placeholder="Conte mais sobre a necessidade da sua equipe"
          className={styles.textarea}
          value={values.mensagem}
          onChange={onChange("mensagem")}
        />
      </div>

      <button type="submit" className={styles.submit}>
        {status === "sending" && <span className={styles.spinner} />}
        {btnLabel}
      </button>
      {status === "error" && (
        <div className={styles.error}>
          Preencha os campos obrigatórios (*) e selecione ao menos um curso.
        </div>
      )}
      {status === "success" && (
        <div className={styles.success}>
          <span className={styles.successIcon}>✓</span>
          Solicitação enviada. Nossa coordenação vai entrar em contato para
          montar a proposta da turma fechada.
        </div>
      )}
    </form>
  );
}
