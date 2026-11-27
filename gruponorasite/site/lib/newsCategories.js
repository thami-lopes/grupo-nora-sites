// Categorias do filtro do News. Fica separado de lib/news.js porque este
// arquivo também é usado no navegador (lib/news.js lê arquivos do servidor).
export const CATEGORIES = [
  { cat: "", label: "Todos" },
  { cat: "notícias", label: "Notícias" },
  { cat: "gestão hospitalar", label: "Gestão Hospitalar" },
  { cat: "seguros", label: "Seguros" },
  { cat: "contabilidade", label: "Contabilidade" },
  { cat: "finanças", label: "Finanças" },
];
