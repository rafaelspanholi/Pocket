import { buyItem } from "./business.js";
import { onEvent } from "./lib/code.org.js";
import { extratoButton } from "./gui.js";

onEvent("comida", "click", function () {
  buyItem("comida");
});

onEvent("brinquedo", "click", function () {
  buyItem("brinquedo");
});

onEvent("circo", "click", function () {
  buyItem("circo");
});

onEvent("go-extrato", "click", function () {
  extratoButton();
});
