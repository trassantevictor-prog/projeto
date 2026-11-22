// =====================================================================
// ARQUIVO: src/components/BotaoWhatsappFlutuante.jsx
// PAPEL: botão redondo fixo no canto da tela que abre a escolha de loja.
// =====================================================================

import Icone from './Icone.jsx';
import './BotaoWhatsappFlutuante.css';

// [O quê]   Recebe UMA prop: "aoClicar" (uma função).
// [React]   Componente "burro" (apresentacional): só desenha o botão e avisa o pai quando há clique.
//           Quem decide o que acontece é o Layout.
// [Por quê] Assim o botão pode ser reaproveitado e não precisa conhecer o Seletor de loja.
export default function BotaoWhatsappFlutuante({ aoClicar }) {
  return (
    // [O quê]   aria-label dá um nome ao botão para leitores de tela (ele só tem um ícone, sem texto).
    // [React]   onClick={aoClicar}: passamos a FUNÇÃO (sem parênteses). O React a chama no clique.
    <button type="button" className="botao-flutuante" aria-label="Falar no WhatsApp: escolher uma loja" onClick={aoClicar}>
      <Icone nome="chat" tamanho={28} />
    </button>
  );
}
