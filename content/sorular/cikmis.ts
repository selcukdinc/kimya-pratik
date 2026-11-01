// Çıkmış sınav sorularını Soru biçimine çeviren yardımcı. Orijinal sorular
// sınavdaki metne ve cevap anahtarına sadık kalır; anahtar tartışmalıysa doğru
// bilgi açıklamada "Not:" ile verilir. Sınavın künyesi (üniversite, fakülte)
// yazılmaz; ref yalnızca "2024 vize, 7. soru" gibi kısa bir yer bilgisidir.

import type { Soru } from "./tipler.ts";

type Govde = {
  sira: number;
  hafta: number;
  konu: string;
  kavram: string;
  zorluk?: 1 | 2 | 3;
  soru: string;
  secenekler: string[];
  dogru: number;
  aciklama: string;
};

// on: kimlik öneki (ör. "v24"), refAdi: "2024 vize"
export function cikmisSorular(on: string, refAdi: string, liste: Govde[]): Soru[] {
  return liste.map((g) => ({
    id: `${on}-${String(g.sira).padStart(2, "0")}`,
    tip: "mcq",
    kaynak: "original",
    hafta: g.hafta,
    konu: g.konu,
    kavram: g.kavram,
    zorluk: g.zorluk ?? 1,
    ref: `${refAdi}, ${g.sira}. soru`,
    soru: g.soru,
    secenekler: g.secenekler,
    dogru: g.dogru,
    aciklama: g.aciklama,
  }));
}
