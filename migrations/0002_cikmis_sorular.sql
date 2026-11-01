-- Bu dosya scripts/sorular-sql.ts ile content/sorular'dan üretildi, elle düzenlemeyin.

INSERT INTO topics (id, title, week, sort) VALUES ('madde-karisim', 'Madde, karışımlar, fiziksel ve kimyasal olaylar', 1, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, title, week, sort) VALUES ('ayirma', 'Karışımları ayırma yöntemleri', 1, 2)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, title, week, sort) VALUES ('olcme-birim', 'Ölçme, birimler ve sıcaklık ölçekleri', 2, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, title, week, sort) VALUES ('kimya-kanunlari', 'Kimya kanunları', 2, 2)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, title, week, sort) VALUES ('atom-modelleri', 'Atom modelleri', 3, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, title, week, sort) VALUES ('kuantum', 'Işık, De Broglie ve kuantum sayıları', 4, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, title, week, sort) VALUES ('elektron-dizilimi', 'Elektron dizilimi kuralları', 4, 2)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, title, week, sort) VALUES ('periyodik-tablo', 'Periyodik tabloda yer bulma', 5, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, title, week, sort) VALUES ('periyodik-ozellikler', 'Periyodik özellikler', 5, 2)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, title, week, sort) VALUES ('mol', 'Mol kavramı ve Avogadro sayısı', 6, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, title, week, sort) VALUES ('kimyasal-bag', 'Kimyasal bağ türleri', 7, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, title, week, sort) VALUES ('molekul-geometrisi', 'Hibritleşme ve molekül geometrisi', 7, 2)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, title, week, sort) VALUES ('molekuller-arasi', 'Moleküller arası etkileşimler', 8, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, title, week, sort) VALUES ('katilar', 'Katılar ve kristal yapı', 8, 2)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, title, week, sort) VALUES ('metal-ametal', 'Metaller, ametaller ve yarı iletkenler', 9, 1)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;
INSERT INTO topics (id, title, week, sort) VALUES ('korozyon', 'Korozyon ve korunma yöntemleri', 9, 2)
  ON CONFLICT(id) DO UPDATE SET title = excluded.title, week = excluded.week, sort = excluded.sort;

INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('v24-01', 'atom-modelleri', 3, 'mcq', 'original', 'Atom kavramı ile Dalton atom modelinin

I. Atom parçalanamaz.
II. Bir elementin bütün atomları her yönüyle özdeştir.
III. Farklı elementlerin atomları da farklıdır.

görüşlerinden hangileri zaman içerisinde çürütülmüştür?', '{"choices":["Yalnız I","Yalnız II","I ve III","II ve III","Hepsi"]}', '{"index":0}', 'Atomun proton, nötron ve elektrondan oluştuğunun anlaşılmasıyla "atom parçalanamaz" görüşü çürütüldü. Sınavın anahtarı **Yalnız I**''dir.

> **Not:** İzotopların keşfi, aynı elementin atomlarının kütlece farklı olabileceğini gösterdi; yani II. görüş de çürütüldü. Doğru cevap "I ve II" olurdu, ama bu şık sınavda yoktu.', 2, '2024 vize, 1. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('v24-02', 'atom-modelleri', 3, 'mcq', 'original', 'Rutherford, yaptığı deney sonucunda 1911 yılında yeni bir atom modeli geliştirdi. Bu atom modeline göre aşağıdakilerden hangisinin yanlışlığı ortaya konmuştur?', '{"choices":["Elektronlar çekirdek etrafında bulunur ve pozitif yüklere eşit sayıdadır.","Bir atomda pozitif yükün tümü, çekirdek denilen küçük bölgede toplanmıştır.","Atomda + ve − yükler, tıpkı üzümlü kek gibi eşit şekilde dağılmış olarak yer alır.","Elektronun e/m oranı bulunmuştur.","Nötronun varlığı ortaya konmuştur."]}', '{"index":2}', 'Altın levha deneyinde alfa taneciklerinin çoğu sapmadan geçti, çok azı geri döndü. Bu, pozitif yükün küçük bir çekirdekte toplandığını gösterdi ve Thomson''ın "üzümlü kek" modelini çürüttü.', 1, '2024 vize, 2. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('v24-03', 'periyodik-ozellikler', 5, 'mcq', 'original', 'Bağ elektronlarını çekebilme kabiliyetinin bir ölçüsüne ne denir?', '{"choices":["Elektron ilgisi","İyonlaşma enerjisi","Elektronegatiflik","Dipol moment","Dielektrik sabiti"]}', '{"index":2}', 'Elektronegatiflik, bir atomun **bağ** elektronlarını kendine çekme yeteneğidir. Elektron ilgisi ise yalıtılmış gaz atomunun elektron aldığında açığa çıkan enerjidir; bağla ilgili değildir.', 1, '2024 vize, 3. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('v24-04', 'molekul-geometrisi', 7, 'mcq', 'original', 'Aşağıdaki bileşiklerden hangisinde merkez atom sp³ hibritleşmesi yapmıştır?', '{"choices":["SH₆","PH₅","CH₄","BH₃","BeH₂"]}', '{"index":2}', 'CH₄''te karbon dört bağ yapar ve ortaklanmamış elektron çifti yoktur: sp³, düzgün dörtyüzlü. BeH₂ sp, BH₃ sp², PH₅ sp³d, SH₆ sp³d² hibritleşmesine örnektir.', 1, '2024 vize, 4. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('v24-05', 'kimyasal-bag', 7, 'mcq', 'original', 'Kovalent bağ oluşumu için gereken şartlar aşağıdaki seçeneklerin hangisinde doğru olarak verilmiştir?', '{"choices":["Yakınlık, benzer fiziksel özellik, yarıçap uyumu","Valans elektron, orbital enerji düzeyi, simetri","Yakınlık, orbital enerji düzeyi, simetri","Simetri, benzer fiziksel özellik, yarıçap uyumu","Bir çift elektron bulunması, yarıçap uyumu, elektrostatik etkileşim"]}', '{"index":2}', 'Kovalent bağ için orbitallerin örtüşmesi gerekir: atomlar yeterince **yakın** olmalı, örtüşen orbitallerin **enerji düzeyleri** birbirine yakın olmalı ve orbitaller **simetri** bakımından uygun olmalıdır.

> **Not:** Bu üçlü, dersin anlatımına dayanır; ders kitaplarında aynı başlıkla geçmeyebilir.', 2, '2024 vize, 5. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('v24-06', 'elektron-dizilimi', 4, 'mcq', 'original', 'Elektronların orbitallere önce teker teker, sonra çiftleşerek yerleşmesini ifade eden kural aşağıdakilerden hangisidir?', '{"choices":["Hund kuralı","Pauli ilkesi","Aufbau ilkesi","De Broglie bağıntısı","Heisenberg ilkesi"]}', '{"index":0}', 'Hund kuralına göre eş enerjili orbitallere elektronlar önce paralel spinle birer birer yerleşir, sonra çiftleşir. Aufbau dolma sırasını, Pauli ise bir orbitalde en çok iki zıt spinli elektron olabileceğini söyler.', 1, '2024 vize, 6. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('v24-07', 'atom-modelleri', 3, 'mcq', 'original', 'Bohr atom modelinin

I. Elektron dairesel yörüngelerde hareket eder.
II. Uyarılmış atom temel hâle geçerken foton yayar.
III. Her bir elektronun belirli bir ortalama potansiyel enerjisi vardır.

varsayımlarından hangileri daha sonra çürütülmüştür?', '{"choices":["Yalnız I","Yalnız III","I ve III","II ve III","Hepsi"]}', '{"index":0}', 'Kuantum mekaniği, elektronun belirli bir dairesel yörüngede değil, orbital denen olasılık bölgelerinde bulunduğunu gösterdi. Enerji düzeyleri ve geçişte foton yayılması ise geçerliliğini korur.', 1, '2024 vize, 7. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('v24-08', 'kuantum', 4, 'mcq', 'original', '2p⁴ orbital elektronunun sırasıyla baş kuantum sayısı ve yan kuantum sayısı nelerdir?', '{"choices":["2 ve +1/2","2 ve p","2 ve 4","2 ve −1/2; +1/2","p ve 2"]}', '{"index":1}', 'Baş kuantum sayısı katmanı verir: n = 2. Yan (açısal) kuantum sayısı alt kabuğu verir: p alt kabuğu, yani ℓ = 1. Üstteki 4, alt kabuktaki elektron sayısıdır.', 1, '2024 vize, 8. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('v24-09', 'molekul-geometrisi', 7, 'mcq', 'original', 'Karbondioksit (CO₂) bileşiğiyle ilgili aşağıdaki ifadelerden hangisi yanlıştır?', '{"choices":["Bileşik apolardır.","Bileşiğin geometrisi açısaldır.","Bileşikte ikili bağ bulunmaktadır.","Bileşikte kovalent bağ vardır.","Bileşikte ortaklanmamış elektron çiftleri vardır."]}', '{"index":1}', 'O=C=O yapısında karbonun üzerinde ortaklanmamış çift yoktur; iki ikili bağ 180° açıyla dizilir ve molekül **doğrusaldır**. Bağ dipolleri birbirini götürdüğü için molekül apolardır. Oksijenlerin üzerinde ortaklanmamış çiftler vardır.', 1, '2024 vize, 9. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('v24-10', 'kuantum', 4, 'mcq', 'original', 'Aşağıdakilerden hangisi De Broglie bağıntısını ifade eder?', '{"choices":["Elektron atomdan sonsuz uzaklıkta bulunabilir.","Bir atomda bulunan iki elektronun tüm kuantum sayıları aynı olamaz.","Elektronlar orbitallere enerji düzeyi düşük olandan başlayarak yerleşir.","Bir cismin hızı ve yeri aynı anda tam olarak belirlenemez.","Hızı ve kütlesi olan bir cismin dalga boyu vardır."]}', '{"index":4}', 'De Broglie''ye göre kütlesi m, hızı v olan her cisim $\lambda = h / (m v)$ dalga boyuna sahiptir. B şıkkı Pauli ilkesi, C şıkkı Aufbau ilkesi, D şıkkı Heisenberg belirsizlik ilkesidir.', 1, '2024 vize, 10. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('v24-11', 'kimyasal-bag', 7, 'mcq', 'original', 'Aşağıdaki bileşiklerden hangisinde bağ türü diğerlerinden farklıdır? (S: 6A, P: 5A, C: 4A, B: 3A, Be: 2A grubu elementidir.)', '{"choices":["SCl₆","NH₃","CCl₄","BF₃","MgCl₂"]}', '{"index":2}', 'Sınavın anahtarı **CCl₄**''tür.

> **Not:** Bağ türüne bakılırsa farklı olan **MgCl₂**''dir: metal (Mg) ile ametal (Cl) arasında iyonik bağ vardır; diğer dört bileşikte ametaller arasında kovalent bağ bulunur. Anahtardaki CCl₄ seçimi sorunun amacıyla örtüşmüyor; sınavda itiraz edilebilecek bir sorudur.', 2, '2024 vize, 11. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('v24-12', 'molekuller-arasi', 8, 'mcq', 'original', 'Aşağıdakilerin hangisinde dipol-dipol etkileşimi bulunur? (Li ve K 1A, Ca 2A grubu elementidir.)', '{"choices":["CaCl₂","KCl","NO","N₂","LiCl"]}', '{"index":2}', 'Dipol-dipol etkileşimi polar moleküller arasında olur. NO, farklı elektronegatiflikte iki ametalden oluşan polar bir moleküldür. CaCl₂, KCl ve LiCl iyonik katılardır; N₂ apolardır ve yalnız London kuvvetleri gösterir.', 1, '2024 vize, 12. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('v24-13', 'molekuller-arasi', 8, 'mcq', 'original', 'Aşağıdaki kimyasal etkileşimlerden hangisi en kuvvetlidir?', '{"choices":["Polar kovalent bağ","Van der Waals kuvvetleri","Dipol-dipol etkileşimi","Hidrojen bağı","London kuvvetleri"]}', '{"index":0}', 'Kovalent bağ atomlar arası (güçlü) bir etkileşimdir. Hidrojen bağı, dipol-dipol ve London kuvvetleri moleküller arası (zayıf) etkileşimlerdir; aralarında en güçlüsü hidrojen bağıdır.', 1, '2024 vize, 13. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('v24-14', 'molekuller-arasi', 8, 'mcq', 'original', 'Aşağıdakilerin hangisinde moleküller arası bağ en güçlüdür?', '{"choices":["N₂O","N₂","SO₂","CO₂","HF"]}', '{"index":4}', 'HF molekülleri arasında hidrojen bağı vardır; H atomu çok elektronegatif F atomuna bağlıdır. Diğerlerinde dipol-dipol ya da yalnız London kuvvetleri bulunur.', 1, '2024 vize, 14. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('v24-15', 'kuantum', 4, 'mcq', 'original', 'Aşağıdakilerden hangisi De Broglie dalga bağıntısını ifade eder?', '{"choices":["$E = mc^2$","$M = n / V$","$\\lambda = h / (m \\cdot c)$","$PV = nRT$","$n = m / M_A$"]}', '{"index":2}', 'De Broglie dalga boyu, Planck sabitinin cismin momentumuna bölümüdür.

> **Not:** Bağıntının doğru yazımı $\lambda = h / (m v)$''dir; buradaki v cismin hızıdır. Şıkta ışık hızı c''ye benzeyen harf, hızı gösterir.', 1, '2024 vize, 15. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('v24-16', 'kuantum', 4, 'mcq', 'original', 'Aşağıdakilerden hangisi bir kuantum sayısı değildir?', '{"choices":["Spin kuantum sayısı","Manyetik kuantum sayısı","Orbital kuantum sayısı","Açısal kuantum sayısı","Baş kuantum sayısı"]}', '{"index":2}', 'Dört kuantum sayısı baş (n), açısal ya da yan (ℓ), manyetik (mℓ) ve spin (ms) kuantum sayılarıdır. Sınavın anahtarı "Orbital kuantum sayısı"dır.

> **Not:** Bazı kitaplar açısal kuantum sayısına "orbital kuantum sayısı" da der. Sınavda bu ad listede ayrı bir sayı yokmuş gibi kullanılmıştır.', 2, '2024 vize, 16. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('v24-17', 'molekuller-arasi', 8, 'mcq', 'original', 'Aşağıdaki bileşiklerden hangisinin hidrojen bağı yapması beklenmez?', '{"choices":["HF","H₂O","NH₃","CH₄","Hiçbiri"]}', '{"index":3}', 'Hidrojen bağı için H atomunun F, O ya da N''ye bağlı olması gerekir. CH₄''te H karbona bağlıdır ve C-H bağı yeterince polar değildir.', 1, '2024 vize, 17. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('v24-18', 'kuantum', 4, 'mcq', 'original', 'Aşağıdakilerden hangisi De Broglie bağıntısını ifade eder?', '{"choices":["$E = mc^2$","$E = h c / \\lambda$","$mc^2 = h c / \\lambda$","$PV = nRT$","$\\lambda = h c^2$"]}', '{"index":0}', 'Sınavın anahtarı $E = mc^2$''dir.

> **Not:** $E = mc^2$ Einstein''ın kütle-enerji bağıntısıdır. De Broglie, bunu fotonun enerjisi $E = h c / \lambda$ ile eşitleyerek $mc^2 = h c / \lambda$ bağıntısına, oradan da $\lambda = h / (m c)$ sonucuna ulaşmıştır. Bu yüzden De Broglie bağıntısına en uygun şık $mc^2 = h c / \lambda$''dır.', 2, '2024 vize, 18. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('v24-19', 'katilar', 8, 'mcq', 'original', 'Katıların yoğunluğu aşağıdaki formüllerden hangisiyle hesaplanabilir? ($M_A$: mol kütlesi, n: birim hücredeki tanecik sayısı, N: Avogadro sayısı, a: birim hücre kenar uzunluğu)', '{"choices":["$d = M_A \\cdot n / (N \\cdot a^3)$","$d = 4 n N / (3 \\pi r^3)$","$d = a^3 N / n$","$d = M_A \\cdot n / (\\pi r^3)$","$d = n / (N \\pi r^3)$"]}', '{"index":0}', 'Birim hücrenin kütlesi, içindeki n taneciğin kütlesidir: $n \cdot M_A / N$. Hacmi ise kübik hücrede $a^3$''tür. Yoğunluk kütlenin hacme oranıdır.', 2, '2024 vize, 19. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('v24-20', 'metal-ametal', 9, 'mcq', 'original', 'Aşağıdaki kristal örgülerinden hangisi p tipi bir yarı iletkendir? (Sınavda örgüler şekille verilmişti; burada sözle anlatılıyor.)', '{"choices":["Ga atomlarından oluşan örgünün ortasında bir Si atomu","P atomlarından oluşan örgünün ortasında bir Si atomu","Si atomlarından oluşan örgünün ortasında bir P atomu","Ge atomlarından oluşan örgünün ortasında bir P atomu","Si atomlarından oluşan örgünün ortasında bir In atomu"]}', '{"index":4}', 'p tipi yarı iletken, 4A grubundaki bir yarı iletkene (Si, Ge) 3A grubundan bir atom (B, Al, Ga, In) katılarak elde edilir: eksik elektron bir **boşluk** oluşturur. Si örgüsüne 5A grubundan P katılırsa fazladan bir elektron gelir ve n tipi olur.', 1, '2024 vize, 20. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('v24-21', 'katilar', 8, 'mcq', 'original', 'Şekilde köşelerinde ve küpün tam ortasında birer tanecik bulunan kübik bir birim hücre verilmiştir. Bu birim hücre tipi ile ilgili

I. Birim hücresinde dört tanecik vardır.
II. Koordinasyon sayısı altıdır.
III. CsCl kristal yapısındadır.
IV. Birim hücresi hacim merkezli kübiktir.

ifadelerinden hangileri doğrudur?', '{"choices":["Yalnız IV","Yalnız III","III ve IV","I ve III","II ve III"]}', '{"index":1}', 'Sınavın anahtarı **Yalnız III**''tür: CsCl yapısında küpün köşelerinde bir tür, merkezinde öteki tür iyon bulunur.

> **Not:** Şekildeki gibi köşelerde ve merkezde tanecik olan hücre **hacim merkezli kübik** görünümündedir; bu durumda IV de doğru sayılabilir ve doğru şık "III ve IV" olur. Böyle bir hücrede tanecik sayısı $8 \cdot \tfrac{1}{8} + 1 = 2$, koordinasyon sayısı 8''dir; I ve II yanlıştır.', 3, '2024 vize, 21. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('vd-02', 'olcme-birim', 2, 'mcq', 'original', 'Bir elementin erime sıcaklığı 350 °F olarak verilmiştir. Celsius ölçeğinde bu sıcaklık nedir?', '{"choices":["225 °C","121 °C","157 °C","177 °C","137 °C"]}', '{"index":3}', '$t_C = (t_F - 32) \cdot 5/9 = (350 - 32) \cdot 5/9 = 318 \cdot 5/9 \approx 176{,}7$ °C, yani yaklaşık 177 °C.

> **Not:** Bu sorunun sınav anahtarı elimizde yok; cevap hesaplanarak ve konu bilgisiyle bulundu.', 1, 'Vize derlemesi, 2. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('vd-04', 'madde-karisim', 1, 'mcq', 'original', 'Aşağıdakilerden hangisi kimyasal olaydır?', '{"choices":["Alüminyumun yanması","Benzinin buharlaşması","Suyun donması","Şekerin çözünmesi"]}', '{"index":0}', 'Yanmada alüminyum oksijenle tepkimeye girer ve yeni bir madde (Al₂O₃) oluşur. Buharlaşma, donma ve şekerin suda çözünmesi fiziksel olaylardır; maddenin kimliği değişmez.

> **Not:** Bu sorunun sınav anahtarı elimizde yok; cevap hesaplanarak ve konu bilgisiyle bulundu.', 1, 'Vize derlemesi, 4. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('vd-06', 'ayirma', 1, 'mcq', 'original', 'Homojen karışımların ayrılmasında aşağıdaki yöntemlerden hangisi kullanılır?', '{"choices":["Mıknatıs ile ayırma","Kaynama noktası farkından ayırma","Elektriklenme ile ayırma","Süzme ile ayırma","Çözünürlük farkı ile ayırma"]}', '{"index":1}', 'Homojen karışımlarda (çözeltilerde) bileşenler gözle ayırt edilemez; süzme ya da mıknatısla ayrılamazlar. Alkol-su gibi sıvı çözeltiler, kaynama noktası farkından yararlanılarak damıtmayla ayrılır.

> **Not:** Bu sorunun sınav anahtarı elimizde yok; cevap hesaplanarak ve konu bilgisiyle bulundu.', 1, 'Vize derlemesi, 6. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('vd-07', 'madde-karisim', 1, 'mcq', 'original', 'Aşağıdaki ifadelerden hangisi karışımların özelliklerindendir?', '{"choices":["Erime ve kaynama noktaları sabittir.","Oluşumlarında ve bileşenlerine ayrılmalarında enerji değişimi az olur.","Kimyasal yöntemlerle elementlerine ayrıştırılır.","En az iki elementten oluşmuştur.","Bir araya gelen elementler arasında belirli bir oran vardır."]}', '{"index":1}', 'Karışım oluşurken kimyasal bağ kurulmaz; bu yüzden enerji değişimi azdır ve bileşenler fiziksel yöntemlerle ayrılır. Sabit erime noktası, belirli oran ve kimyasal ayrıştırma bileşiklerin özellikleridir.

> **Not:** Bu sorunun sınav anahtarı elimizde yok; cevap hesaplanarak ve konu bilgisiyle bulundu.', 2, 'Vize derlemesi, 7. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('vd-09', 'periyodik-tablo', 5, 'mcq', 'original', 'Atom numarası 35 olan X elementi periyodik tablonun hangi periyot ve grubunda yer alır?', '{"choices":["5. periyot, 7A grubu","4. periyot, 7A grubu","5. periyot, 4A grubu","4. periyot, 4A grubu","3. periyot, 5A grubu"]}', '{"index":1}', 'Elektron dizilimi $1s^2\,2s^2\,2p^6\,3s^2\,3p^6\,4s^2\,3d^{10}\,4p^5$''tir. En büyük baş kuantum sayısı 4 olduğundan 4. periyottadır; değerlik katmanında $4s^2\,4p^5$ yani 7 elektron olduğundan 7A grubundadır (brom).

> **Not:** Bu sorunun sınav anahtarı elimizde yok; cevap hesaplanarak ve konu bilgisiyle bulundu.', 1, 'Vize derlemesi, 9. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('vd-10', 'ayirma', 1, 'mcq', 'original', 'İyi bir kristallendirme işlemi için aşağıdakilerden hangisi doğrudur?', '{"choices":["Uygun çözücüde ve sıcakta çözmek","Sıcak süzme yapmak","Soğuk süzme yapmak","Elde edilen kristalleri uygun çözücüde yıkamak","Hepsi"]}', '{"index":4}', 'Kristallendirmede katı uygun çözücüde sıcakta çözülür, çözünmeyen safsızlıklar sıcak süzmeyle ayrılır, çözelti soğutulup oluşan kristaller soğuk süzmeyle alınır ve az miktarda soğuk çözücüyle yıkanır. Hepsi işlemin adımlarıdır.

> **Not:** Bu sorunun sınav anahtarı elimizde yok; cevap hesaplanarak ve konu bilgisiyle bulundu.', 1, 'Vize derlemesi, 10. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('vd-11', 'mol', 6, 'mcq', 'original', '18 g C içeren etil alkol (C₂H₅OH) kaç gramdır? (H = 1, C = 12, O = 16 g/mol)', '{"choices":["33,0","25,3","34,5","38,3","40,4"]}', '{"index":2}', '18 g C = 18 / 12 = 1,5 mol C. Her C₂H₅OH molekülünde 2 C olduğundan 0,75 mol alkol vardır. Mol kütlesi 2·12 + 6·1 + 16 = 46 g/mol; kütle 0,75 · 46 = 34,5 g.

> **Not:** Bu sorunun sınav anahtarı elimizde yok; cevap hesaplanarak ve konu bilgisiyle bulundu.', 2, 'Vize derlemesi, 11. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('vd-12', 'mol', 6, 'mcq', 'original', '18 g C içeren etil alkolde (C₂H₅OH) kaç tane alkol molekülü vardır? (H = 1, C = 12, O = 16 g/mol)', '{"choices":["4,52 × 10²³","4,15 × 10²²","3,33 × 10²³","5,62 × 10²¹"]}', '{"index":0}', '1,5 mol C, 0,75 mol C₂H₅OH demektir. Molekül sayısı 0,75 · 6,02 × 10²³ ≈ 4,52 × 10²³.

> **Not:** Bu sorunun sınav anahtarı elimizde yok; cevap hesaplanarak ve konu bilgisiyle bulundu.', 2, 'Vize derlemesi, 12. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('vd-13', 'mol', 6, 'mcq', 'original', '18 g C içeren etil alkolde (C₂H₅OH) toplam kaç tane atom vardır? (H = 1, C = 12, O = 16 g/mol)', '{"choices":["3,52 × 10²³","3,83 × 10²³","5,34 × 10²⁴","4,06 × 10²⁴"]}', '{"index":3}', 'Bir C₂H₅OH molekülünde 2 + 6 + 1 = 9 atom vardır. 0,75 mol alkolde 9 · 0,75 = 6,75 mol atom bulunur: 6,75 · 6,02 × 10²³ ≈ 4,06 × 10²⁴.

> **Not:** Bu sorunun sınav anahtarı elimizde yok; cevap hesaplanarak ve konu bilgisiyle bulundu.', 3, 'Vize derlemesi, 13. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('vd-15', 'molekuller-arasi', 8, 'mcq', 'original', 'Aşağıdakilerden hangisinde hidrojen bağı yoktur?', '{"choices":["H₂O","NH₃","HF","CH₄","Hiçbiri"]}', '{"index":3}', 'Hidrojen bağı için H atomunun F, O ya da N''ye bağlı olması gerekir. CH₄''te H karbona bağlıdır.

> **Not:** Bu sorunun sınav anahtarı elimizde yok; cevap hesaplanarak ve konu bilgisiyle bulundu.', 1, 'Vize derlemesi, 15. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('vd-16', 'molekul-geometrisi', 7, 'mcq', 'original', 'Aşağıdaki hibritleşmelerden hangisi düzgün dörtyüzlü (tetrahedral) geometri verir?', '{"choices":["sp","sp²","sp³","dsp²","dsp³"]}', '{"index":2}', 'sp³ hibritleşmesinde dört eş orbital birbirinden en uzak duracak şekilde 109,5° açıyla yönelir: dörtyüzlü. sp doğrusal, sp² düzlem üçgen, dsp² kare düzlem, dsp³ üçgen çift piramit verir.

> **Not:** Bu sorunun sınav anahtarı elimizde yok; cevap hesaplanarak ve konu bilgisiyle bulundu.', 1, 'Vize derlemesi, 16. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('vd-17', 'molekul-geometrisi', 7, 'mcq', 'original', 'NH₃ molekülünün geometrisi aşağıdakilerden hangisidir?', '{"choices":["Düzlem üçgen","Kare düzlem","Üçgen piramit","Kare piramit","Kırık doğru"]}', '{"index":2}', 'Azotun üç bağ çifti ve bir ortaklanmamış çifti vardır (AX₃E). Elektron çiftleri dörtyüzlü dizilir, ama yalnız atomlara bakıldığında şekil üçgen piramittir; bağ açısı yaklaşık 107°''dir.

> **Not:** Bu sorunun sınav anahtarı elimizde yok; cevap hesaplanarak ve konu bilgisiyle bulundu.', 1, 'Vize derlemesi, 17. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('vd-19', 'molekuller-arasi', 8, 'mcq', 'original', 'Aşağıdakilerden hangisi moleküller arası bir etkileşimdir?', '{"choices":["Metal bağı","Kovalent bağ","Hidrojen bağı","İyonik bağ","Hiçbiri"]}', '{"index":2}', 'Metal, kovalent ve iyonik bağ atomlar ya da iyonlar arasındaki güçlü bağlardır. Hidrojen bağı ise ayrı moleküller arasında kurulan zayıf bir etkileşimdir.

> **Not:** Bu sorunun sınav anahtarı elimizde yok; cevap hesaplanarak ve konu bilgisiyle bulundu.', 1, 'Vize derlemesi, 19. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('vd-22', 'korozyon', 9, 'mcq', 'original', 'Aşağıdakilerden hangisi korozyon etkenlerindendir?', '{"choices":["Elektrokimyasal etkenler","Fiziksel etkenler","Çevresel etkenler","Endüstriyel etkenler","Hepsi"]}', '{"index":4}', 'Korozyon; elektrokimyasal tepkimeler, sıcaklık ve gerilme gibi fiziksel koşullar, nem ve tuz gibi çevresel etkenler ile endüstriyel kirleticilerin birlikte etkisiyle oluşur.

> **Not:** Bu sorunun sınav anahtarı elimizde yok; cevap hesaplanarak ve konu bilgisiyle bulundu.', 1, 'Vize derlemesi, 22. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('vd-23', 'korozyon', 9, 'mcq', 'original', 'Toprak içinde tren, tramvay, metro gibi raylı taşıtların ve yer altı borularının bulunduğu yerlerde çok şiddetli ve hızlı korozyona yol açan korozyon çeşidi aşağıdakilerden hangisidir?', '{"choices":["Gerilmeli (stress) korozyon","Pullanma (exfoliation) korozyonu","Çukurcuk (pitting) korozyonu","Kaçak akım korozyonu","Galvanik (elektrokimyasal) korozyon"]}', '{"index":3}', 'Raylı sistemlerin elektrik devresinden toprağa kaçan doğru akım, yer altındaki metal borulara girip çıktığı noktalarda boruyu anot yaparak hızla aşındırır. Buna kaçak akım korozyonu denir.

> **Not:** Bu sorunun sınav anahtarı elimizde yok; cevap hesaplanarak ve konu bilgisiyle bulundu.', 2, 'Vize derlemesi, 23. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('vd-24', 'korozyon', 9, 'mcq', 'original', 'Aşağıdakilerden hangisi korozyondan korunma yöntemlerinden değildir?', '{"choices":["Uygun malzeme seçimi","Katodik koruma","Doğru tasarım","Kaplamalar","Eritme"]}', '{"index":4}', 'Malzeme seçimi, katodik koruma, nem tutmayan doğru tasarım ve boya ya da metal kaplamalar korozyonu önler. Eritme bir şekillendirme işlemidir, korunma yöntemi değildir.

> **Not:** Bu sorunun sınav anahtarı elimizde yok; cevap hesaplanarak ve konu bilgisiyle bulundu.', 1, 'Vize derlemesi, 24. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;
INSERT INTO questions (id, topic_id, week, type, source, prompt, payload, answer, explanation, difficulty, source_ref, active)
VALUES ('vd-25', 'metal-ametal', 9, 'mcq', 'original', 'Aşağıdakilerden hangisi ametallerin kimyasal özelliklerindendir?', '{"choices":["Katı, sıvı ve gaz hâlinde bulunurlar.","Isı ve elektriği iletmezler.","Yoğunlukları düşüktür.","Molekülleri çok atomludur.","Tel ve levha hâline gelemezler."]}', '{"index":3}', 'Fiziksel hâl, iletkenlik, yoğunluk ve işlenebilirlik fiziksel özelliklerdir. Ametallerin kendi aralarında kovalent bağ kurarak çok atomlu moleküller (O₂, P₄, S₈ gibi) oluşturması ise bağ yapmalarıyla ilgili, kimyasal bir özelliktir.

> **Not:** Bu sorunun sınav anahtarı elimizde yok; cevap hesaplanarak ve konu bilgisiyle bulundu.', 2, 'Vize derlemesi, 25. soru', 1)
  ON CONFLICT(id) DO UPDATE SET topic_id = excluded.topic_id, week = excluded.week, type = excluded.type,
    source = excluded.source, prompt = excluded.prompt, payload = excluded.payload, answer = excluded.answer,
    explanation = excluded.explanation, difficulty = excluded.difficulty, source_ref = excluded.source_ref, active = 1
  WHERE questions.updated_at IS NULL;

UPDATE questions SET kavram = 'dalton-modeli', yedek = 0 WHERE id = 'v24-01';
UPDATE questions SET kavram = 'rutherford-modeli', yedek = 0 WHERE id = 'v24-02';
UPDATE questions SET kavram = 'elektronegatiflik', yedek = 0 WHERE id = 'v24-03';
UPDATE questions SET kavram = 'hibritlesme', yedek = 0 WHERE id = 'v24-04';
UPDATE questions SET kavram = 'kovalent-bag-kosul', yedek = 0 WHERE id = 'v24-05';
UPDATE questions SET kavram = 'dizilim-kurallari', yedek = 0 WHERE id = 'v24-06';
UPDATE questions SET kavram = 'bohr-modeli', yedek = 0 WHERE id = 'v24-07';
UPDATE questions SET kavram = 'kuantum-sayilari', yedek = 0 WHERE id = 'v24-08';
UPDATE questions SET kavram = 'vsepr', yedek = 0 WHERE id = 'v24-09';
UPDATE questions SET kavram = 'de-broglie', yedek = 0 WHERE id = 'v24-10';
UPDATE questions SET kavram = 'bag-turu', yedek = 0 WHERE id = 'v24-11';
UPDATE questions SET kavram = 'etkilesim-turu', yedek = 0 WHERE id = 'v24-12';
UPDATE questions SET kavram = 'etkilesim-turu', yedek = 0 WHERE id = 'v24-13';
UPDATE questions SET kavram = 'hidrojen-bagi', yedek = 0 WHERE id = 'v24-14';
UPDATE questions SET kavram = 'de-broglie', yedek = 0 WHERE id = 'v24-15';
UPDATE questions SET kavram = 'kuantum-sayilari', yedek = 0 WHERE id = 'v24-16';
UPDATE questions SET kavram = 'hidrojen-bagi', yedek = 0 WHERE id = 'v24-17';
UPDATE questions SET kavram = 'de-broglie', yedek = 0 WHERE id = 'v24-18';
UPDATE questions SET kavram = 'birim-hucre', yedek = 0 WHERE id = 'v24-19';
UPDATE questions SET kavram = 'yari-iletken', yedek = 0 WHERE id = 'v24-20';
UPDATE questions SET kavram = 'birim-hucre', yedek = 0 WHERE id = 'v24-21';
UPDATE questions SET kavram = 'sicaklik-olcegi', yedek = 0 WHERE id = 'vd-02';
UPDATE questions SET kavram = 'fiziksel-kimyasal', yedek = 0 WHERE id = 'vd-04';
UPDATE questions SET kavram = 'ayirma-yontemi', yedek = 0 WHERE id = 'vd-06';
UPDATE questions SET kavram = 'karisim-ozellik', yedek = 0 WHERE id = 'vd-07';
UPDATE questions SET kavram = 'periyot-grup', yedek = 0 WHERE id = 'vd-09';
UPDATE questions SET kavram = 'kristallendirme', yedek = 0 WHERE id = 'vd-10';
UPDATE questions SET kavram = 'mol-kutle', yedek = 0 WHERE id = 'vd-11';
UPDATE questions SET kavram = 'mol-kutle', yedek = 0 WHERE id = 'vd-12';
UPDATE questions SET kavram = 'mol-kutle', yedek = 0 WHERE id = 'vd-13';
UPDATE questions SET kavram = 'hidrojen-bagi', yedek = 0 WHERE id = 'vd-15';
UPDATE questions SET kavram = 'hibritlesme', yedek = 0 WHERE id = 'vd-16';
UPDATE questions SET kavram = 'vsepr', yedek = 0 WHERE id = 'vd-17';
UPDATE questions SET kavram = 'etkilesim-turu', yedek = 0 WHERE id = 'vd-19';
UPDATE questions SET kavram = 'korozyon-turu', yedek = 0 WHERE id = 'vd-22';
UPDATE questions SET kavram = 'korozyon-turu', yedek = 0 WHERE id = 'vd-23';
UPDATE questions SET kavram = 'korozyon-koruma', yedek = 0 WHERE id = 'vd-24';
UPDATE questions SET kavram = 'ametal-ozellik', yedek = 0 WHERE id = 'vd-25';
