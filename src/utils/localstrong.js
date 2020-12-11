const StrongName = "PathName";
export function getStrong() {
  return localStorage.getItem(StrongName);
}

export function setStrong(val) {
  localStorage.setItem(StrongName, val);
}
