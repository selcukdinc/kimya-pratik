// Sanal Lab deneyleri. Her deney tarayıcıda çalışan, SVG ve React ile çizilen
// etkileşimli bir düzenektir; bir üniteye ve o ünitenin sorularına bağlanır.
// Bileşeni henüz yazılmamış deneyler katalogda "Yakında" diye görünür.

import type { ComponentType } from "react";

export interface Deney {
  id: string;
  ad: string;
  ozet: string;
  // Deneyin anlatıldığı ünite (src/dersler)
  unite: number;
  // Deneyin bileşeni; yoksa deney henüz hazırlanıyor
  bilesen?: ComponentType;
}

export const DENEYLER: Deney[] = [
  { id: "ayirma", ad: "Karışım ayırma tezgâhı", unite: 1, ozet: "Bir karışım ve bir yöntem seç: süzme, mıknatıs, damıtma ya da kristallendirme. Doğru yöntem karışımı ayırır, yanlışsa nedenini görürsün." },
  { id: "sicaklik", ad: "Termometre ve birim dönüştürücü", unite: 2, ozet: "°C, °F ve K ölçekleri arasında sürükleyerek dönüşüm yap; suyun donma ve kaynama noktalarını üç ölçekte karşılaştır." },
  { id: "orbital", ad: "Orbital doldurma", unite: 4, ozet: "Elektronları orbital kutularına yerleştir. Aufbau, Pauli ve Hund kurallarını çiğnersen uyarı alırsın; dizilimden periyot ve grubu bul." },
  { id: "periyodik", ad: "Periyodik eğilim haritası", unite: 5, ozet: "Atom yarıçapı, iyonlaşma enerjisi, elektron ilgisi ve elektronegatifliği renk ölçeğiyle tablo üzerinde gör." },
  { id: "mol", ad: "Mol terazisi", unite: 6, ozet: "Bir maddeyi tart; mol sayısını, molekül sayısını ve atom sayısını sırasıyla hesapla." },
  { id: "vsepr", ad: "VSEPR molekül kurucu", unite: 7, ozet: "Merkez atoma bağ ve ortaklanmamış elektron çifti ekle; geometri, bağ açısı, hibritleşme ve polarlık hesaplanır." },
  { id: "birim-hucre", ad: "Birim hücre görüntüleyici", unite: 8, ozet: "Basit, hacim merkezli ve yüzey merkezli kübik hücreleri döndür; tanecik ve koordinasyon sayısını say." },
  { id: "yari-iletken", ad: "Yarı iletken katkılama", unite: 9, ozet: "Silisyum örgüsüne fosfor ya da bor ekle; n tipi ve p tipi yarı iletkenin nasıl oluştuğunu gör." },
  { id: "galvanik", ad: "Galvanik hücre ve korozyon", unite: 16, ozet: "İki metal seç; anot, katot ve hücre potansiyelini bul, hangi metalin aşınacağını ve katodik korumayı gör." },
];

export const deneyBul = (id: string) => DENEYLER.find((d) => d.id === id);
