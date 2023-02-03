import { onEvent } from "./lib/code.org.js";
import {
  setInitialDate,
  redAlert,
  alterarCarteira,
  alimentaExtrato,
  povoaExtrato,
  escreveExtrato,
  checkFilter,
} from "./business.js";

export let wallet = 200;
const COMIDA = 16;
const BRINQUEDO = 20;
const CIRCO = 10;
const ECONOMIA = prompt("Quanto quer economizar");
let toBeTable = [];
export let extrato = [];

setInitialDate();

onEvent("comida", "click", function () {
  wallet -= COMIDA;
  redAlert(wallet, ECONOMIA);
  alterarCarteira();
  alimentaExtrato(COMIDA, "comida");
});

onEvent("brinquedo", "click", function () {
  wallet -= BRINQUEDO;
  redAlert(wallet, ECONOMIA);
  alterarCarteira();
  alimentaExtrato(BRINQUEDO, "brinquedo");
});

onEvent("circo", "click", function () {
  wallet -= CIRCO;
  redAlert(wallet, ECONOMIA);
  alterarCarteira();
  alimentaExtrato(CIRCO, "circo");
});

onEvent("go-extrato", "click", function () {
  checkFilter(extrato, toBeTable);

  // povoaExtrato(toBeTable, tabela);
  // console.log(extrato);
  // escreveExtrato(cabecalho, toBeTable, wallet);
});
