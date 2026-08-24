// Lightweight cn() replacement — no clsx or tailwind-merge needed
export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  for (const input of inputs) {
    if (typeof input === "string" && input) {
      out.push(input);
    } else if (Array.isArray(input)) {
      const nested = cn(...input);
      if (nested) out.push(nested);
    } else if (input && typeof input === "object" && "raw" in input) {
      // TemplateStringsArray fallback
      out.push(String(input));
    }
  }
  return out.join(" ");
}

type ClassValue =
  | string
  | number
  | null
  | false
  | undefined
  | ClassValue[]
  | { raw: string };