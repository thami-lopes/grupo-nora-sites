import { SITE_LINKS } from './siteLinks.js';

// Content is carried over verbatim from the approved Grupo Nora News design
// (Grupo Nora - News.dc.html), which itself preserves the source beta
// verbatim per the project's content-lock rule: nothing here is invented.
// Known source-content issues (repeated article, placeholder cover
// treatment, invalid Nora Invest brand color, fictional address, etc.) are
// tracked in ../../BLOCKERS.md rather than rendered on the page.

export const CATEGORIES = [
  { cat: '', label: 'Todos' },
  { cat: 'notícias', label: 'Notícias' },
  { cat: 'gestão hospitalar', label: 'Gestão Hospitalar' },
  { cat: 'seguros', label: 'Seguros' },
  { cat: 'contabilidade', label: 'Contabilidade' },
  { cat: 'finanças', label: 'Finanças' },
];

const TITLE = '5 falhas que profissionais da saúde não podem cometer.';
const EXCERPT =
  'O principal desafio de um médico e demais profissionais da saúde, como dentistas e psicólogos, […]';

// data-cats from the source maps to `cats` below (used for filtering).
// `tags` is what renders as colored pill(s) on the card.
export const ARTICLES = [
  {
    id: 'post-1',
    featured: true,
    cats: ['contabilidade', 'nora capital', 'notícias'],
    kicker: 'Contabilidade · Nora Capital · Notícias',
    tags: [{ label: 'Nora Capital', color: 'var(--brand-capital)' }],
    badge: 'Em destaque',
    color: 'var(--brand-capital)',
    title: TITLE,
    excerpt: EXCERPT,
  },
  {
    id: 'post-2',
    cats: ['contabilidade', 'nora capital', 'notícias'],
    kicker: 'Contabilidade · Notícias',
    tags: [{ label: 'Nora Capital', color: 'var(--brand-capital)' }],
    color: 'var(--brand-capital)',
    title: TITLE,
    excerpt: EXCERPT,
  },
  {
    id: 'post-3',
    cats: ['nora safe', 'seguros'],
    kicker: 'Seguros',
    tags: [{ label: 'Nora Safe', color: 'var(--brand-safe)' }],
    color: 'var(--brand-safe)',
    title: TITLE,
    excerpt: EXCERPT,
  },
  {
    id: 'post-4',
    cats: ['finanças', 'nora invest', 'notícias'],
    kicker: 'Finanças · Notícias',
    // Nora Invest has no valid official brand color (brandbook prints the
    // invalid `#BB88D42`) — rendered neutral instead of guessing a hex.
    tags: [{ label: 'Nora Invest', color: null }],
    color: 'var(--brand-invest)',
    title: TITLE,
    excerpt: EXCERPT,
  },
  {
    id: 'post-5',
    cats: ['finanças', 'nora care', 'notícias'],
    kicker: 'Finanças · Notícias',
    tags: [{ label: 'Nora Care', color: 'var(--brand-care)' }],
    color: 'var(--brand-care)',
    title: TITLE,
    excerpt: EXCERPT,
  },
  {
    id: 'post-6',
    cats: ['contabilidade', 'nora capital', 'notícias'],
    kicker: 'Contabilidade · Notícias',
    tags: [{ label: 'Nora Capital', color: 'var(--brand-capital)' }],
    color: 'var(--brand-capital)',
    title: TITLE,
    excerpt: EXCERPT,
  },
  {
    id: 'post-7',
    cats: ['nora capital', 'nora care', 'nora invest', 'notícias'],
    kicker: 'Nora Invest · Notícias',
    tags: [
      { label: 'Nora Capital', color: 'var(--brand-capital)' },
      { label: 'Care', color: 'var(--brand-care)' },
    ],
    color: 'var(--brand-capital)',
    title: TITLE,
    excerpt: EXCERPT,
  },
];

export const BRANDS = [
  {
    id: 'care',
    name: 'Care',
    descriptor: 'Gestão Médica e Hospitalar',
    color: 'var(--brand-care)',
    href: SITE_LINKS.care,
  },
  {
    id: 'capital',
    name: 'Capital',
    descriptor: 'Contabilidade e Gestão Financeira',
    color: 'var(--brand-capital)',
    href: SITE_LINKS.capital,
  },
  {
    id: 'safe',
    name: 'Safe',
    descriptor: 'Seguros e Proteção Especializada',
    color: 'var(--brand-safe)',
    href: SITE_LINKS.safe,
  },
  {
    id: 'educacao',
    name: 'Educação',
    descriptor: 'Formação e Desenvolvimento Profissional',
    color: 'var(--brand-educacao)',
    href: SITE_LINKS.educacao,
  },
];

export function matchesArticle(article, query, cat) {
  const okCat = !cat || article.cats.includes(cat);
  if (!okCat) return false;
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const haystack = `${article.title} ${article.excerpt} ${article.kicker} ${article.cats.join(' ')}`.toLowerCase();
  return haystack.includes(q);
}

export const CONTACT = {
  whatsappHref:
    'https://wa.me/5521980818818?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es',
  whatsappLabel: '(21) 98081-8818',
  email: 'contato@gruponora.com.br',
  // Placeholder from the source beta — real address pending, see BLOCKERS.md.
  addressLines: ['Rua Teste Exemplo, 123', 'Rio de Janeiro/RJ', 'CEP 12345-678'],
};
