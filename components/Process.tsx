import { process } from "@/lib/content";
import SectionHead from "./SectionHead";

export default function Process() {
  return (
    <section id="yaklasim" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          eyebrow="Yaklaşımımız"
          title={
            <>
              Tavsiye değil, <span className="italic text-clay">uygulama</span>.
            </>
          }
          text="Her iş birliği aynı disiplinle ilerler. Önce doğru teşhis, sonra net hedef, sonra sahada uygulama ve her ay ölçüm."
        />
        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-clay via-ink/20 to-sea lg:block" />
          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {process.map((p, i) => (
              <li key={p.no} className="reveal relative" style={{ transitionDelay: `${i * 120}ms` }}>
                <div className="flex items-center gap-4 lg:block">
                  <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-ink/15 bg-paper font-display text-xl text-clay shadow-sm">
                    {p.no}
                  </span>
                  <span className="rounded-full bg-sand px-3 py-1 text-xs font-medium text-ink/70 lg:mt-6 lg:inline-block">{p.time}</span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-medium">{p.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
