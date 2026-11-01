import type { Konu, Soru } from "./tipler.ts";

// Konular ünitelere bölünür (hafta alanı ünite numarasıdır); her ünite kendi
// konularını ve soru dosyalarını ekler. Orijinal çıkmış sorular cikmis-*.ts,
// türetilmiş sorular unite-N.ts ve ek-unite-N.ts dosyalarındadır.
export const konular: Konu[] = [];

// ek-* dosyaları türetilen sorulardır; yedek olanlar havuzda görünmez, tekrarda gelir
export const sorular: Soru[] = [];
