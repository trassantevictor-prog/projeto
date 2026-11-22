// =====================================================================
// ARQUIVO: src/components/DicaCard.jsx
// PAPEL: cartão de uma dica de saúde (imagem, categoria, título e resumo).
// =====================================================================

import './DicaCard.css';

// [O quê]   Recebe um objeto "dica" (um item de data/dicas.js).
// [React]   Props. Aqui não há botão nem link de propósito: como não temos página de artigo,
//           um "Ler mais" levaria a lugar nenhum (link morto é má experiência).
export default function DicaCard({ dica }) {
  return (
    <article className="dica-card">
      {/* [O quê]   alt="" marca a imagem como decorativa: o leitor de tela a ignora.
          [Por quê] O título logo abaixo já descreve o assunto, então repetir seria ruído. */}
      <img className="dica-card__imagem" src={dica.imagem} alt="" loading="lazy" />

      <div className="dica-card__corpo">
        <p className="dica-card__meta">
          {dica.categoria} • {dica.tempoLeitura}
        </p>
        <h3>{dica.titulo}</h3>
        <p className="texto-suave">{dica.resumo}</p>
      </div>
    </article>
  );
}
