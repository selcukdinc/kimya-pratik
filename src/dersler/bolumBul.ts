// Bir sorunun cevabının anlatıldığı ders bölümü. Soru kartındaki "Derste oku"
// bağlantısı buradan gelir; sınav kâğıdındaki yer öğrenciye bir şey
// söylemediği için gösterilmez.
import { DERSLER } from "./index";

// Hafta -> kavram -> bölümün sırası (0'dan). Kavramlar shared/kavramlar.ts'de.
export const KAVRAM_BOLUMU: Record<number, Record<string, number>> = {
  1: { "madde-sinif": 0, "karisim-ozellik": 0, "fiziksel-kimyasal": 1, "ayirma-yontemi": 2, kristallendirme: 3 },
  2: { "birim-donusum": 0, "anlamli-rakam": 0, "sicaklik-olcegi": 1, yogunluk: 2, "kimya-kanunlari": 3 },
  3: { "dalton-modeli": 0, "rutherford-modeli": 1, "atom-tanecikleri": 2, "bohr-modeli": 3 },
  4: { "foton-enerjisi": 0, "de-broglie": 1, "kuantum-sayilari": 2, "dizilim-kurallari": 3 },
};

export interface SoruBolumu {
  hafta: number;
  // Ders sayfasındaki bölümün sırası (0'dan); bölüm bulunamadıysa null
  bolum: number | null;
  baslik: string;
}

export function soruBolumu(q: { id: string; week: number; kavram?: string | null }): SoruBolumu | null {
  // Önce "Kendini dene"de kullanıldığı bölüm
  for (const d of DERSLER) {
    const i = d.bolumler.findIndex((b) => b.dene?.includes(q.id));
    if (i >= 0) return { hafta: d.hafta, bolum: i, baslik: d.bolumler[i]!.baslik };
  }
  const d = DERSLER.find((x) => x.hafta === q.week);
  if (!d) return null;
  const i = q.kavram ? KAVRAM_BOLUMU[q.week]?.[q.kavram] : undefined;
  if (i !== undefined && d.bolumler[i]) return { hafta: d.hafta, bolum: i, baslik: d.bolumler[i].baslik };
  return { hafta: d.hafta, bolum: null, baslik: d.baslik };
}

export const bolumId = (i: number) => `bolum-${i + 1}`;
