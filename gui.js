import {
  getProperty,
  hideElement,
  setBackground,
  showElement,
  setContent,
} from "./lib/code.org.js";
hideElement("extrato");

export function updateBalanceDisplay(newBalance) {
  setContent("carteira", newBalance);
}

// let checkboxes = [];
// checkboxes.comida = getProperty("filtroComida", "checked");
// checkboxes.circo = getProperty("filtroCirco", "checked");
// checkboxes.brinquedo = getProperty("filtroBrinquedo", "checked");

let filters = {
  comida: true,
  circo: true,
  brinquedo: true,
};

export function checkCheckboxes(name, id) {
  filters[name] = getProperty(id, "checked");
}

export function updateScreen(transactions) {
  const filteredTransactions = transactions.filter((transaction) => {
    return filters[transaction.itemName];
  });
  let rows = ``;

  filteredTransactions.forEach((transaction) => {
    rows += `
        <tr>
        <td>${transaction.itemName}</td>
        <td>${transaction.itemValue}</td>
        <td>${transaction.timestamp.toLocaleString().substr(0, 16)}</td>
        </tr>`;
  });

  let content = `<table border="1" cellpadding="3" id="printTable">
    <tbody>
    <tr>
    <th>Tipo</th>
    <th>Valor</th>
    <th>Data</th>
    </tr>
    ${rows}
    </tbody>
    </table>
    
    `;
  setContent("extrato", content);
}

export function extratoButton() {
  let state = getProperty("extrato", "className");
  const hidden = state.includes("hidden");
  if (hidden) {
    showElement("extrato");
    return;
  }
  hideElement("extrato");
}
export function warning() {
  setBackground("red");
}
