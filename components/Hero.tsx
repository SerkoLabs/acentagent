import Link from "next/link";
import { businessTypes } from "@/lib/content";

const months = ["Kas", "Ara", "Oca", "Şub", "Mar", "Nis"];
const before = [28, 22, 18, 20, 27, 41];
const after = [47, 39, 34, 38, 49, 66];

function ScenarioCard() {
  return (
    <div className="reveal relative rounded-3xl border border-sand/10 bg-ink-2/80 p-6 shadow-2xl shadow-black/40 backdrop-blur md:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-sea-2">Örnek senaryo</p>
          <p className="mt-1.5 font-display text-xl text-sand">Sezon dışı doluluk</p>
          <p className="text-xs text-sand/50">120 odalı otel · Kasım – Nisan</p>
        </div>
        <div className="rounded-xl bg-clay/15 px-3 py-2 text-right">
          <p className="font-display text-2xl font-semibold text-clay">+%75</p>
          <p className="text-[0.6rem] uppercase tracking-wider text-sand/50">hedef artış</p>
        </div>
      </div>

      <div className="mt-7 flex h-44 items-end gap-3">
        {months.map((m, i) => (
          <div key={m} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
            <div className="flex h-full w-full items-end justify-center gap-1">
              <div
                className="bar w-1/2 rounded-t-md bg-sand/20"
                style={{ height: `${before[i]}%`, animationDelay: `${i * 70}ms` }}
              />
              <div
                className="bar w-1/2 rounded-t-md bg-gradient-to-t from-clay to-gold"
                style={{ height: `${after[i]}%`, animationDelay: `${300 + i * 70}ms` }}
              />
            </div>
            <span className="text-[0.65rem] text-sand/50">{m}</span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-sand/10 pt-4 text-xs text-sand/60">
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-sm bg-sand/25" /> Mevcut durum
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-sm bg-clay" /> Yeni pazarlar + kış ürünü ile hedef
        </span>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2">
        {[
          ["4 pazar", "LT · PL · RO · DE"],
          ["Kış ürünü", "Golf · Wellness"],
          ["Acente", "Kontenjan kontratı"],
        ].map(([a, b]) => (
          <div key={b} className="rounded-xl bg-ink/60 px-3 py-2.5">
            <p className="text-sm font-semibold text-sand">{a}</p>
            <p className="text-[0.65rem] text-sand/45">{b}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[0.65rem] leading-relaxed text-sand/35">
        Temsili bir senaryodur, gerçek müşteri verisi değildir. Gerçek hedefler teşhis aşamasında işletmenize özel belirlenir.
      </p>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="grain relative overflow-hidden bg-ink pt-[72px] text-sand">
      <div className="dot-grid absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-sea/25 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-52 -left-32 h-[480px] w-[480px] rounded-full bg-clay/25 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 md:px-8 md:pt-24 lg:grid-cols-12 lg:pb-28">
        <div className="lg:col-span-7">
          <p className="reveal inline-flex items-center gap-2 rounded-full border border-sand/15 bg-sand/5 px-4 py-1.5 text-xs font-medium text-sand/80">
            <span className="h-1.5 w-1.5 rounded-full bg-sea-2" />
            Antalya turizm işletmeleri için büyüme danışmanlığı
          </p>
          <h1 className="reveal mt-7 font-display text-[2.6rem] font-medium leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.4rem]">
            Sorunu teşhis ederiz.
            <br />
            <span className="italic text-clay">Networkümüzle</span> çözeriz.
            <br />
            Sonucu ölçeriz.
          </h1>
          <p className="reveal mt-7 max-w-xl text-lg leading-relaxed text-sand/70">
            Meridaxis, otel ve turizm işletmelerinin doluluk, kârlılık ve görünürlük sorunlarına uçtan uca çözüm getirir.
            Avrupa&apos;daki partner acentelerimiz, kreatif ekibimiz ve yerel ağımızla rapor bırakıp gitmeyiz; sonucu birlikte
            alırız.
          </p>
          <div className="reveal mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#on-analiz"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-clay px-7 py-4 text-sm font-semibold text-white transition hover:bg-clay-2"
            >
              İşletmenizi 2 dakikada analiz edin
              <span className="transition group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/#hizmetler"
              className="inline-flex items-center justify-center rounded-full border border-sand/20 px-7 py-4 text-sm font-semibold text-sand transition hover:bg-sand/10"
            >
              Hizmetleri keşfedin
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5">
          <ScenarioCard />
        </div>
      </div>

      <div className="relative border-t border-sand/10 bg-ink/60 py-5">
        <div className="flex overflow-hidden">
          <div className="marquee flex shrink-0">
            {[...businessTypes, ...businessTypes, ...businessTypes, ...businessTypes].map((t, i) => (
              <span key={i} aria-hidden={i >= businessTypes.length} className="flex items-center whitespace-nowrap text-sm text-sand/50">
                <span className="px-6">{t}</span>
                <span className="text-clay">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
