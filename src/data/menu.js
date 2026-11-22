// =====================================================================
// ARQUIVO: src/data/menu.js
// PAPEL: lista dos links de navegação do site. Usada no Cabeçalho e no Rodapé.
// =====================================================================

// [O quê]   Exporta o array com os 4 itens do menu.
// [React]   O Header e o Footer fazem .map() nesta lista para criar os links.
// [Por quê] Clean code (DRY = "Don't Repeat Yourself"): o menu é definido UMA vez.
//           Para renomear "Sobre Nós" ou adicionar uma página, edite só aqui.
export const itensMenu = [
  { rotulo: 'Início', caminho: '/' },
  { rotulo: 'Serviços', caminho: '/servicos' },
  { rotulo: 'Nossas Lojas', caminho: '/lojas' },
  { rotulo: 'Sobre Nós', caminho: '/sobre' },
];
