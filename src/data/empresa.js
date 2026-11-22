// =====================================================================
// ARQUIVO: src/data/empresa.js
// PAPEL: dados gerais da empresa (nome, lema, contatos, informações legais).
//
// TROCAR ANTES DE PUBLICAR: tudo marcado com "TROCAR" abaixo é exemplo.
// =====================================================================

// [O quê]   Cria e exporta um objeto com os dados da empresa.
// [React]   Dados ficam em arquivos próprios, fora dos componentes. Os componentes
//           importam estes dados e os mostram na tela (via props ou direto).
// [Por quê] Se o telefone ou o CNPJ mudar, você altera aqui UMA vez e o site todo
//           (cabeçalho, rodapé, botões) atualiza sozinho.
export const empresa = {
  // [O quê] Nome completo, usado no rodapé, no título da aba e nos textos.
  nome: 'Farmácias Associadas Central POA',

  // [O quê] Parte "grande" e parte "pequena" do logo, usadas no componente Logo.
  marca: 'Associadas',
  regiao: 'Central POA',

  // [O quê] Lema da loja: aparece na capa, no rodapé e na página Sobre Nós.
  lema: 'Cuidado que começa no seu bairro e acompanha a sua vida.',

  // [O quê] WhatsApp GERAL (formato: 55 + DDD + número, só dígitos). TROCAR.
  // [Por quê] O link wa.me exige esse formato, sem espaço, parênteses ou traço.
  whatsappGeral: '5551999999999',

  // [O quê] Usuário do Instagram, sem o "@". TROCAR se for outro.
  instagram: 'associadascentralpoa',

  // [O quê] Informações legais exibidas no rodapé. TROCAR pelos dados reais.
  cnpj: '00.000.000/0001-00',
  responsavelTecnico: 'Nome do(a) farmacêutico(a) responsável',
  crf: 'CRF-RS 00000',
};
