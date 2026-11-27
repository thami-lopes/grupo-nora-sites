"use client";

import NavLink from "./NavLink";
import { SITE_LINKS } from "@/lib/siteLinks";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/assets/logo-horizontal-navy.png" alt="Grupo Nora" className="footer-brand__logo" />
            <p>Um ecossistema completo para a gestão da saúde.</p>
            <NavLink href="#contato" className="btn btn--dark">
              Fale Conosco <span aria-hidden="true">→</span>
            </NavLink>
          </div>
          <div className="footer-col">
            <div className="footer-col__title">Marcas</div>
            <NavLink href={SITE_LINKS.care}>Nora Care</NavLink>
            <NavLink href={SITE_LINKS.capital}>Nora Capital</NavLink>
            <NavLink href={SITE_LINKS.safe}>Nora Safe</NavLink>
            <NavLink href={SITE_LINKS.educacao}>Nora Educação</NavLink>
          </div>
          <div className="footer-col">
            <div className="footer-col__title">Institucional</div>
            <NavLink href={SITE_LINKS.news}>News</NavLink>
            <NavLink href="#top">Sobre nós</NavLink>
            <NavLink href="#contato">Fale Conosco</NavLink>
          </div>
          <div className="footer-col">
            <div className="footer-col__title">Legal</div>
            <NavLink href="#top">Política de privacidade</NavLink>
            <NavLink href="#contato">Fale Conosco</NavLink>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom__legal">2026 Grupo Nora. All Rights Reserved.</div>
          <div className="footer-bottom__links">
            <NavLink href="#nossas-marcas">Nossas Marcas</NavLink>
            <span className="dot"></span>
            <NavLink href={SITE_LINKS.news}>Blog</NavLink>
            <span className="dot"></span>
            <NavLink href="#top">Voltar ao topo ↑</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
