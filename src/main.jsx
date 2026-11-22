// =====================================================================
// ARQUIVO: src/main.jsx
// PAPEL: ponto de entrada do site. É o primeiro arquivo JavaScript que roda.
//        Ele "liga" o React à <div id="root"> do index.html.
//
// LEGENDA DOS COMENTÁRIOS (vale para o projeto inteiro):
//   [O quê]   = o que a linha faz
//   [React]   = a qual conceito do React ela se liga
//   [Por quê] = que problema ela resolve para o site
// =====================================================================

// [O quê]   Importa o StrictMode do React.
// [React]   StrictMode é um componente "invisível": não aparece na tela, mas, em
//           desenvolvimento, faz verificações extras para revelar bugs cedo.
// [Por quê] Você descobre erros de lógica enquanto estuda, antes de virarem problema.
import { StrictMode } from 'react';

// [O quê]   Importa o createRoot, que conecta o React a uma tag HTML real.
// [React]   react-dom é a parte do React que trabalha com o navegador (o DOM).
// [Por quê] É assim que o React sabe ONDE desenhar os componentes.
import { createRoot } from 'react-dom/client';

// [O quê]   Importa o BrowserRouter, que acompanha o endereço (URL) do navegador.
// [React]   React Router (biblioteca de rotas). O BrowserRouter guarda a URL atual
//           e avisa os componentes quando ela muda.
// [Por quê] O site tem várias "páginas" (/servicos, /lojas...) em um único HTML.
import { BrowserRouter } from 'react-router-dom';

// [O quê]   Importa o componente App, que descreve todas as rotas do site.
// [React]   Componente = função que devolve JSX. Importar = reaproveitar em outro arquivo.
// [Por quê] Mantém este arquivo pequeno: aqui só ligamos as peças.
import App from './App.jsx';

// [O quê]   Importa o CSS global (cores, fontes, botões, grades).
// [React]   No Vite, importar um .css aplica o estilo em toda a aplicação.
// [Por quê] As cores e fontes do design ficam disponíveis em todas as telas.
import './styles/global.css';

// [O quê]   Pega a <div id="root"> do HTML e manda o React desenhar o site nela.
// [React]   createRoot(...).render(...) é o "liga" do React.
// [Por quê] Sem esta chamada nada apareceria na tela.
createRoot(document.getElementById('root')).render(
  // [O quê]   Envolve o site no StrictMode (checagens extras em desenvolvimento).
  <StrictMode>
    {/* [O quê]   Envolve o site no BrowserRouter.
        [React]   Os componentes de dentro (Link, Routes, useParams...) só funcionam se existir um Router acima deles.
        [Por quê] Permite navegar entre páginas sem recarregar o navegador. */}
    <BrowserRouter>
      {/* [O quê] Desenha o componente App (a raiz do nosso site). */}
      <App />
    </BrowserRouter>
  </StrictMode>,
);
