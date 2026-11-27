import { useState } from 'react';
import Reveal from './Reveal.jsx';
import { CONTACT } from '../data.js';

const SOCIALS = [
  {
    label: 'Instagram',
    icon: (
      <svg viewBox="0 0 20 20" width="24" height="24" aria-hidden="true">
        <rect x="3.2" y="3.2" width="13.6" height="13.6" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="10" cy="10" r="3.4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="14.1" cy="5.9" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    icon: (
      <svg viewBox="0 0 20 20" width="24" height="24" aria-hidden="true">
        <path
          d="M12.6 6.6h-1.4c-.6 0-1 .4-1 1v1.7h2.3l-.4 2.4h-1.9v5.1H7.7v-5.1H6V9.3h1.7V7.5c0-1.9 1.1-3.2 3-3.2h1.9v2.3Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 20 20" width="24" height="24" aria-hidden="true">
        <rect x="3.4" y="3.4" width="13.2" height="13.2" rx="2.4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path
          d="M6.9 8.6v5m0-7.1v.1M9.7 13.6V10a1.6 1.6 0 0 1 3.2 0v3.6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
  },
];

const EMPTY_VALUES = { nome: '', email: '', tel: '', msg: '' };

export default function Contact({ reduced }) {
  const [values, setValues] = useState(EMPTY_VALUES);
  const [status, setStatus] = useState({ sending: false, success: false, error: false });

  const setField = (field) => (e) => setValues((v) => ({ ...v, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const missing = Object.values(values).some((v) => !v.trim());
    if (missing) {
      setStatus({ sending: false, success: false, error: true });
      return;
    }
    setStatus({ sending: true, success: false, error: false });
    setTimeout(() => setStatus({ sending: false, success: true, error: false }), 900);
  };

  const btnLabel = status.sending ? 'Enviando…' : 'Enviar';

  return (
    <section id="contato" className="gn-contact-section">
      <Reveal reduced={reduced} className="gn-contact">
        <div className="gn-contact__glow" aria-hidden="true" />
        <div className="gn-contact__grid">
          <Reveal reduced={reduced} className="gn-contact__left">
            <div className="gn-contact__card">
              <div className="gn-eyebrow">Fale Conosco</div>
              <h2 className="gn-contact__title">Tudo em um só lugar.</h2>
              <div className="gn-contact__list">
                <a href={CONTACT.whatsappHref} target="_blank" rel="noopener" className="gn-contact__item">
                  <span className="gn-contact__icon" aria-hidden="true">
                    <svg viewBox="0 0 20 20" width="20" height="20">
                      <path
                        d="M4.5 3.5h3l1.2 3-1.7 1.3a10.5 10.5 0 0 0 4.7 4.7l1.3-1.7 3 1.2v3c0 .6-.5 1.1-1.1 1A13.4 13.4 0 0 1 3.5 4.6c-.1-.6.4-1.1 1-1.1Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </span>
                  <span className="gn-contact__text">
                    <span className="gn-contact__label">Fone/WhatsApp</span>
                    <span className="gn-contact__value">{CONTACT.whatsappLabel}</span>
                  </span>
                </a>
                <a href={`mailto:${CONTACT.email}`} target="_blank" rel="noopener" className="gn-contact__item">
                  <span className="gn-contact__icon" aria-hidden="true">
                    <svg viewBox="0 0 20 20" width="20" height="20">
                      <rect x="2.6" y="4.2" width="14.8" height="11.6" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                      <path d="m3.4 5.6 6.6 4.7 6.6-4.7" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    </svg>
                  </span>
                  <span className="gn-contact__text">
                    <span className="gn-contact__label">E-mail</span>
                    <span className="gn-contact__value">{CONTACT.email}</span>
                  </span>
                </a>
                <div className="gn-contact__item">
                  <span className="gn-contact__icon" aria-hidden="true">
                    <svg viewBox="0 0 20 20" width="20" height="20">
                      <path
                        d="M10 17.5s5.5-5 5.5-9a5.5 5.5 0 1 0-11 0c0 4 5.5 9 5.5 9Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <circle cx="10" cy="8.4" r="2.1" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    </svg>
                  </span>
                  <span className="gn-contact__text">
                    <span className="gn-contact__label">Endereço</span>
                    <span className="gn-contact__value">
                      {CONTACT.addressLines.map((line, i) => (
                        <span key={line}>
                          {line}
                          {i < CONTACT.addressLines.length - 1 && <br />}
                        </span>
                      ))}
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="gn-socials">
              {SOCIALS.map((s) => (
                <span key={s.label} className="gn-socials__item" title={s.label}>
                  {s.icon}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} reduced={reduced} className="gn-form-card">
            <form className="gn-form" onSubmit={handleSubmit} noValidate>
              <div className="gn-field-group">
                <label htmlFor="nf-nome">Nome *</label>
                <input
                  id="nf-nome"
                  type="text"
                  placeholder="Seu nome"
                  className="gn-field"
                  value={values.nome}
                  onChange={setField('nome')}
                />
              </div>
              <div className="gn-field-group">
                <label htmlFor="nf-email">E-mail *</label>
                <input
                  id="nf-email"
                  type="email"
                  placeholder="voce@email.com"
                  className="gn-field"
                  value={values.email}
                  onChange={setField('email')}
                />
              </div>
              <div className="gn-field-group">
                <label htmlFor="nf-tel">Telefone ou WhatsApp *</label>
                <input
                  id="nf-tel"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  className="gn-field"
                  value={values.tel}
                  onChange={setField('tel')}
                />
              </div>
              <div className="gn-field-group">
                <label htmlFor="nf-msg">Como podemos ajudar? *</label>
                <textarea
                  id="nf-msg"
                  rows={4}
                  placeholder="Conte pra gente"
                  className="gn-field gn-field--textarea"
                  value={values.msg}
                  onChange={setField('msg')}
                />
              </div>
              <button type="submit" className="gn-form__submit" disabled={status.sending}>
                {status.sending && <span className="gn-spinner" aria-hidden="true" />}
                {btnLabel}
              </button>
              {status.error && <div className="gn-form__error">Campo obrigatório.</div>}
              {status.success && (
                <div className="gn-form__success">
                  <span className="gn-form__check">✓</span>Mensagem enviada.{' '}
                  <span className="gn-form__note">· microcopy provisória</span>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </Reveal>
    </section>
  );
}
