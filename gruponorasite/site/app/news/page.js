import NewsShell from "@/components/news/NewsShell";
import NewsHub from "@/components/news/NewsHub";
import { getAllPosts } from "@/lib/news";

export const metadata = {
  title: "News — Grupo Nora",
  description:
    "Conteúdos, notícias e atualidades curados sob medida para impulsionar o dia a dia de profissionais e empresas da área da saúde.",
};

export default function NewsPage() {
  const posts = getAllPosts();
  return (
    <NewsShell>
      <NewsHub posts={posts} />
    </NewsShell>
  );
}
