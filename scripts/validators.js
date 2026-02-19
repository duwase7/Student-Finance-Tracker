export function validateDescription(desc) {
    return /^\S(?:.*\S)?$/.test(desc); // no leading/trailing spaces
  }
  
  export function validateAmount(amount) {
    return /^(0|[1-9]\d*)(\.\d{1,2})?$/.test(amount);
  }
  export function validateDate(date) {
    return /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(date);
  }
  
  export function validateCategory(cat) {
    return /^[A-Za-z]+(?:[ -][A-Za-z]+)*$/.test(cat);
  }
  
  // Advanced: duplicate words
  export function hasDuplicateWords(text) {
    return /\b(\w+)\s+\1\b/.test(text);
  }