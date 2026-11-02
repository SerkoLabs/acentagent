"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const links = [
  { href: "/#hizmetler", label: "Hizmetler" },
  { href: "/#yaklasim", label: "Yaklaşım" },
  { href: "/#network", label: "Network" },
  { href: "/#calisma-modeli", label: "Çalışma Modeli" },
  { href: "/#sss", label: "SSS" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const light = !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "border-b border-ink/10 bg-paper/85 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" aria-label="Meridaxis Consulting ana sayfa">
          <Logo light={light} />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`text-sm font-medium transition ${light ? "text-sand/70 hover:text-sand" : "text-ink/70 hover:text-ink"}`}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/#on-analiz"
            className={`hidden rounded-full px-5 py-2.5 text-sm font-semibold transition sm:inline-flex ${light ? "bg-sand text-ink hover:bg-clay hover:text-white" : "bg-ink text-sand hover:bg-clay"}`}
          >
            Ücretsiz Ön Analiz
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border lg:hidden ${light ? "border-sand/25 text-sand" : "border-ink/15 text-ink"}`}
            aria-label="Menüyü aç/kapat"
            aria-expanded={open}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-ink/10 px-5 pb-6 lg:hidden">
          <nav className="flex flex-col py-2">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="border-b border-ink/5 py-3.5 text-base font-medium">
                {l.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/#on-analiz"
            onClick={() => setOpen(false)}
            className="mt-4 flex justify-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-sand"
          >
            Ücretsiz Ön Analiz
          </Link>
        </div>
      )}
    </header>
  );
}
