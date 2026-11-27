import Reveal from './Reveal.jsx';

export default function ArticleCard({ article, variant = 'grid', delay = 0, reduced }) {
  const isFeatured = variant === 'featured';

  return (
    <Reveal
      as="a"
      href={`#${article.id}`}
      from={isFeatured ? 'up' : 'scale'}
      delay={delay}
      reduced={reduced}
      className={`gn-article gn-article--${variant}`}
      style={{ '--c': article.color }}
    >
      <span className="gn-article__band" aria-hidden="true" />
      <div className="gn-article__media">
        <div className="gn-article__glow" aria-hidden="true" />
        <img className="gn-article__symbol" src="/assets/nora-symbol-white.png" alt="" aria-hidden="true" />
        <span className="gn-article__tags">
          {article.tags.map((tag) => (
            <span
              key={tag.label}
              className={`gn-tag ${tag.color ? '' : 'gn-tag--neutral'}`}
              style={tag.color ? { background: tag.color } : undefined}
            >
              {tag.label}
            </span>
          ))}
        </span>
        {article.badge && <span className="gn-article__badge">{article.badge}</span>}
      </div>
      <div className="gn-article__body">
        <div className="gn-article__kicker">{article.kicker}</div>
        <Tag as={isFeatured ? 'h2' : 'h3'} className="gn-article__title">
          {article.title}
        </Tag>
        <p className="gn-article__excerpt">{article.excerpt}</p>
        <span className="gn-article__cta">
          Leia mais <span aria-hidden="true">→</span>
        </span>
      </div>
    </Reveal>
  );
}

function Tag({ as: As, ...rest }) {
  return <As {...rest} />;
}
