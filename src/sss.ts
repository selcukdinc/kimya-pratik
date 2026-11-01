// Sıkça sorulan sorular. Gerçek sorular gelmeye başladıkça bu liste güncellenir.
// Cevaplar Markdown alt kümesiyle yazılır (`kod`, **kalın**, "- " listeleri).

export interface SssBolumu {
  baslik: string;
  sorular: { soru: string; cevap: string }[];
}

export const SSS: SssBolumu[] = [
  {
    baslik: "Genel",
    sorular: [
      {
        soru: "Site ücretli mi?",
        cevap: "Hayır. Site ücretsiz ve açık kaynaklıdır (GPL-3.0). Reklam yoktur.",
      },
      {
        soru: "Kullanmak için hesap açmam gerekiyor mu?",
        cevap:
          "Hayır. Üniteleri okuyabilir, Sanal Lab'ı kullanabilir ve soruları hesapsız çözebilirsin; ilerlemen bu tarayıcıda misafir olarak tutulur. Hesap açarsan ilerlemen her cihazda seninle gelir ve soru önerebilirsin.",
      },
      {
        soru: "Sorular nereden geliyor?",
        cevap:
          "Önceki yılların vize ve final sınavlarında çıkmış sorular **Orijinal** etiketi taşır; aynı konudan yeni yazılan sorular **Türetilmiş**tir. Orijinal sorularda sınavdaki cevap anahtarı gösterilir; anahtarda tartışmalı bir nokta varsa açıklamada ayrıca belirtilir. Sayısal cevaplı soruların sonuçları hesaplanarak denetlenir; virgüllü ya da üslü yazım (ör. `0,75`, `4.52e23`) kabul edilir.",
      },
      {
        soru: "Vize ve final konuları nasıl ayrılıyor?",
        cevap:
          "Üniteler sayfasında üniteler **Vize** ve **Final** başlıkları altında listelenir. Soru havuzunda bir üniteyi seçerek yalnızca o sınavın konularına çalışabilirsin. Menüdeki Soru havuzu yanında yazan `Ü9` gibi rozet, soruların kaçıncı üniteye kadar açık olduğunu gösterir.",
      },
    ],
  },
  {
    baslik: "Dersler",
    sorular: [
      {
        soru: "Metindeki parantez içindeki İngilizce kelimeler ne?",
        cevap:
          "Ders ve sorularda geçen terimlerin İngilizcesi, kaynaklarda o adla karşına çıkacağı için parantez içinde yazılır: \"elektronegatiflik (electronegativity)\" gibi. Hepsinin listesi ve kısa anlamları **Terimler** sayfasındadır; Türkçe ya da İngilizce arayabilirsin.",
      },
      {
        soru: "Yazılar çok küçük ya da çok büyük. Nasıl değiştiririm?",
        cevap:
          "Üst çubuktaki **A−** ve **A+** düğmeleri tüm sayfalardaki yazıları %85 ile %150 arasında küçültür ya da büyütür; aradaki yüzdeye tıklayınca varsayılan boyuta dönülür. Seçim bu tarayıcıda saklanır, hesabınla girdiysen hesabına da kaydedilir ve başka cihazda da aynı boyut gelir. Aynı ayar **Ayarlar** sayfasında da var.",
      },
      {
        soru: "Dersin belli bir bölümüne bağlantı verebilir miyim?",
        cevap:
          "Evet. Dersin başındaki içindekiler listesinden bir başlığa tıklayınca adres `/ders/3#bolum-2` gibi o bölümü gösterir; bu bağlantıyı açan kişi doğrudan o bölüme gelir.",
      },
      {
        soru: "Bir ders şeklinde hata gördüm. Nasıl bildiririm?",
        cevap:
          "Her şeklin altında `G-H2-03` gibi bir kod yazar. Giriş yapıp Mesajlarım'dan bu kodla birlikte neyin yanlış olduğunu yazman yeterli; düzeltilecek şekil kodla hemen bulunur.",
      },
    ],
  },
  {
    baslik: "Sorular ve ilerleme",
    sorular: [
      {
        soru: "Şıklar neden her açılışta farklı sırada?",
        cevap:
          "Doğru cevabı şıkkın yerinden ezberlemeyesin diye şıklar her açılışta karıştırılır. Cevabın, şıkkın kendisine göre kontrol edilir; şık dağılımı istatistikleri de sıraya değil şıkkın içeriğine göre tutulur.",
      },
      {
        soru: "Boşluk doldurma sorularında cevabı nasıl yazmalıyım?",
        cevap:
          "Her kutunun yanında ne istendiği yazar: tek boşlukta \"Cevap\", birden çok boşlukta \"1. boşluk: ...\" gibi. Büyük ve küçük harf, baştaki ve sondaki boşluklar önemsenmez. Formülleri alt simge kullanmadan yazabilirsin: `CH4`, `H2O`.",
      },
      {
        soru: "Çözmediğim ya da yanlış yaptığım soruları nasıl bulurum?",
        cevap:
          "Soru havuzunun üstündeki süzgeçlerden **Çözmediklerim** ya da **Yanlışlarım**'ı seç. Tür, zorluk ve arama ile daraltabilirsin; süzgeçler adreste tutulduğu için bağlantıyı kaydedip sonra aynı listeye dönebilirsin. İlerlemem sayfasındaki **Hepsini tekrar çöz** düğmesi de yanlış yaptığın soruları tek listede açar.",
      },
      {
        soru: "Sorunun altında çıkan yüzde ne anlama geliyor?",
        cevap:
          "Cevabını gönderdikten sonra, o soruyu deneyenlerin ilk denemelerinde ne kadarının doğru yaptığı gösterilir; çoktan seçmelide her şıkkın ne sıklıkla seçildiği de görünür. Her kişinin yalnızca ilk denemesi sayılır, misafirler de dahildir. Bunlar anonim toplamlardır; kimin ne cevap verdiği görünmez.",
      },
      {
        soru: "\"Tekrar etmen gereken konular\" nasıl seçiliyor?",
        cevap:
          "İlerlemem sayfasında, en az bir sorusunu denediğin ama henüz bitirmediğin konular doğru oranına göre sıralanır; en düşük üçü gösterilir. **Tekrar et** o konunun yalnızca çözmediğin sorularını açar.",
      },
      {
        soru: "Etkinlik takvimi ve günlük seri neyi sayıyor?",
        cevap:
          "Takvim, son 12 haftada her gün kaç cevap gönderdiğini Türkiye saatine göre gösterir; renk koyulaştıkça o gün daha çok çalışmışsındır. Günlük seri, bugünden (bugün henüz bir şey çözmediysen dünden) geriye kesintisiz çalıştığın gün sayısıdır.",
      },
      {
        soru: "Tekrar sayfası nasıl çalışıyor?",
        cevap:
          "Yanlış yaptığın her soru tekrar kutusuna girer ve ertesi gün **Tekrar** sayfasında yeniden sorulur. Doğru cevapladıkça soru bir sonraki kutuya geçer ve 3, 7, 14, 30 gün arayla tekrar gelir; 5. kutuyu da geçince öğrenilmiş sayılır. Yanlış cevap soruyu 1. kutuya döndürür. Bir soruyu ilk kez yanlış yaptığında aynı kavramdan henüz görmediğin iki soru da eklenir; bunlar önce yedek havuzdan seçilir. Günde en çok 20 tekrar yapılır, menüdeki sayı bugün kaç soru beklediğini gösterir. E-posta ile hatırlatma yapılmaz.",
      },
      {
        soru: "Tekrar'da gelen bazı sorular neden soru havuzunda yok?",
        cevap:
          "Türetilmiş soruların bir kısmı **yedek havuzdadır**: soru havuzunda ve ilerleme toplamlarında görünmez, yalnızca Tekrar sayfasında çıkar. Bir kavramda yanlış yaptığında o kavramın yedek sorularından biri gelir; böylece cevabını önceden görmediğin, gerçekten yeni bir soruyla kendini sınarsın.",
      },
      {
        soru: "Günlük hedef, alev ve rozetler nedir?",
        cevap:
          "Günlük hedef, bir günde vermek istediğin doğru cevap sayısıdır (başlangıçta 10). Hedefe ulaştığın an kısa bir kutlama görürsün; hedefi **Ayarlar**'dan değiştirebilir ya da kapatabilirsin. Takvimde 10 doğru yaptığın günlerde kıvılcım, 25'te parıltı görünür; 50 doğruya ulaştığın günün kutusu alev alır. Rozetler 7, 30 ve 100 günlük seriler gibi kişisel hedeflerdir. Bunları yalnızca sen görürsün; sıralama ya da başkalarıyla karşılaştırma yoktur.",
      },
    ],
  },
  {
    baslik: "Sanal Lab",
    sorular: [
      {
        soru: "Sanal Lab gerçek bir deneyin yerini tutar mı?",
        cevap:
          "Hayır. Sanal Lab kavramları görmek ve kuralları denemek içindir: hangi karışımın hangi yöntemle ayrıldığını, elektronların orbitallere nasıl yerleştiğini ya da bir molekülün neden o geometride olduğunu gösterir. Gerçek laboratuvarda güvenlik kurallarına ve sorumlu öğretim elemanının yönergelerine uy.",
      },
      {
        soru: "Deneyler bir sunucuda mı çalışıyor?",
        cevap: "Hayır. Bütün deneyler tarayıcında çalışır; yaptığın denemeler sunucuya gönderilmez.",
      },
      {
        soru: "Bazı deneyler neden \"Yakında\" yazıyor?",
        cevap: "Deneyler ünitelerle birlikte sırayla ekleniyor. Yeni gelenleri **Yenilikler** sayfasında görebilirsin.",
      },
    ],
  },
  {
    baslik: "Hesap ve gizlilik",
    sorular: [
      {
        soru: "Hangi çerezler kullanılıyor?",
        cevap:
          "Yalnızca oturumunu tutan tek bir çerez. Analitik, reklam ya da takip çerezi yoktur. Ayrıntılar gizlilik sayfasında.",
      },
      {
        soru: "Hesabımı nasıl silerim?",
        cevap: "Ayarlar → Hesabı sil sekmesinden. Hesabın, denemelerin, önerilerin ve mesajların kalıcı olarak silinir.",
      },
      {
        soru: "Bir soruda hata buldum. Ne yapmalıyım?",
        cevap:
          "Giriş yaptıysan menüdeki Mesajlarım'dan yöneticiye yazabilirsin. GitHub'ı kullanıyorsan Hakkında sayfasındaki bağlantıdan sorun da bildirebilirsin.",
      },
      {
        soru: "Ben de soru ekleyebilir miyim?",
        cevap: "Evet. Giriş yaptıktan sonra Soru öner sayfasından gönderebilirsin; yönetici inceleyip uygun bulursa havuza ekler.",
      },
    ],
  },
];
