import { hideElement, setBackground } from "./lib/code.org.js";
import { setContent } from "./lib/code.org.js";

hideElement("extrato");

export function updateBalanceDisplay(newBalance) {
  setContent("carteira", newBalance);
}

export function updateScreen(transactions) {
  let rows = ``;

  transactions.forEach((transaction) => {
    rows += `
        <tr>
        <td>${transaction.itemName}</td>
        <td>${transaction.itemValue}</td>
        <td>${transaction.timestamp.toLocaleString()}</td>
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

export function warning() {
  setBackground("red");
}
