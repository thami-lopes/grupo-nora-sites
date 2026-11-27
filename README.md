# Sites do Grupo Nora

Seis sites do Grupo Nora, cada um em sua pasta, independentes entre si. Eles se ligam por links (menu, cartões "Nossas Marcas" e rodapés).

| Site | Pasta | Tecnologia | Porta local | Comando |
|---|---|---|---|---|
| Grupo Nora (home) | `gruponorasite/site` | Next.js 16 (React 19) | 3000 | `npm run dev` |
| Nora Care | `noracaresite/site` | Next.js 16 (React 19) | 3001 | `npm run dev` |
| Nora Capital | `noracapitalsite/site` | HTML/CSS/JS estático | 3002 | `npm run dev` |
| Nora Safe | `norasafesite/site` | HTML/CSS/JS estático | 3003 | `npm run dev` |
| News (blog) | `gruponoranewsapp/app` | Vite 5 + React 18 | 3004 | `npm run dev` |
| Nora Educação | `noraeducacaosite/site` | Next.js 16 (React 19) | 3005 | `npm run dev` |

## Como rodar um site

Precisa de Node.js 20.9 ou mais novo (testado com Node 24). Dentro da pasta do site:

```bash
npm install
npm run dev      # abre em http://localhost:<porta da tabela>
npm run build    # gera a versão de produção
```

Para ver a navegação completa entre os sites, rode os seis ao mesmo tempo (um terminal para cada).

Capital e Safe são páginas estáticas: o `npm run dev` só serve os arquivos com o pacote `serve`. Em produção basta publicar o conteúdo da pasta.

## Antes de publicar: trocar os links `localhost`

Os links entre os sites estão apontando para `http://localhost:300X/`. Troque pelos endereços reais:

- Grupo Nora: `gruponorasite/site/lib/siteLinks.js`
- Care: `noracaresite/site/app/lib/siteLinks.js`
- News: `gruponoranewsapp/app/src/news/siteLinks.js`
- Educação: `noraeducacaosite/site/app/lib/siteLinks.js`
- Capital e Safe: procurar por `localhost:300` em `noracapitalsite/site/index.html` e `norasafesite/site/index.html`

## Nora Educação: o que precisa de servidor

O site de Educação tem páginas de curso, checkout e formulários que usam rotas de servidor (`app/api/*`) e o **Mercado Pago**. Por isso ele precisa de hospedagem com Node (não funciona como site 100% estático).

- Copie `noraeducacaosite/site/.env.local.example` para `.env.local` e preencha `MP_ACCESS_TOKEN` (token do Mercado Pago, secreto, só no servidor) e `NEXT_PUBLIC_SITE_URL` (endereço público do site). Use credenciais de teste até validar o fluxo.
- `SITE_PASSWORD` (opcional) liga uma tela de senha em todo o site (`proxy.js`). Sem essa variável o site abre normalmente.
- Contatos do site ficam em `noraeducacaosite/site/app/lib/contato.js`; preços e textos dos cursos, em `app/lib/courses.js`.

## Pontos para revisar

- Vários textos de contato ainda são provisórios (ícones de redes sociais e "Política de privacidade" sem destino, no Grupo Nora, Care, Capital e Safe).
- As fotos de "Nosso Espaço" (Grupo Nora) e de "Instalações" (Educação) são imagens de projeto 3D do escritório novo, não fotos reais.
- O vídeo do topo (`hero-nora-care.mp4`, cerca de 19 MB) se repete em Care, Capital e Safe. Em produção vale hospedá-lo uma vez só (CDN ou armazenamento de arquivos).
- Nenhum site usa chave de API ou serviço externo, exceto o Mercado Pago (Educação) e as fontes do Google (Poppins).
