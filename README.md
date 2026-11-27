# Sites do Grupo Nora

Cinco sites do Grupo Nora, cada um em sua pasta, independentes entre si, mais o blog **News**, que fica dentro do site do Grupo Nora em `/news`. Eles se ligam por links (menu, cartões "Nossas Marcas" e rodapés).

| Site | Pasta | Tecnologia | Porta local | Comando |
|---|---|---|---|---|
| Grupo Nora (home + News em `/news`) | `gruponorasite/site` | Next.js 16 (React 19) | 3000 | `npm run dev` |
| Nora Care (**produção**) | repositório `contadoc-org/noracare-site` (fora desta pasta) | Next.js 16 + TypeScript + Tailwind | 3001 | `npx next dev -p 3001` |
| Nora Capital | `noracapitalsite/site` | HTML/CSS/JS estático | 3002 | `npm run dev` |
| Nora Safe | `norasafesite/site` | HTML/CSS/JS estático | 3003 | `npm run dev` |
| Nora Educação | `noraeducacaosite/site` | Next.js 16 (React 19) | 3005 | `npm run dev` |

## Como rodar um site

Precisa de Node.js 20.9 ou mais novo (testado com Node 24). Dentro da pasta do site:

```bash
npm install
npm run dev      # abre em http://localhost:<porta da tabela>
npm run build    # gera a versão de produção
```

Para ver a navegação completa entre os sites, rode os cinco ao mesmo tempo (um terminal para cada).

Capital e Safe são páginas estáticas: o `npm run dev` só serve os arquivos com o pacote `serve`. Em produção basta publicar o conteúdo da pasta.

## Antes de publicar: trocar os links `localhost`

Os links entre os sites estão apontando para `http://localhost:300X/`. Troque pelos endereços reais:

- Grupo Nora: `gruponorasite/site/lib/siteLinks.js` (o link do News é `/news`, no próprio site)
- Care: o site de produção (`noracare-site`) é um projeto à parte; os links para ele saem dos outros sites (acima)
- Educação: `noraeducacaosite/site/app/lib/siteLinks.js`
- Capital e Safe: procurar por `localhost:300` em `noracapitalsite/site/index.html` e `norasafesite/site/index.html`

## News (blog) em /news

O News é um blog dentro do site do Grupo Nora (`gruponorasite/site`): lista com busca e filtro por categoria em `/news` e uma página por artigo em `/news/<slug>`. Usa o mesmo cabeçalho, "Nossas Marcas", contato e rodapé da home.

- **Onde ficam os artigos:** um arquivo Markdown por artigo em `gruponorasite/site/content/news/<slug>.md`. O nome do arquivo vira o endereço (`/news/<slug>`). Para publicar, crie o arquivo e faça o deploy.
- **Campos do cabeçalho do arquivo (frontmatter):** `title`, `excerpt` (resumo dos cards), `featured` (só um artigo em destaque), `badge`, `brand` (care, capital, safe, educacao ou invest: define a cor do card), `kicker` (linha acima do título; se vazio, usa as categorias), `categories` (use: notícias, gestão hospitalar, seguros, contabilidade, finanças, e também nora care/capital/safe/invest), `tags` (etiquetas do card, cada uma com `label` e `brand` opcional), `cover` (capa opcional, ex.: `/assets/news/foto.jpg`), `date` (opcional, AAAA-MM-DD; com data, os mais recentes vêm primeiro), `order` (ordem quando não há data) e `draft: true` para esconder. O texto do artigo vem depois do cabeçalho, em Markdown.
- **Painel de edição (CMS):** `public/admin/` tem um painel Decap CMS (abre em `/admin/index.html`) que lê e grava esses arquivos no GitHub (`contadoc-org/nora-group`, branch `main`). **Não foi testado:** o login exige um servidor de OAuth do GitHub; configure `base_url` em `public/admin/config.yml` (ou troque o backend). Sem isso, edite os arquivos `.md` direto no GitHub.
- **Trocar por outro CMS:** a leitura dos artigos está só em `lib/news.js` (`getAllPosts`, `getPostBySlug`). Para usar um CMS headless ou banco de dados, reescreva essas funções mantendo o formato que elas devolvem.
- O texto do artigo é Markdown convertido em HTML sem filtro: publique só conteúdo de quem tem acesso de edição.

## Nora Educação: o que precisa de servidor

O site de Educação tem páginas de curso, checkout e formulários que usam rotas de servidor (`app/api/*`) e o **Mercado Pago**. Por isso ele precisa de hospedagem com Node (não funciona como site 100% estático).

- Copie `noraeducacaosite/site/.env.local.example` para `.env.local` e preencha `MP_ACCESS_TOKEN` (token do Mercado Pago, secreto, só no servidor) e `NEXT_PUBLIC_SITE_URL` (endereço público do site). Use credenciais de teste até validar o fluxo.
- `SITE_PASSWORD` (opcional) liga uma tela de senha em todo o site (`proxy.js`). Sem essa variável o site abre normalmente.
- Contatos do site ficam em `noraeducacaosite/site/app/lib/contato.js`; preços e textos dos cursos, em `app/lib/courses.js`.

## Pontos para revisar

- **Conteúdo do News (pendente do cliente):** hoje há 7 artigos de exemplo com o mesmo título e resumo (o texto completo não existe, o corpo é só o resumo). Faltam os artigos reais, as capas aprovadas, a cor oficial da Nora Invest (o brandbook traz `#BB88D42`, inválido; o card usa o azul-marinho do grupo e a etiqueta fica neutra), as URLs de Instagram, Facebook e LinkedIn, e a versão em português da linha legal do rodapé ("All Rights Reserved"). A categoria "Gestão Hospitalar" não tem artigos.
- Vários textos de contato ainda são provisórios (ícones de redes sociais e "Política de privacidade" sem destino, no Grupo Nora, Care, Capital e Safe).
- As fotos de "Nosso Espaço" (Grupo Nora) e de "Instalações" (Educação) são imagens de projeto 3D do escritório novo, não fotos reais.
- O vídeo do topo (`hero-nora-care.mp4`, cerca de 19 MB) se repete em Care, Capital e Safe. Em produção vale hospedá-lo uma vez só (CDN ou armazenamento de arquivos).
- Nenhum site usa chave de API ou serviço externo, exceto o Mercado Pago (Educação) e as fontes do Google (Poppins).

## Arquivo: Care de demonstração

A partir de agora o Care usado é o de **produção** (`contadoc-org/noracare-site`, em site.noracare.com.br). A versão de demonstração que fazíamos aqui foi arquivada em `_arquivo/noracaresite-demo/` (não é mais mantida; também existe, só para consulta, na branch `demo/grupo-nora-care` do `noracare-site`). Para ver os sites ligados localmente, rode o `noracare-site` na porta 3001: `npx next dev -p 3001`.
