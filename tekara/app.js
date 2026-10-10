/**
 * TekAra — Tek Ürün, Anlık Fiyat Radarı & Akıllı Fiyat Alarmı
 * Çekirdek JavaScript Motoru
 */

// ======================= Örnek & Zengin Ürün Veri Tabanı =======================
const PRODUCT_CATALOG = {
  "sony wh-1000xm5": {
    searchQuery: "Sony WH-1000XM5",
    title: "Sony WH-1000XM5 Gürültü Engelleyici Kablosuz Kulaklık - Siyah",
    category: "Ses & Kulaklık",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80",
    basePrice: 13999,
    stores: [
      { name: "Amazon TR", color: "#ff9900", seller: "Amazon Doğrudan", rating: "4.9", shipping: "Ücretsiz Aynı Gün Teslim", priceOffset: 0, url: "https://www.amazon.com.tr" },
      { name: "Hepsiburada", color: "#ff6000", seller: "TeknolojiMarket (Yetkili)", rating: "4.8", shipping: "Ücretsiz Kargo", priceOffset: 450, url: "https://www.hepsiburada.com" },
      { name: "Trendyol", color: "#f27a1a", seller: "Sony Resmi Mağaza", rating: "4.7", shipping: "Ücretsiz Kargo", priceOffset: 799, url: "https://www.trendyol.com" },
      { name: "Teknosa", color: "#0066cc", seller: "Teknosa Mağazacılık", rating: "4.6", shipping: "Ücretsiz Mağazadan Teslim", priceOffset: 1200, url: "https://www.teknosa.com" },
      { name: "MediaMarkt", color: "#df0000", seller: "MediaMarkt TR", rating: "4.7", shipping: "Standart Kargo (35 ₺)", priceOffset: 1450, url: "https://www.mediamarkt.com.tr" }
    ],
    history: [15499, 15200, 14999, 14850, 14500, 14200, 13999]
  },
  "iphone 16 pro": {
    searchQuery: "iPhone 16 Pro 256GB",
    title: "Apple iPhone 16 Pro 256GB Çöl Titanyum",
    category: "Akıllı Telefon",
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500&auto=format&fit=crop&q=80",
    basePrice: 82999,
    stores: [
      { name: "Hepsiburada", color: "#ff6000", seller: "Hepsiburada Resmi", rating: "4.9", shipping: "Yarın Kapında", priceOffset: 0, url: "https://www.hepsiburada.com" },
      { name: "Amazon TR", color: "#ff9900", seller: "Amazon Prime", rating: "4.9", shipping: "Ücretsiz Hızlı Kargo", priceOffset: 999, url: "https://www.amazon.com.tr" },
      { name: "Trendyol", color: "#f27a1a", seller: "Apple Premium Reseller", rating: "4.8", shipping: "Ücretsiz Kargo", priceOffset: 1499, url: "https://www.trendyol.com" },
      { name: "Vatan Bilgisayar", color: "#003399", seller: "Vatan Mağazaları", rating: "4.7", shipping: "Ücretsiz Kargo", priceOffset: 2500, url: "https://www.vatanbilgisayar.com" },
      { name: "Teknosa", color: "#0066cc", seller: "Teknosa", rating: "4.6", shipping: "Ücretsiz Kargo", priceOffset: 2999, url: "https://www.teknosa.com" }
    ],
    history: [89999, 88500, 86999, 85400, 84900, 83500, 82999]
  },
  "dyson v15": {
    searchQuery: "Dyson V15 Detect",
    title: "Dyson V15 Detect Total Clean Kablosuz Dikey Süpürge",
    category: "Ev Aletleri & Yaşam",
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500&auto=format&fit=crop&q=80",
    basePrice: 28499,
    stores: [
      { name: "Trendyol", color: "#f27a1a", seller: "Dyson Resmi Satıcı", rating: "4.9", shipping: "Ücretsiz Hızlı Kargo", priceOffset: 0, url: "https://www.trendyol.com" },
      { name: "Amazon TR", color: "#ff9900", seller: "Amazon TR", rating: "4.8", shipping: "Prime Ücretsiz Kargo", priceOffset: 650, url: "https://www.amazon.com.tr" },
      { name: "Hepsiburada", color: "#ff6000", seller: "EvveTekno", rating: "4.7", shipping: "Ücretsiz Kargo", priceOffset: 1200, url: "https://www.hepsiburada.com" },
      { name: "Teknosa", color: "#0066cc", seller: "Teknosa Web", rating: "4.6", shipping: "Ücretsiz Kargo", priceOffset: 1800, url: "https://www.teknosa.com" },
      { name: "Pazarama", color: "#e11d48", seller: "Evkolik", rating: "4.5", shipping: "Kargo Bedava", priceOffset: 2100, url: "https://www.pazarama.com" }
    ],
    history: [31999, 31500, 30999, 29999, 29500, 28999, 28499]
  },
  "playstation 5": {
    searchQuery: "PlayStation 5 Slim",
    title: "Sony PlayStation 5 Slim Standart Edition 1TB SSD",
    category: "Oyun Konsolları",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&auto=format&fit=crop&q=80",
    basePrice: 24999,
    stores: [
      { name: "Amazon TR", color: "#ff9900", seller: "Amazon Türkiye", rating: "4.9", shipping: "Ertesi Gün Teslimat", priceOffset: 0, url: "https://www.amazon.com.tr" },
      { name: "Hepsiburada", color: "#ff6000", seller: "KonsolDünyası", rating: "4.8", shipping: "Ücretsiz Kargo", priceOffset: 500, url: "https://www.hepsiburada.com" },
      { name: "Trendyol", color: "#f27a1a", seller: "OverGame", rating: "4.7", shipping: "Hızlı Gönderim", priceOffset: 890, url: "https://www.trendyol.com" },
      { name: "MediaMarkt", color: "#df0000", seller: "MediaMarkt", rating: "4.7", shipping: "Ücretsiz Kargo", priceOffset: 1500, url: "https://www.mediamarkt.com.tr" },
      { name: "Vatan Bilgisayar", color: "#003399", seller: "Vatan", rating: "4.6", shipping: "Ücretsiz Kargo", priceOffset: 1750, url: "https://www.vatanbilgisayar.com" }
    ],
    history: [27500, 26999, 26400, 25900, 25500, 25200, 24999]
  },
  "macbook air": {
    searchQuery: "MacBook Air M3",
    title: "Apple MacBook Air 13.6 inç M3 Çip 16GB RAM 256GB SSD Uzay Grisi",
    category: "Bilgisayar & Laptop",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=80",
    basePrice: 47999,
    stores: [
      { name: "Amazon TR", color: "#ff9900", seller: "Amazon Resmi Satıcı", rating: "4.9", shipping: "Ücretsiz Aynı Gün Teslim", priceOffset: 0, url: "https://www.amazon.com.tr" },
      { name: "Hepsiburada", color: "#ff6000", seller: "Hepsiburada", rating: "4.9", shipping: "Ücretsiz Kargo", priceOffset: 499, url: "https://www.hepsiburada.com" },
      { name: "Trendyol", color: "#f27a1a", seller: "PT Yetkili Satıcı", rating: "4.8", shipping: "Ücretsiz Kargo", priceOffset: 1100, url: "https://www.trendyol.com" },
      { name: "Teknosa", color: "#0066cc", seller: "Teknosa", rating: "4.6", shipping: "Ücretsiz Mağazadan Teslim", priceOffset: 2000, url: "https://www.teknosa.com" },
      { name: "Gürgençler", color: "#1e293b", seller: "Apple Yetkili Servis", rating: "4.8", shipping: "Kargo Bedava", priceOffset: 2500, url: "https://www.gurgencler.com.tr" }
    ],
    history: [52499, 51900, 50500, 49900, 48999, 48400, 47999]
  }
};

// ======================= Uygulama Durumu (State) =======================
let currentActiveProduct = null;
let savedAlarms = [];
let audioMuted = false;
let audioCtx = null;
let searchRunId = 0; // Üst üste aramalarda eski aramanın sonucu yenisinin üstüne yazmasın

function storageGet(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}
function storageSet(key, value) {
  try { localStorage.setItem(key, value); } catch (e) { /* gizli sekme vb. — sessizce geç */ }
}

function escapeHtml(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// Sadece http/https linklerine izin ver (javascript: vb. linkler çalışmasın)
function safeUrl(url) {
  try {
    const u = new URL(url);
    return (u.protocol === 'https:' || u.protocol === 'http:') ? u.href : '#';
  } catch (e) {
    return '#';
  }
}

// ======================= Web Audio API Synth (Alarm Sesi) =======================
function initAudio() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
}

/**
 * Zengin, yüksek kaliteli çift tonlu siren/çan alarm efekti
 */
function playAlarmChime() {
  if (audioMuted) return;
  try {
    initAudio();
    if (!audioCtx) return;

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const now = audioCtx.currentTime;

    // Siren / gong 1
    const osc1 = audioCtx.createOscillator();
    const gain1 = audioCtx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(880, now); // A5
    osc1.frequency.exponentialRampToValueAtTime(1760, now + 0.2);
    osc1.frequency.exponentialRampToValueAtTime(880, now + 0.4);
    osc1.frequency.exponentialRampToValueAtTime(1320, now + 0.6);

    gain1.gain.setValueAtTime(0.3, now);
    gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.9);

    osc1.connect(gain1);
    gain1.connect(audioCtx.destination);
    osc1.start(now);
    osc1.stop(now + 0.9);

    // İkinci yankı / harmonik
    setTimeout(() => {
      if (!audioCtx) return;
      const t = audioCtx.currentTime;
      const osc2 = audioCtx.createOscillator();
      const gain2 = audioCtx.createGain();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(1046.5, t); // C6
      osc2.frequency.exponentialRampToValueAtTime(1567.98, t + 0.3);

      gain2.gain.setValueAtTime(0.25, t);
      gain2.gain.exponentialRampToValueAtTime(0.001, t + 0.8);

      osc2.connect(gain2);
      gain2.connect(audioCtx.destination);
      osc2.start(t);
      osc2.stop(t + 0.8);
    }, 250);

  } catch (err) {
    console.warn("Ses sentezlenemedi:", err);
  }
}

// ======================= Masaüstü Bildirimleri =======================
function requestNotificationPermission() {
  if ("Notification" in window && Notification.permission === "default") {
    Notification.requestPermission();
  }
}

function sendDesktopNotification(title, body) {
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification(title, {
      body: body,
      icon: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=128&auto=format&fit=crop&q=80"
    });
  }
}

// ======================= Para Formatlayıcı =======================
function formatTL(amount) {
  return new Intl.NumberFormat('tr-TR', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount) + ' ₺';
}

// ======================= Akıllı Yazım Düzeltici & Kategori Fiyat Motoru =======================
function normalizeQuery(query) {
  // "İPHONE" → "i̇phone" sorununu önlemek için büyük İ/I önce düz i yapılır
  let q = query.replace(/[İI]/g, 'i').toLowerCase().trim();
  // Türkçe karakter ve yaygın yazım hataları
  q = q.replace(/iphoen|ifon|ayfon|ipone|iphne|ıphone/g, 'iphone');
  q = q.replace(/macbok|makbuk|macbok/g, 'macbook');
  q = q.replace(/pleysteyşın|pleysteysın|ps 5|ps5/g, 'playstation 5');
  q = q.replace(/dayzın|dayzon|dysn/g, 'dyson');
  q = q.replace(/eyırpod|erpod|ayrpod/g, 'airpods');
  q = q.replace(/samusng|samssung/g, 'samsung');
  return q;
}


// ======================= Ürüne Özel Mağaza Linkleri =======================
// Her mağazanın arama sayfası; {q} yerine ürün adı gelir.
const STORE_SEARCH_URLS = {
  "Amazon TR":        "https://www.amazon.com.tr/s?k={q}",
  "Hepsiburada":      "https://www.hepsiburada.com/ara?q={q}",
  "Trendyol":         "https://www.trendyol.com/sr?q={q}",
  "Teknosa":          "https://www.teknosa.com/arama/?s={q}",
  "MediaMarkt":       "https://www.mediamarkt.com.tr/tr/search.html?query={q}",
  "Vatan Bilgisayar": "https://www.vatanbilgisayar.com/arama/{q}/",
  "Pazarama":         "https://www.pazarama.com/arama?q={q}",
  "Gürgençler":       "https://www.gurgencler.com.tr/catalogsearch/result/?q={q}"
};

// Yapıştırılan linkin hangi mağazaya ait olduğunu bulmak için alan adları
const STORE_DOMAINS = {
  "amazon.com.tr": "Amazon TR",
  "hepsiburada.com": "Hepsiburada",
  "trendyol.com": "Trendyol",
  "teknosa.com": "Teknosa",
  "mediamarkt.com.tr": "MediaMarkt",
  "vatanbilgisayar.com": "Vatan Bilgisayar",
  "pazarama.com": "Pazarama",
  "gurgencler.com.tr": "Gürgençler"
};

function parseHttpUrl(text) {
  try {
    const u = new URL(text.trim());
    return (u.protocol === 'http:' || u.protocol === 'https:') ? u : null;
  } catch (e) {
    return null;
  }
}

function storeNameForUrl(u) {
  const host = u.hostname.replace(/^www\./, '').replace(/^m\./, '');
  for (const domain in STORE_DOMAINS) {
    if (host === domain || host.endsWith('.' + domain)) return STORE_DOMAINS[domain];
  }
  return null;
}

// Linkteki ürün adını tahmin et (ör. trendyol.com/sony/wh-1000xm5-kulaklik-p-123 → "sony wh 1000xm5 kulaklik")
function guessQueryFromUrl(u) {
  let parts = [];
  try { parts = decodeURIComponent(u.pathname).split('/'); } catch (e) { parts = u.pathname.split('/'); }
  const words = parts
    .map(p => p.replace(/\.html?$/i, '').replace(/-(p|pm)-[a-z0-9]+$/i, '').replace(/-p-[A-Z0-9]+$/, ''))
    .filter(p => p.length > 2 && !/^(dp|gp|product|urun|p)$/i.test(p) && !/^ref[=_]/i.test(p) && !/^[A-Z0-9]{8,}$/.test(p) && !/^\d+$/.test(p))
    .join(' ')
    .replace(/[-_]+/g, ' ')
    .split(/\s+/);
  // Tekrarlanan kelimeleri at (trendyol.com/philips/philips-airfryer → "philips airfryer")
  const seen = new Set();
  const unique = words.filter(w => { const k = w.toLowerCase(); if (!w || seen.has(k)) return false; seen.add(k); return true; });
  return unique.slice(0, 8).join(' ') || u.hostname;
}

function buildStoreUrl(storeName, searchQuery, fallbackUrl) {
  const pattern = STORE_SEARCH_URLS[storeName];
  if (!pattern || !searchQuery) return fallbackUrl;
  return pattern.replace('{q}', encodeURIComponent(searchQuery.trim()));
}

// Ürünün tüm mağaza linklerini ürüne özel hale getirir.
// Kullanıcı bir ürün linki yapıştırdıysa o mağazanın satırı doğrudan o ürüne gider.
function attachProductLinks(product, searchQuery, pastedUrl) {
  const pastedStore = pastedUrl ? storeNameForUrl(pastedUrl) : null;
  product.stores.forEach(store => {
    if (pastedStore && store.name === pastedStore) {
      store.url = pastedUrl.href;
    } else {
      store.url = buildStoreUrl(store.name, searchQuery, store.url);
    }
  });
  return product;
}

// ======================= Arama & Veri Çözümleme =======================
function resolveProductDataBase(rawQuery) {
  const cleanQuery = normalizeQuery(rawQuery);
  
  // Katalogda doğrudan veya normalize eşleşme var mı?
  for (const key in PRODUCT_CATALOG) {
    // Sadece sorgu katalog ürününü tam içeriyorsa eşleş ("iphone 16" → "iphone 16 pro" olmasın)
    if (cleanQuery.includes(key)) {
      return JSON.parse(JSON.stringify(PRODUCT_CATALOG[key]));
    }
  }

  // Akıllı Kategori & Model Çözümleme
  let calculatedBase = 0;
  let categoryName = "Elektronik & Teknoloji";
  let productImg = "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=80";
  let formattedTitle = rawQuery.trim();

  // 1. iPhone Segmenti (iPhone 18, 17, 16 vb.)
  if (cleanQuery.includes('iphone')) {
    categoryName = "Akıllı Telefon / Amiral Gemisi";
    productImg = "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500&auto=format&fit=crop&q=80";
    
    // Model numarası analizi
    if (cleanQuery.includes('18')) {
      calculatedBase = cleanQuery.includes('pro') ? 104999 : 92999;
      formattedTitle = `Apple iPhone 18 ${cleanQuery.includes('pro') ? 'Pro Max 256GB' : '128GB'} (Ön Takip / Radar)`;
    } else if (cleanQuery.includes('17')) {
      calculatedBase = cleanQuery.includes('pro') ? 94999 : 82999;
      formattedTitle = `Apple iPhone 17 ${cleanQuery.includes('pro') ? 'Pro Max 256GB' : '128GB'} (Gelecek Seri)`;
    } else if (cleanQuery.includes('16')) {
      calculatedBase = cleanQuery.includes('pro') ? 82999 : 64999;
      formattedTitle = `Apple iPhone 16 ${cleanQuery.includes('pro') ? 'Pro 256GB Çöl Titanyum' : '128GB'}`;
    } else if (cleanQuery.includes('15')) {
      calculatedBase = cleanQuery.includes('pro') ? 69999 : 53999;
      formattedTitle = `Apple iPhone 15 ${cleanQuery.includes('pro') ? 'Pro 128GB' : '128GB Siyah'}`;
    } else if (cleanQuery.includes('14')) {
      calculatedBase = 43999;
      formattedTitle = "Apple iPhone 14 128GB Gece Yarısı";
    } else if (cleanQuery.includes('13')) {
      calculatedBase = 37999;
      formattedTitle = "Apple iPhone 13 128GB Yıldız Işığı";
    } else if (cleanQuery.includes('11') || cleanQuery.includes('12')) {
      calculatedBase = 26999;
      formattedTitle = `Apple iPhone ${cleanQuery.includes('12') ? '12' : '11'} 64GB / 128GB`;
    } else {
      calculatedBase = 58999;
      formattedTitle = `Apple iPhone Serisi (${rawQuery})`;
    }
  } 
  // 2. Samsung Galaxy Segmenti
  else if (cleanQuery.includes('samsung') || cleanQuery.includes('galaxy') || cleanQuery.includes('s24') || cleanQuery.includes('s25')) {
    categoryName = "Akıllı Telefon / Android";
    productImg = "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&auto=format&fit=crop&q=80";
    if (cleanQuery.includes('ultra') || cleanQuery.includes('s25') || cleanQuery.includes('s24 ultra')) {
      calculatedBase = 74999;
      formattedTitle = "Samsung Galaxy S24 Ultra 256GB Titanyum Gri";
    } else {
      calculatedBase = 38999;
      formattedTitle = `Samsung Galaxy (${rawQuery})`;
    }
  }
  // 3. Laptop & Bilgisayar
  else if (cleanQuery.includes('macbook') || cleanQuery.includes('laptop') || cleanQuery.includes('bilgisayar') || cleanQuery.includes('asus') || cleanQuery.includes('lenovo')) {
    categoryName = "Bilgisayar & Taşınabilir";
    productImg = "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=80";
    if (cleanQuery.includes('macbook pro')) {
      calculatedBase = 89999;
      formattedTitle = "Apple MacBook Pro 14 inç M3 Pro 18GB 512GB";
    } else if (cleanQuery.includes('macbook air')) {
      calculatedBase = 47999;
      formattedTitle = "Apple MacBook Air 13 inç M3 16GB RAM 256GB";
    } else {
      calculatedBase = 34999;
      formattedTitle = `${rawQuery.charAt(0).toUpperCase() + rawQuery.slice(1)} Dizüstü Bilgisayar`;
    }
  }
  // 4. Tablet & iPad
  else if (cleanQuery.includes('ipad') || cleanQuery.includes('tablet')) {
    categoryName = "Tablet & Aksesuar";
    productImg = "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop&q=80";
    calculatedBase = cleanQuery.includes('pro') ? 48999 : 24999;
    formattedTitle = `Apple iPad ${cleanQuery.includes('pro') ? 'Pro 11 inç M4' : 'Air / 10. Nesil'} Wi-Fi`;
  }
  // 5. Dyson & Dikey Süpürge
  else if (cleanQuery.includes('dyson') || cleanQuery.includes('süpürge') || cleanQuery.includes('supurge')) {
    categoryName = "Ev Elektroniği & Bakım";
    productImg = "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500&auto=format&fit=crop&q=80";
    calculatedBase = 28499;
    formattedTitle = cleanQuery.includes('v15') ? "Dyson V15 Detect Kablosuz Süpürge" : `Dyson / Akıllı Süpürge (${rawQuery})`;
  }
  // 6. Konsol (PlayStation, Xbox)
  else if (cleanQuery.includes('playstation') || cleanQuery.includes('xbox') || cleanQuery.includes('konsol')) {
    categoryName = "Oyun Konsolları & Eğlence";
    productImg = "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&auto=format&fit=crop&q=80";
    calculatedBase = 24999;
    formattedTitle = "Sony PlayStation 5 Slim 1TB SSD Konsol";
  }
  // 7. Genel Kategori Fallback (Gelişmiş Fiyat Tahmincisi)
  else {
    const hash = cleanQuery.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    calculatedBase = 3500 + (hash % 15) * 850;
    formattedTitle = rawQuery.charAt(0).toUpperCase() + rawQuery.slice(1);
  }

  // Geçmiş Fiyat Dalgalanması (Trend)
  const history = [
    Math.round(calculatedBase * 1.14),
    Math.round(calculatedBase * 1.11),
    Math.round(calculatedBase * 1.08),
    Math.round(calculatedBase * 1.05),
    Math.round(calculatedBase * 1.03),
    Math.round(calculatedBase * 1.01),
    calculatedBase
  ];

  return {
    title: formattedTitle,
    category: categoryName,
    image: productImg,
    basePrice: calculatedBase,
    stores: [
      { name: "Amazon TR", color: "#ff9900", seller: "Amazon Doğrudan", rating: "4.9", shipping: "Ücretsiz Aynı Gün Teslimat", priceOffset: 0, url: "https://www.amazon.com.tr" },
      { name: "Hepsiburada", color: "#ff6000", seller: "Resmi Distribütör", rating: "4.8", shipping: "Yarın Kapında", priceOffset: Math.round(calculatedBase * 0.025), url: "https://www.hepsiburada.com" },
      { name: "Trendyol", color: "#f27a1a", seller: "Yetkili Satıcı Mağazası", rating: "4.7", shipping: "Ücretsiz Hızlı Kargo", priceOffset: Math.round(calculatedBase * 0.045), url: "https://www.trendyol.com" },
      { name: "Pazarama", color: "#e11d48", seller: "Teknoloji Dünyası", rating: "4.6", shipping: "Kargo Bedava", priceOffset: Math.round(calculatedBase * 0.07), url: "https://www.pazarama.com" },
      { name: "Teknosa", color: "#0066cc", seller: "Teknosa Mağazaları", rating: "4.5", shipping: "Mağazadan Hemen Al", priceOffset: Math.round(calculatedBase * 0.09), url: "https://www.teknosa.com" }
    ],
    history: history
  };
}

function resolveProductData(rawInput) {
  const pastedUrl = parseHttpUrl(rawInput);
  const rawQuery = pastedUrl ? guessQueryFromUrl(pastedUrl) : rawInput;
  const product = resolveProductDataBase(rawQuery);
  // Mağazada aranacak metin: katalog ürünlerinde temiz model adı, diğerlerinde yazım hatası düzeltilmiş sorgu
  const searchQuery = product.searchQuery || normalizeQuery(rawQuery);
  return attachProductLinks(product, searchQuery, pastedUrl);
}

// ======================= Mini Fiyat Trend Grafiği Çizimi =======================
function renderTrendChart(history) {
  const canvas = document.getElementById('trendChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();

  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);

  const w = rect.width;
  const h = rect.height;
  if (!w || !h) return; // Görünmezken çizme (genişlik 0 olur)
  ctx.clearRect(0, 0, w, h);

  const min = Math.min(...history);
  const max = Math.max(...history);
  const range = (max - min) || 1;

  // Nokta koordinatları
  const points = history.map((val, idx) => {
    const x = (idx / (history.length - 1)) * (w - 20) + 10;
    const y = h - 15 - ((val - min) / range) * (h - 30);
    return { x, y };
  });

  // Arka plan gradient dolgusu
  const gradient = ctx.createLinearGradient(0, 0, 0, h);
  gradient.addColorStop(0, 'rgba(16, 185, 129, 0.25)');
  gradient.addColorStop(1, 'rgba(16, 185, 129, 0.0)');

  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const midX = (prev.x + curr.x) / 2;
    ctx.bezierCurveTo(midX, prev.y, midX, curr.y, curr.x, curr.y);
  }
  ctx.lineTo(points[points.length - 1].x, h);
  ctx.lineTo(points[0].x, h);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();

  // Çizgi
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const midX = (prev.x + curr.x) / 2;
    ctx.bezierCurveTo(midX, prev.y, midX, curr.y, curr.x, curr.y);
  }
  ctx.strokeStyle = '#10b981';
  ctx.lineWidth = 2.5;
  ctx.lineCap = 'round';
  ctx.stroke();

  // Son noktaya parlayan nokta koy
  const lastPoint = points[points.length - 1];
  ctx.beginPath();
  ctx.arc(lastPoint.x, lastPoint.y, 4, 0, Math.PI * 2);
  ctx.fillStyle = '#ffffff';
  ctx.shadowColor = '#10b981';
  ctx.shadowBlur = 8;
  ctx.fill();
}

// ======================= Ürün Ekranını Güncelleme =======================
function displayProduct(product, shouldScroll = true) {
  currentActiveProduct = product;

  // Görsel ve Temel Bilgiler
  document.getElementById('productImage').src = product.image;
  document.getElementById('productCategory').innerText = product.category;
  document.getElementById('productTitle').innerText = product.title;

  const bestStore = product.stores[0];
  const bestPrice = product.basePrice + bestStore.priceOffset;

  document.getElementById('productBestPrice').innerText = formatTL(bestPrice);
  document.getElementById('productBestStore').innerText = bestStore.name;
  document.getElementById('productShippingTag').innerText = bestStore.shipping;

  // Fiyat Trendi
  const minPrice = Math.min(...product.history);
  const maxPrice = Math.max(...product.history);
  document.getElementById('trendLowestPrice').innerText = formatTL(minPrice);
  document.getElementById('trendHighestPrice').innerText = formatTL(maxPrice);

  // Trend rozeti: ilk günden bugüne yüzde değişim
  const first = product.history[0];
  const last = product.history[product.history.length - 1];
  const changePct = first ? Math.round(((last - first) / first) * 100) : 0;
  const trendBadge = document.getElementById('trendBadge');
  trendBadge.innerText = changePct < 0 ? `%${Math.abs(changePct)} Düştü` : changePct > 0 ? `%${changePct} Arttı` : 'Sabit';
  trendBadge.classList.toggle('down', changePct <= 0);
  trendBadge.classList.toggle('up', changePct > 0);

  // Hedef Fiyat Varsayılanı (%10 indirimli)
  const defaultTarget = Math.round(bestPrice * 0.9);
  const targetInput = document.getElementById('targetPriceInput');
  targetInput.value = defaultTarget;
  targetInput.setAttribute('max', bestPrice - 1);
  document.getElementById('targetPriceError').innerText = '';
  document.querySelectorAll('.preset-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-percent') === '10');
  });
  document.getElementById('storeCount').innerText = product.stores.length;

  // Mağazalar Tablosu
  const tbody = document.getElementById('storeTableBody');
  tbody.innerHTML = '';

  product.stores.forEach((store, index) => {
    const price = product.basePrice + store.priceOffset;
    const diff = store.priceOffset;
    const isBest = index === 0;

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>
        <div class="store-cell">
          <div class="store-avatar" style="background: ${escapeHtml(store.color)}">
            ${escapeHtml(store.name.substring(0, 2).toUpperCase())}
          </div>
          <div class="store-details">
            <span class="store-name">${escapeHtml(store.name)}</span>
            ${isBest ? '<span class="store-badge-best">En Uygun Fiyat</span>' : ''}
          </div>
        </div>
      </td>
      <td>
        <div style="font-size: 0.88rem; font-weight: 600;">${escapeHtml(store.seller)}</div>
        <div style="font-size: 0.78rem; color: #f59e0b;">★ ${escapeHtml(store.rating)} Satıcı Puanı</div>
      </td>
      <td>
        <span style="font-size: 0.85rem; color: ${isBest ? '#38bdf8' : 'var(--text-muted)'}; font-weight: 500;">
          ${escapeHtml(store.shipping)}
        </span>
      </td>
      <td>
        <div class="store-price ${isBest ? 'best' : ''}">${formatTL(price)}</div>
      </td>
      <td>
        <span class="price-diff ${isBest ? 'best' : 'higher'}">
          ${isBest ? 'En Ucuz' : '+' + formatTL(diff)}
        </span>
      </td>
      <td>
        <a href="${escapeHtml(safeUrl(store.url))}" target="_blank" rel="noopener noreferrer" class="btn-store-go">
          <span>Mağazaya Git</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </td>
    `;
    tbody.appendChild(tr);
  });

  // Ekranı Görünür Kıl
  document.getElementById('scannerSection').style.display = 'none';
  document.getElementById('productDashboard').style.display = 'block';

  // Grafik ancak bölüm görünür olduktan sonra çizilebilir (önceden boş kalıyordu)
  renderTrendChart(product.history);

  // Smooth scroll
  if (shouldScroll) {
    document.getElementById('productDashboard').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ======================= Tarama Akışı (Simülasyon Barı) =======================
function startProductSearch(query, shouldScroll = true) {
  if (!query) return;
  const runId = ++searchRunId;

  const scanner = document.getElementById('scannerSection');
  const dashboard = document.getElementById('productDashboard');
  const progress = document.getElementById('scanProgressFill');
  const scanText = document.getElementById('scannerText');

  dashboard.style.display = 'none';
  scanner.style.display = 'block';
  if (shouldScroll) scanner.scrollIntoView({ behavior: 'smooth', block: 'center' });

  progress.style.width = '15%';
  scanText.innerText = `"${query}" için mağazalar hazırlanıyor…`;

  setTimeout(() => {
    if (runId !== searchRunId) return;
    progress.style.width = '55%';
    scanText.innerText = `Mağaza linkleri hazırlanıyor…`;
  }, 400);

  setTimeout(() => {
    if (runId !== searchRunId) return;
    progress.style.width = '85%';
    scanText.innerText = `Tahmini fiyatlar hesaplanıyor…`;
  }, 900);

  setTimeout(() => {
    if (runId !== searchRunId) return;
    progress.style.width = '100%';
    const data = resolveProductData(query);
    displayProduct(data, shouldScroll);
  }, 1300);
}

// ======================= Alarmların Yönetimi (LocalStorage) =======================
function loadAlarmsFromStorage() {
  try {
    const raw = storageGet('tekara_alarms');
    if (raw) {
      const parsed = JSON.parse(raw);
      savedAlarms = Array.isArray(parsed) ? parsed : [];
    }
  } catch (e) {
    savedAlarms = [];
  }
  renderAlarmsList();
}

function saveAlarmsToStorage() {
  storageSet('tekara_alarms', JSON.stringify(savedAlarms));
  renderAlarmsList();
}

function renderAlarmsList() {
  const grid = document.getElementById('alarmsGrid');
  const countBadge = document.getElementById('alarmsCountBadge');
  countBadge.innerText = `${savedAlarms.length} alarm`;

  if (savedAlarms.length === 0) {
    grid.innerHTML = `
      <div class="empty-alarms-state" id="emptyAlarmsState">
        <div class="empty-icon">🎯</div>
        <h4>Henüz alarm kurmadın</h4>
        <p>Yukarıdan bir ürün arat, hedef fiyatını yaz ve alarmı kur.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = '';
  savedAlarms.forEach((alarm, idx) => {
    const item = document.createElement('div');
    item.className = 'alarm-item-card';
    item.innerHTML = `
      <div class="alarm-card-top">
        <div class="alarm-card-thumb">
          <img src="${escapeHtml(safeUrl(alarm.image))}" alt="${escapeHtml(alarm.title)}">
        </div>
        <div class="alarm-card-info">
          <div class="alarm-card-title" title="${escapeHtml(alarm.title)}">${escapeHtml(alarm.title)}</div>
          <div class="alarm-card-status">
            <span class="radar-dot" style="width:6px;height:6px;"></span>
            Alarm kayıtlı
          </div>
        </div>
        <button class="alarm-card-delete" data-alarm-id="${escapeHtml(alarm.id)}" title="Alarmı Sil">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      </div>

      <div class="alarm-card-prices">
        <div class="price-col">
          <span>Başlangıç</span>
          <strong>${formatTL(Number(alarm.initialPrice) || 0)}</strong>
        </div>
        <div class="price-col target">
          <span>Hedef Fiyat</span>
          <strong>${formatTL(Number(alarm.targetPrice) || 0)}</strong>
        </div>
        <div class="price-col">
          <span>Tasarruf</span>
          <strong style="color:#a855f7;">%${escapeHtml(alarm.discountPercent)}</strong>
        </div>
      </div>

      <div class="alarm-card-actions">
        <span>${alarm.createdAt ? new Date(alarm.createdAt).toLocaleDateString('tr-TR') : ''}${alarm.storeName ? ' · ' + escapeHtml(alarm.storeName) : ''}</span>
        ${alarm.storeUrl ? `<a href="${escapeHtml(safeUrl(alarm.storeUrl))}" target="_blank" rel="noopener noreferrer">Ürüne Git ↗</a>` : ''}
      </div>
    `;
    grid.appendChild(item);
  });
}

function removeAlarmById(id) {
  savedAlarms = savedAlarms.filter(a => String(a.id) !== String(id));
  saveAlarmsToStorage();
}

function addAlarm() {
  if (!currentActiveProduct) return;

  const targetInput = document.getElementById('targetPriceInput');
  const targetPrice = parseFloat(targetInput.value);
  const currentBestPrice = currentActiveProduct.basePrice + currentActiveProduct.stores[0].priceOffset;

  const errorBox = document.getElementById('targetPriceError');
  errorBox.innerText = '';

  if (!targetPrice || targetPrice <= 0) {
    errorBox.innerText = "Lütfen geçerli bir hedef fiyat yaz.";
    targetInput.focus();
    return;
  }

  if (targetPrice >= currentBestPrice) {
    errorBox.innerText = `Hedef fiyat şu anki en ucuz fiyattan (${formatTL(currentBestPrice)}) düşük olmalı.`;
    targetInput.focus();
    return;
  }

  const wantsSound = document.getElementById('checkSoundAlarm').checked;
  const wantsNotification = document.getElementById('checkWebNotification').checked;
  if (wantsNotification) requestNotificationPermission();

  const discountPercent = Math.round(((currentBestPrice - targetPrice) / currentBestPrice) * 100);

  const newAlarm = {
    id: Date.now(),
    title: currentActiveProduct.title,
    image: currentActiveProduct.image,
    initialPrice: currentBestPrice,
    targetPrice: targetPrice,
    discountPercent: discountPercent,
    storeUrl: currentActiveProduct.stores[0].url,
    storeName: currentActiveProduct.stores[0].name,
    sound: wantsSound,
    notification: wantsNotification,
    createdAt: new Date().toISOString()
  };

  // Aynı ürün için ikinci alarm kurulursa eskisinin yerine geçsin
  savedAlarms = savedAlarms.filter(a => a.title !== newAlarm.title);
  savedAlarms.unshift(newAlarm);
  saveAlarmsToStorage();

  // Başarılı Animasyonu
  const btn = document.getElementById('btnCreateAlarm');
  const originalHtml = btn.innerHTML;
  btn.innerHTML = `<span>✓ Alarm kuruldu</span>`;
  btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
  
  setTimeout(() => {
    btn.innerHTML = originalHtml;
    btn.style.background = '';
  }, 2500);

  // Alarmlar bölümüne kaydır
  document.querySelector('.active-alarms-section').scrollIntoView({ behavior: 'smooth' });
}

// ======================= ALARM ÇALDI POPUP & SİMÜLASYON =======================
function triggerAlarmNotification(productTitle, oldPrice, newPrice, storeName, buyUrl, channels = {}) {
  // 1. Ses Efekti Çal (kullanıcı kapattıysa çalma)
  if (channels.sound !== false) playAlarmChime();

  // 2. Masaüstü Bildirimi Fırlat
  if (channels.notification !== false) {
    sendDesktopNotification(
      `Fiyat düştü: ${formatTL(newPrice)}`,
      `${productTitle} hedef fiyatına indi. Mağaza: ${storeName}`
    );
  }

  // 3. Modal Aç (Görsel WOW Etkisi)
  const modal = document.getElementById('alarmModal');
  document.getElementById('modalProductTitle').innerText = productTitle;
  document.getElementById('modalOldPrice').innerText = formatTL(oldPrice);
  document.getElementById('modalNewPrice').innerText = formatTL(newPrice);
  document.getElementById('modalStoreName').innerText = storeName;
  document.getElementById('modalSavingsText').innerText = `${formatTL(oldPrice - newPrice)} daha ucuz`;
  document.getElementById('modalBuyLink').href = buyUrl ? safeUrl(buyUrl) : '#';

  modal.style.display = 'flex';
}

function simulatePriceDrop() {
  if (!currentActiveProduct) {
    // Ürün yoksa varsayılan Sony kulaklık üzerinde göster
    displayProduct(resolveProductData("Sony WH-1000XM5"));
  }
  if (document.getElementById('checkWebNotification').checked) requestNotificationPermission();

  const currentPrice = currentActiveProduct.basePrice + currentActiveProduct.stores[0].priceOffset;
  const typedTarget = parseFloat(document.getElementById('targetPriceInput').value);
  const targetPrice = (typedTarget > 0 && typedTarget < currentPrice) ? typedTarget : Math.round(currentPrice * 0.9);
  const droppedPrice = Math.max(1, Math.round(targetPrice - currentPrice * 0.01)); // Hedefin biraz altı

  triggerAlarmNotification(
    currentActiveProduct.title,
    currentPrice,
    droppedPrice,
    currentActiveProduct.stores[0].name,
    currentActiveProduct.stores[0].url,
    {
      sound: document.getElementById('checkSoundAlarm').checked,
      notification: document.getElementById('checkWebNotification').checked
    }
  );
}

// ======================= Event Dinleyicileri =======================
document.addEventListener('DOMContentLoaded', () => {
  // Alarmları Yükle
  loadAlarmsFromStorage();

  // Alarm silme (inline onclick yerine)
  document.getElementById('alarmsGrid').addEventListener('click', (e) => {
    const btn = e.target.closest('.alarm-card-delete');
    if (btn) removeAlarmById(btn.getAttribute('data-alarm-id'));
  });

  // Enter ile hedef fiyattan alarm kur
  document.getElementById('targetPriceInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); addAlarm(); }
  });
  document.getElementById('targetPriceInput').addEventListener('input', () => {
    document.getElementById('targetPriceError').innerText = '';
    document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
  });

  // Arama Formu
  const searchForm = document.getElementById('searchForm');
  const productInput = document.getElementById('productInput');

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = productInput.value.trim();
    if (query) {
      startProductSearch(query);
    }
  });

  // Hızlı Seçim Butonları
  document.querySelectorAll('.quick-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      const q = tag.getAttribute('data-query');
      productInput.value = q;
      startProductSearch(q);
    });
  });

  // İndirim Yüzdesi Butonları (%5, %10, %15, %20)
  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (!currentActiveProduct) return;
      const currentPrice = currentActiveProduct.basePrice + currentActiveProduct.stores[0].priceOffset;
      const percent = parseInt(btn.getAttribute('data-percent'), 10);
      const discounted = Math.round(currentPrice * (1 - percent / 100));
      document.getElementById('targetPriceInput').value = discounted;
    });
  });

  // Telegram Checkbox'ı
  const checkTelegram = document.getElementById('checkTelegram');
  const telegramBox = document.getElementById('telegramConfigBox');
  if (checkTelegram && telegramBox) {
    checkTelegram.addEventListener('change', () => {
      telegramBox.style.display = checkTelegram.checked ? 'block' : 'none';
    });
  }

  // Alarm Kur Butonu
  document.getElementById('btnCreateAlarm').addEventListener('click', addAlarm);

  // Test Alarm Simülasyon Butonu
  document.getElementById('btnTestAlarmSimulation').addEventListener('click', simulatePriceDrop);

  // Modal Kapatma
  document.getElementById('btnDismissModal').addEventListener('click', () => {
    document.getElementById('alarmModal').style.display = 'none';
  });

  // Esc ile kapatma
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') document.getElementById('alarmModal').style.display = 'none';
  });

  // Ekran boyutu değişince grafiği yeniden çiz
  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (currentActiveProduct) renderTrendChart(currentActiveProduct.history);
    }, 150);
  });

  // Modal Dışına Tıklayınca Kapatma
  document.getElementById('alarmModal').addEventListener('click', (e) => {
    if (e.target.id === 'alarmModal') {
      document.getElementById('alarmModal').style.display = 'none';
    }
  });

  // Ses Aç/Kapat Butonu
  const btnAudioToggle = document.getElementById('btnAudioToggle');
  const applyAudioState = () => {
    btnAudioToggle.style.opacity = audioMuted ? '0.4' : '1';
    btnAudioToggle.title = audioMuted ? "Alarm Sesi Kapalı" : "Alarm Sesi Açık";
    btnAudioToggle.setAttribute('aria-pressed', String(audioMuted));
  };
  audioMuted = storageGet('tekara_muted') === '1';
  applyAudioState();
  btnAudioToggle.addEventListener('click', () => {
    audioMuted = !audioMuted;
    storageSet('tekara_muted', audioMuted ? '1' : '0');
    applyAudioState();
  });

  // İlk açılışta popüler ürünü otomatik ara (Kullanıcı ilk saniyede wow hissi yaşasın)
  // (Sayfa açılırken aşağı kaydırmasın — kullanıcı en üstte kalsın)
  productInput.value = "Sony WH-1000XM5 Kablosuz Kulaklık";
  startProductSearch("Sony WH-1000XM5", false);
});
