// =====================================================================
// ARQUIVO: src/components/Layout.jsx
// PAPEL: moldura de TODAS as páginas: cabeçalho, conteúdo da página, rodapé,
//        botão flutuante de WhatsApp e janela de escolha da loja.
// =====================================================================

import { useState } from 'react';

// [O quê]   Importa o Outlet.
// [React]   <Outlet /> é o "buraco" do layout: o React Router coloca ali a página da rota atual
//           (Home, Serviços, Lojas...). Isso funciona por causa das rotas aninhadas do App.jsx.
// [Por quê] Cabeçalho e rodapé são escritos UMA vez e aparecem em todas as páginas.
import { Outlet } from 'react-router-dom';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import BotaoWhatsappFlutuante from './BotaoWhatsappFlutuante.jsx';
import SeletorDeLoja from './SeletorDeLoja.jsx';
import RolarParaTopo from './RolarParaTopo.jsx';

export default function Layout() {
  // [O quê]   Estado: a janela "Com qual loja você quer falar?" está aberta? (começa fechada)
  // [React]   O estado mora no Layout, o PAI comum do Header, do botão flutuante e do Seletor.
  //           Os três precisam combinar entre si: quem clica (Header/Botão) e quem aparece (Seletor).
  // [Por quê] Este padrão é o "levantar o estado": o estado fica no ancestral mais próximo que o compartilha.
  const [seletorAberto, setSeletorAberto] = useState(false);

  // [O quê]   Duas funções pequenas com nomes claros. Serão passadas como props.
  const abrirSeletor = () => setSeletorAberto(true);
  const fecharSeletor = () => setSeletorAberto(false);

  return (
    // [O quê]   <></> é um Fragment: agrupa elementos sem criar uma <div> extra.
    // [React]   Um componente só pode devolver UM elemento raiz; o Fragment resolve isso.
    <>
      {/* [O quê]   Link invisível para teclado: "Pular para o conteúdo". [Por quê] Acessibilidade: quem usa Tab não precisa passar por todo o menu. */}
      <a className="pular-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      {/* [O quê] Volta ao topo a cada mudança de página (veja RolarParaTopo.jsx). */}
      <RolarParaTopo />

      {/* [React] PROP FUNÇÃO: o Header chama "aoClicarWhatsapp" quando o botão é clicado. */}
      <Header aoClicarWhatsapp={abrirSeletor} />

      {/* [O quê]   Conteúdo principal da página. id="conteudo" é o alvo do "pular para o conteúdo".
          [React]   <Outlet /> é substituído pela página da rota atual. */}
      <main id="conteudo">
        <Outlet />
      </main>

      <Footer />

      <BotaoWhatsappFlutuante aoClicar={abrirSeletor} />

      {/* [React] O Seletor recebe o estado ("aberto") e a função de fechar. Ele só mostra algo se aberto for true. */}
      <SeletorDeLoja aberto={seletorAberto} aoFechar={fecharSeletor} />
    </>
  );
}
