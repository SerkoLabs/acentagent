import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-ink px-5 pt-[72px] text-center text-sand">
      <div>
        <p className="font-display text-7xl text-clay">404</p>
        <h1 className="mt-4 font-display text-3xl">Aradığınız sayfa bulunamadı.</h1>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-clay px-6 py-3 text-sm font-semibold text-white">
          Ana sayfaya dön
        </Link>
      </div>
    </section>
  );
}
