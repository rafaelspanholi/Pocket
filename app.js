import { buyItem, filterButton } from "./business.js";
import { onEvent } from "./lib/code.org.js";
import { checkCheckboxes, extratoButton } from "./gui.js";

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
  filterButton("comida", "filtroComida");
  // setFilters("comida", "filtroComida");
});

onEvent("filtroBrinquedo", "change", function () {
  filterButton("brinquedo", "filtroBrinquedo");
  // setFilters("brinquedo", "filtroBrinquedo");
});

onEvent("filtroCirco", "change", function () {
  filterButton("circo", "filtroCirco");
  // setFilters("circo", "filtroCirco");

});
