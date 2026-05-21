import { cn } from "@/lib/cn";

// Badge "pré-titre" (hero) — fond surface + bordure subtile
export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-4 py-1.5 text-sm text-muted backdrop-blur",
        className
      )}
    >
      {children}
    </span>
  );
}

// Eyebrow — petit label de section en majuscules, accent indigo
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block text-xs font-semibold uppercase tracking-[0.18em] text-accent",
        className
      )}
    >
      {children}
    </span>
  );
}
