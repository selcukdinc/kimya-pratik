import type { Konu, Soru } from "./tipler.ts";
import { vizeKonulari } from "./konular.ts";
import { vize2024 } from "./cikmis-vize-2024.ts";
import { vizeDerleme } from "./cikmis-vize-derleme.ts";
import { unite1 } from "./unite-1.ts";
import { unite2 } from "./unite-2.ts";
import { unite3 } from "./unite-3.ts";
import { unite4 } from "./unite-4.ts";

// Konular ünitelere bölünür (hafta alanı ünite numarasıdır); her ünite kendi
// konularını ve soru dosyalarını ekler. Orijinal çıkmış sorular cikmis-*.ts,
// türetilmiş sorular unite-N.ts ve ek-unite-N.ts dosyalarındadır.
export const konular: Konu[] = [...vizeKonulari];

// Türetilmiş soruların yedek olanları havuzda görünmez, tekrarda gelir
export const sorular: Soru[] = [...vize2024, ...vizeDerleme, ...unite1, ...unite2, ...unite3, ...unite4];
