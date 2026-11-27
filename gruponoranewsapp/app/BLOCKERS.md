# News page — content blockers

Carried over from the internal "Bloqueadores" register in
`Grupo Nora - News.dc.html`. Nothing below was invented — these are source
issues from the beta being tracked for the client to resolve before launch.

| Item | Onde | Ação necessária | Bloqueia? |
| --- | --- | --- | --- |
| Mesmo artigo repetido 7× no beta | Listagem News | Fornecer os artigos reais (título, resumo, capa, categoria) | Sim |
| Capa é placeholder (gradiente + símbolo Nora) | Todos os cards | Enviar as capas aprovadas de cada post | Sim |
| Nora Invest sem cor oficial válida | Card 4 e 7 | Confirmar hexa (o brandbook traz `#BB88D42`, inválido) | Sim |
| Categoria "Gestão Hospitalar" sem posts | Filtro | Publicar conteúdo ou remover a categoria | Não |
| Redes sociais sem destino | Contato | Fornecer URLs de Instagram, Facebook e LinkedIn | Parcial |
| Linha legal em inglês ("All Rights Reserved") | Footer | Aprovação legal / versão pt-BR | Não |

Update `src/news/data.js` (articles, brand colors, contact address) and
`src/news/components/Contact.jsx` (social links) once real content lands.
