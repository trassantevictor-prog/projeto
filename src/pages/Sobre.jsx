// =====================================================================
// ARQUIVO: src/pages/Sobre.jsx
// PAPEL: página "/sobre" (Sobre Nós): quem somos, números, missão/visão/valores e a rede Associadas.
//
// TROCAR ANTES DE PUBLICAR: os textos de Missão, Visão e Valores e o parágrafo
// da rede são TEXTOS-MODELO. Substitua pelos textos reais do dono da farmácia.
// =====================================================================

import { Link } from 'react-router-dom';
import Icone from '../components/Icone.jsx';
import ChamadaFinal from '../components/ChamadaFinal.jsx';
import { useTituloDaPagina } from '../hooks/useTituloDaPagina.js';
import { empresa } from '../data/empresa.js';
import { lojas } from '../data/lojas.js';
import { servicos } from '../data/servicos.js';
import { imagens } from '../data/imagens.js';
import './Sobre.css';

// [O quê]   Números em destaque, CALCULADOS a partir dos dados.
// [React]   Dado derivado: lojas.length e servicos.length mudam sozinhos quando os arquivos de dados mudam.
// [Por quê] Evita números "digitados à mão" que ficam desatualizados e não podem ser comprovados.
const numeros = [
  { valor: lojas.length, rotulo: 'lojas em Porto Alegre' },
  { valor: 7, rotulo: 'dias de atendimento por semana' },
  { valor: servicos.length, rotulo: 'serviços de saúde e conveniência' },
];

// [O quê]   Os três pilares (missão, visão, valores).
// [React]   Lista de dados + .map() = a tela se monta sozinha a partir dela.
const pilares = [
  {
    icone: 'assignment_turned_in',
    titulo: 'Missão',
    texto: 'Cuidar da saúde das famílias de Porto Alegre com orientação farmacêutica próxima, clara e responsável.',
  },
  {
    icone: 'visibility',
    titulo: 'Visão',
    texto:
      'Ser a farmácia de confiança de cada bairro em que estamos, com atendimento acolhedor e conveniência no dia a dia.',
  },
  {
    icone: 'volunteer_activism',
    titulo: 'Valores',
    texto: 'Responsabilidade com a saúde e com a legislação, acolhimento em cada atendimento e respeito a cada cliente.',
  },
];

export default function Sobre() {
  useTituloDaPagina('Sobre nós');

  return (
    <>
      {/* ---------- 1) Quem somos ---------- */}
      <section className="secao">
        <div className="container sobre-topo">
          <div>
            <span className="sobretitulo">Sobre nós</span>
            <h1>{empresa.lema}</h1>
            <p className="texto-suave sobre-topo__texto">
              A {empresa.nome} reúne quatro lojas em bairros de Porto Alegre, com o mesmo cuidado em cada balcão.
              Unimos a estrutura de uma rede de farmácias ao atendimento próximo de uma farmácia de bairro.
            </p>
            <Link className="btn btn--primario" to="/lojas">
              <Icone nome="storefront" tamanho={20} />
              Conheça nossas lojas
            </Link>
          </div>

          <img className="sobre-topo__foto" src={imagens.sobre} alt="Atendimento em uma de nossas lojas (imagem ilustrativa)" />
        </div>
      </section>

      {/* ---------- 2) Números ---------- */}
      <section className="secao secao--suave">
        <div className="container">
          <ul className="grade grade--3">
            {numeros.map((numero) => (
              <li key={numero.rotulo} className="card numero">
                <strong className="numero__valor">{numero.valor}</strong>
                <span className="texto-suave">{numero.rotulo}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- 3) Missão, visão e valores ---------- */}
      <section className="secao">
        <div className="container">
          <div className="grade grade--3">
            {pilares.map((pilar) => (
              <article key={pilar.titulo} className="card pilar">
                <span className="pilar__icone">
                  <Icone nome={pilar.icone} tamanho={28} />
                </span>
                <h2>{pilar.titulo}</h2>
                <p className="texto-suave">{pilar.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 4) Rede Farmácias Associadas ---------- */}
      <section className="secao secao--suave">
        <div className="container rede">
          <span className="sobretitulo">Rede Farmácias Associadas</span>
          <h2>Estrutura de rede, atendimento de bairro</h2>
          <p className="texto-suave">
            A {empresa.nome} integra a rede Farmácias Associadas e é gerida por um único proprietário, o que mantém o
            mesmo padrão de atendimento nas quatro lojas.
          </p>
        </div>
      </section>

      <ChamadaFinal />
    </>
  );
}
