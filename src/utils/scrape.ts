export function cleanTrim(string: string) {
  return string.trim().replace(/\s+/g, " ");
}

export function convertToNumber(string: string) {
  return Number(cleanTrim(string));
}
