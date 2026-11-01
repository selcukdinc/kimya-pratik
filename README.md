# Kimya Pratik

Genel Kimya dersi için açık kaynaklı, ücretsiz bir pratik sitesi.

**Site:** [kimya.selcukdinc.dev](https://kimya.selcukdinc.dev)

Kurulum yok, üyelik zorunlu değil. Siteyi aç, üniteyi oku, Sanal Lab'da deneyi yap, soruları çöz.

## Neler var?

- **Üniteler:** Vize ve final konularına ayrılmış kısa anlatımlar, etkileşimli şekiller ve ünite sonu testleri.
- **Sanal Lab:** Tarayıcıda çalışan deneyler: karışım ayırma, orbital doldurma, mol terazisi, VSEPR molekül kurucu,
  birim hücre, yarı iletken katkılama, galvanik hücre.
- **Soru havuzu:** Önceki yılların sınavlarında çıkmış **orijinal** sorular ve aynı konulardan **türetilmiş** yeni sorular.
  Şıklı, doğru/yanlış, boşluk doldurma ve sayısal cevaplı sorular.
- **Aralıklı tekrar:** Yanlış yaptığın sorular 1, 3, 7, 14 ve 30 gün arayla yeniden karşına çıkar.
- **İlerleme:** Konu ve ünite bazlı doğru oranları, etkinlik takvimi, günlük hedef. Sıralama ya da karşılaştırma yok.

## Gizlilik

- Reklam, analitik ya da takip çerezi yok; yalnızca oturum çerezi.
- Sanal Lab deneyleri tarayıcında çalışır, yaptıkların sunucuya gitmez.

## Katkı

- **Yanlış soru ya da hata mı gördün?** [Yeni bir issue aç](https://github.com/selcukdinc/kimya-pratik/issues/new).
  Hangi soru olduğunu (ünite ve sorunun metni) ve neyin yanlış olduğunu yazman yeterli.
- **Soru önermek ister misin?** Hesabınla giriş yapıp sitedeki [Soru öner](https://kimya.selcukdinc.dev/oner)
  sayfasını kullan.

## Geliştiriciler için

Gereksinim: Node.js 22.12 veya üstü.

```sh
npm install
npm run db:migrate:local   # yerel veritabanına şema ve sorular
npm run dev                # http://localhost:5173
npm test
```

Yerelde kayıt ve parola sıfırlamayı denemek için proje kökünde `.dev.vars`
dosyası oluşturup `EPOSTA_KONSOL=1` yaz. Doğrulama kodları e-posta yerine
`npm run dev` çıktısına düşer.

Kaynak belgeler (ders kitabı, sınav kâğıtları, ders notları) `docs/kaynaklar/`
altında yerelde durur ve depoya girmez.

## Yayına alma

İlk kurulumda `wrangler d1 create kimya-pratik` çıktısındaki `database_id`'yi `wrangler.jsonc`'te iki yere yaz,
sonra migration'ları uygula ve yayımla:

```sh
npx wrangler d1 migrations apply kimya-pratik --remote
npm run deploy
```

`npm run deploy` önce `vite build` çalıştırır; Cloudflare eklentisi derlenen
dosyaların yerini (`assets.directory`) yayın ayarına o sırada ekler. Derlemeden
doğrudan `npx wrangler deploy` çalıştırılırsa "`assets` property ... missing the
required `directory` property" hatası alınır.

## Lisans

[GPL-3.0-or-later](LICENSE).

Formüller [KaTeX](https://katex.org) (MIT) ile çizilir.
