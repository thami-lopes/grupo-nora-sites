"use client";

import { useMemo, useState } from "react";
import Reveal from "../Reveal";
import NewsCard from "./NewsCard";
import { CATEGORIES } from "@/lib/newsCategories";

const GRID_DELAYS = [0, 70, 140, 0, 70, 140];

function matches(post, query, cat) {
  if (cat && !post.categories.includes(cat)) return false;
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const haystack = `${post.title} ${post.excerpt} ${post.kicker} ${post.categories.join(" ")}`.toLowerCase();
  return haystack.includes(q);
}

export default function NewsHub({ posts }) {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState("");

  const featured = useMemo(() => posts.find((p) => p.featured) || null, [posts]);
  const rest = useMemo(() => posts.filter((p) => p !== featured), [posts, featured]);

  const featuredVisible = featured ? matches(featured, query, activeCat) : false;
  const gridPosts = rest.filter((p) => matches(p, query, activeCat));
  const shownCount = (featuredVisible ? 1 : 0) + gridPosts.length;
  const isEmpty = shownCount === 0;

  const countFor = (cat) => (cat ? posts.filter((p) => p.categories.includes(cat)).length : posts.length);
  const reset = () => {
    setQuery("");
    setActiveCat("");
  };

  return (
    <>
      <section id="news" className="gn-hero-section">
        <div className="container">
          <div className="gn-hero">
          <div className="gn-hero__glow-a" aria-hidden="true" />
          <div className="gn-hero__glow-b" aria-hidden="true" />
          <img className="gn-hero__symbol" src="/assets/nora-symbol-white.png" alt="" aria-hidden="true" />

          <div className="gn-hero__inner">
            <div className="gn-hero__top">
              <Reveal from="left" className="gn-hero__heading">
                <div className="gn-badge gn-badge--dark">
                  <span className="gn-badge__dot" />
                  <span>Grupo Nora</span>
                </div>
                <h1 className="gn-hero__title">News</h1>
              </Reveal>

              <Reveal from="right" delay={80} className="gn-hero__side">
                <p className="gn-hero__deck">
                  Conteúdos, notícias e atualidades curados sob medida para impulsionar o dia a dia de
                  profissionais e empresas da área da saúde.
                </p>
                <div className="gn-search">
                  <span className="gn-search__icon" aria-hidden="true">
                    <svg viewBox="0 0 20 20" width="19" height="19">
                      <circle cx="9" cy="9" r="5.6" stroke="currentColor" strokeWidth="1.6" fill="none" />
                      <path d="m13.4 13.4 3.1 3.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </span>
                  <input
                    type="search"
                    aria-label="Buscar artigos"
                    placeholder="Buscar por assunto, marca ou categoria"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="gn-search__input"
                  />
                </div>
              </Reveal>
            </div>

            <Reveal delay={140} className="gn-hero__filterbar">
              <div className="gn-chips" role="group" aria-label="Filtrar por categoria">
                {CATEGORIES.map(({ cat, label }) => (
                  <button
                    key={label}
                    type="button"
                    className={`gn-chip ${activeCat === cat ? "is-active" : ""}`}
                    aria-pressed={activeCat === cat}
                    onClick={() => setActiveCat(cat)}
                  >
                    {label}
                    <span className="gn-chip__count">{countFor(cat)}</span>
                  </button>
                ))}
              </div>
              <div className="gn-hero__count">
                <span>{shownCount}</span> de {posts.length} artigos
              </div>
            </Reveal>
          </div>
        </div>
        </div>
      </section>

      <section aria-label="Artigos" className="gn-articles-section">
        <div className="gn-articles-rail">
          {featuredVisible && featured && <NewsCard post={featured} variant="featured" />}

          {gridPosts.length > 0 && (
            <div className="gn-articles-grid">
              {gridPosts.map((post, i) => (
                <NewsCard key={post.slug} post={post} delay={GRID_DELAYS[i % GRID_DELAYS.length]} />
              ))}
            </div>
          )}

          {isEmpty && (
            <div className="gn-empty">
              <div className="gn-empty__title">Nenhum artigo encontrado.</div>
              <p className="gn-empty__text">
                Ainda não há conteúdo publicado para esta combinação de busca e categoria.
              </p>
              <button type="button" className="gn-empty__btn" onClick={reset}>
                Ver todos os artigos
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
