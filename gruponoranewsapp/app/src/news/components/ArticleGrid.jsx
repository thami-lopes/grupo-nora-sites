import ArticleCard from './ArticleCard.jsx';

const GRID_DELAYS = [0, 70, 140, 0, 70, 140];

export default function ArticleGrid({ featured, featuredVisible, gridArticles, onReset, reduced }) {
  const isEmpty = !featuredVisible && gridArticles.length === 0;

  return (
    <section aria-label="Artigos" className="gn-articles-section">
      <div className="gn-articles-rail">
        {featuredVisible && featured && (
          <ArticleCard article={featured} variant="featured" reduced={reduced} />
        )}

        {gridArticles.length > 0 && (
          <div className="gn-articles-grid">
            {gridArticles.map((article, i) => (
              <ArticleCard
                key={article.id}
                article={article}
                variant="grid"
                delay={GRID_DELAYS[i % GRID_DELAYS.length]}
                reduced={reduced}
              />
            ))}
          </div>
        )}

        {isEmpty && (
          <div className="gn-empty">
            <div className="gn-empty__title">Nenhum artigo encontrado.</div>
            <p className="gn-empty__text">
              Ainda não há conteúdo publicado para esta combinação de busca e categoria.
            </p>
            <button type="button" className="gn-empty__btn" onClick={onReset}>
              Ver todos os artigos
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
