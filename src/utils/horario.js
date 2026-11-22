// =====================================================================
// ARQUIVO: src/utils/horario.js
// PAPEL: funções sobre horários das lojas (aberta agora? como mostrar?).
// =====================================================================

// [O quê]   Recebe os horários da loja e (opcionalmente) a data/hora de referência.
// [React]   Função pura: mesmo "agora" + mesmos horários = mesmo resultado.
//           Por isso é fácil de testar e de reaproveitar em vários componentes.
// [Por quê] O selo "Aberta agora" aparece em 3 lugares (cards, seletor de loja e
//           página da loja). A regra mora aqui, então os 3 sempre concordam.
export function statusDaLoja(horarios, agora = new Date()) {
  // [O quê]   getDay() devolve o dia da semana: 0 = domingo, 1 = segunda ... 6 = sábado.
  const ehDomingo = agora.getDay() === 0;

  // [O quê]   Escolhe o turno certo: domingo usa um horário, os demais dias usam outro.
  const turno = ehDomingo ? horarios.domingo : horarios.segASab;

  // [O quê]   Transforma a hora atual em número decimal (ex.: 14h30 vira 14.5).
  // [Por quê] Permite comparar com "abre" e "fecha" usando só >= e <.
  const horaAtual = agora.getHours() + agora.getMinutes() / 60;

  // [O quê]   Está aberta se a hora atual estiver entre a abertura (inclusive) e o fechamento (exclusive).
  const aberta = horaAtual >= turno.abre && horaAtual < turno.fecha;

  // [O quê]   Devolve um objeto com o resultado (true/false) e o texto pronto para exibir.
  // [Por quê] O componente não precisa saber a regra: só mostra o que recebeu.
  return {
    aberta,
    texto: aberta ? `Aberta agora • fecha às ${turno.fecha}h` : 'Fechada agora',
  };
}

// [O quê]   Transforma um turno { abre: 8, fecha: 22 } no texto "8h às 22h".
// [Por quê] O rodapé e a página da loja mostram horários; o formato fica igual nos dois.
export function formatarTurno(turno) {
  return `${turno.abre}h às ${turno.fecha}h`;
}
