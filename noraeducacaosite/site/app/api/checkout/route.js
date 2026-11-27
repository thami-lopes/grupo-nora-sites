import { NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";
import { getCourseBySlug, isPurchasable } from "../../lib/courses";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function siteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3005").replace(/\/$/, "");
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido." }, { status: 400 });
  }

  const slug = typeof body?.slug === "string" ? body.slug : "";
  const nome = typeof body?.nome === "string" ? body.nome.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const telefone = typeof body?.telefone === "string" ? body.telefone.trim() : "";

  // O preço nunca vem do cliente — é sempre relido do catálogo no servidor,
  // para que ninguém consiga adulterar o valor cobrado a partir do navegador.
  const course = getCourseBySlug(slug);
  if (!course) {
    return NextResponse.json({ error: "Curso não encontrado." }, { status: 404 });
  }
  if (!isPurchasable(course)) {
    return NextResponse.json(
      { error: "Este curso ainda não está disponível para compra pelo site." },
      { status: 409 },
    );
  }
  if (!nome || nome.length < 2) {
    return NextResponse.json({ error: "Informe seu nome completo." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Informe um e-mail válido." }, { status: 400 });
  }
  if (!telefone || telefone.replace(/\D/g, "").length < 10) {
    return NextResponse.json({ error: "Informe um telefone válido com DDD." }, { status: 400 });
  }

  const accessToken = process.env.MP_ACCESS_TOKEN;
  if (!accessToken || accessToken.includes("0000000000000000")) {
    return NextResponse.json(
      {
        error:
          "Checkout ainda não configurado: faltam as credenciais do Mercado Pago (MP_ACCESS_TOKEN) no servidor.",
      },
      { status: 503 },
    );
  }

  try {
    const client = new MercadoPagoConfig({ accessToken });
    const preference = new Preference(client);
    const base = siteUrl();

    const result = await preference.create({
      body: {
        items: [
          {
            id: course.slug,
            title: `${course.name} — ${course.fullName}`,
            description: "Nora Educação · Centro de Ensino",
            category_id: "education",
            quantity: 1,
            currency_id: "BRL",
            unit_price: course.price,
          },
        ],
        payer: { name: nome, email, phone: { number: telefone } },
        back_urls: {
          success: `${base}/checkout/sucesso`,
          failure: `${base}/checkout/erro`,
          pending: `${base}/checkout/pendente`,
        },
        auto_return: "approved",
        statement_descriptor: "NORA EDUCACAO",
        external_reference: course.slug,
      },
    });

    // Credenciais TEST- só têm checkout funcional na URL de sandbox.
    const isTestCredential = accessToken.startsWith("TEST-");
    const checkoutUrl = isTestCredential ? result.sandbox_init_point : result.init_point;

    return NextResponse.json({ checkout_url: checkoutUrl });
  } catch (err) {
    console.error("Falha ao criar preferência Mercado Pago:", err);
    return NextResponse.json(
      { error: "Não foi possível iniciar o pagamento agora. Tente novamente em instantes." },
      { status: 502 },
    );
  }
}
