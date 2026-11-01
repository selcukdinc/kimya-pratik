// Her soru tek bir kavrama bağlanır (sorunun kavram alanı). Aralıklı tekrarda bir
// soruyu yanlış yapan kişiye aynı kavramdan henüz çözmediği sorular da eklenir.
// Kavramlar konulardan daha dardır ve üniteleri aşabilir (ör. mol kavramı hem
// 6. hem 10. ünitede). Her ünite kendi kavramlarını ekler.

export interface Kavram {
  ad: string;
}

export const KAVRAMLAR: Record<string, Kavram> = {
  // Üniteler kendi kavramlarını ekler
};
