// =====================================================================
// ARQUIVO: src/pages/Servicos.jsx
// PAPEL: página "/servicos": lista todos os serviços e permite filtrar por categoria.
// =====================================================================

import { useState } from 'react';
import Icone from '../components/Icone.jsx';
import ServicoCard from '../components/ServicoCard.jsx';
import ChamadaFinal from '../components/ChamadaFinal.jsx';
import { useTituloDaPagina } from '../hooks/useTituloDaPagina.js';
import { empresa } from '../data/empresa.js';
import { servicos } from '../data/servicos.js';
import { criarLinkWhatsapp } from '../utils/links.js';
import './Servicos.css';

// [O quê]   Monta a lista de filtros: "Todos" + as categorias que existem nos dados, sem repetir.
// [O quê]   "new Set(...)" remove duplicados; "[...]" (spread) transforma o resultado de volta em array.
// [React]   DADO DERIVADO: calculado a partir de outro dado (servicos). Não precisa ser estado.
// [Por quê] Se um serviço novo trouxer uma categoria nova, o botão do filtro aparece sozinho.
const categorias = ['Todos', ...new Set(servicos.map((servico) => servico.categoria))];

export default function Servicos() {
  useTituloDaPagina('Serviços');

  // [O quê]   Estado: qual categoria está selecionada agora (começa em "Todos").
  // [React]   useState guarda um valor que, ao mudar, redesenha a tela.
  // [Por quê] O filtro precisa "lembrar" a escolha da pessoa entre uma renderização e outra.
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');

  // [O quê]   Lista dos serviços que devem aparecer, conforme o filtro.
  // [React]   Também é DADO DERIVADO: calculada a cada renderização a partir do estado, nunca guardada em outro useState.
  // [Por quê] Ter UMA única fonte de verdade (categoriaAtiva) evita telas inconsistentes.
  const servicosVisiveis =
    categoriaAtiva === 'Todos' ? servicos : servicos.filter((servico) => servico.categoria === categoriaAtiva);

  return (
    <>
      <section className="pagina-topo">
        <div className="container">
          <span className="sobretitulo">Cuidado farmacêutico</span>
          <h1>Serviços</h1>
          <p className="texto-suave">
            Saúde, beleza e conveniência em um só lugar. Fale com a loja do seu bairro para confirmar a
            disponibilidade de cada serviço.
          </p>

          {/* [O quê]   Grupo de botões de filtro. role="group" + aria-label descrevem o conjunto para leitores de tela. */}
          <div className="filtros" role="group" aria-label="Filtrar serviços por categoria">
            {categorias.map((categoria) => {
              // [O quê]   Este botão é o selecionado?
              const ativo = categoria === categoriaAtiva;

              return (
                <button
                  key={categoria}
                  type="button"
                  // [React]   Classe condicional: botão ativo ganha "chip--ativo".
                  className={ativo ? 'chip chip--ativo' : 'chip'}
                  // [O quê]   aria-pressed informa a leitores de tela se o botão está "ligado".
                  aria-pressed={ativo}
                  // [React]   "() => ..." é necessário para chamar a função SÓ no clique.
                  //           Escrever onClick={setCategoriaAtiva(categoria)} chamaria na renderização (e causaria um loop).
                  onClick={() => setCategoriaAtiva(categoria)}
                >
                  {categoria}
                </button>
              );
            })}
          </div>

          {/* [O quê]   aria-live="polite": leitores de tela avisam quando o número muda.
              [React]   {condição ? 'serviço' : 'serviços'}: ternário para o singular/plural. */}
          <p className="contagem" aria-live="polite">
            Mostrando {servicosVisiveis.length} {servicosVisiveis.length === 1 ? 'serviço' : 'serviços'}
          </p>
        </div>
      </section>

      <div className="container">
        <div className="servicos-lista">
          <div className="grade grade--3">
            {servicosVisiveis.map((servico) => (
              <ServicoCard key={servico.id} servico={servico} />
            ))}
          </div>

          {/* Aviso sobre receitas */}
          <aside className="aviso-receita">
            <span className="aviso-receita__icone">
              <Icone nome="prescriptions" tamanho={28} />
            </span>
            <div className="aviso-receita__texto">
              <h2>Medicamentos e receitas</h2>
              <p className="texto-suave">
                Medicamentos de venda sob prescrição são dispensados mediante apresentação de receita válida,
                conforme a legislação sanitária. Em caso de dúvida, fale com um dos nossos farmacêuticos.
              </p>
            </div>
            <a
              className="btn btn--primario"
              href={criarLinkWhatsapp(empresa.whatsappGeral, 'Olá! Tenho uma dúvida sobre uma receita.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icone nome="chat" tamanho={20} />
              Tirar dúvidas
            </a>
          </aside>
        </div>
      </div>

      <ChamadaFinal />
    </>
  );
}
