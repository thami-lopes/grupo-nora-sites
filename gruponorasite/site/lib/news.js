import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import { CATEGORIES } from "./newsCategories";

// Conteúdo do News (blog) do Grupo Nora.
// Cada artigo é um arquivo Markdown em content/news/<slug>.md, com os campos
// do cabeçalho (frontmatter) descritos no README. Para trocar por outro CMS
// (headless, banco de dados...), basta reescrever getAllPosts/getPostBySlug:
// o resto do site só consome o formato devolvido aqui.

const NEWS_DIR = path.join(process.cwd(), "content", "news");


// Cor de cada marca (variáveis definidas em app/globals.css).
// "invest" não tem cor oficial válida: o card usa o azul-marinho do grupo e a
// etiqueta fica neutra (ver BLOCKERS no README).
const BRAND_COLOR = {
  care: "var(--care)",
  capital: "var(--capital)",
  safe: "var(--safe)",
  educacao: "var(--edu)",
  invest: "var(--navy)",
};

function toPost(slug, data, content) {
  const categories = Array.isArray(data.categories) ? data.categories : [];
  const labelOf = (cat) => CATEGORIES.find((c) => c.cat === cat)?.label;
  const autoKicker = categories.map(labelOf).filter(Boolean).join(" · ");
  return {
    slug,
    title: data.title || slug,
    excerpt: data.excerpt || "",
    featured: Boolean(data.featured),
    badge: data.badge || null,
    brand: data.brand || null,
    color: BRAND_COLOR[data.brand] || "var(--navy)",
    kicker: data.kicker || autoKicker,
    categories,
    tags: (Array.isArray(data.tags) ? data.tags : []).map((t) => ({
      label: t.label,
      color: t.brand ? BRAND_COLOR[t.brand] || null : null,
    })),
    cover: data.cover || null,
    // YAML converte datas sem aspas em Date; guardamos só o texto ISO.
    date: data.date ? new Date(data.date).toISOString().slice(0, 10) : null,
    order: typeof data.order === "number" ? data.order : 999,
    draft: Boolean(data.draft),
    body: content,
  };
}

function readAll() {
  if (!fs.existsSync(NEWS_DIR)) return [];
  return fs
    .readdirSync(NEWS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(NEWS_DIR, f), "utf8");
      const { data, content } = matter(raw);
      return toPost(f.replace(/\.md$/, ""), data, content);
    })
    .filter((p) => !p.draft);
}

function sortPosts(posts) {
  // Mais recentes primeiro (quando há data); sem data, vale o campo "order".
  return posts.sort((a, b) => {
    if (a.date && b.date && a.date !== b.date) return a.date < b.date ? 1 : -1;
    if (a.date && !b.date) return -1;
    if (!a.date && b.date) return 1;
    return a.order - b.order;
  });
}

// Lista para a página /news (sem o corpo do texto).
export function getAllPosts() {
  return sortPosts(readAll()).map(({ body, ...post }) => post);
}

export function getPostBySlug(slug) {
  const post = readAll().find((p) => p.slug === slug);
  if (!post) return null;
  return { ...post, html: marked.parse(post.body) };
}

export function getRelatedPosts(slug, limit = 3) {
  return getAllPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, limit);
}
