import Link from "next/link";
import { problems, services } from "@/lib/content";
import SectionHead from "./SectionHead";

export default function Problems() {
  return (
    <section className="relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          eyebrow="Tanıdık geliyor mu?"
          title={
            <>
              Her işletmenin bir <span className="italic text-clay">darboğazı</span> var.
            </>
          }
          text="Antalya'daki turizm işletmeleriyle konuştuğumuzda aynı cümleleri tekrar tekrar duyuyoruz. Sizinki hangisi?"
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => {
            const s = services.find((x) => x.no === p.service)!;
            return (
              <Link
                key={p.title}
                href={`/hizmetler/${s.slug}/`}
                className="reveal group relative overflow-hidden rounded-3xl border border-ink/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-clay/40 hover:shadow-xl hover:shadow-clay/10"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span className="font-display text-6xl leading-none text-ink/[0.07]">“</span>
                <h3 className="-mt-6 font-display text-2xl font-medium">{p.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{p.text}</p>
                <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-4 text-sm">
                  <span className="text-ink/50">Çözüm</span>
                  <span className="flex items-center gap-1.5 font-semibold text-ink transition group-hover:text-clay">
                    {s.no} · {s.title}
                    <span className="transition group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
