// =====================================================================
// ARQUIVO: src/components/Icone.jsx
// PAPEL: desenha um ícone da fonte Material Symbols.
// Uso: <Icone nome="chat" />  ou  <Icone nome="chat" tamanho={28} />
// =====================================================================

// [O quê]   Declara o componente. A parte { nome, tamanho = 20 } é a "desestruturação de props".
// [React]   PROPS: dados que o componente PAI entrega ao FILHO, como argumentos de uma função.
//           "tamanho = 20" é um valor padrão: se ninguém informar, vale 20.
// [Por quê] O mesmo componente serve para dezenas de ícones diferentes (chat, menu, place...).
export default function Icone({ nome, tamanho = 20 }) {
  return (
    // [O quê]   <span> com as classes da fonte de ícones.
    // [React]   style={{ ... }}: as chaves de fora abrem "JavaScript dentro do JSX";
    //           as de dentro são o objeto de estilo. Propriedades usam camelCase (fontSize).
    // [Por quê] Cada ícone pode ter seu tamanho sem criar uma classe CSS para cada número.
    // [O quê]   aria-hidden="true" esconde o ícone de leitores de tela. [Por quê] Ele é só decoração.
    <span className="material-symbols-outlined icone" style={{ fontSize: tamanho }} aria-hidden="true">
      {/* [React] {nome}: mostra o valor da prop. A fonte transforma o texto "chat" no desenho do ícone. */}
      {nome}
    </span>
  );
}
