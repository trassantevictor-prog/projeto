// =====================================================================
// ARQUIVO: src/components/ServicoCard.jsx
// PAPEL: cartão de UM serviço (ícone, nome, descrição e link para o WhatsApp).
// =====================================================================

import Icone from './Icone.jsx';
import { empresa } from '../data/empresa.js';
import { criarLinkWhatsapp } from '../utils/links.js';
import './ServicoCard.css';

// [O quê]   Recebe um objeto "servico" (um item de data/servicos.js).
// [React]   Props + reutilização: o mesmo componente desenha os 6 serviços da Home e os 8 da página Serviços.
export default function ServicoCard({ servico }) {
  return (
    <article className="servico-card">
      <div className="servico-card__topo">
        <span className="servico-card__icone">
          <Icone nome={servico.icone} tamanho={26} />
        </span>

        <div className="servico-card__etiquetas">
          <span className="etiqueta">{servico.categoria}</span>
          {/* [O quê]   A etiqueta "Exige receita" só aparece nos serviços marcados com exigeReceita: true.
              [React]   Renderização condicional com "&&". Serviços sem esse campo (undefined) não desenham nada. */}
          {servico.exigeReceita && <span className="etiqueta etiqueta--alerta">Exige receita</span>}
        </div>
      </div>

      <h3>{servico.nome}</h3>
      <p className="texto-suave">{servico.descricao}</p>

      {/* [O quê]   Abre o WhatsApp geral com a mensagem do serviço já escrita.
          [Por quê] A pessoa não precisa digitar nada: reduz atrito e aumenta a chance de contato. */}
      <a
        className="link-seta servico-card__link"
        href={criarLinkWhatsapp(empresa.whatsappGeral, servico.mensagem)}
        target="_blank"
        rel="noopener noreferrer"
      >
        Perguntar pelo WhatsApp
        <Icone nome="arrow_forward" tamanho={18} />
      </a>
    </article>
  );
}
