// Her soru tek bir kavrama bağlanır (sorunun kavram alanı). Aralıklı tekrarda bir
// soruyu yanlış yapan kişiye aynı kavramdan henüz çözmediği sorular da eklenir.
// Kavramlar konulardan daha dardır ve üniteleri aşabilir (ör. mol kavramı hem
// 6. hem 10. ünitede). Her ünite kendi kavramlarını ekler.

export interface Kavram {
  ad: string;
}

export const KAVRAMLAR: Record<string, Kavram> = {
  // Ünite 1
  "fiziksel-kimyasal": { ad: "Fiziksel ve kimyasal değişim" },
  "karisim-ozellik": { ad: "Karışımların özellikleri" },
  "ayirma-yontemi": { ad: "Karışımları ayırma yöntemleri" },
  kristallendirme: { ad: "Kristallendirme" },
  // Ünite 2
  "sicaklik-olcegi": { ad: "Sıcaklık ölçekleri arasında dönüşüm" },
  // Ünite 3
  "dalton-modeli": { ad: "Dalton atom modeli" },
  "rutherford-modeli": { ad: "Thomson ve Rutherford atom modelleri" },
  "bohr-modeli": { ad: "Bohr atom modeli" },
  // Ünite 4
  "de-broglie": { ad: "De Broglie dalga boyu" },
  "kuantum-sayilari": { ad: "Kuantum sayıları" },
  "dizilim-kurallari": { ad: "Aufbau, Pauli ve Hund kuralları" },
  // Ünite 5
  "periyot-grup": { ad: "Elektron diziliminden periyot ve grup bulma" },
  elektronegatiflik: { ad: "Elektronegatiflik" },
  // Ünite 6
  "mol-kutle": { ad: "Mol, kütle ve tanecik sayısı" },
  // Ünite 7
  "bag-turu": { ad: "İyonik ve kovalent bağ" },
  "kovalent-bag-kosul": { ad: "Kovalent bağ oluşumunun koşulları" },
  hibritlesme: { ad: "Hibritleşme" },
  vsepr: { ad: "Molekül geometrisi ve polarlık" },
  // Ünite 8
  "etkilesim-turu": { ad: "Moleküller arası etkileşim türleri" },
  "hidrojen-bagi": { ad: "Hidrojen bağı" },
  "birim-hucre": { ad: "Birim hücre ve katı yoğunluğu" },
  // Ünite 9
  "ametal-ozellik": { ad: "Metal ve ametallerin özellikleri" },
  "yari-iletken": { ad: "n ve p tipi yarı iletkenler" },
  "korozyon-turu": { ad: "Korozyon türleri ve etkenleri" },
  "korozyon-koruma": { ad: "Korozyondan korunma" },
};
