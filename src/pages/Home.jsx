// =====================================================================
// ARQUIVO: src/pages/Home.jsx
// PAPEL: página inicial ("/"): capa com nome e lema, serviços, lojas, dicas e chamada final.
// =====================================================================

import { Link } from 'react-router-dom';
import Icone from '../components/Icone.jsx';
import TituloSecao from '../components/TituloSecao.jsx';
import ServicoCard from '../components/ServicoCard.jsx';
import LojaCard from '../components/LojaCard.jsx';
import DicaCard from '../components/DicaCard.jsx';
import ChamadaFinal from '../components/ChamadaFinal.jsx';
import { useTituloDaPagina } from '../hooks/useTituloDaPagina.js';
import { empresa } from '../data/empresa.js';
import { lojas } from '../data/lojas.js';
import { servicos } from '../data/servicos.js';
import { dicas } from '../data/dicas.js';
import { imagens } from '../data/imagens.js';
import { criarLinkWhatsapp } from '../utils/links.js';
import './Home.css';

// [O quê]   Lista dos 3 diferenciais mostrados logo abaixo da capa.
// [React]   Dados ficam FORA do componente (não mudam a cada renderização) e viram tela com .map().
// [Por quê] Para trocar um texto, você edita esta lista e não o JSX.
const diferenciais = [
  {
    icone: 'location_on',
    titulo: `${lojas.length} lojas em Porto Alegre`,
    texto: 'Moinhos de Vento, Bela Vista, Petrópolis e Menino Deus.',
  },
  {
    icone: 'monitor_heart',
    titulo: 'Atenção farmacêutica',
    texto: 'Orientação sobre medicamentos e serviços de saúde direto no balcão.',
  },
  {
    icone: 'shield_with_heart',
    titulo: 'Rede Associadas',
    texto: 'Parte da rede Farmácias Associadas, com o jeito de uma farmácia de bairro.',
  },
];

export default function Home() {
  // [O quê]   Hook personalizado: troca o título da aba do navegador.
  // [React]   "Custom hook" = função que começa com "use" e agrupa lógica reutilizável (aqui, um useEffect).
  // [Por quê] Cada página pede o seu título em UMA linha, sem repetir o useEffect.
  useTituloDaPagina('');

  return (
    // [O quê]   Fragment: junta várias <section> sem criar uma <div> extra.
    <>
      {/* ---------- 1) CAPA ---------- */}
      <section className="secao hero">
        <div className="container">
          <div className="hero__grade">
            <div className="hero__texto">
              <p className="hero__marca">
                {/* [React] {empresa.marca}: o texto vem do arquivo de dados, nunca fica "fixo" no JSX. */}
                {empresa.marca} • {empresa.regiao}
              </p>
              <h1>{empresa.lema}</h1>
              <p className="hero__descricao texto-suave">
                Atendimento farmacêutico acolhedor em quatro bairros de Porto Alegre.
              </p>

              <div className="hero__acoes">
                {/* [React] <Link> navega entre páginas sem recarregar o site. */}
                <Link className="btn btn--primario" to="/lojas">
                  <Icone nome="near_me" tamanho={20} />
                  Encontrar minha loja
                </Link>
                <a
                  className="btn btn--acento"
                  href={criarLinkWhatsapp(empresa.whatsappGeral, 'Olá! Gostaria de falar com a farmácia.')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icone nome="chat" tamanho={20} />
                  Falar no WhatsApp
                </a>
              </div>
            </div>

            <div className="hero__foto">
              <img src={imagens.hero} alt="Fachada de uma das lojas Farmácias Associadas" />
              {/* [React] {lojas.length}: o número muda sozinho se uma loja for adicionada ou removida. */}
              <span className="hero__selo">{lojas.length} lojas integradas</span>
            </div>
          </div>

          <ul className="diferenciais">
            {diferenciais.map((item) => (
              // [React] key: o título é único nesta lista, então serve como identificador.
              <li key={item.titulo} className="diferencial">
                <span className="diferencial__icone">
                  <Icone nome={item.icone} tamanho={24} />
                </span>
                <div>
                  <h2 className="diferencial__titulo">{item.titulo}</h2>
                  <p className="texto-suave">{item.texto}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- 2) SOBRE NÓS (resumo) ---------- */}
      <section className="secao secao--suave">
        <div className="container sobre-resumo">
          <div>
            <span className="sobretitulo">Nossa identidade</span>
            <h2>O carinho de uma farmácia de bairro, em quatro endereços.</h2>
          </div>
          <div>
            <p className="texto-suave">
              Somos a {empresa.nome}: quatro lojas com o mesmo cuidado, a mesma gestão e o mesmo compromisso com a
              sua saúde e a da sua família.
            </p>
            <Link className="link-seta" to="/sobre">
              Conheça a nossa história
              <Icone nome="arrow_forward" tamanho={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- 3) SERVIÇOS (os 6 primeiros) ---------- */}
      <section className="secao">
        <div className="container">
          {/* [React] "children": o <Link> abaixo vira o conteúdo da área à direita do título. */}
          <TituloSecao sobretitulo="Cuidado farmacêutico" titulo="Nossos serviços">
            <Link className="link-seta" to="/servicos">
              Ver todos os serviços
              <Icone nome="arrow_forward" tamanho={20} />
            </Link>
          </TituloSecao>

          <div className="grade grade--3">
            {/* [O quê]   .slice(0, 6) pega só os 6 primeiros itens do array, sem alterá-lo.
                [React]   Cada item vira um <ServicoCard>; a prop "servico" entrega os dados ao cartão. */}
            {servicos.slice(0, 6).map((servico) => (
              <ServicoCard key={servico.id} servico={servico} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 4) LOJAS ---------- */}
      <section className="secao secao--suave">
        <div className="container">
          <TituloSecao
            sobretitulo="Perto de você"
            titulo={`Nossas ${lojas.length} lojas em Porto Alegre`}
            descricao="Escolha o seu bairro, veja se a loja está aberta e fale direto com ela."
          />

          <div className="grade grade--2">
            {lojas.map((loja) => (
              <LojaCard key={loja.slug} loja={loja} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 5) DICAS DE SAÚDE ---------- */}
      <section className="secao">
        <div className="container">
          <TituloSecao
            sobretitulo="Informação"
            titulo="Dicas de saúde e bem-estar"
            descricao="Conteúdos curtos para o seu dia a dia. Eles não substituem a consulta com um profissional de saúde."
          />

          <div className="grade grade--3">
            {dicas.map((dica) => (
              <DicaCard key={dica.id} dica={dica} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 6) CHAMADA FINAL ---------- */}
      <ChamadaFinal />
    </>
  );
}
