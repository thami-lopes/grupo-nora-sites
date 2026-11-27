"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { scrollToId } from "../lib/scroll";
import { SITE_LINKS } from "../lib/siteLinks";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { label: "Cursos", id: "cursos", offset: 96 },
  { label: "Certificação", id: "certificacao", offset: 96 },
  { label: "Sobre nós", id: "sobre", offset: 96 },
  { label: "FAQ", id: "faq", offset: 96 },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On the homepage this smooth-scrolls to the section. On any other page
  // (checkout, course detail, área do aluno, etc.) that section doesn't
  // exist in the DOM, so we let the Link navigate to "/#id" instead —
  // Next.js scrolls to the hash once the homepage has mounted.
  const go = (id, offset) => (e) => {
    if (!onHome) {
      setMenuOpen(false);
      return;
    }
    e.preventDefault();
    setMenuOpen(false);
    scrollToId(id, offset);
  };

  const hrefFor = (id) => (onHome ? `#${id}` : `/#${id}`);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.bar}>
        <Link href={hrefFor("top")} onClick={go("top", 0)} className={styles.logoLink}>
          <Image
            src="/assets/nora-educacao-horizontal.png"
            alt="Nora Educação"
            width={2709}
            height={355}
            priority
            className={styles.logo}
          />
        </Link>

        <nav className={styles.nav} aria-label="Navegação principal">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.id}
              href={hrefFor(l.id)}
              onClick={go(l.id, l.offset)}
              className={styles.navLink}
            >
              {l.label}
            </Link>
          ))}
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
          <Link href="/treinamento" className={styles.btnTreino}>
            Solicitar Treinamento
          </Link>
          <Link href="/area-do-aluno" className={styles.btnAluno}>
            Área do Aluno
          </Link>
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
            <Link
              key={l.id}
              href={hrefFor(l.id)}
              onClick={go(l.id, l.offset)}
              className={styles.drawerLink}
            >
              {l.label}
            </Link>
          ))}
          <a href={SITE_LINKS.grupoNora} className={styles.drawerLink}>
            Grupo Nora ↗
          </a>
          <Link href="/treinamento" className={styles.drawerBtnTreino}>
            Solicitar Treinamento →
          </Link>
          <Link href="/area-do-aluno" className={styles.drawerBtnAluno}>
            Área do Aluno →
          </Link>
        </div>
      )}
    </header>
  );
}
