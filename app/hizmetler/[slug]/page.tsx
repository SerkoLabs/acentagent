import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/lib/content";
import CtaBand from "@/components/CtaBand";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return s ? { title: s.title, description: s.short } : {};
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const idx = services.findIndex((x) => x.slug === slug);
  if (idx < 0) notFound();
  const s = services[idx];
  const next = services[(idx + 1) % services.length];

  return (
    <>
      <section className="grain relative overflow-hidden bg-ink pt-[72px] text-sand">
        <div className="dot-grid absolute inset-0 opacity-50" />
        <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-clay/25 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-14 md:px-8 md:pb-28 md:pt-20">
          <Link href="/#hizmetler" className="text-sm text-sand/55 transition hover:text-sand">
            ← Tüm hizmetler
          </Link>
          <div className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-sand/55">
            <span className="font-display text-lg text-clay">{s.no}</span>
            <span className="h-px w-10 bg-sand/25" />
            {s.kicker}
          </div>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-medium leading-[1.04] tracking-tight md:text-7xl">{s.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-sand/70">{s.short}</p>
          <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
            {[
              ["Süre", s.duration],
              ["Arkasındaki güç", s.power],
              ["Kimler için", s.fit[0]],
            ].map(([a, b]) => (
              <div key={a} className="rounded-2xl border border-sand/10 bg-sand/[0.04] p-4">
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-sand/45">{a}</p>
                <p className="mt-1 text-sm font-semibold">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-clay">Sorun</p>
            <p className="mt-5 font-display text-3xl italic leading-snug text-ink md:text-4xl">“{s.quote}”</p>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-ink/80">{s.problem}</p>
          </div>
        </div>
      </section>

      <section className="bg-sand py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-clay">Nasıl çözüyoruz</p>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight md:text-5xl">Adım adım yaklaşım</h2>
          <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {s.approach.map((a, i) => (
              <li key={a.title} className="reveal rounded-3xl border border-ink/10 bg-white p-7" style={{ transitionDelay: `${i * 90}ms` }}>
                <span className="font-display text-4xl text-clay">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 font-display text-xl font-medium">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{a.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-3">
          <div className="rounded-3xl bg-ink p-8 text-sand lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sea-2">Teslim ettiklerimiz</p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {s.deliverables.map((d) => (
                <li key={d} className="flex gap-3 border-b border-sand/10 pb-4">
                  <span className="text-clay">✦</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-ink/10 bg-white p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-clay">Ölçtüğümüz sonuçlar</p>
              <ul className="mt-5 space-y-3">
                {s.kpis.map((k) => (
                  <li key={k} className="flex items-center gap-3 font-medium">
                    <span className="h-2 w-2 rounded-full bg-sea" />
                    {k}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-ink/10 bg-white p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-clay">Kimler için</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.fit.map((f) => (
                  <span key={f} className="rounded-full bg-sand px-3.5 py-1.5 text-sm">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-5 md:px-8">
          <Link
            href={`/hizmetler/${next.slug}/`}
            className="group flex items-center justify-between gap-6 rounded-3xl border border-ink/10 bg-white p-8 transition hover:border-clay"
          >
            <span>
              <span className="text-xs uppercase tracking-[0.2em] text-muted">Sonraki hizmet</span>
              <span className="mt-2 block font-display text-2xl font-medium md:text-3xl">
                {next.no} · {next.title}
              </span>
            </span>
            <span className="text-2xl transition group-hover:translate-x-2">→</span>
          </Link>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
