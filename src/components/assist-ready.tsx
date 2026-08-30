import { cn } from "@/lib/utils";

/** Homepage 002 copper pill. Use on academy / sitting rows, not as a filled chip. */
export function AssistReady({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-full border border-accent px-2.5 py-1 text-[10px] font-medium tracking-[0.14em] text-accent uppercase",
        className,
      )}
    >
      Assist-ready
    </span>
  );
}
