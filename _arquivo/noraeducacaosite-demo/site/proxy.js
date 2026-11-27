import { NextResponse } from "next/server";
import { ACESSO_COOKIE, acessoToken, safeEqual } from "./app/lib/acesso";

// Portão de senha para a versão compartilhada do site. Só liga quando a
// variável de ambiente SITE_PASSWORD existe (ex.: no deploy privado); no
// computador local ela não está definida e o site abre normalmente.
const LIBERADOS = ["/acesso", "/api/acesso", "/assets/nora-educacao-horizontal.png"];

export async function proxy(request) {
  const password = process.env.SITE_PASSWORD;
  if (!password) return NextResponse.next();

  const { pathname, search } = request.nextUrl;
  if (LIBERADOS.includes(pathname)) return NextResponse.next();

  const cookie = request.cookies.get(ACESSO_COOKIE)?.value;
  if (cookie && safeEqual(cookie, await acessoToken(password))) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/api/")) {
    return NextResponse.json({ error: "Acesso restrito." }, { status: 401 });
  }

  const url = new URL("/acesso", request.url);
  url.searchParams.set("next", pathname + search);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
