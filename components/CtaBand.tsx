import Link from "next/link";

export default function CtaBand() {
  return (
    <section className="bg-paper pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grain reveal relative overflow-hidden rounded-[2rem] bg-clay px-8 py-16 text-white md:px-16 md:py-20">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gold/40 blur-3xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-12">
            <h2 className="font-display text-4xl font-medium leading-[1.08] md:text-5xl lg:col-span-8">
              Bir sonraki sezonu şansa bırakmayın.
            </h2>
            <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
              <Link
                href="/#on-analiz"
                className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-4 text-sm font-semibold text-sand transition hover:bg-ink-3"
              >
                Ücretsiz ön analiz →
              </Link>
              <p className="text-sm text-white/75">48 saat içinde size dönüyoruz.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
