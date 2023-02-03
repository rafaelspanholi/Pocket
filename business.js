import { wallet, extrato } from "./app.js";
import { setBackground, getProperty, setContent } from "./lib/code.org.js";
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
  const conteudo = `${cabecalho} ${toBeTable.join("")} 
    <tr>
      <td>Restante = </td>
      <td>${wallet}</td>
    </tr>`;
  //tabela a ser usada pra ficar mais bonitinho (tem q implementar)
  // <table border="1" cellpadding="3" id="printTable">
  //   <tbody>
  //     <tr>
  //       <th>Tipo</th>
  //       <th>Valor</th>
  //       <th>Data</th>
  //     </tr>
  //     <tr>
  //       <td>${lancamento.tipo}</td>
  //       <td>${lancamento.subtracao}</td>
  //       <td>${lancamento.dia}</td>
  //     </tr>
  //   </tbody>
  // </table>;

  setContent("extrato", conteudo);
}
export function setInitialDate() {
  document.getElementById("dataInicial").valueAsDate = new Date();
  document.getElementById("dataFinal").valueAsDate = new Date();
}

export function checkFilter(lista, listaFiltrada) {
  listaFiltrada = [];
  let dataFinal = document.getElementById("dataFinal").valueAsDate;
  let dataInicial = document.getElementById("dataInicial").valueAsDate;
  let filtroComida = getProperty("filtroComida", "checked");
  let filtroBrinquedo = getProperty("filtroBrinquedo", "checked");
  let filtroCirco = getProperty("filtroCirco", "checked");
  lista.forEach((lancamento) => {
    if (filtroComida) {
      if (lancamento.tipo === "comida") {
        listaFiltrada.push(lancamento);
      }
    }
    if (filtroBrinquedo) {
      if (lancamento.tipo === "brinquedo") {
        listaFiltrada.push(lancamento);
      }
    }
    if (filtroCirco) {
      if (lancamento.tipo === "circo") {
        listaFiltrada.push(lancamento);
      }
    }
  });
  console.log(listaFiltrada);
  console.log(dataInicial);
  console.log(dataFinal);
}

export function povoaExtrato(toBeTable, tabela) {
  extrato.forEach((lancamento) => {
    let corpoExtrato = `<tr>
    <td>${lancamento.tipo} =</td>
    <td>${lancamento.subtracao}</td>
    <td>${lancamento.dia}</td>
    </tr>
    </tr>`;
    toBeTable.push(tabela + corpoExtrato);
  });
}
