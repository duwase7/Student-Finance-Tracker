import { transactions, setTransactions, currency, setCurrency } from "./state.js";
import { exportTransactions, importTransactions } from "./storage.js";


export function highlight(text, re) {
    try {
        return text.replace(re, m => `<mark>${m}</mark>`);
    } catch {
        return text;
    }
}
function getCurrencySymbol(currency) {
    const symbols = {
        USD: "$",
        EUR: "€",
        RWF: "RWF "
    };
    return symbols[currency] || "$";
}

export function renderTable() {
    const tbody = document.querySelector("#transaction-table tbody");
    tbody.innerHTML = "";

    transactions.forEach(transaction => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${transaction.description}</td>
            <td>${getCurrencySymbol(currency)}${transaction.amount}</td>
            <td>${transaction.category}</td>
            <td>${transaction.date}</td>
        `;

        tbody.appendChild(row);
    });
}

/* Export button */
document.getElementById("export-json")
    ?.addEventListener("click", () => {
        exportTransactions(transactions);
    });

/* Import button */
document.getElementById("import-json")
    ?.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
            importTransactions(file, (data) => {
                setTransactions(data);
                renderTable();
            });
        }
    });

/* Currency selector */
const currencySelect = document.getElementById("currency-select");

if (currencySelect) {
    currencySelect.value = currency;

    currencySelect.addEventListener("change", (e) => {
        setCurrency(e.target.value);
        renderTable();
    });
}