// =====================================================================
// ARQUIVO: src/utils/links.js
// PAPEL: funções pequenas que montam links (WhatsApp e Google Maps).
// =====================================================================

// [O quê]   Função que monta o link do WhatsApp para um número e uma mensagem.
// [React]   Função "pura" fora dos componentes: recebe dados, devolve um texto,
//           não muda nada ao redor. Os componentes a chamam dentro do JSX.
// [Por quê] Vários botões precisam desse link. Em vez de repetir a conta em cada
//           botão, ela vive aqui e é testada/corrigida em um só lugar.
export function criarLinkWhatsapp(numero, mensagem = '') {
  // [O quê]   encodeURIComponent troca espaços e acentos por códigos seguros de URL.
  // [Por quê] Sem isso, "Olá! Quero..." quebraria o link.
  const textoCodificado = encodeURIComponent(mensagem);

  // [O quê]   Devolve o endereço final. wa.me é o link oficial de "abrir conversa" do WhatsApp.
  return `https://wa.me/${numero}?text=${textoCodificado}`;
}

// [O quê]   Monta o texto completo do endereço de uma loja (usado nos dois links de mapa abaixo).
// [Por quê] Evita repetir a mesma concatenação nas duas funções.
function enderecoCompleto(loja) {
  return `${loja.endereco}, ${loja.bairro}, Porto Alegre, RS`;
}

// [O quê]   Link que abre o Google Maps pesquisando o endereço da loja (botão "Como chegar").
export function criarLinkMapa(loja) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(enderecoCompleto(loja))}`;
}

// [O quê]   Link do mapa em formato "embutido", para usar dentro de um <iframe>.
// [Por quê] Mostra o mapa na própria página da loja, sem precisar de chave de API.
export function criarLinkMapaEmbutido(loja) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(enderecoCompleto(loja))}&output=embed`;
}
