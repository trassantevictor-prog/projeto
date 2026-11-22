// =====================================================================
// ARQUIVO: src/components/ChamadaFinal.jsx
// PAPEL: bloco verde no fim das páginas chamando para o WhatsApp ou para a lista de lojas.
// =====================================================================

import { Link } from 'react-router-dom';
import Icone from './Icone.jsx';
import { empresa } from '../data/empresa.js';
import { criarLinkWhatsapp } from '../utils/links.js';
import './ChamadaFinal.css';

// [O quê]   Recebe o título e o texto. Se nada for informado, usa os valores padrão.
// [React]   Valores padrão de props: "titulo = '...'" vale quando a prop não é enviada.
// [Por quê] A Home e a página Sobre usam o mesmo bloco; cada uma pode trocar só a frase, se quiser.
export default function ChamadaFinal({
  titulo = 'Fale com a farmácia mais perto de você',
  texto = 'Tire dúvidas sobre receitas, consulte a disponibilidade de itens ou combine a entrega pelo WhatsApp.',
}) {
  return (
    <section className="secao">
      <div className="container">
        <div className="chamada-final">
          <h2>{titulo}</h2>
          <p>{texto}</p>

          <div className="chamada-final__acoes">
            <a
              className="btn btn--acento"
              href={criarLinkWhatsapp(empresa.whatsappGeral, 'Olá! Gostaria de falar com a farmácia.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icone nome="chat" tamanho={20} />
              Conversar pelo WhatsApp
            </a>
            <Link className="btn btn--claro" to="/lojas">
              Ver nossas lojas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
