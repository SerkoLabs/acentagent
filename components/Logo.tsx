export function LogoMark({ className = "h-8 w-8", light = false }: { className?: string; light?: boolean }) {
  const stroke = light ? "#f5f0e8" : "#0b1624";
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="14" fill="none" stroke={stroke} strokeWidth="2.2" />
      <ellipse cx="20" cy="20" rx="5.5" ry="14" fill="none" stroke={stroke} strokeWidth="2.2" />
      <path d="M4 30 L36 12" stroke="#c4623a" strokeWidth="3" strokeLinecap="round" />
      <circle cx="36" cy="12" r="3" fill="#c4623a" />
    </svg>
  );
}

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark light={light} />
      <span className="leading-none">
        <span className={`block font-display text-[1.35rem] font-semibold tracking-tight ${light ? "text-sand" : "text-ink"}`}>
          Meridaxis
        </span>
        <span className={`block text-[0.6rem] font-semibold uppercase tracking-[0.32em] ${light ? "text-sand/60" : "text-muted"}`}>
          Consulting
        </span>
      </span>
    </span>
  );
}
