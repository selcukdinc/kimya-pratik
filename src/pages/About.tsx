import { REPO_URL } from "../lib/api";

const GELISTIRICI_URL = "https://github.com/selcukdinc";

export function About() {
  return (
    <div className="about">
      <h2>Kimya Pratik</h2>
      <p>
        Genel Kimya dersinde vize ve finale hazırlanmak için açık kaynaklı bir pratik sitesi. Üniteler vize ve final
        konularına göre ayrılmıştır; anlatımlar, şekiller ve sorular bu site için yeniden yazılmıştır. Önceki yılların
        sınavlarında çıkmış sorular <strong>Orijinal</strong>, aynı konudan türetilenler <strong>Türetilmiş</strong> etiketi taşır.
      </p>
      <h3>Sanal Lab nerede çalışıyor?</h3>
      <p>
        Sanal Lab deneyleri senin tarayıcında çalışan etkileşimli çizimlerdir; hiçbir şey kurman gerekmez ve yaptıkların
        sunucuya gönderilmez. Kavramları görmek ve kuralları denemek içindir, gerçek laboratuvar çalışmasının yerine geçmez.
      </p>
      <h3>Gizlilik</h3>
      <ul>
        <li>Reklam yok, analitik ya da takip çerezi yok.</li>
        <li>İlk cevabını gönderdiğinde ilerlemeni tutmak için tek bir oturum çerezi yazılır.</li>
        <li>Tema ve yazı boyutu tercihlerin yalnızca bu tarayıcıda saklanır.</li>
      </ul>
      <p>
        Ayrıntılar <a href="/gizlilik">gizlilik metninde</a>.
      </p>
      <h3>Geliştirici</h3>
      <div className="kunye">
        <div>
          <strong className="kunye-ad">Selçuk Dinç</strong>
          <ul className="kunye-baglantilar">
            <li><a href={GELISTIRICI_URL} target="_blank" rel="noreferrer">GitHub profili</a></li>
            <li><a href={REPO_URL} target="_blank" rel="noreferrer">Projenin deposu</a> (GPL-3.0)</li>
          </ul>
        </div>
      </div>

      <h3>Proje</h3>
      <p>
        Kaynak kodu açık. Bir hata ya da yanlış soru gördüysen{" "}
        <a href={`${REPO_URL}/issues/new`} target="_blank" rel="noreferrer">GitHub'da bildirebilirsin</a>. Projeyi beğendiysen
        depoya <a href={REPO_URL} target="_blank" rel="noreferrer">yıldız verebilirsin</a>.
      </p>
    </div>
  );
}
