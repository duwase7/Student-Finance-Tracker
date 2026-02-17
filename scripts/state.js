export let currency = localStorage.getItem("currency") || "USD";
export function setCurrency(newCurrency) {
    currency = newCurrency;
    localStorage.setItem("currency", newCurrency);
}