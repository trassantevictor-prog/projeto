// =====================================================================
// ARQUIVO: src/components/Header.jsx
// PAPEL: cabeçalho fixo no topo: logo, menu, botão de WhatsApp e menu do celular.
// =====================================================================

// [O quê]   Importa o useState.
// [React]   useState = Hook que dá "memória" ao componente. Quando o valor muda, o React
//           redesenha o componente com o valor novo.
// [Por quê] Precisamos lembrar se o menu do celular está aberto ou fechado.
import { useState } from 'react';

// [O quê]   Importa o NavLink.
// [React]   NavLink é um Link que sabe se aponta para a página ATUAL (isActive).
// [Por quê] Serve para destacar no menu a página em que a pessoa está.
import { NavLink } from 'react-router-dom';

import Logo from './Logo.jsx';
import Icone from './Icone.jsx';
import { itensMenu } from '../data/menu.js';
import './Header.css';

// [O quê]   Função que devolve a classe CSS de cada link do menu.
// [React]   O NavLink chama esta função e passa { isActive }. Se for a página atual, devolvemos a classe de destaque.
// [Por quê] Fica FORA do componente porque não depende de nada dele (código mais limpo e sem recriar a função a cada renderização).
function classeDoLink({ isActive }) {
  return isActive ? 'menu__link menu__link--ativo' : 'menu__link';
}

// [O quê]   Componente Header. Recebe UMA prop: aoClicarWhatsapp (uma função).
// [React]   Props podem ser funções! O pai (Layout) decide O QUE acontece no clique;
//           o Header só avisa que o clique aconteceu. Isso se chama "levantar o estado" (lifting state up).
// [Por quê] O seletor de lojas é aberto pelo Layout, mas o botão está aqui no Header.
export default function Header({ aoClicarWhatsapp }) {
  // [O quê]   Cria uma variável de estado "menuAberto" (começa false) e a função "setMenuAberto" para mudá-la.
  // [React]   Nunca altere o estado direto (menuAberto = true). Sempre use a função "set...".
  // [Por quê] É a chamada ao setMenuAberto que avisa o React: "redesenhe a tela".
  const [menuAberto, setMenuAberto] = useState(false);

  // [O quê]   Função que fecha o menu.
  // [Por quê] Ao tocar em um link no celular, o menu precisa fechar. Dar um nome à ação deixa o JSX mais legível.
  const fecharMenu = () => setMenuAberto(false);

  // [O quê]   Função que alterna aberto/fechado.
  // [React]   "(aberto) => !aberto" recebe o valor ATUAL e devolve o contrário. Esta é a forma segura de calcular o novo estado a partir do antigo.
  const alternarMenu = () => setMenuAberto((aberto) => !aberto);

  return (
    // [O quê] <header> é a tag semântica de cabeçalho (ajuda leitores de tela e buscadores).
    <header className="header">
      <div className="container header__conteudo">
        {/* [O quê] Mostra o componente Logo (outro arquivo). [React] Componentes se encaixam como tags HTML. */}
        <Logo />

        {/* [O quê]   Menu principal.
            [React]   className recebe uma expressão: se menuAberto for true, soma a classe "menu--aberto" (que mostra o menu no celular).
            [Por quê] CSS decide a aparência; o React só liga e desliga a classe. */}
        <nav className={menuAberto ? 'menu menu--aberto' : 'menu'} aria-label="Menu principal">
          {/* [O quê]   Cria um link para cada item da lista itensMenu.
              [React]   LISTAS: array.map() transforma cada item em um elemento JSX.
                        "key" é obrigatório e deve ser único: ajuda o React a saber qual item mudou.
              [Por quê] Se o menu ganhar uma página nova, o link aparece sozinho. */}
          {itensMenu.map((item) => (
            <NavLink
              key={item.caminho}
              to={item.caminho}
              // [O quê]   "end" faz o link "/" ficar ativo SOMENTE na página inicial.
              // [Por quê] Sem "end", todo endereço começa com "/" e o Início ficaria sempre destacado.
              end={item.caminho === '/'}
              className={classeDoLink}
              // [O quê]   Ao clicar no link, fecha o menu do celular.
              // [React]   onClick = EVENTO. Passamos a função, sem parênteses, para o React chamá-la quando houver clique.
              onClick={fecharMenu}
            >
              {item.rotulo}
            </NavLink>
          ))}
        </nav>

        <div className="header__acoes">
          {/* [O quê]   Botão de WhatsApp: ao clicar, chama a função que veio do pai (Layout), que abre o seletor de lojas. */}
          {/* [O quê]   aria-label dá o nome do botão mesmo quando o texto está escondido (celulares estreitos).
              [Por quê] Em telas de 320–360px o logo, o botão e o hambúrguer não cabem lado a lado:
                        no celular o botão mostra só o ícone; o texto aparece a partir de 480px (veja Header.css). */}
          <button
            type="button"
            className="btn btn--acento btn--pequeno"
            aria-label="Falar no WhatsApp"
            onClick={aoClicarWhatsapp}
          >
            <Icone nome="chat" tamanho={18} />
            <span className="header__rotulo">
              {/* [O quê] "Falar no " só aparece no desktop. */}
              <span className="header__rotulo-longo">Falar no </span>WhatsApp
            </span>
          </button>

          {/* [O quê]   Botão "hambúrguer": abre e fecha o menu no celular.
              [React]   aria-expanded avisa leitores de tela se o menu está aberto (valor vem do estado).
              [React]   O ícone muda conforme o estado: "close" (X) quando aberto, "menu" quando fechado. */}
          <button
            type="button"
            className="header__hamburguer"
            aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuAberto}
            onClick={alternarMenu}
          >
            <Icone nome={menuAberto ? 'close' : 'menu'} tamanho={26} />
          </button>
        </div>
      </div>
    </header>
  );
}
