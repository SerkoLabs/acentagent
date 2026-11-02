import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

const inter = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-inter", display: "swap" });
const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "opsz"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Antalya turizm işletmeleri için teşhis, strateji ve uygulama. Yeni pazarlar, sezon dışı doluluk, gelir yönetimi, dijital görünürlük ve misafir deneyimi.",
  openGraph: {
    title: SITE.name,
    description: "Turizm işletmenizin sorununu teşhis ediyor, networkümüzle çözüyor, sonucu ölçüyoruz.",
    locale: "tr_TR",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#0b1624" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
