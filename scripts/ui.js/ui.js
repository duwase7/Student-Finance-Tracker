import { transactions, setTransactions, currency, setCurrency, loadTransactions, saveTransactions } from "./state.js";
import { exportTransactions, importTransactions } from "./storage.js";

const form = document.getElementById("transaction-form");
const tableBody = document.querySelector("#transaction-table tbody");
const searchInput = document.getElementById("search");
const totalCountEl = document.getElementById("total-count");
const totalSumEl = document.getElementById("total-sum");
const topCategoryEl = document.getElementById("top-category");
const capInput = document.getElementById("cap");
const capStatusEl = document.getElementById("cap-status");
const currencySelect = document.getElementById("currency-select");
const formErrors = document.getElementById("form-errors");


export function highlight(text, re) {
    try {
        return re ? text.replace(re, m => `<mark>${m}</mark>`) : text;
    } catch {
        return text;
    }
}


function getCurrencySymbol(cur) {
    const symbols = { USD: "$", EUR: "€", RWF: "RWF " };
    return symbols[cur] || "$";
}

function updateStats() {
    totalCountEl.textContent = transactions.length;
    const sum = transactions.reduce((acc, t) => acc + t.amount, 0);
    totalSumEl.textContent = `${getCurrencySymbol(currency)}${sum.toFixed(2)}`;


    const freq = {};
    transactions.forEach(t => {
        freq[t.category] = (freq[t.category] || 0) + 1;
    });
    let topCat = "-";
    if (Object.keys(freq).length) {
        topCat = Object.entries(freq).sort((a,b)=>b[1]-a[1])[0][0];
    }
    topCategoryEl.textContent = topCat;

   
    const capVal = parseFloat(capInput.value);
    if (!isNaN(capVal)) {
        if (sum <= capVal) {
            capStatusEl.textContent = `Remaining ${getCurrencySymbol(currency)}${(capVal-sum).toFixed(2)}`;
            capStatusEl.setAttribute("aria-live","polite");
        } else {
            capStatusEl.textContent = `Over ${getCurrencySymbol(currency)}${(sum-capVal).toFixed(2)}`;
            capStatusEl.setAttribute("aria-live","assertive");
        }
    } else {
        capStatusEl.textContent = "";
    }
}


function renderTable(filterRegex = null) {
    tableBody.innerHTML = "";
    transactions.forEach(t => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${highlight(t.description, filterRegex)}</td>
            <td>${getCurrencySymbol(currency)}${t.amount.toFixed(2)}</td>
            <td>${highlight(t.category, filterRegex)}</td>
            <td>${t.date}</td>
        `;

        tableBody.appendChild(tr);
    });
    updateStats();
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formErrors.textContent = "";

    const desc = form.description.value.trim();
    const amt = parseFloat(form.amount.value);
    const cat = form.category.value.trim();
    const date = form.date.value;

   
    if (!desc || isNaN(amt) || !cat || !date) {
        formErrors.textContent = "Please fill all fields correctly.";
        return;
    }

    const newTx = {
        id: `txn_${Date.now()}`,
        description: desc,
        amount: amt,
        category: cat,
        date,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    setTransactions([...transactions, newTx]);
    renderTable();
    form.reset();
});


searchInput.addEventListener("input", (e) => {
    let pattern = e.target.value;
    let re = null;
    if (pattern) {
        try { re = new RegExp(pattern, "i"); } catch { re = null; }
    }
    renderTable(re);
});

document.querySelectorAll("#transaction-table th[data-sort]").forEach(th => {
    th.addEventListener("click", () => {
        const key = th.dataset.sort;
        const sorted = [...transactions].sort((a,b) => {
            if (typeof a[key] === "number") return a[key]-b[key];
            if (typeof a[key] === "string") return a[key].localeCompare(b[key]);
            return 0;
        });
        setTransactions(sorted);
        renderTable();
    });
});


document.getElementById("export-json").addEventListener("click", () => {
    exportTransactions(transactions);
});

document.getElementById("import-json").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    importTransactions(file, (data) => {
        setTransactions(data);
        renderTable();
    });
});

currencySelect.value = currency;
currencySelect.addEventListener("change", (e) => {
    setCurrency(e.target.value);
    renderTable();
});

capInput.addEventListener("input", updateStats);


loadTransactions();
renderTable();