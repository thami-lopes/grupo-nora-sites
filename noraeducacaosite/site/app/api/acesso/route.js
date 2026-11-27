import { NextResponse } from "next/server";
import { ACESSO_COOKIE, acessoToken, safeEqual, safeNext } from "../../lib/acesso";

export async function POST(request) {
  const password = process.env.SITE_PASSWORD;
  if (!password) {
    return NextResponse.json({ ok: true, next: "/" });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }

  const senha = typeof body?.senha === "string" ? body.senha : "";

  // Pequena espera em toda tentativa para desencorajar chute de senha.
  await new Promise((resolve) => setTimeout(resolve, 700));

  if (!safeEqual(await acessoToken(senha), await acessoToken(password))) {
    return NextResponse.json({ error: "Senha incorreta." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true, next: safeNext(body?.next) });
  response.cookies.set(ACESSO_COOKIE, await acessoToken(password), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return response;
}
