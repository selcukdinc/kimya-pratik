import type { Konu } from "./tipler.ts";

// Ünitelerin konuları. hafta alanı ünite numarasıdır (1-9 vize, 10-16 final).
export const vizeKonulari: Konu[] = [
  { id: "madde-karisim", baslik: "Madde, karışımlar, fiziksel ve kimyasal olaylar", hafta: 1, sira: 1 },
  { id: "ayirma", baslik: "Karışımları ayırma yöntemleri", hafta: 1, sira: 2 },
  { id: "olcme-birim", baslik: "Ölçme, birimler ve sıcaklık ölçekleri", hafta: 2, sira: 1 },
  { id: "kimya-kanunlari", baslik: "Kimya kanunları", hafta: 2, sira: 2 },
  { id: "atom-modelleri", baslik: "Atom modelleri", hafta: 3, sira: 1 },
  { id: "kuantum", baslik: "Işık, De Broglie ve kuantum sayıları", hafta: 4, sira: 1 },
  { id: "elektron-dizilimi", baslik: "Elektron dizilimi kuralları", hafta: 4, sira: 2 },
  { id: "periyodik-tablo", baslik: "Periyodik tabloda yer bulma", hafta: 5, sira: 1 },
  { id: "periyodik-ozellikler", baslik: "Periyodik özellikler", hafta: 5, sira: 2 },
  { id: "mol", baslik: "Mol kavramı ve Avogadro sayısı", hafta: 6, sira: 1 },
  { id: "kimyasal-bag", baslik: "Kimyasal bağ türleri", hafta: 7, sira: 1 },
  { id: "molekul-geometrisi", baslik: "Hibritleşme ve molekül geometrisi", hafta: 7, sira: 2 },
  { id: "molekuller-arasi", baslik: "Moleküller arası etkileşimler", hafta: 8, sira: 1 },
  { id: "katilar", baslik: "Katılar ve kristal yapı", hafta: 8, sira: 2 },
  { id: "metal-ametal", baslik: "Metaller, ametaller ve yarı iletkenler", hafta: 9, sira: 1 },
  { id: "korozyon", baslik: "Korozyon ve korunma yöntemleri", hafta: 9, sira: 2 },
];
