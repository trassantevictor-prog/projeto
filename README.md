# Farmácias Associadas Central POA — site em React

Site institucional de uma farmácia com 4 lojas em Porto Alegre (Moinhos de Vento, Bela Vista, Petrópolis e Menino Deus).
Feito com **Vite + React + JavaScript + CSS puro**, pensado para **estudar os conceitos do React**: cada linha de código
tem comentário explicando **o que faz**, **a qual conceito do React se liga** e **por que resolve o problema do site**.

## Como rodar

Requisito: Node.js 20.19 ou superior (ou 22.12+).

```bash
npm install      # baixa as bibliotecas (React, React Router, Vite)
npm run dev      # abre o site em modo de desenvolvimento (http://localhost:5173)
npm run build    # gera a versão final na pasta dist/
npm run preview  # testa a versão final localmente
```

## Páginas

| Endereço | Página | Arquivo |
| --- | --- | --- |
| `/` | Início (capa, serviços, lojas, dicas) | `src/pages/Home.jsx` |
| `/servicos` | Serviços, com filtro por categoria | `src/pages/Servicos.jsx` |
| `/lojas` | Nossas lojas, com filtro "Abertas agora" | `src/pages/Lojas.jsx` |
| `/lojas/bela-vista` (e as outras 3) | Detalhe de uma loja | `src/pages/LojaDetalhe.jsx` |
| `/sobre` | Sobre nós | `src/pages/Sobre.jsx` |
| qualquer outro | Página 404 | `src/pages/NaoEncontrada.jsx` |

Em todas as páginas: cabeçalho, rodapé (endereço das lojas, WhatsApp e link "Sobre Nós"), botão flutuante de WhatsApp e a
janela "Com qual loja você quer falar?".

## Como ler os comentários

Todo arquivo `.js` e `.jsx` usa a mesma legenda:

- `[O quê]` — o que a linha faz;
- `[React]` — o conceito do React relacionado;
- `[Por quê]` — que problema ela resolve para o site.

Os arquivos `.css` têm comentários simples explicando cada bloco.

## Estrutura de pastas

```
repositorio/
├── index.html              página HTML única (o React desenha dentro da <div id="root">)
├── vite.config.js          configuração do Vite
├── public/                 arquivos servidos como estão (favicon)
└── src/
    ├── main.jsx            ponto de entrada: liga o React ao HTML
    ├── App.jsx             mapa de rotas do site
    ├── styles/global.css   cores, fontes, botões e grades (design tokens do DESIGN.md)
    ├── data/               DADOS do site (empresa, lojas, serviços, dicas, menu, imagens)
    ├── utils/              funções puras (link do WhatsApp, "loja aberta agora?")
    ├── hooks/              hook personalizado (título da aba)
    ├── components/         peças reutilizáveis (Header, Footer, LojaCard, ServicoCard...)
    └── pages/              uma tela por arquivo (Home, Servicos, Lojas...), cada uma com o seu CSS
```

Regra simples que organiza tudo: **dados em `data/`, regras em `utils/`, telas em `components/` e `pages/`**.
Para adicionar uma 5ª loja ou um novo serviço, você só edita o arquivo de dados.

## Onde ver cada conceito do React

| Conceito | Onde ver |
| --- | --- |
| Componentes e JSX | `components/Logo.jsx`, `components/Icone.jsx` |
| Props e desestruturação | `components/LojaCard.jsx`, `components/ServicoCard.jsx` |
| Props com valor padrão e `children` | `components/ChamadaFinal.jsx`, `components/TituloSecao.jsx` |
| Listas com `.map()` e `key` | `components/Footer.jsx`, `pages/Home.jsx` |
| Renderização condicional (`&&`, ternário, `return null`) | `components/LojaCard.jsx`, `pages/Lojas.jsx`, `components/SeletorDeLoja.jsx` |
| `useState` | `components/Header.jsx`, `pages/Servicos.jsx`, `pages/Lojas.jsx` |
| Levantar o estado (props que são funções) | `components/Layout.jsx` → `Header`, `BotaoWhatsappFlutuante`, `SeletorDeLoja` |
| `useEffect` e limpeza (cleanup) | `components/SeletorDeLoja.jsx` (tecla Escape), `components/RolarParaTopo.jsx` |
| Hook personalizado | `hooks/useTituloDaPagina.js` |
| Regras dos hooks | `pages/LojaDetalhe.jsx`, `components/SeletorDeLoja.jsx` |
| Dados derivados (calculados, sem estado extra) | `pages/Servicos.jsx`, `pages/Lojas.jsx`, `pages/Sobre.jsx` |
| Rotas, layout com `<Outlet />` e rota dinâmica | `App.jsx`, `components/Layout.jsx`, `pages/LojaDetalhe.jsx` |
| `Link` e `NavLink` | `components/Header.jsx`, `components/LojaCard.jsx` |

**Ordem sugerida de leitura:** `main.jsx` → `App.jsx` → `data/` → `Logo` e `Icone` → `Header` → `Layout` → `LojaCard` →
`Servicos` → `Lojas` → `LojaDetalhe`.

## O que trocar antes de publicar

Os dados abaixo são **exemplos** criados a partir do protótipo. Procure por `TROCAR` no código para achar cada um:

1. `src/data/lojas.js` — endereços, CEPs, telefones, WhatsApp, horários e destaque de cada loja.
2. `src/data/empresa.js` — WhatsApp geral, Instagram, CNPJ, nome e CRF do(a) farmacêutico(a) responsável.
3. `src/data/servicos.js` — confirmar com o dono quais serviços cada loja realmente oferece.
4. `src/data/dicas.js` — pedir ao farmacêutico responsável para revisar cada texto de saúde.
5. `src/pages/Sobre.jsx` — textos de Missão, Visão, Valores e da rede Associadas.
6. **Fotos** — as imagens do protótipo (Stitch) são ilustrativas e estão ligadas por endereço externo em
   `src/data/imagens.js`; esses links podem deixar de funcionar. Coloque fotos reais em `public/imagens/` e troque os
   endereços nesse arquivo (ex.: `'/imagens/loja-moinhos.jpg'`).

Itens do protótipo **deixados de fora de propósito**, por não poderem ser comprovados: selos de "Excelência 2026",
"+25 anos", "1ª rede do RS", nomes e registros de farmacêuticos, prazos de entrega e "24 horas". Só os inclua se forem
reais.

## Observações

- **Publicação:** como o site usa rotas (`/servicos`, `/lojas/...`), o servidor precisa devolver o `index.html` para
  qualquer endereço. Netlify, Vercel e Cloudflare Pages têm essa opção (em geral, "SPA fallback").
- **Política de Privacidade:** o protótipo previa uma, mas não foi criada (o site não coleta dados). Se for adicionar
  formulário ou estatísticas de acesso, crie essa página e o link no rodapé.
- **Horário "aberta agora":** é calculado no navegador de quem acessa, a partir dos horários de `data/lojas.js`.
  Feriados não são considerados.
