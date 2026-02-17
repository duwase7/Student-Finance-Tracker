export function highlight(text, re) {
    try {
      return text.replace(re, m => `<mark>${m}</mark>`);
    } catch {
      return text;
    }
  }