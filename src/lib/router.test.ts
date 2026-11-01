import { describe, expect, it } from "vitest";
import { href, parseHash, parsePath } from "./router";

describe("yönlendirici", () => {
  it("yolları çözer ve geri üretir", () => {
    for (const r of [
      { page: "lab" },
      { page: "lab", deney: "ayirma" },
      { page: "cikmis" },
      { page: "cikmis", sinav: "vize-2024" },
      { page: "sorular" },
      { page: "sorular", topic: "mol-kavrami" },
      { page: "sorular", hafta: 3 },
      { page: "ders" },
      { page: "tanitim" },
      { page: "sss" },
      { page: "ders", hafta: 4 },
      { page: "ayarlar" },
      { page: "ayarlar", sekme: "hesap" },
      { page: "ayarlar", sekme: "sil" },
      { page: "giris", sonra: "/sorular/mol-kavrami" },
      { page: "yonetim", bolum: "genel" },
      { page: "yonetim", bolum: "sorular" },
      { page: "yonetim", bolum: "sorular", soru: "u6-avogadro" },
      { page: "yonetim", bolum: "kullanicilar" },
      { page: "yonetim", bolum: "oneriler", alt: "abc" },
      { page: "yonetim", bolum: "mesajlar" },
      { page: "oner" },
      { page: "mesajlar" },
      { page: "mesajlar", id: "t-1" },
    ] as const) {
      const u = new URL(href(r), "https://x");
      expect(parsePath(u.pathname, u.search)).toEqual(r.page === "sorular" && !("topic" in r) && !("hafta" in r) ? { page: "sorular", topic: undefined } : r);
    }
  });
  it("kök adres Sanal Lab'ı açar, bilinmeyen adres bulunamadı döner", () => {
    expect(parsePath("/")).toEqual({ page: "lab" });
    expect(parsePath("/pratik")).toEqual({ page: "lab" });
    expect(parsePath("/topluluk")).toEqual({ page: "bulunamadi" });
    expect(parsePath("/yok-boyle")).toEqual({ page: "bulunamadi" });
  });
  it("girişten sonra başka siteye yönlendirmez", () => {
    expect(parsePath("/giris", "?sonra=https://kotu.example")).toEqual({ page: "giris", sonra: undefined });
    expect(parsePath("/giris", "?sonra=//kotu.example")).toEqual({ page: "giris", sonra: undefined });
  });
  it("eski hash adreslerini çevirir", () => {
    expect(parseHash("#/sorular/mol-kavrami")).toEqual({ page: "sorular", topic: "mol-kavrami" });
    expect(parseHash("#/ilerleme")).toEqual({ page: "ilerleme" });
    expect(parseHash("")).toBeNull();
    expect(parseHash("#baslik")).toBeNull();
  });
});
