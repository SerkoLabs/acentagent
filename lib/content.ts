export type Service = {
  slug: string;
  no: string;
  kicker: string;
  title: string;
  short: string;
  problem: string;
  quote: string;
  approach: { title: string; text: string }[];
  deliverables: string[];
  kpis: string[];
  fit: string[];
  duration: string;
  power: string;
};

export const services: Service[] = [
  {
    slug: "yeni-pazar-ve-acente-agi",
    no: "01",
    kicker: "Uluslararası Satış",
    title: "Yeni Pazar & Acente Ağı",
    short:
      "Avrupa'daki partner acentelerimizle sizi doğrudan eşleştiriyor, yeni pazarlardan düzenli misafir akışı kuruyoruz.",
    problem:
      "Misafirlerinizin büyük kısmı tek bir pazardan ya da tek bir tur operatöründen geliyor. O kanal sarsıldığında doluluğunuz da sarsılıyor; pazarlık gücünüz her yıl biraz daha azalıyor.",
    quote: "Bütün yumurtalar tek bir tur operatörünün sepetinde.",
    approach: [
      {
        title: "Pazar uyum analizi",
        text: "İşletmenizin ürününü, fiyat seviyesini ve sezonunu Litvanya, Polonya, Romanya ve Almanya pazarlarının talebiyle karşılaştırıyoruz.",
      },
      {
        title: "Acente eşleştirme",
        text: "Ürününüze en uygun partner acentelerle tanıştırıyor, ilk görüşmeleri biz yönetiyoruz.",
      },
      {
        title: "Kontrat & fiyat kurgusu",
        text: "Net fiyat, kontenjan, release, iptal ve ödeme koşullarını iki taraf için de sürdürülebilir şekilde hazırlıyoruz.",
      },
      {
        title: "Satış materyali",
        text: "Acentelerin kendi dillerinde kullanabileceği foto, video ve tanıtım dosyalarını hazırlıyoruz.",
      },
    ],
    deliverables: [
      "Pazar uyum raporu",
      "Hedef acente listesi ve tanışma toplantıları",
      "Pazara özel paket ve fiyat tablosu",
      "Kontrat taslağı (kontenjan, release, iptal koşulları)",
      "Çok dilli satış kiti (LT · PL · RO · DE · EN)",
      "İlk sezon satış takibi",
    ],
    kpis: ["Yeni pazarlardan gelen oda-gece", "Tek pazar bağımlılık oranı", "Acente başına üretim"],
    fit: ["Resort & şehir otelleri", "Butik oteller", "Tur & transfer firmaları", "Aktivite işletmeleri"],
    duration: "İlk eşleştirmeler 4–6 hafta içinde",
    power: "Partner acente ağımız",
  },
  {
    slug: "sezon-disi-doluluk",
    no: "02",
    kicker: "Kasım – Nisan",
    title: "Sezon Dışı Doluluk Programı",
    short:
      "Kış aylarını zarar dönemi olmaktan çıkarıyoruz: doğru segment, doğru ürün, doğru acente.",
    problem:
      "Yazın dolu, kışın ya kapalı ya da sabit giderlerini zor karşılıyorsunuz. Personeli tutmak zorlaşıyor, her bahar yeniden başlamak pahalıya mal oluyor.",
    quote: "Kışın açık kalmak mı, kapatmak mı daha az zarar?",
    approach: [
      {
        title: "Segment seçimi",
        text: "Kış güneşi, golf, spor kampları, emekli grupları, wellness ve uzun konaklama segmentlerinden işletmenize uyanları belirliyoruz.",
      },
      {
        title: "Ürün tasarımı",
        text: "Uzun konaklama fiyatı, aktivite ve transfer içeren paketler, grup koşulları ile satılabilir bir kış ürünü kuruyoruz.",
      },
      {
        title: "Kanal bağlantısı",
        text: "Bu segmentlere satış yapan Avrupalı acenteler ve grup organizatörleriyle sizi bağlıyoruz.",
      },
      {
        title: "Görünürlük",
        text: "Hedef pazarlara yönelik dönemsel kampanya ve dijital reklamlarla talebi destekliyoruz.",
      },
    ],
    deliverables: [
      "Sezon dışı segment analizi",
      "Kış ürün ve paket kurgusu",
      "Uzun konaklama ve grup fiyat politikası",
      "Segment acenteleriyle bağlantılar",
      "Dönemsel kampanya planı",
    ],
    kpis: ["Kasım–Nisan doluluk oranı", "Açık kalınan ay sayısı", "Sabit gider karşılama oranı"],
    fit: ["Yıl boyu açık kalmak isteyen oteller", "Spor & kamp tesisleri", "Wellness & termal tesisler"],
    duration: "Sezon öncesi 8–12 haftalık hazırlık",
    power: "Acente ağı + kampanya ekibi",
  },
  {
    slug: "gelir-ve-fiyat-yonetimi",
    no: "03",
    kicker: "Kârlılık",
    title: "Gelir & Fiyat Yönetimi",
    short:
      "Doluluğu kâra çeviriyoruz: kanal maliyetleri, dinamik fiyat ve doğru satış kuralları.",
    problem:
      "Oteliniz dolu ama sezon sonunda kasa beklediğiniz gibi değil. Fiyatlar sezon başında belirlenip unutuluyor, komisyonlar ve indirimler kârı sessizce eritiyor.",
    quote: "Doluyuz ama neden kâr etmiyoruz?",
    approach: [
      {
        title: "Kanal maliyet analizi",
        text: "Her satış kanalının (OTA, tur operatörü, acente, direkt) size gerçekte ne kadar net gelir bıraktığını hesaplıyoruz.",
      },
      {
        title: "Fiyat takvimi",
        text: "Talebe göre değişen dinamik fiyat takvimi, erken rezervasyon ve minimum konaklama kuralları kuruyoruz.",
      },
      {
        title: "Rakip takibi",
        text: "Rakip set belirleyip fiyat ve puan konumunuzu düzenli izliyoruz.",
      },
      {
        title: "Aylık gelir raporu",
        text: "ADR, RevPAR ve kanal mix'ini anlaşılır bir raporla her ay önünüze koyuyoruz.",
      },
    ],
    deliverables: [
      "Kanal başına net gelir analizi",
      "Dinamik fiyat takvimi",
      "Satış kuralları (min. konaklama, erken rezervasyon, iptal)",
      "Rakip set ve fiyat konum raporu",
      "Aylık gelir paneli",
    ],
    kpis: ["ADR (ortalama oda fiyatı)", "RevPAR", "Kanal başına net gelir", "Direkt satış payı"],
    fit: ["Orta ve büyük oteller", "Yüksek OTA bağımlılığı olan işletmeler", "Apart & villa işletmeleri"],
    duration: "İlk analiz 2–3 hafta, sonrasında aylık takip",
    power: "Analiz ekibimiz",
  },
  {
    slug: "dijital-gorunurluk-ve-direkt-satis",
    no: "04",
    kicker: "Dijital",
    title: "Dijital Görünürlük & Direkt Satış",
    short:
      "Web siteniz, Google varlığınız ve reklamlarınız komisyonsuz rezervasyon getirmeye başlasın.",
    problem:
      "Web siteniz var ama rezervasyon getirmiyor. Misafirleriniz sizi OTA'larda buluyor ve her satıştan ciddi bir komisyon ödüyorsunuz.",
    quote: "Web sitemiz bir vitrin, ama kimse içeri girmiyor.",
    approach: [
      {
        title: "Dijital teşhis",
        text: "Web sitesi, rezervasyon motoru, Google Otel ve Haritalar görünümü ile reklam hesaplarınızı inceliyoruz.",
      },
      {
        title: "Çok dilli içerik",
        text: "Hedef pazarların diline uygun sayfalar ve içerikler hazırlıyoruz: Litvanca, Lehçe, Romence, Almanca, İngilizce.",
      },
      {
        title: "Performans reklamları",
        text: "Google ve Meta reklamlarını doğrudan rezervasyona bağlı hedeflerle yönetiyoruz.",
      },
      {
        title: "Yerel görünürlük",
        text: "Find Antalya üzerinden şehre gelen ziyaretçilere doğrudan ulaşıyorsunuz.",
      },
    ],
    deliverables: [
      "Dijital teşhis raporu",
      "Web sitesi ve rezervasyon akışı iyileştirmeleri",
      "Google Otel & Haritalar optimizasyonu",
      "Çok dilli içerik ve sosyal medya planı",
      "Performans reklam yönetimi ve aylık rapor",
    ],
    kpis: ["Direkt rezervasyon sayısı", "Web dönüşüm oranı", "Reklam getirisi (ROAS)"],
    fit: ["Tüm konaklama işletmeleri", "Restoran & beach club'lar", "Tur & aktivite firmaları"],
    duration: "İlk iyileştirmeler 3–4 hafta içinde",
    power: "Antalya Reklam Ajansı + Find Antalya",
  },
  {
    slug: "misafir-deneyimi-ve-itibar",
    no: "05",
    kicker: "Deneyim",
    title: "Misafir Deneyimi & Online İtibar",
    short:
      "Puanınız fiyatınızı belirliyor. Deneyimi iyileştiriyor, itibarı yönetiyoruz.",
    problem:
      "Yorum puanınız rakiplerinizin gerisinde ve bu, fiyatınızı aşağı çekiyor. Aynı şikâyetler tekrar ediyor ama sahada değişen bir şey yok.",
    quote: "Aynı şikâyeti her hafta yeniden okuyoruz.",
    approach: [
      {
        title: "Yorum analizi",
        text: "Tüm platformlardaki yorumları tarayıp tekrar eden sorunları ve güçlü yanlarınızı çıkarıyoruz.",
      },
      {
        title: "Gizli misafir",
        text: "Rezervasyondan çıkışa kadar tüm deneyimi bir misafir gözüyle denetliyoruz.",
      },
      {
        title: "Ekip eğitimi",
        text: "Ön büro, servis ve misafir ilişkileri ekipleri için uygulamalı eğitimler düzenliyoruz.",
      },
      {
        title: "Cevap stratejisi",
        text: "Yorumlara nasıl ve hangi dilde cevap verileceğini standart hale getiriyoruz.",
      },
    ],
    deliverables: [
      "Yorum ve itibar analizi",
      "Misafir yolculuğu haritası",
      "Gizli misafir raporu",
      "Ekip eğitim programı",
      "Standart operasyon prosedürleri",
    ],
    kpis: ["Ortalama yorum puanı", "Yorum sayısı", "Tekrar gelen misafir oranı"],
    fit: ["Oteller", "Restoranlar", "Spa & wellness merkezleri", "Sağlık turizmi işletmeleri"],
    duration: "Teşhis 2 hafta, eğitim programı 1–3 ay",
    power: "Operasyon uzmanlarımız",
  },
  {
    slug: "acilis-ve-yeniden-konumlandirma",
    no: "06",
    kicker: "Yeni Projeler",
    title: "Açılış & Yeniden Konumlandırma",
    short:
      "Yeni bir işletmeyi doğru başlatıyor ya da yorulmuş bir konsepti yeniden konumlandırıyoruz.",
    problem:
      "Yeni bir işletme açıyorsunuz ve ilk sezonu riske atmak istemiyorsunuz. Ya da mevcut konseptiniz artık eskisi kadar satmıyor.",
    quote: "İlk sezonu deneme yanılmayla geçiremeyiz.",
    approach: [
      {
        title: "Pazar & fizibilite",
        text: "Konum, hedef kitle, rekabet ve fiyat seviyesi üzerinden gerçekçi bir iş planı çıkarıyoruz.",
      },
      {
        title: "Konsept & marka",
        text: "Hedef kitleye uygun konsept, isim, kimlik ve hikâyeyi birlikte oluşturuyoruz.",
      },
      {
        title: "Açılış öncesi satış",
        text: "Kapılar açılmadan acente ağımız üzerinden ön satışları başlatıyoruz.",
      },
      {
        title: "Lansman",
        text: "Açılış iletişimi, basın ve dijital lansman planını uyguluyoruz.",
      },
    ],
    deliverables: [
      "Pazar ve fizibilite raporu",
      "Konsept ve marka kimliği",
      "Açılış öncesi acente satışları",
      "Lansman iletişim planı",
      "İlk yıl satış ve fiyat stratejisi",
    ],
    kpis: ["Açılış öncesi satılan oda-gece", "İlk yıl doluluk", "Marka bilinirliği"],
    fit: ["Yeni otel ve butik otel projeleri", "Restoran & beach club açılışları", "Yatırımcılar"],
    duration: "Açılıştan 4–9 ay önce başlanmalı",
    power: "Tüm ekosistem",
  },
];

export const problems = [
  { title: "Kışın boş kalıyoruz", text: "Kasım–Nisan arası doluluk sabit giderleri karşılamıyor.", service: "02" },
  { title: "Tek pazara bağlıyız", text: "Misafirlerimizin çoğu tek ülkeden, tek operatörden geliyor.", service: "01" },
  { title: "Doluyuz ama kâr yok", text: "Komisyonlar ve indirimler marjı eritiyor.", service: "03" },
  { title: "Online görünmüyoruz", text: "Web sitemiz rezervasyon getirmiyor, OTA'lara bağımlıyız.", service: "04" },
  { title: "Puanlarımız düşük", text: "Yorumlar fiyatımızı aşağı çekiyor, şikâyetler tekrar ediyor.", service: "05" },
  { title: "Yeni açılış yapıyoruz", text: "İlk sezonu şansa bırakmak istemiyoruz.", service: "06" },
];

export const process = [
  {
    no: "01",
    title: "Teşhis",
    time: "1–2 hafta",
    text: "Verilerinizi inceliyor, sahada işletmenizi görüyor, rakiplerinizi analiz ediyoruz. Sonunda net bir teşhis raporu elinizde oluyor.",
  },
  {
    no: "02",
    title: "Yol Haritası",
    time: "1 hafta",
    text: "Hangi sorunun önce çözüleceğini, hedefleri ve ölçülecek göstergeleri birlikte belirliyoruz.",
  },
  {
    no: "03",
    title: "Uygulama",
    time: "3–6 ay",
    text: "Rapor bırakıp gitmiyoruz. Acente ağımız, kreatif ekibimiz ve uzmanlarımızla sahada uyguluyoruz.",
  },
  {
    no: "04",
    title: "Ölçüm & Büyüme",
    time: "Her ay",
    text: "Aylık raporlarla sonuçları ölçüyor, çalışanı büyütüyor, çalışmayanı değiştiriyoruz.",
  },
];

export const models = [
  {
    name: "Teşhis",
    tag: "Başlangıç",
    text: "İki haftalık analiz, teşhis raporu ve önceliklendirilmiş yol haritası.",
    points: ["Veri ve saha analizi", "Rakip karşılaştırması", "90 günlük aksiyon planı", "Ücreti ilk projeye mahsup edilir"],
    featured: false,
  },
  {
    name: "Büyüme Ortaklığı",
    tag: "Önerilen",
    text: "Düşük aylık sabit ücret ve elde edilen sonuca bağlı başarı primi. Siz kazandığınızda biz kazanırız.",
    points: ["Teşhis dahil", "Acente ağına erişim", "Uygulama ve aylık raporlama", "Sonuca bağlı başarı primi"],
    featured: true,
  },
  {
    name: "Proje",
    tag: "Belirli kapsam",
    text: "Açılış, web sitesi, eğitim programı gibi başı ve sonu belli işler için sabit kapsamlı çalışma.",
    points: ["Net kapsam ve takvim", "Sabit proje bedeli", "Teslim ve devir", "İstenirse ortaklığa dönüşür"],
    featured: false,
  },
];

export const reasons = [
  {
    title: "Rapor değil, sonuç",
    text: "Klasik danışmanlık tavsiye verir ve gider. Biz uygulamanın içinde kalırız ve sonucu birlikte ölçeriz.",
  },
  {
    title: "Hazır network",
    text: "Avrupa'daki partner acentelerimiz ve Antalya'daki iş ağımız ilk günden sizin için çalışır.",
  },
  {
    title: "Kendi uygulama gücümüz",
    text: "Find Antalya ve Antalya Reklam Ajansı aynı çatı altında. Kreatif, dijital ve yerel görünürlük için dışarıya bağımlı değiliz.",
  },
  {
    title: "Sonuca bağlı ücret",
    text: "Büyüme ortaklığı modelinde ücretimizin bir kısmı, size getirdiğimiz sonuca bağlıdır.",
  },
];

export const markets = [
  { code: "LT", name: "Litvanya", city: "Vilnius", lon: 25.28, lat: 54.69 },
  { code: "PL", name: "Polonya", city: "Varşova", lon: 21.01, lat: 52.23 },
  { code: "DE", name: "Almanya", city: "Berlin", lon: 13.4, lat: 52.52 },
  { code: "RO", name: "Romanya", city: "Bükreş", lon: 26.1, lat: 44.43 },
];

export const faqs = [
  {
    q: "Hangi işletmelerle çalışıyorsunuz?",
    a: "Antalya ve çevresindeki oteller, butik oteller, apart ve villa işletmeleri, restoran ve beach club'lar, tur, transfer ve aktivite firmaları, spa, wellness ve sağlık turizmi işletmeleriyle çalışıyoruz. Yeni proje geliştiren yatırımcılara da destek veriyoruz.",
  },
  {
    q: "Mevcut tur operatörü kontratlarımızı etkiler mi?",
    a: "Hayır. Amacımız mevcut kanallarınızın yerine geçmek değil, onları çeşitlendirmek. Çalışmaya başlamadan önce mevcut kontratlarınızdaki münhasırlık ve kontenjan koşullarını inceliyor, buna uygun ilerliyoruz.",
  },
  {
    q: "Acentelerden gelen misafirler için nasıl bir ücret modeli var?",
    a: "Her şey baştan sözleşmede net. Acente ile olan net fiyat, komisyon ve ödeme koşulları ile bizim başarı primimiz ayrı ayrı ve şeffaf şekilde yazılır. Sürpriz kesinti olmaz.",
  },
  {
    q: "Ne kadar sürede sonuç görürüz?",
    a: "Teşhis aşaması 1–2 hafta sürer. Sonrasındaki takvim pazara, sezona ve seçilen hizmete göre değişir. Teşhis sonunda size gerçekçi bir takvim ve ölçülebilir hedefler veririz; abartılı vaatlerde bulunmayız.",
  },
  {
    q: "Küçük bir işletmeyiz, bize uygun mu?",
    a: "Evet. Butik oteller ve küçük işletmeler çoğu zaman Avrupa'daki butik acentelerle en iyi eşleşen işletmelerdir. Kapsamı işletmenizin ölçeğine göre ayarlıyoruz.",
  },
  {
    q: "Verilerimiz güvende mi?",
    a: "Çalışmaya başlamadan önce gizlilik sözleşmesi imzalıyoruz. Doluluk, fiyat ve kontrat bilgileriniz yalnızca sizin işiniz için kullanılır.",
  },
];

export const businessTypes = [
  "Otel / Resort",
  "Butik Otel",
  "Apart & Villa",
  "Restoran & Beach Club",
  "Tur, Transfer & Aktivite",
  "Spa, Wellness & Sağlık",
  "Yeni Proje / Yatırım",
];
