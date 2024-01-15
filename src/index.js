export function deepMerge(a, b) {
  if (Array.isArray(a)) {
    return [...a, ...b];
  }
  // return Object.assign(a, b);

  const merged = { ...a };
  for (const key of Object.keys(b)) {
    if (typeof b[key] === "object" || Array.isArray(a[key])) {
      merged[key] = deepMerge(a[key], b[key]);
    } else {
      merged[key] = b[key];
    }
  }
  return merged;
}
