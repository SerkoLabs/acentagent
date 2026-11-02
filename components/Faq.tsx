import { faqs } from "@/lib/content";
import SectionHead from "./SectionHead";

export default function Faq() {
  return (
    <section id="sss" className="bg-paper py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHead eyebrow="Sık sorulanlar" title={<>Aklınızdaki <span className="italic text-clay">sorular</span>.</>} />
        </div>
        <div className="divide-y divide-ink/10 border-y border-ink/10 lg:col-span-8">
          {faqs.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl font-medium [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/15 text-lg transition group-open:rotate-45 group-open:bg-ink group-open:text-sand">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
