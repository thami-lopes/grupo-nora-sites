import { useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ArticleGrid from './components/ArticleGrid.jsx';
import Brands from './components/Brands.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { ARTICLES, matchesArticle } from './data.js';
import { usePrefersReducedMotion, useScrollProgress } from './hooks.js';
import './news.css';

export default function NewsPage() {
  const [query, setQuery] = useState('');
  const [activeCat, setActiveCat] = useState('');
  const reduced = usePrefersReducedMotion();
  const progress = useScrollProgress();

  const featured = useMemo(() => ARTICLES.find((a) => a.featured), []);
  const rest = useMemo(() => ARTICLES.filter((a) => !a.featured), []);

  const featuredVisible = matchesArticle(featured, query, activeCat);
  const gridArticles = rest.filter((a) => matchesArticle(a, query, activeCat));
  const shownCount = (featuredVisible ? 1 : 0) + gridArticles.length;

  const resetFilters = () => {
    setQuery('');
    setActiveCat('');
  };

  return (
    <div className="gn-news">
      <div className="gn-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
      <Header />
      <main>
        <Hero
          query={query}
          onQueryChange={setQuery}
          activeCat={activeCat}
          onCatChange={setActiveCat}
          shownCount={shownCount}
          reduced={reduced}
        />
        <ArticleGrid
          featured={featured}
          featuredVisible={featuredVisible}
          gridArticles={gridArticles}
          onReset={resetFilters}
          reduced={reduced}
        />
        <Brands reduced={reduced} />
        <Contact reduced={reduced} />
      </main>
      <Footer />
    </div>
  );
}
