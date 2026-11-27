"use client";

import Link from "next/link";
import Reveal from "../Reveal";

export default function NewsCard({ post, variant = "grid", delay = 0 }) {
  const isFeatured = variant === "featured";
  const Title = isFeatured ? "h2" : "h3";

  return (
    <Reveal
      as={Link}
      href={`/news/${post.slug}`}
      from={isFeatured ? "up" : "scale"}
      delay={delay}
      className={`gn-article gn-article--${variant}`}
      style={{ "--c": post.color }}
    >
      <span className="gn-article__band" aria-hidden="true" />
      <div className="gn-article__media">
        {post.cover ? (
          <img className="gn-article__cover" src={post.cover} alt="" />
        ) : (
          <>
            <div className="gn-article__glow" aria-hidden="true" />
            <img className="gn-article__symbol" src="/assets/nora-symbol-white.png" alt="" aria-hidden="true" />
          </>
        )}
        <span className="gn-article__tags">
          {post.tags.map((tag) => (
            <span
              key={tag.label}
              className={`gn-tag ${tag.color ? "" : "gn-tag--neutral"}`}
              style={tag.color ? { background: tag.color } : undefined}
            >
              {tag.label}
            </span>
          ))}
        </span>
        {post.badge && <span className="gn-article__badge">{post.badge}</span>}
      </div>
      <div className="gn-article__body">
        <div className="gn-article__kicker">{post.kicker}</div>
        <Title className="gn-article__title">{post.title}</Title>
        <p className="gn-article__excerpt">{post.excerpt}</p>
        <span className="gn-article__cta">
          Leia mais <span aria-hidden="true">→</span>
        </span>
      </div>
    </Reveal>
  );
}
