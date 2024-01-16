export function getCurrentTime() {
  return new Date().toTimeString().split(" ")[0];
}
