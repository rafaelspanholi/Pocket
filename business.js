import { updateScreen, warning, updateBalanceDisplay } from "./gui.js";

let balance = 200;

const productValues = {
  comida: 16,
  brinquedo: 20,
  circo: 10,
};

let minBalance = prompt("Quanto quer economizar");

let transactions = [];

export function buyItem(itemName) {
  const transaction = {
    itemName: itemName,
    itemValue: productValues[itemName],
    timestamp: new Date(),
  };
  updateBalance(transaction.itemValue);
  addTransaction(transaction);
  checkSpendings();
  updateScreen(transactions);
}

function updateBalance(value) {
  balance -= value;
  updateBalanceDisplay(balance);
}

function addTransaction(transaction) {
  transactions.push(transaction);
}

function checkSpendings() {
  if (balance <= minBalance) {
    warning();
  }
}
