export function isVerified(value: string) {
  return value !== undefined && value !== null && value.trim().length > 0 && !value.toUpperCase().includes("VERIFY");
}
