// =====================================================================
// ARQUIVO: src/components/SeletorDeLoja.jsx
// PAPEL: janela "Com qual loja você quer falar?" com as 4 lojas e o botão de WhatsApp de cada uma.
// =====================================================================

import { useEffect } from 'react';
import Icone from './Icone.jsx';
import SeloStatus from './SeloStatus.jsx';
import { lojas } from '../data/lojas.js';
import { criarLinkWhatsapp } from '../utils/links.js';
import './SeletorDeLoja.css';

// [O quê]   Props: "aberto" (true/false) e "aoFechar" (função).
// [React]   O estado NÃO mora aqui: ele vem do pai (Layout) por props. Isto é um componente "controlado".
// [Por quê] Layout, Header e botão flutuante precisam abrir a janela; só o ancestral comum consegue coordenar os três.
export default function SeletorDeLoja({ aberto, aoFechar }) {
  // [O quê]   Fecha a janela quando a pessoa aperta a tecla Escape.
  // [React]   useEffect = "efeito colateral": algo que acontece FORA da tela do React (aqui, ouvir o teclado do navegador).
  // [React]   REGRA DOS HOOKS: hooks sempre ficam ANTES de qualquer "return" antecipado.
  //           Por isso este useEffect vem antes do "if (!aberto) return null".
  useEffect(() => {
    // [O quê] Se a janela está fechada, não há nada para ouvir.
    if (!aberto) return;

    // [O quê] Função chamada a cada tecla apertada.
    function aoApertarTecla(evento) {
      if (evento.key === 'Escape') aoFechar();
    }

    // [O quê] Começa a ouvir o teclado.
    document.addEventListener('keydown', aoApertarTecla);

    // [O quê]   Função de LIMPEZA: o React a executa quando a janela fecha (ou o componente sai da tela).
    // [React]   Todo efeito que "liga" algo deve "desligar" no cleanup.
    // [Por quê] Sem isso, ficariam ouvintes duplicados acumulando a cada abertura (vazamento de memória).
    return () => document.removeEventListener('keydown', aoApertarTecla);
  }, [aberto, aoFechar]); // [React] Array de dependências: o efeito roda de novo só se um destes valores mudar.

  // [O quê]   Janela fechada: não desenha nada.
  // [React]   "Early return" com null = renderização condicional simples.
  if (!aberto) return null;

  return (
    <div className="seletor">
      {/* [O quê]   Fundo escuro: clicar fora da janela fecha. */}
      <div className="seletor__fundo" onClick={aoFechar} aria-hidden="true" />

      {/* [O quê]   role="dialog" + aria-modal avisam leitores de tela que é uma janela sobre a página.
          aria-labelledby aponta para o id do título que dá nome à janela. */}
      <div className="seletor__janela" role="dialog" aria-modal="true" aria-labelledby="seletor-titulo">
        <div className="seletor__topo">
          <div>
            <h2 id="seletor-titulo" className="seletor__titulo">
              Com qual loja você quer falar?
            </h2>
            <p className="texto-suave">Escolha a unidade mais próxima de você.</p>
          </div>
          <button type="button" className="seletor__fechar" aria-label="Fechar" onClick={aoFechar}>
            <Icone nome="close" tamanho={24} />
          </button>
        </div>

        <ul className="seletor__lista">
          {/* [React] .map() cria um item para cada loja; "key" identifica cada um. */}
          {lojas.map((loja) => (
            <li key={loja.slug} className="seletor__item">
              <div className="seletor__info">
                <strong>{loja.bairro}</strong>
                <span className="texto-suave">{loja.endereco}</span>
                {/* [React] Componente reutilizado: a mesma etiqueta do card da loja. */}
                <SeloStatus horarios={loja.horarios} />
              </div>
              <a
                className="btn btn--acento btn--pequeno"
                href={criarLinkWhatsapp(loja.whatsapp, `Olá! Gostaria de falar com a loja ${loja.bairro}.`)}
                target="_blank"
                rel="noopener noreferrer"
                // [O quê] Ao clicar em "Conversar", o WhatsApp abre em outra aba e a janela fecha.
                onClick={aoFechar}
              >
                <Icone nome="chat" tamanho={18} />
                Conversar
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
