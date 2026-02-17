const KEY = 'finance:data';
export function loadData() {
  return JSON.parse(localStorage.getItem(KEY) || '[]');
}
export function saveData(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}