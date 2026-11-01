import { describe, expect, it } from "vitest";
import { sorular } from "../../content/sorular/index";
import { SINAVLAR } from "./sinavlar";
import { doneminiBul } from "../dersler";

describe("çıkmış sınavlar", () => {
  const kimlikler = new Map(sorular.map((s) => [s.id, s]));
  it("her sınav sorusu havuzda var ve orijinal", () => {
    for (const s of SINAVLAR)
      for (const id of s.sorular) {
        expect(kimlikler.get(id)?.kaynak, `${s.id}: ${id}`).toBe("original");
      }
  });
  it("her orijinal soru tam bir sınavda", () => {
    const hepsi = SINAVLAR.flatMap((s) => s.sorular);
    expect(new Set(hepsi).size).toBe(hepsi.length);
    expect(sorular.filter((s) => s.kaynak === "original" && !hepsi.includes(s.id)).map((s) => s.id)).toEqual([]);
  });
  it("sınavın dönemi sorularının ünitesiyle uyuşur", () => {
    for (const s of SINAVLAR)
      for (const id of s.sorular) expect(doneminiBul(kimlikler.get(id)!.hafta), id).toBe(s.donem);
  });
  it("sitede sınavın künyesi yazmaz", () => {
    const metin = JSON.stringify([SINAVLAR, sorular.filter((s) => s.kaynak === "original")]);
    expect(metin).not.toMatch(/Selçuk|S\.Ü\.|Ziraat|Fakülte|Tarım Ekonomisi/i);
  });
});
