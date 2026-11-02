// İlerlemem sayfasındaki etkinlik ısı haritası (.takvim-izgara) yatay bir flex
// satırıdır. Tekrar sayfasındaki 30 günlük takvim aynı sınıfı kullanınca
// 7 sütunlu grid kuralı ısı haritasını da sarıp bozuyordu; takvim artık
// .tekrar-izgara kullanır.
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const oku = (yol: string) => readFileSync(new URL(yol, import.meta.url), "utf8");
const css = oku("../styles.css").replace(/\/\*[\s\S]*?\*\//g, "");

// Seçici listesinde tam olarak `.takvim-izgara` geçen kuralların gövdeleri
function kurallar(secici: string): string[] {
  const out: string[] = [];
  for (const m of css.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    const seciciler = m[1]!.split(",").map((s) => s.trim());
    if (seciciler.includes(secici)) out.push(m[2]!);
  }
  return out;
}

describe("etkinlik ısı haritası stili", () => {
  it(".takvim-izgara yalnızca bir kez ve flex olarak tanımlı", () => {
    const k = kurallar(".takvim-izgara");
    expect(k).toHaveLength(1);
    expect(k[0]).toMatch(/display:\s*flex/);
    expect(k[0]).not.toMatch(/grid-template-columns/);
  });
  it("tekrar takvimi ısı haritasının sınıfını kullanmıyor", () => {
    expect(oku("../pages/Tekrar.tsx")).not.toContain('"takvim-izgara"');
  });
});
