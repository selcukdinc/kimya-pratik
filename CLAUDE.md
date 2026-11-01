# Çalışma notları

- Kullanıcıya görünen her değişiklik (her PR) `src/yenilikler.ts` dosyasının en üstüne bir kayıt ekler: PR numarası, tarih, kısa başlık ve kullanıcının diliyle maddeler. `src/yenilikler.test.ts` sırayı ve biçimi denetler.
- Site **üniteler** halinde ilerler ve üniteler **vize** (1-9) ve **final** (10-16) olarak ikiye ayrılır (`src/dersler/index.ts`). Kodda, veritabanında ve soru dosyalarında ünite numarasının alanı tarihsel nedenle `hafta`/`week`tir; kullanıcıya her yerde "ünite" yazılır.
- Topluluk özellikleri (paylaşım, beğeni, bildirim, herkese açık profil) bilinçli olarak yok; geri eklenmez.
- Kaynaklar (`docs/kaynaklar/`: ders kitabı, çıkmış sınavlar, soru çözümleri, ders notu fotoğrafları) telifli ya da kişiseldir: depoya eklenmez. Şekiller kendi SVG'lerimizle çizilir, anlatımlar kendi cümlelerimizle yazılır.
- Orijinal (çıkmış) sorular `kaynak: "original"` alır ve sınavın cevap anahtarıyla girilir. Anahtar tartışmalıysa doğru bilgi açıklamada "Not:" ile verilir. Sitede sınavın künyesi (üniversite, fakülte, bölüm) yazılmaz; ref alanında yalnızca "2024 vize, 7. soru" gibi kısa bir yer bilgisi olur.
- Yeni bir soru eklenirse cevabı ilgili ünitenin metninde geçmelidir.
- Sayısal (`num`) soruların cevapları `shared/grade.ts`'teki belirtimle yazılır ("0.75", "34.5±0.1", "4.52e23±0.01e23") ve hesapla doğrulanır.
- Sanal Lab deneyleri `src/lab/deneyler.ts`'e kaydedilir; bileşenleri `src/lab/` altındadır ve tamamen tarayıcıda çalışır.
- Metinlerde ikilemeler kullanılmaz ("tek tek", "adım adım" yerine "sırayla", "adımlarla" yazılır).
- Denetimler: `npx tsc -b`, `npx vitest run`, `npm run build`.
