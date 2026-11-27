export const ACESSO_COOKIE = "nora_acesso";

// O cookie guarda um hash da senha (nunca a senha em si). Quem muda a senha
// invalida automaticamente todos os acessos anteriores.
export async function acessoToken(password) {
  const data = new TextEncoder().encode(`nora-educacao:${password}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export function safeEqual(a, b) {
  if (typeof a !== "string" || typeof b !== "string" || a.length !== b.length) {
    return false;
  }
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

// Só aceita caminhos internos como destino após o login (evita redirecionar
// para sites externos).
export function safeNext(value) {
  if (typeof value !== "string") return "/";
  if (!value.startsWith("/") || value.startsWith("//") || value.startsWith("/\\")) {
    return "/";
  }
  return value;
}
