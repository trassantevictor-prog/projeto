// =====================================================================
// ARQUIVO: src/components/LojaCard.jsx
// PAPEL: cartão de UMA loja (foto, status, endereço e botões). Usado na Home, em Lojas e no detalhe.
// =====================================================================

import { Link } from 'react-router-dom';
import Icone from './Icone.jsx';
import SeloStatus from './SeloStatus.jsx';
import { criarLinkWhatsapp, criarLinkMapa } from '../utils/links.js';
import './LojaCard.css';

// [O quê]   Recebe UM objeto "loja" (um item do array de data/lojas.js).
// [React]   Props: o pai decide QUAL loja mostrar; o cartão só sabe desenhar uma loja qualquer.
// [Por quê] Um único componente gera os 4 cartões (e funciona para a 5ª loja sem mudar nada).
export default function LojaCard({ loja }) {
  return (
    // [O quê] <article> = conteúdo independente (um cartão que faria sentido sozinho).
    <article className="loja-card">
      <div className="loja-card__foto">
        {/* [O quê]   Foto da loja. loading="lazy" só baixa a imagem quando ela chega perto da tela.
            [React]   {loja.foto}: chaves inserem valores JavaScript dentro do JSX. */}
        <img src={loja.foto} alt={`Fachada da loja ${loja.bairro}`} loading="lazy" />
        <div className="loja-card__status">
          <SeloStatus horarios={loja.horarios} />
        </div>
      </div>

      <div className="loja-card__corpo">
        <h3>{loja.bairro}</h3>
        <p className="loja-card__endereco texto-suave">
          <Icone nome="location_on" tamanho={18} />
          {loja.endereco}
        </p>

        {/* [O quê]   Só mostra o destaque (ex.: "Estacionamento exclusivo") se a loja tiver um.
            [React]   Renderização condicional com "&&": se o valor da esquerda for falso/vazio, nada é desenhado. */}
        {loja.destaque && <span className="etiqueta">{loja.destaque}</span>}

        <div className="loja-card__acoes">
          <a
            className="btn btn--acento btn--bloco"
            href={criarLinkWhatsapp(loja.whatsapp, `Olá! Gostaria de falar com a loja ${loja.bairro}.`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icone nome="chat" tamanho={20} />
            WhatsApp desta loja
          </a>

          <div className="loja-card__acoes-linha">
            <a
              className="btn btn--secundario btn--pequeno"
              href={criarLinkMapa(loja)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icone nome="directions" tamanho={18} />
              Como chegar
            </a>

            {/* [O quê]   Link interno para a página da loja.
                [React]   <Link to=...> troca de página SEM recarregar o site (diferente de <a href>).
                          O endereço usa o "slug" da loja: /lojas/moinhos-de-vento (rota dinâmica do App.jsx). */}
            <Link className="btn btn--primario btn--pequeno" to={`/lojas/${loja.slug}`}>
              Ver detalhes
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
