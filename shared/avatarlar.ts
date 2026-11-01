// Avatar kimlikleri. Çizimler src/components/Avatar.tsx'te; sunucu sadece
// kimliğin bu listede olup olmadığına bakar.

export interface AvatarBilgi {
  id: string;
  ad: string;
  grup: string;
}

const g = (grup: string, liste: [string, string][]): AvatarBilgi[] => liste.map(([id, ad]) => ({ id, ad, grup }));

export const AVATARLAR: AvatarBilgi[] = [
  ...g("Laboratuvar", [
    ["erlenmeyer", "Erlenmeyer"], ["beher", "Beher"], ["deney-tupu", "Deney tüpü"], ["balon", "Dibi yuvarlak balon"],
    ["mezur", "Mezur"], ["pipet", "Pipet"], ["huni", "Süzme hunisi"], ["bunzen", "Bunzen beki"], ["termometre", "Termometre"],
    ["terazi", "Terazi"], ["mikroskop", "Mikroskop"], ["gozluk", "Koruyucu gözlük"],
  ]),
  ...g("Atom ve molekül", [
    ["atom", "Atom modeli"], ["orbital-p", "p orbitali"], ["elektron-bulutu", "Elektron bulutu"], ["benzen", "Benzen halkası"],
    ["su", "Su molekülü"], ["dortyuzlu", "Düzgün dörtyüzlü"], ["dogrusal", "Doğrusal molekül"], ["kristal", "Kübik kristal"],
  ]),
  ...g("Elementler", [
    ["el-h", "H"], ["el-c", "C"], ["el-o", "O"], ["el-n", "N"], ["el-na", "Na"], ["el-fe", "Fe"], ["el-au", "Au"], ["el-he", "He"],
  ]),
  ...g("Olaylar", [
    ["alev", "Alev"], ["damla", "Damla"], ["kabarcik", "Kabarcıklar"], ["miknatis", "Mıknatıs"], ["pil", "Pil"], ["ph", "pH kâğıdı"],
  ]),
];

export const AVATAR_IDLERI = new Set(AVATARLAR.map((a) => a.id));

// Arka plan renkleri: hepsi açık tonlar, üzerindeki çizim koyu kalır.
// "yok" seçilirse çizim temanın yazı rengini alır.
export const AVATAR_ZEMINLERI = [
  "#d9e6f7", "#dcefd9", "#fbe3c8", "#f6d6d6", "#e6dcf5", "#d4eeee", "#f3ecc2", "#e3e3e3",
] as const;

export function rastgeleAvatar(): string {
  const i = crypto.getRandomValues(new Uint32Array(1))[0]! % AVATARLAR.length;
  return AVATARLAR[i]!.id;
}
