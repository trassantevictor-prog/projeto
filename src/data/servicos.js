// =====================================================================
// ARQUIVO: src/data/servicos.js
// PAPEL: lista dos serviços oferecidos. Usada na Home e na página Serviços.
//
// TROCAR ANTES DE PUBLICAR: confirme com o dono quais serviços cada loja
// realmente oferece. Os textos abaixo são exemplos e não prometem prazos.
// =====================================================================

// [O quê]   Exporta o array com os 8 serviços.
// [React]   Cada objeto vira um <ServicoCard /> na tela (veja Servicos.jsx).
// [Por quê] Para incluir ou tirar um serviço, você só edita esta lista.
export const servicos = [
  {
    // [O quê] "id" é único por serviço. [React] Será usado como "key" na lista.
    id: 'pressao',
    nome: 'Aferição de pressão arterial',
    // [O quê] Categoria: é o que o filtro da página Serviços usa para separar os cards.
    categoria: 'Saúde',
    // [O quê] Nome do ícone na fonte Material Symbols (fonts.google.com/icons).
    icone: 'monitor_heart',
    descricao:
      'Medição com aparelho digital e orientação do farmacêutico para você acompanhar a sua pressão.',
    // [O quê] Mensagem que já vai escrita quando a pessoa abre o WhatsApp.
    mensagem: 'Olá! Gostaria de saber sobre a aferição de pressão arterial.',
  },
  {
    id: 'glicemia',
    nome: 'Teste de glicemia capilar',
    categoria: 'Saúde',
    icone: 'bloodtype',
    descricao:
      'Controle rápido do nível de glicose no sangue, com orientação do farmacêutico.',
    mensagem: 'Olá! Gostaria de saber sobre o teste de glicemia.',
  },
  {
    id: 'injetaveis',
    nome: 'Aplicação de injetáveis',
    categoria: 'Saúde',
    icone: 'vaccines',
    // [O quê] Marca os serviços que só acontecem com receita médica.
    // [React] O ServicoCard usa este valor para decidir se mostra o aviso "Exige receita" (renderização condicional).
    exigeReceita: true,
    descricao:
      'Aplicação segura por profissional habilitado, mediante apresentação de receita médica.',
    mensagem: 'Olá! Gostaria de saber sobre a aplicação de injetáveis.',
  },
  {
    id: 'orientacao',
    nome: 'Orientação farmacêutica',
    categoria: 'Saúde',
    icone: 'clinical_notes',
    descricao:
      'Tire dúvidas sobre posologia, horários e possíveis interações entre medicamentos.',
    mensagem: 'Olá! Gostaria de uma orientação farmacêutica.',
  },
  {
    id: 'dermocosmeticos',
    nome: 'Consultoria em dermocosméticos',
    categoria: 'Beleza e cuidado',
    icone: 'spa',
    descricao:
      'Ajuda para escolher produtos de cuidado com a pele, proteção solar e rotina de skincare.',
    mensagem: 'Olá! Gostaria de uma consultoria em dermocosméticos.',
  },
  {
    id: 'entrega',
    nome: 'Tele-entrega no seu bairro',
    categoria: 'Conveniência',
    icone: 'moped',
    descricao:
      'Peça pelo WhatsApp e receba em casa. Consulte a área de entrega da sua loja.',
    mensagem: 'Olá! Gostaria de pedir uma tele-entrega.',
  },
  {
    id: 'vacinas',
    nome: 'Vacinas',
    categoria: 'Saúde',
    icone: 'shield_with_heart',
    descricao: 'Consulte a disponibilidade de vacinas na loja mais próxima de você.',
    mensagem: 'Olá! Gostaria de saber sobre vacinas disponíveis.',
  },
  {
    id: 'clube',
    nome: 'Clube de vantagens',
    categoria: 'Conveniência',
    icone: 'loyalty',
    descricao:
      'Benefícios e condições especiais da Rede Farmácias Associadas. Pergunte como participar.',
    mensagem: 'Olá! Gostaria de saber como participar do clube de vantagens.',
  },
];
