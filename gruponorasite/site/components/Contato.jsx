"use client";

import { useRef, useState } from "react";
import Reveal from "./Reveal";

const SOCIALS = [
  {
    label: "Instagram",
    path: (
      <>
        <rect x="3.2" y="3.2" width="13.6" height="13.6" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="10" cy="10" r="3.4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="14.1" cy="5.9" r="1" fill="currentColor" />
      </>
    ),
  },
  {
    label: "Facebook",
    path: (
      <path
        d="M12.6 6.6h-1.4c-.6 0-1 .4-1 1v1.7h2.3l-.4 2.4h-1.9v5.1H7.7v-5.1H6V9.3h1.7V7.5c0-1.9 1.1-3.2 3-3.2h1.9v2.3Z"
        fill="currentColor"
      />
    ),
  },
  {
    label: "LinkedIn",
    path: (
      <>
        <rect x="3.4" y="3.4" width="13.2" height="13.2" rx="2.4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path
          d="M6.9 8.6v5m0-7.1v.1M9.7 13.6V10a1.6 1.6 0 0 1 3.2 0v3.6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </>
    ),
  },
];

export default function Contato() {
  const [status, setStatus] = useState("default"); // default | error | sending | success
  const [errors, setErrors] = useState({});
  const nomeRef = useRef(null);
  const emailRef = useRef(null);
  const telRef = useRef(null);
  const msgRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const fields = { nome: nomeRef, email: emailRef, tel: telRef, msg: msgRef };
    const nextErrors = {};
    let ok = true;
    Object.entries(fields).forEach(([key, ref]) => {
      const empty = !ref.current.value.trim();
      nextErrors[key] = empty;
      if (empty) ok = false;
    });
    setErrors(nextErrors);

    if (!ok) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    setTimeout(() => setStatus("success"), 900);
  }

  function clearError(key) {
    setErrors((prev) => (prev[key] ? { ...prev, [key]: false } : prev));
  }

  return (
    <section className="section" id="contato">
      <div className="container">
        <Reveal className="panel panel--navy panel--contato">
          <div className="contato-grid">
            <div className="contato-info">
              <div className="contato-card">
                <div className="eyebrow eyebrow--light">Fale Conosco</div>
                <h2 className="contato-title">Tudo em um só lugar.</h2>
                <div className="contato-list">
                  <a
                    className="contato-item"
                    href="https://wa.me/5521980818818?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
                    target="_blank"
                    rel="noopener"
                  >
                    <span className="contato-item__icon" aria-hidden="true">
                      <svg viewBox="0 0 20 20">
                        <path
                          d="M4.5 3.5h3l1.2 3-1.7 1.3a10.5 10.5 0 0 0 4.7 4.7l1.3-1.7 3 1.2v3c0 .6-.5 1.1-1.1 1A13.4 13.4 0 0 1 3.5 4.6c-.1-.6.4-1.1 1-1.1Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                          fill="none"
                        />
                      </svg>
                    </span>
                    <span className="contato-item__text">
                      <span className="contato-item__kicker">Fone/WhatsApp</span>
                      <span className="contato-item__value">(21) 98081-8818</span>
                    </span>
                  </a>
                  <a className="contato-item" href="mailto:contato@gruponora.com.br">
                    <span className="contato-item__icon" aria-hidden="true">
                      <svg viewBox="0 0 20 20">
                        <rect x="2.6" y="4.2" width="14.8" height="11.6" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <path d="m3.4 5.6 6.6 4.7 6.6-4.7" stroke="currentColor" strokeWidth="1.5" fill="none" />
                      </svg>
                    </span>
                    <span className="contato-item__text">
                      <span className="contato-item__kicker">E-mail</span>
                      <span className="contato-item__value">contato@gruponora.com.br</span>
                    </span>
                  </a>
                  <div className="contato-item">
                    <span className="contato-item__icon" aria-hidden="true">
                      <svg viewBox="0 0 20 20">
                        <path
                          d="M10 17.5s5.5-5 5.5-9a5.5 5.5 0 1 0-11 0c0 4 5.5 9 5.5 9Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          fill="none"
                        />
                        <circle cx="10" cy="8.4" r="2.1" stroke="currentColor" strokeWidth="1.5" fill="none" />
                      </svg>
                    </span>
                    <span className="contato-item__text">
                      <span className="contato-item__kicker">Endereço</span>
                      <span className="contato-item__value">
                        O2 Corporate &amp; Offices
                        <br />
                        Av. José Silva de Azevedo Neto, 200
                        <br />
                        Bloco 04 – Salas 303 e 304
                        <br />
                        Barra da Tijuca – Rio de Janeiro/RJ
                        <br />
                        CEP: 22775-056
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="social-card">
                {SOCIALS.map((s) => (
                  <a key={s.label} className="social-icon" href="#" aria-label={s.label}>
                    <svg viewBox="0 0 20 20">{s.path}</svg>
                  </a>
                ))}
              </div>
            </div>

            <form className="contato-form" onSubmit={handleSubmit} noValidate>
              <div className={`field${errors.nome ? " has-error" : ""}`}>
                <label htmlFor="cf-nome">Nome *</label>
                <input
                  ref={nomeRef}
                  type="text"
                  id="cf-nome"
                  placeholder="Seu nome"
                  onInput={() => clearError("nome")}
                  required
                />
              </div>
              <div className={`field${errors.email ? " has-error" : ""}`}>
                <label htmlFor="cf-email">E-mail *</label>
                <input
                  ref={emailRef}
                  type="email"
                  id="cf-email"
                  placeholder="voce@email.com"
                  onInput={() => clearError("email")}
                  required
                />
              </div>
              <div className={`field${errors.tel ? " has-error" : ""}`}>
                <label htmlFor="cf-tel">Telefone ou WhatsApp *</label>
                <input
                  ref={telRef}
                  type="tel"
                  id="cf-tel"
                  placeholder="(00) 00000-0000"
                  onInput={() => clearError("tel")}
                  required
                />
              </div>
              <div className={`field${errors.msg ? " has-error" : ""}`}>
                <label htmlFor="cf-msg">Como podemos ajudar? *</label>
                <textarea
                  ref={msgRef}
                  id="cf-msg"
                  rows={4}
                  placeholder="Conte pra gente"
                  onInput={() => clearError("msg")}
                  required
                />
              </div>
              <button type="submit" className="btn btn--royal contato-form__submit" disabled={status === "sending"}>
                {status === "sending" && <span className="spinner"></span>}
                <span>{status === "sending" ? "Enviando…" : status === "success" ? "Enviado" : "Enviar"}</span>
              </button>
              {status === "error" && <div className="form-msg form-msg--error">Campo obrigatório.</div>}
              {status === "success" && (
                <div className="form-msg form-msg--success">
                  <span className="form-msg__check">✓</span>Mensagem enviada.{" "}
                  <span className="form-msg__note">· microcopy provisória</span>
                </div>
              )}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
