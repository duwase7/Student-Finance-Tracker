export function highlight(text, re) {
    try {
      return text.replace(re, m => `<mark>${m}</mark>`);
    } catch {
     return text;
    }
}
import { exportTransactions, importTransactions } from "./storage.js";
import { transactions, setTransactions } from "./state.js";

document.getElementById("export-json")
    .addEventListener("click", () => {
        exportTransactions(transactions);
    });

document.getElementById("import-json")
    .addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
            importTransactions(file, (data) => {
                setTransactions(data);
                renderTable();
            });
        }
    });
    import { currency, setCurrency } from "./state.js";

const currencySelect = document.getElementById("currency-select");

currencySelect.value = currency;

currencySelect.addEventListener("change", (e) => {
    setCurrency(e.target.value);
    renderTable();
});