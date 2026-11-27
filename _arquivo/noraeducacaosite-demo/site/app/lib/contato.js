// Única fonte dos contatos do site. Quando a Nora Educação tiver celular e
// e-mail próprios, troque só os valores abaixo — todos os botões de WhatsApp,
// links de e-mail e textos de contato do site usam este arquivo.
export const CONTATO = {
  // Só dígitos, com 55 + DDD (usado no link do WhatsApp).
  whatsappNumero: "5521980818818",
  // Como o número aparece escrito na tela.
  telefone: "(21) 98081-8818",
  email: "educacao@gruponora.com.br",
};

export function whatsappLink(mensagem) {
  const base = `https://wa.me/${CONTATO.whatsappNumero}`;
  return mensagem ? `${base}?text=${encodeURIComponent(mensagem)}` : base;
}
