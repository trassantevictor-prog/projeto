// =====================================================================
// ARQUIVO: src/components/TituloSecao.jsx
// PAPEL: cabeçalho padrão de cada seção (sobretítulo + título + descrição + ação à direita).
// =====================================================================

import './TituloSecao.css';

// [O quê]   Recebe quatro props. "descricao" e "children" são opcionais.
// [React]   Desestruturação das props direto nos parâmetros da função.
// [React]   "children" é uma prop especial: tudo que for escrito ENTRE <TituloSecao> e </TituloSecao>.
// [Por quê] Todas as seções da Home e das páginas têm o mesmo cabeçalho: um componente evita repetir o mesmo HTML e CSS.
export default function TituloSecao({ sobretitulo, titulo, descricao, children }) {
  return (
    <header className="titulo-secao">
      <div className="titulo-secao__texto">
        {/* [O quê] Cada parte só aparece se foi informada. [React] Renderização condicional com "&&". */}
        {sobretitulo && <span className="sobretitulo">{sobretitulo}</span>}
        <h2>{titulo}</h2>
        {descricao && <p className="texto-suave">{descricao}</p>}
      </div>

      {/* [O quê]   Espaço para um link/botão à direita (ex.: "Ver todos os serviços").
          [React]   Se não houver children, esta área não é desenhada. */}
      {children && <div className="titulo-secao__acao">{children}</div>}
    </header>
  );
}
