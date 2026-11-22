// =====================================================================
// ARQUIVO: src/data/lojas.js
// PAPEL: lista das 4 filiais (endereço, contatos, horários, foto).
//
// TROCAR ANTES DE PUBLICAR: endereços, CEPs, telefones e WhatsApps abaixo são
// EXEMPLOS gerados no protótipo. Use os dados reais de cada loja.
// =====================================================================

// [O quê]   Importa o objeto com as URLs das fotos.
// [React]   Módulos ES: um arquivo pode importar o que outro exportou.
// [Por quê] Cada loja usa a sua foto sem copiar o endereço da imagem aqui dentro.
import { imagens } from './imagens.js';

// [O quê]   Define os horários que valem para as 4 lojas (hora de abrir e de fechar, em horas cheias).
// [React]   Dado puro (sem JSX). Quem decide "aberta agora?" é a função statusDaLoja.
// [Por quê] Se uma loja tiver horário diferente, basta dar a ela um objeto próprio.
const horarioPadrao = {
  segASab: { abre: 8, fecha: 22 }, // segunda a sábado: 8h às 22h
  domingo: { abre: 9, fecha: 20 }, // domingos e feriados: 9h às 20h
};

// [O quê]   Exporta o array (lista) com as 4 lojas.
// [React]   Arrays de objetos + .map() é o jeito do React de criar listas na tela.
// [Por quê] Adicionar uma 5ª loja = adicionar 1 objeto aqui. Nenhuma tela precisa mudar.
export const lojas = [
  {
    // [O quê] "slug" = nome da loja em formato de endereço (sem acento e espaço).
    // [React] Vira a parte final da URL: /lojas/moinhos-de-vento (rota dinâmica).
    slug: 'moinhos-de-vento',
    bairro: 'Moinhos de Vento',
    endereco: 'Rua Padre Chagas, 120',
    cep: '90570-080',
    telefone: '(51) 3222-0001', // texto mostrado na tela
    telefoneLink: '555132220001', // só dígitos com 55 na frente, usado no link tel:
    whatsapp: '5551991230001', // só dígitos com 55 + DDD, usado no link wa.me
    whatsappTexto: '(51) 99123-0001', // texto mostrado na tela
    destaque: 'Estacionamento exclusivo', // TROCAR: confirmar com o dono
    foto: imagens.lojaMoinhos,
    horarios: horarioPadrao,
  },
  {
    slug: 'bela-vista',
    bairro: 'Bela Vista',
    endereco: 'Av. Nilópolis, 250',
    cep: '90460-050',
    telefone: '(51) 3333-0002',
    telefoneLink: '555133330002',
    whatsapp: '5551991230002',
    whatsappTexto: '(51) 99123-0002',
    destaque: 'Valet cortesia',
    foto: imagens.lojaBelaVista,
    horarios: horarioPadrao,
  },
  {
    slug: 'petropolis',
    bairro: 'Petrópolis',
    endereco: 'Av. Protásio Alves, 1840',
    cep: '90410-006',
    telefone: '(51) 3338-0003',
    telefoneLink: '555133380003',
    whatsapp: '5551991230003',
    whatsappTexto: '(51) 99123-0003',
    destaque: 'Fácil acesso',
    foto: imagens.lojaPetropolis,
    horarios: horarioPadrao,
  },
  {
    slug: 'menino-deus',
    bairro: 'Menino Deus',
    endereco: 'Rua José de Alencar, 420',
    cep: '90150-101',
    telefone: '(51) 3233-0004',
    telefoneLink: '555132330004',
    whatsapp: '5551991230004',
    whatsappTexto: '(51) 99123-0004',
    destaque: 'Vaga exclusiva',
    foto: imagens.lojaMeninoDeus,
    horarios: horarioPadrao,
  },
];
