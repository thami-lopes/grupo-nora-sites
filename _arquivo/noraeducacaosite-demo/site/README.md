# Nora Educação

Site do Centro de Ensino do Grupo Nora: catálogo de cursos (ACLS, BLS,
POCUS, Via Aérea Difícil, Punção Venosa Guiada por USG, Punção Intraóssea) com inscrição e
pagamento pelo site via **Mercado Pago Checkout Pro**.

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em [http://localhost:3005](http://localhost:3005).

## Antes de ir ao ar: pendências

### 1. Credenciais do Mercado Pago (obrigatório para o checkout funcionar)

Edite `.env.local` na raiz do projeto:

```
MP_ACCESS_TOKEN=SEU_ACCESS_TOKEN_AQUI
NEXT_PUBLIC_SITE_URL=https://educacao.gruponora.com.br
```

- Pegue as credenciais em https://www.mercadopago.com.br/developers/panel/app
- Use as credenciais de **teste** (prefixo `TEST-`) para validar o fluxo
  ponta a ponta sem cobrar de verdade; troque pelas de **produção** somente
  quando o site for para o ar.
- `MP_ACCESS_TOKEN` é secreto: fica só no servidor, nunca é enviado ao
  navegador. Nunca renomeie essa variável com o prefixo `NEXT_PUBLIC_`.
- Sem essa variável configurada, o botão "Ir para pagamento seguro" mostra
  um aviso amigável e um link de fallback para o WhatsApp — o site não
  quebra, só não cobra.

### 2. Logo oficial da HSI

A seção "Certificação" (`app/components/Certificacao.js`) já está preparada
para exibir a logo oficial da HSI — Health & Safety Institute. Basta salvar
o arquivo da logo (o mesmo enviado por vocês) em:

```
public/assets/hsi-logo.png
```

Até lá, a seção mostra um selo de texto "HSI" como substituto temporário
(não é a logo oficial, para não reproduzir a marca sem o arquivo correto).

### 3. Logo da Nora Educação e vídeo institucional

O cabeçalho e rodapé usam por enquanto uma wordmark em texto/SVG
(`app/components/Logo.js`), e o hero usa uma ilustração em CSS/SVG no lugar
de um vídeo — não havia arquivos de logo/vídeo da Nora Educação disponíveis
no momento da criação do site (as demais marcas do Grupo Nora usam PNGs e
vídeos próprios em `public/assets`). Para deixar 100% igual às marcas
irmãs, basta:

1. Adicionar `nora-educacao-horizontal.png` (logo) e
   `hero-nora-educacao.mp4` + `hero-nora-educacao-poster.png` em
   `public/assets`.
2. Trocar `Logo` por `<Image src="/assets/nora-educacao-horizontal.png" ... />`
   em `Header.js` e `Footer.js`, e o bloco `.pulseTrack` do `Hero.js` pelo
   `<video>`, seguindo o padrão dos sites irmãos (`noracaresite`).

### 4. Formulário de contato e de solicitação de treinamento

O formulário da seção "Fale Conosco" (`Contato.js`) e o formulário de
"Solicitar Treinamento" (`app/treinamento/TreinamentoForm.js`) hoje só
simulam o envio na interface. Para receber as mensagens de verdade, é
preciso ligar esses formulários a um serviço de e-mail/CRM (ex.: Resend,
SendGrid, HubSpot) — a inscrição em cursos (que já processa pagamento de
verdade) não depende disso.

### 5. Área do Aluno

A página `/area-do-aluno` mostra um formulário de login que, por enquanto,
não autentica em nenhum lugar (não existe portal/LMS por trás ainda) — ao
enviar, mostra um aviso honesto disso e direciona para o WhatsApp da
coordenação. Para funcionar de verdade, escolham uma plataforma de LMS
(ex.: um portal próprio, Hotmart, Moodle) e troquem esse formulário pela
integração real.

## Segurança do checkout

- O preço de cada curso é definido **apenas no servidor**
  (`app/lib/courses.js` + `app/api/checkout/route.js`); o valor que aparece
  no navegador nunca é enviado de volta como fonte de verdade — a API relê o
  preço pelo `slug` do curso.
- Nenhum dado de cartão passa pelo site: o formulário de inscrição só coleta
  nome, e-mail e telefone; o pagamento (cartão, Pix, boleto) é preenchido e
  processado inteiramente na página hospedada do Mercado Pago, que é
  certificada PCI-DSS.
- `MP_ACCESS_TOKEN` é usado só na rota de servidor `app/api/checkout/route.js`
  e nunca é exposto ao cliente.
