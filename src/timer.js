export function warnLater(message) {
  setTimeout(() => {
    console.log(message);
  }, 2_000);
}
