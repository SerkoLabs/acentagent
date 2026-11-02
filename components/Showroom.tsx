"use client";

import Link from "next/link";
import { useState } from "react";
import { services } from "@/lib/content";
import SectionHead from "./SectionHead";

export default function Showroom() {
  const [active, setActive] = useState(0);
  const s = services[active];

  return (
    <section id="hizmetler" className="relative overflow-hidden bg-sand py-24 md:py-32">
      <div className="dot-grid-dark absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHead
            eyebrow="Hizmet vitrini"
            title={
              <>
                Altı çözüm alanı, <span className="italic text-clay">tek</span> hedef: büyüme.
              </>
            }
            text="Her hizmet bir sorunla başlar ve ölçülebilir bir sonuçla biter. Bir alan seçin, nasıl çalıştığımızı görün."
          />
        </div>

        {/* Mobil sekmeler */}
        <div className="-mx-5 mt-12 flex snap-x gap-2 overflow-x-auto px-5 pb-2 lg:hidden">
          {services.map((x, i) => (
            <button
              key={x.slug}
              type="button"
              onClick={() => setActive(i)}
              className={`shrink-0 snap-start rounded-full border px-4 py-2.5 text-sm font-medium transition ${
                i === active ? "border-ink bg-ink text-sand" : "border-ink/15 bg-white text-ink/70"
              }`}
            >
              {x.no} · {x.title}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:mt-14 lg:grid-cols-12">
          {/* Masaüstü liste */}
          <div className="hidden lg:col-span-4 lg:block" role="tablist" aria-orientation="vertical">
            <div className="sticky top-28 space-y-2">
              {services.map((x, i) => (
                <button
                  key={x.slug}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  onClick={() => setActive(i)}
                  className={`group flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${
                    i === active
                      ? "border-ink bg-ink text-sand shadow-xl shadow-ink/20"
                      : "border-ink/10 bg-white/70 text-ink hover:border-ink/30 hover:bg-white"
                  }`}
                >
                  <span className={`font-display text-2xl ${i === active ? "text-clay" : "text-ink/25"}`}>{x.no}</span>
                  <span className="flex-1">
                    <span className={`block text-[0.65rem] uppercase tracking-[0.2em] ${i === active ? "text-sand/50" : "text-muted"}`}>
                      {x.kicker}
                    </span>
                    <span className="mt-0.5 block font-semibold">{x.title}</span>
                  </span>
                  <span className={`transition ${i === active ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`}>→</span>
                </button>
              ))}
            </div>
          </div>

          {/* Detay paneli */}
          <div className="lg:col-span-8">
            <article key={s.slug} className="animate-[fadeIn_.5s_ease] overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-xl shadow-ink/5">
              <div className="relative overflow-hidden bg-ink p-8 text-sand md:p-10">
                <div className="dot-grid absolute inset-0 opacity-40" />
                <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-clay/30 blur-3xl" />
                <div className="relative">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-sand/55">
                    <span className="font-display text-base text-clay">{s.no}</span>
                    <span className="h-px w-8 bg-sand/25" />
                    {s.kicker}
                  </div>
                  <h3 className="mt-4 font-display text-3xl font-medium md:text-4xl">{s.title}</h3>
                  <p className="mt-4 max-w-2xl text-sand/70">{s.short}</p>
                  <p className="mt-6 border-l-2 border-clay pl-4 font-display text-lg italic text-sand/90">“{s.quote}”</p>
                </div>
              </div>

              <div className="p-8 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">Sorun</p>
                <p className="mt-2 text-[1.02rem] leading-relaxed text-ink/80">{s.problem}</p>

                <p className="mt-9 text-xs font-semibold uppercase tracking-[0.2em] text-clay">Nasıl çözüyoruz</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {s.approach.map((a, i) => (
                    <div key={a.title} className="rounded-2xl border border-ink/10 bg-paper p-5">
                      <p className="flex items-center gap-2 font-semibold">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-[0.7rem] text-sand">{i + 1}</span>
                        {a.title}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{a.text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-9 grid gap-8 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">Teslim ettiklerimiz</p>
                    <ul className="mt-4 space-y-2.5">
                      {s.deliverables.map((d) => (
                        <li key={d} className="flex gap-3 text-sm text-ink/80">
                          <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 text-sea" fill="currentColor">
                            <path d="M7.6 13.6 4 10l-1.4 1.4 5 5 10-10L16.2 5z" />
                          </svg>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">Ölçtüğümüz sonuçlar</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {s.kpis.map((k) => (
                        <span key={k} className="rounded-full bg-sea/10 px-3.5 py-1.5 text-sm font-medium text-sea">
                          {k}
                        </span>
                      ))}
                    </div>
                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-clay">Kimler için</p>
                    <p className="mt-2 text-sm text-ink/75">{s.fit.join(" · ")}</p>
                  </div>
                </div>

                <div className="mt-9 grid gap-3 rounded-2xl bg-sand p-5 sm:grid-cols-3 sm:items-center">
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.2em] text-muted">Süre</p>
                    <p className="mt-1 text-sm font-semibold">{s.duration}</p>
                  </div>
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.2em] text-muted">Arkasındaki güç</p>
                    <p className="mt-1 text-sm font-semibold">{s.power}</p>
                  </div>
                  <Link
                    href={`/hizmetler/${s.slug}/`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-sand transition hover:bg-clay"
                  >
                    Detaylı incele →
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
