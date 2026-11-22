// =====================================================================
// ARQUIVO: src/hooks/useTituloDaPagina.js
// PAPEL: troca o título da aba do navegador em cada página.
// =====================================================================

// [O quê]   Importa o useEffect.
// [React]   useEffect = Hook para "efeitos colaterais": coisas que acontecem FORA da
//           tela, como mexer no título da aba, buscar dados ou escutar o teclado.
// [Por quê] Mudar document.title não é desenhar na tela, então vai dentro de um efeito.
import { useEffect } from 'react';

// [O quê]   Importa os dados da empresa para usar o nome no título.
import { empresa } from '../data/empresa.js';

// [O quê]   Cria um HOOK PERSONALIZADO (custom hook): uma função cujo nome começa com "use".
// [React]   Custom hooks permitem reaproveitar lógica que usa hooks do React.
// [Por quê] Todas as páginas precisam trocar o título. Em vez de copiar o useEffect
//           em 5 arquivos, cada página chama só: useTituloDaPagina('Serviços').
export function useTituloDaPagina(titulo) {
  // [O quê]   Executa o efeito depois que a página aparece na tela.
  useEffect(() => {
    // [O quê]   Se veio um título (ex.: "Serviços"), monta "Serviços | Nome da empresa".
    //           Se não veio (Home), usa só o nome da empresa.
    document.title = titulo ? `${titulo} | ${empresa.nome}` : empresa.nome;

    // [O quê]   Lista de dependências: o efeito roda de novo SOMENTE quando "titulo" mudar.
    // [React]   Sem essa lista, o efeito rodaria a cada renderização.
  }, [titulo]);
}
