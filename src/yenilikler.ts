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
    pr: 5,
    tarih: "2026-11-02",
    baslik: "Etkinlik takvimi düzeldi",
    maddeler: [
      "İlerlemem sayfasındaki **Etkinlik** ısı haritası yeniden tek satırda soldan sağa diziliyor; haftalar ikiye bölünmüyor, ay ve gün etiketleri yerinde duruyor.",
    ],
  },
  {
    pr: 3,
    tarih: "2026-11-01",
    baslik: "İlk dört ünite ve üç deney",
    maddeler: [
      "1-4. üniteler yazıldı: madde ve ayırma yöntemleri, ölçme ve kimya kanunları, atom modelleri, kuantum sayıları ve elektron dizilimi. Her bölümde çözümlü örnekler ve **Kendini dene** soruları var.",
      "Bu ünitelerden 74 yeni **Türetilmiş** soru eklendi; sayısal sorularda cevabını virgülle ya da üslü yazabilirsin.",
      "Sanal Lab'da üç deney açıldı: **Karışım ayırma tezgâhı**, **Termometre ve birim dönüştürücü** ve **Orbital doldurma**. Orbital doldurmada Aufbau, Pauli ve Hund kurallarını çiğnersen nedenini görürsün.",
      "Terimlerin İngilizcesi artık her bölümde yalnızca ilk geçtiği yerde yazılıyor; metin daha rahat okunuyor.",
    ],
  },
  {
    pr: 2,
    tarih: "2026-11-01",
    baslik: "Çıkmış sorular geldi",
    maddeler: [
      "Vize ünitelerinin (1-9) konuları açıldı; önceki vize sınavlarından 38 **Orijinal** soru soru havuzuna eklendi.",
      "Yeni **Çıkmış sorular** sayfasında bir sınavı kâğıttaki sırasıyla deneme gibi çözebilir, sonunda puanını ve ünitelere göre dökümünü görebilirsin.",
      "Cevap anahtarında tartışmalı bir nokta olan sorularda açıklama doğru bilgiyi ayrıca **Not:** ile verir.",
    ],
  },
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
