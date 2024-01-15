export function deepMerge(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    return [...a, ...b];
  }

  if (Array.isArray(a) || Array.isArray(b) || typeof a !== typeof b) {
    throw new Error("Error: Cannot merge two differnet types.");
  }

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
