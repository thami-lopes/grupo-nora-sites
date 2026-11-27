"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { scrollToId } from "../lib/scroll";
import { SITE_LINKS } from "../lib/siteLinks";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { label: "Sobre nós", id: "sobre", offset: 96 },
  { label: "Serviços", id: "servicos", offset: 96 },
  { label: "Contato", id: "contato", offset: 20 },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id, offset) => (e) => {
    e.preventDefault();
    setMenuOpen(false);
    scrollToId(id, offset);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.bar}>
        <a href="#top" onClick={go("top", 0)} className={styles.logoLink}>
          <Image
            src="/assets/nora-care-horizontal.png"
            alt="Nora Care"
            width={1510}
            height={219}
            priority
            className={styles.logo}
          />
        </a>

        <nav className={styles.nav} aria-label="Navegação principal">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={go(l.id, l.offset)}
              className={styles.navLink}
            >
              {l.label}
            </a>
          ))}
          <a href={SITE_LINKS.news} className={styles.navLink}>
            News
          </a>
          <a
            href="#faq"
            onClick={go("faq", 96)}
            className={styles.navLink}
          >
            FAQ
          </a>
        </nav>

        <div className={styles.actions}>
          <a
            href={SITE_LINKS.grupoNora}
            title="Voltar ao site do Grupo Nora"
            className={styles.groupLink}
          >
            Grupo Nora <span className={styles.arrow}>↗</span>
          </a>
          <span className={styles.divider} aria-hidden="true" />
          <a
            href="#contato"
            onClick={go("contato", 20)}
            className={styles.cta}
          >
            Fale Conosco <span className={styles.arrow}>→</span>
          </a>
        </div>

        <button
          type="button"
          className={styles.burger}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div className={styles.drawer}>
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={go(l.id, l.offset)}
              className={styles.drawerLink}
            >
              {l.label}
            </a>
          ))}
          <a href={SITE_LINKS.news} className={styles.drawerLink}>
            News
          </a>
          <a href="#faq" onClick={go("faq", 96)} className={styles.drawerLink}>
            FAQ
          </a>
          <a href={SITE_LINKS.grupoNora} className={styles.drawerLink}>
            Grupo Nora ↗
          </a>
          <a
            href="#contato"
            onClick={go("contato", 20)}
            className={styles.drawerCta}
          >
            Fale Conosco →
          </a>
        </div>
      )}
    </header>
  );
}
