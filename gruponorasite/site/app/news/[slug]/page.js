import Link from "next/link";
import { notFound } from "next/navigation";
import NewsShell from "@/components/news/NewsShell";
import NewsCard from "@/components/news/NewsCard";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/news";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — News Grupo Nora`,
    description: post.excerpt,
  };
}

function formatDate(iso) {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const related = getRelatedPosts(slug, 3);

  return (
    <NewsShell>
      <section className="gn-post-section">
        <article className="gn-post" style={{ "--c": post.color }}>
          <Link href="/news" className="gn-post__back">
            <span aria-hidden="true">←</span> Voltar para o News
          </Link>
          {post.tags.length > 0 && (
            <div className="gn-post__tags">
              {post.tags.map((tag) => (
                <span
                  key={tag.label}
                  className={`gn-tag ${tag.color ? "" : "gn-tag--neutral"}`}
                  style={tag.color ? { background: tag.color, color: "var(--navy)" } : undefined}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          )}
          {post.kicker && <div className="gn-post__kicker">{post.kicker}</div>}
          <h1 className="gn-post__title">{post.title}</h1>
          {post.date && <div className="gn-post__date">{formatDate(post.date)}</div>}

          <div className="gn-post__cover">
            {post.cover ? (
              <img className="gn-post__cover-img" src={post.cover} alt="" />
            ) : (
              <>
                <div className="gn-article__glow" aria-hidden="true" />
                <img className="gn-article__symbol" src="/assets/nora-symbol-white.png" alt="" aria-hidden="true" />
              </>
            )}
          </div>

          <div className="gn-prose" dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </section>

      {related.length > 0 && (
        <section className="gn-related" aria-label="Continue lendo">
          <div className="gn-articles-rail">
            <h2 className="gn-related__title">Continue lendo</h2>
            <div className="gn-articles-grid">
              {related.map((p, i) => (
                <NewsCard key={p.slug} post={p} delay={i * 70} />
              ))}
            </div>
          </div>
        </section>
      )}
    </NewsShell>
  );
}
