import Link from "next/link";
import Logo from "./Logo";
import { SITE } from "@/lib/site";
import { services } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-sand">
      <div className="dot-grid absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-20 md:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo light />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-sand/60">
              Antalya turizm işletmeleri için teşhis, strateji ve uygulama. Sorununuzu tespit ediyor, networkümüzle çözüyor,
              sonucu birlikte ölçüyoruz.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-sand/40">Aynı çatı altında</p>
            <ul className="mt-3 space-y-1.5 text-sm text-sand/80">
              {SITE.sisterBrands.map((b) => (
                <li key={b.name}>
                  <span className="font-semibold">{b.name}</span> <span className="text-sand/50">· {b.role}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-sand/40">Hizmetler</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/hizmetler/${s.slug}/`} className="text-sand/75 transition hover:text-sand">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-sand/40">İletişim</p>
            <ul className="mt-4 space-y-2.5 text-sm text-sand/75">
              <li>{SITE.city}</li>
              <li>
                <a href={`mailto:${SITE.email}`} className="transition hover:text-sand">
                  {SITE.email}
                </a>
              </li>
              <li>{SITE.phoneDisplay}</li>
            </ul>
            <Link
              href="/#on-analiz"
              className="mt-6 inline-flex rounded-full bg-clay px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-clay-2"
            >
              Ücretsiz Ön Analiz
            </Link>
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-sand/10 pt-6 text-xs text-sand/40 md:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. Tüm hakları saklıdır.</p>
          <p>Antalya&apos;dan, Antalya için.</p>
        </div>
      </div>
    </footer>
  );
}
