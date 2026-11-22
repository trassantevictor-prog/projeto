// =====================================================================
// ARQUIVO: src/components/RolarParaTopo.jsx
// PAPEL: ao trocar de página, volta a tela para o topo.
//        (Não desenha nada: só executa uma ação.)
// =====================================================================

import { useEffect } from 'react';

// [O quê]   useLocation devolve informações da URL atual (ex.: pathname = "/servicos").
// [React]   Hook do React Router: o componente é redesenhado quando a URL muda.
import { useLocation } from 'react-router-dom';

export default function RolarParaTopo() {
  // [O quê]   Pega só o "pathname" (o caminho) da URL atual.
  // [React]   Desestruturação de objeto: { pathname } extrai uma propriedade.
  const { pathname } = useLocation();

  // [O quê]   Toda vez que o caminho mudar, rola a janela para o topo (posição 0, 0).
  // [React]   useEffect com [pathname]: executa depois do desenho da tela, e só quando "pathname" muda.
  // [Por quê] Num site de página única, o navegador NÃO volta ao topo sozinho:
  //           sem isto, quem clica em "Serviços" no rodapé chegaria no meio da página nova.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // [O quê]   Devolve null = "não desenhe nada".
  // [React]   Um componente pode existir só para executar lógica.
  return null;
}
