import { markets } from "@/lib/content";
import { SITE } from "@/lib/site";
import SectionHead from "./SectionHead";

// Basit eş-dikdörtgen izdüşüm: boylam 6..38, enlem 33..58
const W = 700;
const H = 520;
const proj = (lon: number, lat: number) => ({
  x: ((lon - 6) / 32) * W,
  y: ((58 - lat) / 25) * H,
});
const antalya = proj(30.71, 36.9);

export default function Network() {
  return (
    <section id="network" className="grain relative overflow-hidden bg-ink py-24 text-sand md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sea/15 blur-[140px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHead
            light
            eyebrow="Network"
            title={
              <>
                Avrupa&apos;dan Antalya&apos;ya <span className="italic text-clay">doğrudan</span> hat.
              </>
            }
            text="Litvanya, Polonya, Romanya ve Almanya'daki partner acentelerimizle düzenli iletişim halindeyiz. İşletmenizi, ürününüze en uygun acenteyle buluşturuyoruz."
          />
          <div className="reveal mt-10 grid grid-cols-2 gap-3">
            {markets.map((m) => (
              <div key={m.code} className="rounded-2xl border border-sand/10 bg-sand/[0.04] p-4">
                <p className="font-display text-2xl text-clay">{m.code}</p>
                <p className="mt-1 font-semibold">{m.name}</p>
                <p className="text-xs text-sand/45">Partner acenteler</p>
              </div>
            ))}
          </div>
          <div className="reveal mt-8 rounded-2xl border border-sand/10 bg-sand/[0.04] p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-sea-2">Antalya&apos;daki gücümüz</p>
            <ul className="mt-3 space-y-2 text-sm">
              {SITE.sisterBrands.map((b) => (
                <li key={b.name}>
                  <span className="font-semibold">{b.name}</span>
                  <span className="text-sand/55"> · {b.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="reveal lg:col-span-7">
          <div className="relative overflow-hidden rounded-3xl border border-sand/10 bg-ink-2/60 p-2">
            <div className="dot-grid absolute inset-0 opacity-60" />
            <svg viewBox={`0 0 ${W} ${H}`} className="relative h-auto w-full" role="img" aria-label="Partner pazarlardan Antalya'ya bağlantı haritası">
              <defs>
                <linearGradient id="route" x1="0" x2="1">
                  <stop offset="0" stopColor="#5fc4c0" />
                  <stop offset="1" stopColor="#c4623a" />
                </linearGradient>
                <radialGradient id="glow">
                  <stop offset="0" stopColor="#c4623a" stopOpacity="0.6" />
                  <stop offset="1" stopColor="#c4623a" stopOpacity="0" />
                </radialGradient>
              </defs>
              {/* enlem/boylam çizgileri */}
              {[40, 45, 50, 55].map((lat) => (
                <line key={lat} x1="0" x2={W} y1={proj(6, lat).y} y2={proj(6, lat).y} stroke="#f5f0e8" strokeOpacity="0.06" strokeDasharray="2 6" />
              ))}
              {[10, 15, 20, 25, 30, 35].map((lon) => (
                <line key={lon} y1="0" y2={H} x1={proj(lon, 50).x} x2={proj(lon, 50).x} stroke="#f5f0e8" strokeOpacity="0.06" strokeDasharray="2 6" />
              ))}
              {markets.map((m, i) => {
                const p = proj(m.lon, m.lat);
                const mx = (p.x + antalya.x) / 2 + 70;
                const my = Math.min(p.y, antalya.y) + 10;
                return (
                  <path
                    key={m.code}
                    className="route"
                    style={{ animationDelay: `${i * 250}ms` }}
                    d={`M${p.x},${p.y} Q${mx},${my} ${antalya.x},${antalya.y}`}
                    fill="none"
                    stroke="url(#route)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                );
              })}
              {markets.map((m) => {
                const p = proj(m.lon, m.lat);
                return (
                  <g key={m.code}>
                    <circle cx={p.x} cy={p.y} r="4" fill="#5fc4c0" className="pulse" />
                    <circle cx={p.x} cy={p.y} r="5" fill="#5fc4c0" />
                    <text x={p.x + 12} y={p.y - 8} fill="#f5f0e8" fontSize="15" fontWeight="600">
                      {m.name}
                    </text>
                    <text x={p.x + 12} y={p.y + 10} fill="#f5f0e8" fillOpacity="0.45" fontSize="12">
                      {m.city}
                    </text>
                  </g>
                );
              })}
              <circle cx={antalya.x} cy={antalya.y} r="60" fill="url(#glow)" />
              <circle cx={antalya.x} cy={antalya.y} r="9" fill="#c4623a" />
              <circle cx={antalya.x} cy={antalya.y} r="16" fill="none" stroke="#c4623a" strokeOpacity="0.5" />
              <text x={antalya.x - 20} y={antalya.y + 40} fill="#f5f0e8" fontSize="18" fontWeight="700" textAnchor="middle">
                Antalya
              </text>
              <text x={antalya.x - 20} y={antalya.y + 58} fill="#f5f0e8" fillOpacity="0.5" fontSize="12" textAnchor="middle">
                İşletmeniz
              </text>
            </svg>
          </div>
          <p className="mt-4 text-center text-xs text-sand/40">Partner ağımız her sezon genişliyor.</p>
        </div>
      </div>
    </section>
  );
}
