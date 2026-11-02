"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { businessTypes, problems, services } from "@/lib/content";
import { SITE } from "@/lib/site";

const seasonLevels = [
  { label: "Kışın kapalıyız", value: 0 },
  { label: "%30'un altı", value: 20 },
  { label: "%30 – %60", value: 45 },
  { label: "%60'ın üstü", value: 75 },
];

function recommend(type: string, picked: string[], season: number | null) {
  const score: Record<string, number> = {};
  services.forEach((s) => (score[s.no] = 0));
  picked.forEach((no, i) => (score[no] += 10 - i));
  if (season !== null && season < 40) {
    score["02"] += 6;
    score["01"] += 4;
  }
  if (type === "Yeni Proje / Yatırım") score["06"] += 12;
  if (type === "Restoran & Beach Club") {
    score["04"] += 4;
    score["05"] += 3;
  }
  if (type === "Otel / Resort" || type === "Butik Otel" || type === "Apart & Villa") score["03"] += 2;
  if (type === "Tur, Transfer & Aktivite") score["01"] += 3;
  return services
    .map((s) => ({ s, v: score[s.no] }))
    .filter((x) => x.v > 0)
    .sort((a, b) => b.v - a.v)
    .slice(0, 3)
    .map((x) => x.s);
}

export default function Diagnostic() {
  const [step, setStep] = useState(0);
  const [type, setType] = useState("");
  const [picked, setPicked] = useState<string[]>([]);
  const [season, setSeason] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", note: "" });

  const recs = useMemo(() => recommend(type, picked, season), [type, picked, season]);

  const toggle = (no: string) =>
    setPicked((p) => (p.includes(no) ? p.filter((x) => x !== no) : p.length >= 3 ? p : [...p, no]));

  const summary = [
    `İşletme türü: ${type || "-"}`,
    `Öncelikli sorunlar: ${picked.map((no) => problems.find((p) => p.service === no)?.title).join(", ") || "-"}`,
    `Sezon dışı doluluk: ${seasonLevels.find((x) => x.value === season)?.label ?? "-"}`,
    `Önerilen alanlar: ${recs.map((r) => r.title).join(", ") || "-"}`,
  ].join("\n");

  const message = `Merhaba Meridaxis,\n\n${summary}\n\nAd Soyad: ${form.name}\nİşletme: ${form.company}\nTelefon: ${form.phone}\nE-posta: ${form.email}\n\n${form.note}`;
  const mailHref = `mailto:${SITE.email}?subject=${encodeURIComponent(`Ön analiz talebi – ${form.company || "İşletme"}`)}&body=${encodeURIComponent(message)}`;
  const waHref = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;

  const steps = ["İşletme", "Sorunlar", "Sezon", "Sonuç"];
  const canNext = (step === 0 && type) || (step === 1 && picked.length > 0) || (step === 2 && season !== null);

  return (
    <section id="on-analiz" className="relative overflow-hidden bg-sand py-24 md:py-32">
      <div className="dot-grid-dark absolute inset-0" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="reveal lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-clay">Ücretsiz ön analiz</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.08] tracking-tight md:text-5xl">
              İşletmeniz için <span className="italic text-clay">doğru</span> başlangıç noktası.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Üç soruyu yanıtlayın, size en uygun çözüm alanlarını görün. Bilgilerinizi bırakırsanız 48 saat içinde ücretsiz bir ön
              görüşme için sizi arayalım.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-ink/75">
              {["2 dakika sürer", "Hiçbir yükümlülük doğurmaz", "Bilgileriniz gizli tutulur"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sea/15 text-[0.65rem] text-sea">✓</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="reveal overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-2xl shadow-ink/10">
            <div className="flex border-b border-ink/10">
              {steps.map((label, i) => (
                <div
                  key={label}
                  className={`flex-1 px-3 py-4 text-center text-xs font-semibold uppercase tracking-[0.15em] transition sm:text-sm sm:normal-case sm:tracking-normal ${
                    i === step ? "bg-ink text-sand" : i < step ? "bg-sand text-ink" : "text-ink/35"
                  }`}
                >
                  <span className="hidden sm:inline">{i + 1}. </span>
                  {label}
                </div>
              ))}
            </div>

            <div className="p-6 md:p-10">
              {step === 0 && (
                <div key="s0" className="animate-[fadeIn_.4s_ease]">
                  <h3 className="font-display text-2xl font-medium">İşletmeniz hangi türde?</h3>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {businessTypes.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setType(t)}
                        className={`rounded-2xl border p-4 text-left font-medium transition ${
                          type === t ? "border-ink bg-ink text-sand" : "border-ink/10 hover:border-ink/40"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 1 && (
                <div key="s1" className="animate-[fadeIn_.4s_ease]">
                  <h3 className="font-display text-2xl font-medium">En çok hangileri sizi zorluyor?</h3>
                  <p className="mt-1 text-sm text-muted">En fazla 3 tane seçin. Seçim sırası önceliği belirler.</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {problems.map((p) => {
                      const idx = picked.indexOf(p.service);
                      const on = idx >= 0;
                      return (
                        <button
                          key={p.title}
                          type="button"
                          onClick={() => toggle(p.service)}
                          className={`relative rounded-2xl border p-4 text-left transition ${
                            on ? "border-clay bg-clay/[0.06]" : "border-ink/10 hover:border-ink/40"
                          } ${!on && picked.length >= 3 ? "opacity-40" : ""}`}
                        >
                          {on && (
                            <span className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-clay text-xs font-bold text-white">
                              {idx + 1}
                            </span>
                          )}
                          <span className="block pr-8 font-semibold">{p.title}</span>
                          <span className="mt-1 block text-sm text-muted">{p.text}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div key="s2" className="animate-[fadeIn_.4s_ease]">
                  <h3 className="font-display text-2xl font-medium">Kasım – Nisan arası ortalama doluluğunuz?</h3>
                  <p className="mt-1 text-sm text-muted">Restoran ve aktivite işletmeleri için yoğunluğunuzu düşünün.</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {seasonLevels.map((l) => (
                      <button
                        key={l.label}
                        type="button"
                        onClick={() => setSeason(l.value)}
                        className={`rounded-2xl border p-5 text-left font-medium transition ${
                          season === l.value ? "border-ink bg-ink text-sand" : "border-ink/10 hover:border-ink/40"
                        }`}
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div key="s3" className="animate-[fadeIn_.4s_ease]">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">Önerimiz</p>
                  <h3 className="mt-2 font-display text-2xl font-medium">Bu alanlardan başlamanızı öneriyoruz</h3>
                  <ol className="mt-6 space-y-3">
                    {recs.map((r, i) => (
                      <li key={r.slug}>
                        <Link
                          href={`/hizmetler/${r.slug}/`}
                          className={`group flex items-center gap-4 rounded-2xl border p-4 transition hover:border-clay ${
                            i === 0 ? "border-ink bg-ink text-sand" : "border-ink/10"
                          }`}
                        >
                          <span className={`font-display text-2xl ${i === 0 ? "text-clay" : "text-ink/30"}`}>{r.no}</span>
                          <span className="flex-1">
                            <span className="block font-semibold">{r.title}</span>
                            <span className={`block text-sm ${i === 0 ? "text-sand/60" : "text-muted"}`}>{r.short}</span>
                          </span>
                          <span className="transition group-hover:translate-x-1">→</span>
                        </Link>
                      </li>
                    ))}
                  </ol>
                  <p className="mt-5 rounded-2xl bg-sand p-4 text-sm text-ink/75">
                    <strong>Önerilen başlangıç:</strong>{" "}
                    {recs.length > 1
                      ? "Birden fazla alan öne çıkıyor. 2 haftalık Teşhis ile öncelikleri netleştirip Büyüme Ortaklığı modeline geçmenizi öneriyoruz."
                      : "Odaklı bir sorun var. Doğrudan bu alanda bir uygulama projesiyle başlayabiliriz."}
                  </p>

                  <form
                    className="mt-8 border-t border-ink/10 pt-8"
                    onSubmit={(e) => {
                      e.preventDefault();
                      window.location.href = mailHref;
                    }}
                  >
                    <h4 className="font-display text-xl font-medium">Ücretsiz ön görüşme talep edin</h4>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {(
                        [
                          ["name", "Ad Soyad", "text", true],
                          ["company", "İşletme adı", "text", true],
                          ["phone", "Telefon", "tel", true],
                          ["email", "E-posta", "email", false],
                        ] as const
                      ).map(([k, label, t, req]) => (
                        <label key={k} className="block">
                          <span className="text-xs font-medium text-ink/60">{label}</span>
                          <input
                            type={t}
                            required={req}
                            value={form[k]}
                            onChange={(e) => setForm({ ...form, [k]: e.target.value })}
                            className="mt-1 w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 outline-none transition focus:border-ink"
                          />
                        </label>
                      ))}
                      <label className="block sm:col-span-2">
                        <span className="text-xs font-medium text-ink/60">Eklemek istedikleriniz (opsiyonel)</span>
                        <textarea
                          rows={3}
                          value={form.note}
                          onChange={(e) => setForm({ ...form, note: e.target.value })}
                          className="mt-1 w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 outline-none transition focus:border-ink"
                        />
                      </label>
                    </div>
                    <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                      <button
                        type="submit"
                        className="inline-flex flex-1 items-center justify-center rounded-full bg-clay px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-clay-2"
                      >
                        E-posta ile gönder
                      </button>
                      <a
                        href={waHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition hover:brightness-95"
                      >
                        WhatsApp ile gönder
                      </a>
                    </div>
                  </form>
                </div>
              )}

              <div className="mt-8 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  className={`text-sm font-semibold text-ink/60 transition hover:text-ink ${step === 0 ? "invisible" : ""}`}
                >
                  ← Geri
                </button>
                {step < 3 ? (
                  <button
                    type="button"
                    disabled={!canNext}
                    onClick={() => setStep((s) => s + 1)}
                    className="rounded-full bg-ink px-7 py-3 text-sm font-semibold text-sand transition hover:bg-clay disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-ink"
                  >
                    {step === 2 ? "Sonucu gör" : "Devam"} →
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setStep(0);
                      setType("");
                      setPicked([]);
                      setSeason(null);
                    }}
                    className="text-sm font-semibold text-ink/60 hover:text-ink"
                  >
                    Baştan başla
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
