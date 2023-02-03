import { onEvent } from "./lib/code.org.js";
import {
  redAlert,
  alterarCarteira,
  alimentaExtrato,
  povoaExtrato,
  escreveExtrato,
} from "./business.js";

export let wallet = 200;
const COMIDA = 16;
const BRINQUEDO = 20;
const CIRCO = 10;
const ECONOMIA = prompt("Quanto quer economizar");
export let extrato = [];

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
  let tabela = '<table class="table"><tbody><tr>';
  let cabecalho = `<tr><td>Saldo Inicial =</td><td> 200</td>`;
  let toBeTable = [];
  0;

  povoaExtrato(toBeTable, tabela);
  console.log(extrato);
  escreveExtrato(cabecalho, toBeTable, wallet);
});
