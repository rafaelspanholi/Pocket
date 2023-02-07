import { setBackground } from "./lib/code.org.js";
import { setContent } from "./lib/code.org.js";

export function updateScreen(transactions) {
  let content = `<table border="1" cellpadding="3" id="printTable">
        <tbody>
          <tr>
            <th>Tipo</th>
            <th>Valor</th>
            <th>Data</th>
          </tr>
        `;
  transactions.forEach((transaction) => {
    content += `<tr>
            <td>${transaction.itemName}</td>
            <td>${transaction.itemValue}</td>
            <td>${transaction.timestamp.toLocaleString()}</td>
        </tr>`;
  });
  content += `</tbody>
    </table>
    `;
  setContent("extrato", content);
}

export function warning() {
  setBackground("red");
}
