import { setTransactions } from "./state.js";

export function exportTransactions(transactions) {
    const dataStr = JSON.stringify(transactions, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "transactions.json";
    a.click();

    URL.revokeObjectURL(url);
}

export function importTransactions(file, callback) {
    const reader = new FileReader();

    reader.onload = function (e) {
        try {
            const data = JSON.parse(e.target.result);

            // Validate each record
            const isValid = data.every(tx =>
                tx.id &&
                tx.description &&
                typeof tx.amount === "number" &&
                tx.category &&
                tx.date
            );

            if (!isValid) throw new Error("Invalid JSON structure");

            callback(data);
        } catch (error) {
            alert("Invalid JSON file: " + error.message);
        }
    };

    reader.readAsText(file);
}