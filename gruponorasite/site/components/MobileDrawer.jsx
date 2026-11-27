"use client";

import NavLink from "./NavLink";
import { useNav } from "@/lib/NavContext";
import { SITE_LINKS } from "@/lib/siteLinks";

export default function MobileDrawer() {
  const { drawerOpen } = useNav();

  return (
    <div
      className={`mobile-drawer${drawerOpen ? " is-open" : ""}`}
      id="mobileDrawer"
      aria-hidden={!drawerOpen}
    >
      <nav className="mobile-drawer__nav" aria-label="Navegação móvel">
        <NavLink href={SITE_LINKS.care}>Care</NavLink>
        <NavLink href={SITE_LINKS.capital}>Capital</NavLink>
        <NavLink href={SITE_LINKS.safe}>Safe</NavLink>
        <NavLink href={SITE_LINKS.educacao}>Educação</NavLink>
        <NavLink href={SITE_LINKS.news}>Blog</NavLink>
        <NavLink href="#contato">Contato</NavLink>
        <NavLink href="#contato" className="btn btn--dark">
          Fale Conosco <span aria-hidden="true">→</span>
        </NavLink>
      </nav>
    </div>
  );
}
