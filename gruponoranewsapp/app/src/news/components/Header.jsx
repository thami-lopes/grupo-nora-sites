import { useState } from 'react';
import { useScrolledPast } from '../hooks.js';
import { SITE_LINKS } from '../siteLinks.js';

const NAV_LINKS = [
  { label: 'Care', href: SITE_LINKS.care },
  { label: 'Capital', href: SITE_LINKS.capital },
  { label: 'Safe', href: SITE_LINKS.safe },
  { label: 'Educação', href: SITE_LINKS.educacao },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 20;
  window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
}

export default function Header() {
  const scrolled = useScrolledPast(60);
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (id) => (e) => {
    e.preventDefault();
    setMenuOpen(false);
    scrollToId(id);
  };

  return (
    <header className={`gn-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="gn-header__bar">
        <a href="/" className="gn-header__logo-link" aria-label="Grupo Nora — início">
          <img
            className="gn-header__logo"
            src="/assets/logo-horizontal-navy.png"
            alt="Grupo Nora"
          />
        </a>

        <nav className="gn-header__nav" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#news" onClick={go('news')} className="is-active">
            Blog
            <span className="gn-header__active-underline" />
          </a>
          <a href="#contato" onClick={go('contato')}>
            Contato
          </a>
        </nav>

        <div className="gn-header__actions">
          <a
            href={SITE_LINKS.grupoNora}
            title="Voltar ao site do Grupo Nora"
            className="gn-header__group-link"
          >
            Grupo Nora <span className="gn-header__arrow-mini" aria-hidden="true">↗</span>
          </a>
          <span className="gn-header__divider" aria-hidden="true" />
          <a href="#contato" onClick={go('contato')} className="gn-header__cta">
            Fale Conosco <span aria-hidden="true">→</span>
          </a>
          <button
            type="button"
            className={`gn-header__burger ${menuOpen ? 'is-open' : ''}`}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="gn-header__drawer" role="dialog" aria-label="Menu">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#news" onClick={go('news')}>
            Blog
          </a>
          <a href="#contato" onClick={go('contato')}>
            Contato
          </a>
          <a href={SITE_LINKS.grupoNora} onClick={() => setMenuOpen(false)}>
            Grupo Nora ↗
          </a>
          <a href="#contato" onClick={go('contato')} className="gn-header__drawer-cta">
            Fale Conosco <span aria-hidden="true">→</span>
          </a>
        </div>
      )}
    </header>
  );
}

export { scrollToId };
