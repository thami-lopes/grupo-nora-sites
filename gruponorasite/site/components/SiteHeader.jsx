"use client";

import NavLink from "./NavLink";
import { useNav } from "@/lib/NavContext";
import { SITE_LINKS } from "@/lib/siteLinks";

const NAV_LINKS = [
  { href: SITE_LINKS.care, label: "Care" },
  { href: SITE_LINKS.capital, label: "Capital" },
  { href: SITE_LINKS.safe, label: "Safe" },
  { href: SITE_LINKS.educacao, label: "Educação" },
  { href: SITE_LINKS.news, label: "Blog" },
  { href: "#contato", label: "Contato" },
];

export default function SiteHeader() {
  const { headerSolid, headerRef, drawerOpen, toggleDrawer } = useNav();

  return (
    <header
      ref={headerRef}
      className={`site-header${headerSolid ? " is-scrolled" : ""}`}
      id="siteHeader"
    >
      <div className="site-header__inner">
        <NavLink href="#top" className="site-header__logo">
          <img src="/assets/logo-horizontal-navy.png" alt="Grupo Nora" />
        </NavLink>
        <nav className="site-header__nav" aria-label="Navegação principal">
          {NAV_LINKS.map((link, i) => (
            <NavLink key={i} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <NavLink href="#contato" className="btn btn--dark site-header__cta">
          Fale Conosco <span aria-hidden="true">→</span>
        </NavLink>
        <button
          className="site-header__burger"
          aria-label="Abrir menu"
          aria-expanded={drawerOpen}
          aria-controls="mobileDrawer"
          onClick={toggleDrawer}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
