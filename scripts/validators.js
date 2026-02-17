export function validateDescription(desc) {
    return /^\S(?:.*\S)?$/.test(desc); // no leading/trailing spaces
  }
  
  export function validateAmount(amount) {
    return /^(0|[1-9]\d*)(\.\d{1,2})?$/.test(amount);
  }