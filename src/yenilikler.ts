// Sitedeki yenilikler, en yenisi en üstte. Kullanıcıya görünen her değişiklik
// (her PR) buraya bir kayıt ekler; yenilikler.test.ts sırayı ve biçimi denetler.
// Maddeler kullanıcının diliyle yazılır: ne değişti, sana ne kazandırır.
// Markdown alt kümesi kullanılabilir (`kod`, **kalın**).

export interface Yenilik {
  // Değişikliği getiren PR'ın numarası; kaydın kimliği de budur
  pr: number;
  // YYYY-AA-GG
  tarih: string;
  baslik: string;
  maddeler: string[];
}

export const YENILIKLER: Yenilik[] = [
  {
    pr: 1,
    tarih: "2026-11-01",
    baslik: "Kimya Pratik açıldı",
    maddeler: [
      "Genel Kimya için yeni çalışma alanı: üniteler **Vize** ve **Final** konularına göre iki gruba ayrıldı.",
      "**Sanal Lab** bölümü açıldı. Karışım ayırma, orbital doldurma, VSEPR molekül kurucu ve galvanik hücre gibi deneyler sırayla ekleniyor.",
      "Soru havuzu, aralıklı tekrar, ilerleme takvimi ve günlük hedef hazır; sorular ünitelerle birlikte geliyor.",
    ],
  },
];
