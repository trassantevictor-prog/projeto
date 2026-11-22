# Farmácias Associadas Central POA

Site institucional de uma farmácia com 4 lojas em Porto Alegre (Moinhos de Vento, Bela Vista, Petrópolis e Menino Deus),
publicado em **https://farmaciaassociadaspoa.netlify.app/**.

Feito com **Vite + React + JavaScript + CSS puro**, com comentários em cada linha explicando o que ela faz,
o conceito do React relacionado e por que resolve o problema do site.

## Tecnologias

- **React** (componentes, hooks, rotas)
- **React Router** (`BrowserRouter`, rotas dinâmicas, `Link` e `NavLink`)
- **JavaScript** (ES6+, funções puras, módulos)
- **CSS3** (Flexbox, Grid, variáveis, transições e `:hover`)
- **Vite** (bundler e servidor de desenvolvimento)

## O que pratiquei

- Criar componentes reutilizáveis com JSX e separar o site em `components/` e `pages/`
- Passar dados entre componentes com **props**, desestruturação, valor padrão e `children`
- Renderizar listas com `.map()` e a prop `key`
- Fazer renderização condicional com `&&`, ternário e `return null`
- Controlar estado com `useState` (menu mobile, filtros e modal)
- Levantar o estado: compartilhar o estado do modal entre `Layout`, `Header` e `SeletorDeLoja` via props que são funções
- Usar `useEffect` com limpeza (cleanup) para o listener da tecla Escape e o scroll ao trocar de rota
- Criar hook personalizado (`useTituloDaPagina`) para mudar o título da aba
- Calcular dados derivados sem criar estado extra (lojas "Abertas agora", filtros)
- Configurar rotas com React Router, incluindo layout com `<Outlet />` e rota dinâmica por loja
- Organizar o projeto por responsabilidades: dados em `data/`, regras em `utils/`, telas em `components/` e `pages/`

## Como rodar

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`. Para gerar a versão final: `npm run build` (pasta `dist/`).

**Publicação:** o servidor precisa devolver o `index.html` para qualquer endereço (SPA fallback).
O site está publicado na Netlify: https://farmaciaassociadaspoa.netlify.app/

## Autor Sergio Trassante

Sergio Trassante — [LinkedIn](https://www.linkedin.com/in/s%C3%A9rgio-t-353a79425/) · [GitHub](https://github.com/trassantevictor-prog)

