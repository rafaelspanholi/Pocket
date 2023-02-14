import { buyItem } from "./business.js";
import { onEvent } from "./lib/code.org.js";
import { checkCheckboxes as setFilters, extratoButton } from "./gui.js";

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

onEvent("dataInicial", "change", function () {});

onEvent("dataFinal", "change", function () {});

onEvent("filtroComida", "change", function () {
  setFilters("comida", "filtroComida");
});

onEvent("filtroBrinquedo", "change", function () {
  setFilters("brinquedo", "filtroBrinquedo");
});

onEvent("filtroCirco", "change", function () {
  setFilters("circo", "filtroCirco");
});
