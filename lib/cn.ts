// Petit utilitaire de concaténation de classes conditionnelles.
export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
