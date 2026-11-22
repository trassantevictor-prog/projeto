// =====================================================================
// ARQUIVO: src/pages/NaoEncontrada.jsx
// PAPEL: página mostrada quando o endereço não existe (rota "*" do App.jsx)
//        e também quando /lojas/algo-que-nao-existe é aberto.
// =====================================================================

import { Link } from 'react-router-dom';
import { useTituloDaPagina } from '../hooks/useTituloDaPagina.js';

export default function NaoEncontrada() {
  useTituloDaPagina('Página não encontrada');

  return (
    // [O quê]   Reaproveita a classe ".pagina-topo" do CSS global: nenhuma folha de estilo nova foi necessária.
    // [Por quê] Reutilizar estilos existentes mantém o projeto pequeno e visualmente consistente.
    <section className="pagina-topo">
      <div className="container">
        <span className="sobretitulo">Erro 404</span>
        <h1>Página não encontrada</h1>
        <p className="texto-suave">O endereço que você abriu não existe ou foi movido.</p>
        <p>
          {/* [React] <Link> leva de volta à Home sem recarregar o site. */}
          <Link className="btn btn--primario" to="/">
            Voltar para o início
          </Link>
        </p>
      </div>
    </section>
  );
}
