import Reveal from './Reveal.jsx';
import { CATEGORIES, ARTICLES } from '../data.js';

function countFor(cat) {
  if (!cat) return ARTICLES.length;
  return ARTICLES.filter((a) => a.cats.includes(cat)).length;
}

export default function Hero({ query, onQueryChange, activeCat, onCatChange, shownCount, reduced }) {
  return (
    <section id="news" className="gn-hero-section">
      <div className="gn-hero">
        <div className="gn-hero__glow-a" aria-hidden="true" />
        <div className="gn-hero__glow-b" aria-hidden="true" />
        <img className="gn-hero__symbol" src="/assets/nora-symbol-white.png" alt="" aria-hidden="true" />

        <div className="gn-hero__inner">
          <div className="gn-hero__top">
            <Reveal from="left" reduced={reduced} className="gn-hero__heading">
              <div className="gn-badge gn-badge--dark">
                <span className="gn-badge__dot" />
                <span>Grupo Nora</span>
              </div>
              <h1 className="gn-hero__title">News</h1>
            </Reveal>

            <Reveal from="right" delay={80} reduced={reduced} className="gn-hero__side">
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
                  onChange={(e) => onQueryChange(e.target.value)}
                  className="gn-search__input"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={140} reduced={reduced} className="gn-hero__filterbar">
            <div className="gn-chips" role="group" aria-label="Filtrar por categoria">
              {CATEGORIES.map(({ cat, label }) => (
                <button
                  key={label}
                  type="button"
                  className={`gn-chip ${activeCat === cat ? 'is-active' : ''}`}
                  aria-pressed={activeCat === cat}
                  onClick={() => onCatChange(cat)}
                >
                  {label}
                  <span className="gn-chip__count">{countFor(cat)}</span>
                </button>
              ))}
            </div>
            <div className="gn-hero__count">
              <span>{shownCount}</span> de {ARTICLES.length} artigos
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
