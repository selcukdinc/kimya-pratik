import type { Konu, Soru } from "./tipler.ts";
import { vizeKonulari } from "./konular.ts";
import { vize2024 } from "./cikmis-vize-2024.ts";
import { vizeDerleme } from "./cikmis-vize-derleme.ts";

// Konular ünitelere bölünür (hafta alanı ünite numarasıdır); her ünite kendi
// konularını ve soru dosyalarını ekler. Orijinal çıkmış sorular cikmis-*.ts,
// türetilmiş sorular unite-N.ts ve ek-unite-N.ts dosyalarındadır.
export const konular: Konu[] = [...vizeKonulari];

// ek-* dosyaları türetilen sorulardır; yedek olanlar havuzda görünmez, tekrarda gelir
export const sorular: Soru[] = [...vize2024, ...vizeDerleme];
