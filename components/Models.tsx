import Link from "next/link";
import { models, reasons } from "@/lib/content";
import SectionHead from "./SectionHead";

export default function Models() {
  return (
    <section id="calisma-modeli" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          center
          eyebrow="Çalışma modeli"
          title={
            <>
              Siz kazandığınızda <span className="italic text-clay">biz</span> kazanırız.
            </>
          }
          text="İhtiyacınıza göre üç farklı şekilde çalışabiliriz. Hepsinde kapsam, ücret ve hedefler baştan yazılıdır."
        />
        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {models.map((m, i) => (
            <div
              key={m.name}
              className={`reveal relative flex flex-col rounded-3xl p-8 ${
                m.featured ? "bg-ink text-sand shadow-2xl shadow-ink/30 lg:-my-4 lg:py-12" : "border border-ink/10 bg-white"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span
                className={`self-start rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] ${
                  m.featured ? "bg-clay text-white" : "bg-sand text-ink/70"
                }`}
              >
                {m.tag}
              </span>
              <h3 className="mt-6 font-display text-3xl font-medium">{m.name}</h3>
              <p className={`mt-3 leading-relaxed ${m.featured ? "text-sand/70" : "text-muted"}`}>{m.text}</p>
              <ul className="mt-7 flex-1 space-y-3">
                {m.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm">
                    <span className={m.featured ? "text-clay" : "text-sea"}>✦</span>
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                href="/#on-analiz"
                className={`mt-8 inline-flex justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                  m.featured ? "bg-clay text-white hover:bg-clay-2" : "border border-ink/15 hover:bg-ink hover:text-sand"
                }`}
              >
                Görüşme planlayın
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-28 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHead
              eyebrow="Neden Meridaxis"
              title={
                <>
                  Danışman <span className="italic text-clay">ve</span> uygulayıcı.
                </>
              }
            />
          </div>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:col-span-8">
            {reasons.map((r, i) => (
              <div key={r.title} className="reveal bg-paper p-7" style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="font-display text-sm text-clay">0{i + 1}</span>
                <h3 className="mt-3 font-display text-xl font-medium">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
