// =====================================================================
// ARQUIVO: src/pages/LojaDetalhe.jsx
// PAPEL: página de UMA loja, no endereço "/lojas/:slug" (ex.: /lojas/bela-vista).
// =====================================================================

// [O quê]   useParams devolve os "parâmetros" da URL. Na rota "lojas/:slug", o valor depois de "lojas/" vira "slug".
// [React]   ROTA DINÂMICA: uma única página atende todas as lojas; o que muda é o parâmetro da URL.
import { Link, useParams } from 'react-router-dom';
import Icone from '../components/Icone.jsx';
import SeloStatus from '../components/SeloStatus.jsx';
import LojaCard from '../components/LojaCard.jsx';
import TituloSecao from '../components/TituloSecao.jsx';
import NaoEncontrada from './NaoEncontrada.jsx';
import { useTituloDaPagina } from '../hooks/useTituloDaPagina.js';
import { lojas } from '../data/lojas.js';
import { servicos } from '../data/servicos.js';
import { imagens } from '../data/imagens.js';
import { criarLinkWhatsapp, criarLinkMapa, criarLinkMapaEmbutido } from '../utils/links.js';
import { formatarTurno } from '../utils/horario.js';
import './LojaDetalhe.css';

export default function LojaDetalhe() {
  // [O quê]   Lê o "slug" da URL. Em /lojas/bela-vista, slug vale "bela-vista".
  // [React]   Desestruturação: { slug } extrai só a propriedade que interessa.
  const { slug } = useParams();

  // [O quê]   Procura no array a loja cujo slug é igual ao da URL. Se não achar, devolve undefined.
  // [Por quê] Os dados continuam em data/lojas.js; a página só os consulta.
  const loja = lojas.find((item) => item.slug === slug);

  // [O quê]   Título da aba: "Loja Bela Vista | ...". Se a loja não existe, usa o mesmo título da página 404.
  // [React]   REGRA DOS HOOKS: hooks (aqui, o nosso useTituloDaPagina) SEMPRE são chamados antes de qualquer "return" antecipado.
  //           O React precisa chamar os hooks na mesma ordem em toda renderização.
  useTituloDaPagina(loja ? `Loja ${loja.bairro}` : 'Página não encontrada');

  // [O quê]   Endereço inventado (ex.: /lojas/xyz): mostra a página 404 no lugar.
  // [React]   Renderização condicional com "early return": devolve outro componente e encerra a função.
  if (!loja) return <NaoEncontrada />;

  // [O quê]   As outras 3 lojas, para a seção "Conheça também".
  // [React]   Dado derivado: .filter() mantém só as lojas com slug diferente da atual.
  const outrasLojas = lojas.filter((item) => item.slug !== loja.slug);

  return (
    <>
      <section className="detalhe-topo">
        <div className="container">
          <Link className="link-seta" to="/lojas">
            <Icone nome="arrow_back" tamanho={20} />
            Voltar para Nossas Lojas
          </Link>

          <div className="detalhe-topo__selos">
            <SeloStatus horarios={loja.horarios} />
            {loja.destaque && <span className="etiqueta">{loja.destaque}</span>}
          </div>
          <h1>Loja {loja.bairro}</h1>
          <p className="texto-suave">{loja.endereco} • Porto Alegre/RS</p>
        </div>
      </section>

      <div className="container">
        {/* [O quê]   Layout em áreas nomeadas (veja LojaDetalhe.css): galeria, lateral e serviços.
            [Por quê] No celular as áreas empilham; no desktop a lateral (contatos) fica ao lado e acompanha a rolagem. */}
        <div className="detalhe">
          {/* ---------- Fotos ---------- */}
          <div className="detalhe__galeria">
            <img className="detalhe__foto-principal" src={loja.foto} alt={`Fachada da loja ${loja.bairro}`} />
            <div className="detalhe__fotos-menores">
              <img src={imagens.interiorDermo} alt="Prateleiras de dermocosméticos (imagem ilustrativa)" loading="lazy" />
              <img src={imagens.interiorConsultorio} alt="Atendimento farmacêutico (imagem ilustrativa)" loading="lazy" />
            </div>
          </div>

          {/* ---------- Lateral: contatos, mapa e horários ---------- */}
          <aside className="detalhe__lateral card">
            <a
              className="btn btn--acento btn--bloco"
              href={criarLinkWhatsapp(loja.whatsapp, `Olá! Gostaria de falar com a loja ${loja.bairro}.`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icone nome="chat" tamanho={22} />
              Chamar no WhatsApp desta loja
            </a>

            {/* [O quê]   "tel:" abre o discador do celular. Usa apenas dígitos, com o código do país (+55). */}
            <a className="btn btn--secundario btn--bloco" href={`tel:+${loja.telefoneLink}`}>
              <Icone nome="call" tamanho={20} />
              Ligar {loja.telefone}
            </a>

            <a
              className="btn btn--secundario btn--bloco"
              href={criarLinkMapa(loja)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icone nome="directions" tamanho={20} />
              Como chegar
            </a>

            <div className="detalhe__bloco">
              <h2>Endereço</h2>
              <p className="texto-suave">
                {loja.endereco}
                <br />
                {loja.bairro} • Porto Alegre/RS • CEP {loja.cep}
              </p>
            </div>

            {/* [O quê]   Mapa do Google dentro da página (iframe = "janela" para outro site).
                [Por quê] title descreve o conteúdo do iframe para leitores de tela. */}
            <iframe
              className="detalhe__mapa"
              title={`Mapa da loja ${loja.bairro}`}
              src={criarLinkMapaEmbutido(loja)}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="detalhe__bloco">
              <h2>Horário de atendimento</h2>
              {/* [O quê] <dl> = lista de "termo: valor". Combina com horários (dia → horas). */}
              <dl className="detalhe__horarios">
                <div>
                  <dt>Segunda a sábado</dt>
                  <dd>{formatarTurno(loja.horarios.segASab)}</dd>
                </div>
                <div>
                  <dt>Domingos e feriados</dt>
                  <dd>{formatarTurno(loja.horarios.domingo)}</dd>
                </div>
              </dl>
            </div>
          </aside>

          {/* ---------- Serviços ---------- */}
          <section className="detalhe__servicos card">
            <h2>Serviços da rede</h2>
            <p className="texto-suave">Confirme a disponibilidade de cada serviço com esta loja pelo WhatsApp.</p>
            <ul className="detalhe__lista-servicos">
              {servicos.map((servico) => (
                <li key={servico.id}>
                  <Icone nome={servico.icone} tamanho={22} />
                  {servico.nome}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      {/* ---------- Outras lojas ---------- */}
      <section className="secao">
        <div className="container">
          <TituloSecao sobretitulo="Rede Central POA" titulo="Conheça também as outras lojas" />
          <div className="grade grade--3">
            {outrasLojas.map((outra) => (
              <LojaCard key={outra.slug} loja={outra} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
