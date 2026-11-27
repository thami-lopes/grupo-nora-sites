import Reveal from './Reveal.jsx';
import { BRANDS } from '../data.js';

// Card markup/CSS mirrors gruponorasite's BrandsGrid.jsx + globals.css
// "Nossas Marcas" component exactly (same classes with the gn- prefix kept
// for consistency with the rest of this file, same padding/hover/animation).
export default function Brands({ reduced }) {
  return (
    <section id="marcas" className="gn-brands-section">
      <div className="gn-brands__inner">
        <Reveal reduced={reduced} className="gn-brands__head">
          <div className="gn-badge">Nossas Marcas</div>
          <h2 className="gn-section-title">Quatro negócios, um só ecossistema de gestão.</h2>
        </Reveal>

        <div className="gn-brands__grid">
          {BRANDS.map((brand, i) => (
            <Reveal
              as="a"
              key={brand.id}
              href={brand.href}
              from="scale"
              delay={i * 70}
              reduced={reduced}
              className={`gn-brand-card gn-brand-card--${brand.id}`}
            >
              <span className="gn-brand-card__band" aria-hidden="true" />
              <div className="gn-brand-card__logo">
                <img src="/assets/nora-word-navy.png" alt={`Nora ${brand.name}`} />
                <span>{brand.name}</span>
              </div>
              <div className="gn-brand-card__desc">{brand.descriptor}</div>
              <span className="gn-brand-card__btn">
                Acessar <span aria-hidden="true">→</span>
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
