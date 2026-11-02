export default function SectionHead({
  eyebrow,
  title,
  text,
  light = false,
  center = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`reveal max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <p className={`text-xs font-semibold uppercase tracking-[0.25em] ${light ? "text-sea-2" : "text-clay"}`}>{eyebrow}</p>
      <h2
        className={`mt-4 font-display text-4xl font-medium leading-[1.08] tracking-tight md:text-5xl ${
          light ? "text-sand" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {text && <p className={`mt-5 text-lg leading-relaxed ${light ? "text-sand/65" : "text-muted"}`}>{text}</p>}
    </div>
  );
}
