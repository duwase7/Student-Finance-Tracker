export function compileRegex(input, flags='i') {
    try {
        return input ? new RegExp(input, flags) : null;
    } catch {
        return null;
    }
}

export function highlightMatches(text, regex) {
    if (!regex) return text;
    try {
        return text.replace(regex, m => `<mark>${m}</mark>`);
    } catch {
        return text;
    }
}

export function filterTransactions(transactions, pattern) {
    const re = compileRegex(pattern);
    if (!re) return transactions;
    return transactions.filter(tx =>
        re.test(tx.description) || re.test(tx.category)
    );
}