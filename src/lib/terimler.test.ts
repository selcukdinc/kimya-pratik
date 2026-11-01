import { describe, expect, it } from "vitest";
import { terimleriAyir } from "./terimler";

const yaz = (s: string) => terimleriAyir(s).map((p) => (typeof p === "string" ? p : `${p.metin} (${p.en})`)).join("");

describe("terimleriAyir", () => {
  it("uzun terim önce eşleşir", () => {
    expect(yaz("homojen karışım ile karışım")).toBe("homojen karışım (homogeneous mixture) ile karışım");
  });
  it("Türkçe ekleri ve cümle başını kapsar", () => {
    expect(yaz("Hibritleşme olur, hibritleşmesi sp3 olur.")).toBe("Hibritleşme (hybridization) olur, hibritleşmesi (hybridization) sp3 olur.");
  });
  it("büyük harfli kısaltmalar kesme işaretli ekleri kapsar, küçük harfle eşleşmez", () => {
    expect(yaz("VSEPR'ye göre, vsepr yazımı")).toBe("VSEPR'ye (valence shell electron pair repulsion) göre, vsepr yazımı");
  });
  it("zaten açıklanmış kullanımı atlar", () => {
    expect(yaz("Damıtma (distillation) yapılır")).toBe("Damıtma (distillation) yapılır");
  });
  it("başka kelimelerin içinde eşleşmez", () => {
    expect(yaz("ön damıtma, yeniden damıtma")).toBe("ön damıtma (distillation), yeniden damıtma (distillation)");
    expect(yaz("VSEPRx ve aVSEPR")).toBe("VSEPRx ve aVSEPR");
  });
});
