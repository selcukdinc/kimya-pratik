// Çıkmış sınavlar: Çıkmış sorular sayfasında sınavdaki sırasıyla deneme
// sınavı olarak çözülür. Burada yalnızca soru kimlikleri durur; soruların
// kendisi ve cevapları content/sorular altındadır ve istemciye cevap gitmez.
// sinavlar.test.ts kimliklerin soru havuzuyla uyuştuğunu denetler.

import type { Donem } from "../dersler/tipler";

export interface CikmisSinav {
  id: string;
  ad: string;
  donem: Donem;
  // Kısa açıklama: sınavın kaynağı, cevap anahtarının durumu
  aciklama: string;
  // Soruların sınavdaki sırası
  sorular: string[];
}

const sirala = (on: string, siralar: number[]) => siralar.map((n) => `${on}-${String(n).padStart(2, "0")}`);

export const SINAVLAR: CikmisSinav[] = [
  {
    id: "vize-2024",
    ad: "2024 vize sınavı",
    donem: "vize",
    aciklama: "21 çoktan seçmeli soru. Cevap anahtarı sınav kâğıdından alındı; tartışmalı sorularda açıklamada not var.",
    sorular: sirala("v24", Array.from({ length: 21 }, (_, i) => i + 1)),
  },
  {
    id: "vize-derleme",
    ad: "Vize derlemesi",
    donem: "vize",
    aciklama: "Önceki yılların vize sınavlarından derlenen 17 soru. Anahtarı olmadığı için cevaplar hesaplanarak bulundu.",
    sorular: sirala("vd", [2, 4, 6, 7, 9, 10, 11, 12, 13, 15, 16, 17, 19, 22, 23, 24, 25]),
  },
];

export const sinavBul = (id: string) => SINAVLAR.find((s) => s.id === id);
