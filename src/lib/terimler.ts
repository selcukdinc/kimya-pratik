// Derslerde ve sorularda geçen Türkçe terimlerin İngilizce karşılıkları.
// Ders ve soru metinlerinde terimin her kullanımından sonra "(convolution)" gibi
// gösterilir; kod bloklarına ve satır içi koda dokunulmaz. Terimler sayfası da
// bu listeden çizilir.

export interface Terim {
  tr: string;
  en: string;
  // Yalnızca büyük harfle yazıldığında eşleşen terimler (kısaltmalar için)
  buyuk?: boolean;
  aciklama?: string;
}

// Sık geçen genel sözcükler (madde, atom, molekül) bilerek listede yok: her
// kullanımda İngilizcesi yazılırsa metin okunmaz olur.
export const TERIMLER: Terim[] = [
  { tr: "homojen karışım", en: "homogeneous mixture", aciklama: "Her yerinde aynı bileşimde olan karışım; çözelti" },
  { tr: "heterojen karışım", en: "heterogeneous mixture", aciklama: "Bileşenleri ayırt edilebilen karışım" },
  { tr: "damıtma", en: "distillation", aciklama: "Kaynama noktası farkıyla sıvıları ayırma" },
  { tr: "kristallendirme", en: "crystallization", aciklama: "Çözünürlük farkıyla katıyı çözeltiden kristal olarak ayırma" },
  { tr: "izotop", en: "isotope", aciklama: "Proton sayısı aynı, nötron sayısı farklı atomlar" },
  { tr: "kuantum sayısı", en: "quantum number" },
  { tr: "orbital", en: "orbital", aciklama: "Elektronun bulunma olasılığının yüksek olduğu bölge" },
  { tr: "elektron dizilimi", en: "electron configuration" },
  { tr: "iyonlaşma enerjisi", en: "ionization energy", aciklama: "Gaz hâlindeki atomdan bir elektron koparmak için gereken enerji" },
  { tr: "elektron ilgisi", en: "electron affinity" },
  { tr: "elektronegatiflik", en: "electronegativity", aciklama: "Atomun bağ elektronlarını kendine çekme yeteneği" },
  { tr: "hibritleşme", en: "hybridization" },
  { tr: "hidrojen bağı", en: "hydrogen bond" },
  { tr: "dipol-dipol etkileşimi", en: "dipole-dipole interaction" },
  { tr: "London kuvvetleri", en: "London dispersion forces" },
  { tr: "birim hücre", en: "unit cell" },
  { tr: "koordinasyon sayısı", en: "coordination number" },
  { tr: "yarı iletken", en: "semiconductor" },
  { tr: "korozyon", en: "corrosion" },
  { tr: "katodik koruma", en: "cathodic protection" },
  { tr: "stokiyometri", en: "stoichiometry" },
  { tr: "sınırlayıcı bileşen", en: "limiting reactant" },
  { tr: "entalpi", en: "enthalpy" },
  { tr: "molarite", en: "molarity", aciklama: "Bir litre çözeltideki çözünenin mol sayısı" },
  { tr: "molalite", en: "molality", aciklama: "Bir kilogram çözücüdeki çözünenin mol sayısı" },
  { tr: "elektroliz", en: "electrolysis" },
  { tr: "VSEPR", en: "valence shell electron pair repulsion", buyuk: true },
];

export type Parca = string | { metin: string; en: string };

const kacir = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const HARF = "a-zçğıöşüâîû";

// Uzun terimler önce denenir ("dairesel konvolüsyon", "konvolüsyon"dan önce).
// Küçük harfli terimler cümle başında büyük harfle de eşleşir ve Türkçe ekleri
// kapsar (konvolüsyonu). Büyük harfli terimler kesme işaretli ekleri kapsar (DFT'nin).
// Hemen ardından "(" gelen kullanım zaten açıklanmış sayılır.
const DESEN = new RegExp(
  [...TERIMLER]
    .sort((a, b) => b.tr.length - a.tr.length)
    .map((t) => {
      if (t.buyuk) return `(${kacir(t.tr)}(?:'[${HARF}]+)?)`;
      const ilk = t.tr[0]!;
      return `([${ilk}${ilk.toLocaleUpperCase("tr")}]${kacir(t.tr.slice(1))}[${HARF}]*)`;
    })
    .map((g) => `(?<![\\p{L}\\d_])${g}(?![\\p{L}\\d_])(?!\\s*\\()`)
    .join("|"),
  "gu",
);
const SIRALI = [...TERIMLER].sort((a, b) => b.tr.length - a.tr.length);

export function terimleriAyir(metin: string): Parca[] {
  const out: Parca[] = [];
  let son = 0;
  for (const m of metin.matchAll(DESEN)) {
    const i = m.slice(1).findIndex((g) => g !== undefined);
    const terim = SIRALI[i]!;
    if (m.index! > son) out.push(metin.slice(son, m.index));
    out.push({ metin: m[0], en: terim.en });
    son = m.index! + m[0].length;
  }
  if (son < metin.length) out.push(metin.slice(son));
  return out;
}
