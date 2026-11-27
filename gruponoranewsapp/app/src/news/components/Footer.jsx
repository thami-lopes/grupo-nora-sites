import { scrollToId } from './Header.jsx';
import { BRANDS } from '../data.js';

export default function Footer() {
  const go = (id) => (e) => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <footer className="gn-footer">
      <div className="gn-footer__inner">
        <div className="gn-footer__grid">
          <div>
            <img className="gn-footer__logo" src="/assets/logo-horizontal-navy.png" alt="Grupo Nora" />
            <p className="gn-footer__tagline">Um ecossistema completo para a gestão da saúde.</p>
            <a href="#contato" onClick={go('contato')} className="gn-footer__cta">
              Fale Conosco <span aria-hidden="true">→</span>
            </a>
          </div>

          <div>
            <div className="gn-footer__heading">Marcas</div>
            <div className="gn-footer__links">
              {BRANDS.map((b) => (
                <a key={b.id} href={b.href}>
                  Nora {b.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="gn-footer__heading">Institucional</div>
            <div className="gn-footer__links">
              <a href="#news" onClick={go('news')}>
                News
              </a>
              <a href="/">Sobre nós</a>
              <a href="#contato" onClick={go('contato')}>
                Fale Conosco
              </a>
            </div>
          </div>

          <div>
            <div className="gn-footer__heading">Legal</div>
            <div className="gn-footer__links">
              <a href="#news" onClick={go('news')}>
                Política de privacidade
              </a>
              <a href="#contato" onClick={go('contato')}>
                Fale Conosco
              </a>
            </div>
          </div>
        </div>

        <div className="gn-footer__bottom">
          <div className="gn-footer__copyright">2026 Grupo Nora. All Rights Reserved.</div>
          <div className="gn-footer__quicklinks">
            <a href="#marcas" onClick={go('marcas')}>
              Nossas Marcas
            </a>
            <span className="gn-dot" aria-hidden="true" />
            <a href="/">Home</a>
            <span className="gn-dot" aria-hidden="true" />
            <a href="#news" onClick={go('news')}>
              Voltar ao topo ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
