// Ünite sayfalarının biçimi. Metinler kendi cümlelerimizle yazılır; kitaplar,
// ders notları ve sınav kâğıtları depoya girmez.
//
// Metinlerde ` yerine ~ yazılır (şablon dizgilerinde ters tırnak kaçış
// gerektirdiği için); md() ~ karakterlerini ` ile değiştirir. Gerçek ~ karakteri
// gerekirse ¬ yazılır.
// Formüller $...$ (satır içi) ve $$...$$ (ayrı satır) arasında TeX olarak yazılır.
//
// Tarihsel nedenle ünite numarasının alanı `hafta`dır: veritabanındaki week
// sütunu, soru dosyaları ve ilerleme kayıtları bu adı kullanır.

export type Donem = "vize" | "final";

export const DONEM_ADI: Record<Donem, string> = { vize: "Vize", final: "Final" };

export interface DersBolumu {
  baslik: string;
  metin: string;
  // Bölümle ilgili Sanal Lab deneyi (src/lab/deneyler.ts'deki kimlik)
  lab?: string;
  // Bölümün sonundaki "Kendini dene": soru havuzundan 1-2 soru (konu sonu
  // testindekilerden farklı)
  dene?: string[];
}

export interface Ders {
  hafta: number;
  donem: Donem;
  baslik: string;
  ozet: string;
  bolumler: DersBolumu[];
  // Konu sonu testi: soru havuzundaki kimlikler
  test: string[];
}

// Listelerde ve başlıklarda ünitenin adı: "3. ünite"
export const haftaAdi = (d: Pick<Ders, "hafta">) => `${d.hafta}. ünite`;

export const md = (s: string) => s.replace(/~/g, "`").replace(/¬/g, "~").trim();
