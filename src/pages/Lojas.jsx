// =====================================================================
// ARQUIVO: src/pages/Lojas.jsx
// PAPEL: página "/lojas": mostra as 4 lojas e permite ver só as que estão abertas agora.
// =====================================================================

import { useState } from 'react';
import LojaCard from '../components/LojaCard.jsx';
import ChamadaFinal from '../components/ChamadaFinal.jsx';
import { useTituloDaPagina } from '../hooks/useTituloDaPagina.js';
import { lojas } from '../data/lojas.js';
import { statusDaLoja } from '../utils/horario.js';
import './Lojas.css';

export default function Lojas() {
  useTituloDaPagina('Nossas lojas');

  // [O quê]   Estado booleano: o filtro "Abertas agora" está ligado? (começa desligado)
  // [React]   useState com true/false é o jeito mais simples de controlar "ligado/desligado".
  const [apenasAbertas, setApenasAbertas] = useState(false);

  // [O quê]   Lojas que devem aparecer: todas, ou só as abertas neste momento.
  // [React]   DADO DERIVADO: calculado na renderização a partir do estado "apenasAbertas".
  // [Por quê] Reaproveitamos statusDaLoja (utils/horario.js): a regra de "aberta" existe em um só lugar.
  const lojasVisiveis = apenasAbertas ? lojas.filter((loja) => statusDaLoja(loja.horarios).aberta) : lojas;

  return (
    <>
      <section className="pagina-topo">
        <div className="container">
          <span className="sobretitulo">Perto de você</span>
          <h1>Nossas {lojas.length} lojas em Porto Alegre</h1>
          <p className="texto-suave">
            Escolha o seu bairro, veja o horário de atendimento e fale direto com a loja pelo WhatsApp.
          </p>

          <div className="filtros" role="group" aria-label="Filtrar lojas">
            <button
              type="button"
              className={apenasAbertas ? 'chip' : 'chip chip--ativo'}
              aria-pressed={!apenasAbertas}
              onClick={() => setApenasAbertas(false)}
            >
              Todas as lojas
            </button>
            <button
              type="button"
              className={apenasAbertas ? 'chip chip--ativo' : 'chip'}
              aria-pressed={apenasAbertas}
              onClick={() => setApenasAbertas(true)}
            >
              Abertas agora
            </button>
          </div>

          <p className="contagem" aria-live="polite">
            Mostrando {lojasVisiveis.length} de {lojas.length} lojas
          </p>
        </div>
      </section>

      <div className="container">
        <div className="lojas-lista">
          {/* [O quê]   Se nenhuma loja passou pelo filtro, mostra uma mensagem; senão, mostra a grade.
              [React]   Renderização condicional com ternário: condição ? (se verdadeiro) : (se falso).
              [Por quê] Uma tela vazia sem explicação deixa a pessoa perdida (estado vazio bem tratado = boa UX). */}
          {lojasVisiveis.length === 0 ? (
            <div className="card lojas-vazio">
              <h2>Nenhuma loja aberta neste momento</h2>
              <p className="texto-suave">Veja todas as lojas e os horários de atendimento de cada uma.</p>
              <button type="button" className="btn btn--primario" onClick={() => setApenasAbertas(false)}>
                Ver todas as lojas
              </button>
            </div>
          ) : (
            <div className="grade grade--2">
              {lojasVisiveis.map((loja) => (
                <LojaCard key={loja.slug} loja={loja} />
              ))}
            </div>
          )}
        </div>
      </div>

      <ChamadaFinal />
    </>
  );
}
