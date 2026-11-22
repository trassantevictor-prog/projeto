// =====================================================================
// ARQUIVO: src/components/Logo.jsx
// PAPEL: logo da loja (quadrado laranja + nome). Clicar leva para a página inicial.
//
// Para usar a logo OFICIAL: coloque o arquivo em public/logo.png e troque o
// conteúdo deste componente por <img src="/logo.png" alt="..." />.
// =====================================================================

// [O quê]   Importa o Link do React Router.
// [React]   <Link> troca de página SEM recarregar o navegador (diferente de <a href>).
// [Por quê] A navegação fica instantânea e o estado da aplicação é preservado.
import { Link } from 'react-router-dom';

// [O quê]   Importa os dados da empresa e o componente de ícone.
import { empresa } from '../data/empresa.js';
import Icone from './Icone.jsx';

// [O quê]   Importa o CSS deste componente.
// [React]   Cada componente tem seu CSS ao lado: fácil de achar e de manter.
import './Logo.css';

// [O quê]   Componente sem props: sempre mostra a mesma coisa.
export default function Logo() {
  return (
    // [O quê]   Link para "/" (home). aria-label descreve o link para leitores de tela.
    <Link to="/" className="logo" aria-label={`${empresa.nome}: página inicial`}>
      {/* [O quê] Quadrado laranja com o símbolo de "+" (cruz farmacêutica). */}
      <span className="logo__marca">
        <Icone nome="add" tamanho={26} />
      </span>

      {/* [O quê]   Nome da marca em duas linhas.
          [React]   {empresa.marca}: mostra um valor vindo do arquivo de dados.
          [Por quê] Se o nome mudar, o logo atualiza sozinho. */}
      <span className="logo__texto">
        <span className="logo__nome">{empresa.marca}</span>
        <span className="logo__regiao">{empresa.regiao}</span>
      </span>
    </Link>
  );
}
