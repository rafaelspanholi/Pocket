import { wallet, extrato } from "./app";
import { setBackground } from "./lib/code.org";
/**
 * Representa um gasto.
 * @typedef {Object} Gasto
 * @property {string} tipo - O tipo de gasto (comida, brinquedo ou alimento).
 * @property {number} subtracao - O valor gasto.
 * @property {string} dia - o dia em que foi feito o gasto.
 */
export function alterarCarteira() {
  document.getElementById("carteira").innerHTML = wallet;
}
export function redAlert(wallet, economia) {
  if (wallet <= economia) {
    setBackground("red");
  }
}
export function alimentaExtrato(gasto, tipo) {
  /** @type Gasto */
  let operacao = {};
  operacao.tipo = tipo;
  operacao.subtracao = gasto * -1;
  operacao.dia = new Date().toDateString();
  extrato.push(operacao);
}
export function escreveExtrato(cabecalho, toBeTable, wallet) {
  const conteudo = `${cabecalho} ${toBeTable.join(
    ""
  )} <tr><td>Restante = </td><td>${wallet}</td></tr>`;

  setContent("extrato", conteudo);
}
export function povoaExtrato(toBeTable, tabela) {
  extrato.forEach((lancamento) => {
    let corpoExtrato = `<tr><td>${lancamento.tipo} =</td><td>${lancamento.subtracao}</td><td>${lancamento.dia}</td></tr></tr>`;
    toBeTable.push(tabela + corpoExtrato);
  });
}
