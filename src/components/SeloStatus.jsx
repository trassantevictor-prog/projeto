// =====================================================================
// ARQUIVO: src/components/SeloStatus.jsx
// PAPEL: etiqueta "Aberta agora • fecha às 22h" ou "Fechada agora".
// =====================================================================

import { statusDaLoja } from '../utils/horario.js';
import './SeloStatus.css';

// [O quê]   Recebe os horários da loja e desenha a etiqueta.
// [React]   Props: dados que o componente pai entrega ao filho (somente leitura).
// [Por quê] LojaCard e SeletorDeLoja precisam da MESMA etiqueta: escrevemos uma vez e reutilizamos.
export default function SeloStatus({ horarios }) {
  // [O quê]   A regra "aberta ou fechada?" vive em utils/horario.js (função pura, fácil de testar).
  //           O componente só usa o resultado.
  // [React]   Desestruturação: pega "aberta" e "texto" do objeto devolvido.
  // [Por quê] Separar a lógica da tela deixa o componente curto e fácil de entender.
  const { aberta, texto } = statusDaLoja(horarios);

  return (
    // [O quê]   Se estiver aberta soma a classe "selo-status--aberta" (bolinha verde-água).
    // [React]   Renderização condicional com operador ternário (condição ? se verdadeiro : se falso).
    <span className={aberta ? 'selo-status selo-status--aberta' : 'selo-status'}>
      {/* [O quê] Bolinha decorativa. aria-hidden: o leitor de tela lê só o texto. */}
      <span className="selo-status__ponto" aria-hidden="true" />
      {texto}
    </span>
  );
}
