const STORAGE_KEY = "financeTracker:data";
const CURRENCY_KEY = "financeTracker:currency";

export let transactions = [];

export let currency = localStorage.getItem(CURRENCY_KEY) || "USD";

export function loadTransactions() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
        try {
            transactions = JSON.parse(data);
        } catch {
            transactions = [];
        }
    }
}

export function saveTransactions() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
}


export function setTransactions(newTransactions) {
    transactions = newTransactions;
    saveTransactions();
}

export function setCurrency(newCurrency) {
    currency = newCurrency;
    localStorage.setItem(CURRENCY_KEY, currency);
}