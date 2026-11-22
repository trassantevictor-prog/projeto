// =====================================================================
// ARQUIVO: src/data/dicas.js
// PAPEL: textos curtos de "Dicas de saúde" mostrados na página inicial.
//
// TROCAR ANTES DE PUBLICAR: peça ao farmacêutico responsável para revisar
// cada texto de saúde antes de publicar.
// =====================================================================

// [O quê]   Importa as fotos das dicas.
import { imagens } from './imagens.js';

// [O quê]   Exporta o array com as 3 dicas.
// [React]   Cada objeto vira um <DicaCard /> (veja Home.jsx).
export const dicas = [
  {
    id: 'pressao',
    categoria: 'Prevenção',
    tempoLeitura: '3 min',
    titulo: 'Como acompanhar a pressão arterial no dia a dia',
    resumo:
      'Medir com regularidade e anotar os valores ajuda o seu médico a ajustar o tratamento.',
    imagem: imagens.dicaPressao,
  },
  {
    id: 'pele',
    categoria: 'Dermocosméticos',
    tempoLeitura: '4 min',
    titulo: 'Cuidados com a pele no clima de Porto Alegre',
    resumo:
      'A mudança entre dias úmidos e secos pede hidratação e protetor solar todos os dias.',
    imagem: imagens.dicaPele,
  },
  {
    id: 'vacinas',
    categoria: 'Imunidade',
    tempoLeitura: '3 min',
    titulo: 'Vacinas: mantenha o seu calendário em dia',
    resumo:
      'Converse com o farmacêutico ou com o seu médico para saber quais vacinas fazem sentido para você.',
    imagem: imagens.dicaVacinas,
  },
];
