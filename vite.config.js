// =====================================================================
// ARQUIVO: vite.config.js
// PAPEL: configura o Vite, a ferramenta que serve o site no navegador
//        enquanto você programa (npm run dev) e gera os arquivos finais
//        para publicar (npm run build).
// =====================================================================

// [O quê]   Importa a função defineConfig do Vite.
// [React]   Não é React: é configuração da ferramenta de build.
// [Por quê] Ela só devolve o objeto que você passa, mas faz o editor
//           sugerir as opções corretas enquanto você digita.
import { defineConfig } from 'vite';

// [O quê]   Importa o plugin oficial do Vite para React.
// [React]   É ele que ensina o Vite a entender JSX (o HTML dentro do JavaScript)
//           e a atualizar a tela na hora quando você salva um arquivo.
// [Por quê] Sem o plugin, o navegador não saberia ler os arquivos .jsx.
import react from '@vitejs/plugin-react';

// [O quê]   Exporta a configuração padrão do projeto.
// [React]   Não é React.
// [Por quê] O Vite procura automaticamente por este "export default" ao iniciar.
export default defineConfig({
  // [O quê]   Liga o plugin do React.
  // [Por quê] É a única configuração que este projeto precisa.
  plugins: [react()],
});
