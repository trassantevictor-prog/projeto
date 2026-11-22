// =====================================================================
// ARQUIVO: src/App.jsx
// PAPEL: mapa do site. Diz qual PÁGINA aparece para cada endereço (URL).
// =====================================================================

// [O quê]   Importa Routes e Route do React Router.
// [React]   Routes = lista de rotas; Route = uma regra "endereço -> componente".
// [Por quê] É o que faz /servicos mostrar a tela de Serviços, /lojas mostrar as Lojas etc.
import { Routes, Route } from 'react-router-dom';

// [O quê]   Importa o Layout (cabeçalho + rodapé + botão de WhatsApp).
// [React]   Componente de layout: moldura que envolve todas as páginas.
// [Por quê] Evita repetir cabeçalho e rodapé dentro de cada página.
import Layout from './components/Layout.jsx';

// [O quê]   Importa uma página por rota. Cada página é um componente.
// [React]   Componentes são "peças de Lego": cada arquivo cuida de uma parte da tela.
// [Por quê] Código organizado: para mexer na tela de Serviços, você só abre Servicos.jsx.
import Home from './pages/Home.jsx';
import Servicos from './pages/Servicos.jsx';
import Lojas from './pages/Lojas.jsx';
import LojaDetalhe from './pages/LojaDetalhe.jsx';
import Sobre from './pages/Sobre.jsx';
import NaoEncontrada from './pages/NaoEncontrada.jsx';

// [O quê]   Declara o componente App e o exporta como padrão.
// [React]   Componente de função: nome com letra MAIÚSCULA, devolve JSX.
// [Por quê] O main.jsx importa este componente e o desenha na tela.
export default function App() {
  // [O quê]   Devolve (return) o JSX, a "descrição da tela".
  return (
    // [React]   <Routes> escolhe UMA rota que combine com a URL atual.
    <Routes>
      {/* [O quê]   Rota sem "path", só com "element": rota de LAYOUT.
          [React]   Rotas aninhadas: as rotas de dentro aparecem no lugar do <Outlet /> do Layout.
          [Por quê] Todas as páginas ganham cabeçalho e rodapé sem repetir código. */}
      <Route element={<Layout />}>
        {/* [O quê]   "index" = rota do endereço "/" (página inicial). */}
        <Route index element={<Home />} />

        {/* [O quê]   Endereço /servicos mostra a página de Serviços. */}
        <Route path="servicos" element={<Servicos />} />

        {/* [O quê]   Endereço /lojas mostra a lista das 4 lojas. */}
        <Route path="lojas" element={<Lojas />} />

        {/* [O quê]   ":slug" é um PARÂMETRO: /lojas/moinhos-de-vento, /lojas/bela-vista...
            [React]   Rota dinâmica: dentro da página, useParams() devolve o valor do slug.
            [Por quê] Uma única página serve para as 4 lojas, sem copiar código. */}
        <Route path="lojas/:slug" element={<LojaDetalhe />} />

        {/* [O quê]   Endereço /sobre mostra a página Sobre Nós. */}
        <Route path="sobre" element={<Sobre />} />

        {/* [O quê]   "*" combina com qualquer endereço que nenhuma rota acima aceitou.
            [Por quê] Mostra uma página 404 amigável em vez de uma tela em branco. */}
        <Route path="*" element={<NaoEncontrada />} />
      </Route>
    </Routes>
  );
}
