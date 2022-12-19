export function ArrayToString(array: string[] | null): string {
  if (!array) {
    return "";
  }
  return array.join(", ");
}
