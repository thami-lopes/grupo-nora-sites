"use client";

import NavLink from "./NavLink";
import Reveal from "./Reveal";
import { SITE_LINKS } from "@/lib/siteLinks";

const POSTS = [
  {
    key: "care",
    tag: "Nora Care",
    title: "5 falhas que profissionais da saúde não podem cometer.",
    excerpt:
      "O principal desafio de um médico e demais profissionais da saúde, como dentistas e psicólogos, […]",
    delay: 0,
  },
  {
    key: "capital",
    tag: "Nora Capital",
    title: "Próximo post de Nora Capital.",
    excerpt: "Espaço reservado para o conteúdo de contabilidade e gestão financeira.",
    delay: 80,
  },
  {
    key: "safe",
    tag: "Nora Safe",
    title: "Próximo post de Nora Safe.",
    excerpt: "Espaço reservado para o conteúdo de seguros e proteção especializada.",
    delay: 160,
  },
  {
    key: "edu",
    tag: "Nora Educação",
    title: "Próximo post de Nora Educação.",
    excerpt: "Espaço reservado para o conteúdo de formação e desenvolvimento profissional.",
    delay: 240,
  },
];

export default function News() {
  return (
    <section className="section" id="news">
      <div className="container">
        <Reveal className="news-head">
          <div className="news-head__copy">
            <div className="eyebrow">News</div>
            <h2 className="section-title" style={{ maxWidth: "22ch" }}>
              Conhecimento para o setor da saúde.
            </h2>
            <p>
              Conteúdos, notícias e atualidades curados sob medida para impulsionar o dia
              a dia de profissionais e empresas da área da saúde.
            </p>
          </div>
          <NavLink href={SITE_LINKS.news} className="btn btn--dark news-head__cta">
            Acesse o blog <span aria-hidden="true">→</span>
          </NavLink>
        </Reveal>

        <div className="news-grid">
          {POSTS.map((post) => (
            <Reveal
              key={post.key}
              as={NavLink}
              href={SITE_LINKS.news}
              from="scale"
              delay={post.delay}
              className={`news-card news-card--${post.key}`}
            >
              <span className="news-card__band"></span>
              <div className="news-card__media">
                <div className="news-card__glow"></div>
                <img className="news-card__mark" src="/assets/nora-symbol-white.png" alt="" />
                <span className="news-card__tag">{post.tag}</span>
              </div>
              <div className="news-card__body">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="news-card__more">
                  Leia mais <span aria-hidden="true">→</span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
