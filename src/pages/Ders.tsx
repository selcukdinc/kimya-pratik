// /ders: ünitelerin ders sayfaları. Anlatım, etkileşimli şekiller, Sanal Lab
// deneylerine bağlantılar ve soru havuzundan seçilmiş konu sonu testi.
// Üniteler vize ve final olarak iki gruba ayrılır.

import { useEffect, useRef, useState } from "react";
import { api } from "../lib/api";
import { href } from "../lib/router";
import { Markdown, inline } from "../components/Markdown";
import { QuestionCard } from "./Questions";
import { bolumId } from "../dersler/bolumBul";
import { DERSLER, dersBul } from "../dersler";
import { DONEM_ADI, haftaAdi, type Donem } from "../dersler/tipler";
import { deneyBul } from "../lab/deneyler";
import type { Ders as DersVerisi } from "../dersler/tipler";
import type { Question, SoruDurumlari } from "../../shared/api";
import { useDersIlerleme } from "../lib/dersIlerleme";
import { bolumBittiMi, type DersIlerleme } from "../../shared/dersIlerleme";


const DONEMLER: Donem[] = ["vize", "final"];

const bitenSayisi = (i: DersIlerleme, d: DersVerisi) => d.bolumler.filter((_, k) => bolumBittiMi(i, d.hafta, k)).length;

function IlerlemeCubugu({ biten, toplam }: { biten: number; toplam: number }) {
  return (
    <span className="ders-ilerleme">
      <span className="ders-ilerleme-cubuk" aria-hidden="true"><span style={{ width: `${(biten / toplam) * 100}%` }} /></span>
      <span>{biten === toplam ? "Bitirdin" : `${biten}/${toplam} bölüm bitti`}</span>
    </span>
  );
}

function DersListesi() {
  const { ilerleme } = useDersIlerleme();
  const son = ilerleme.son;
  const sonDers = son ? dersBul(son.hafta) : undefined;
  const sonBolum = son && sonDers?.bolumler[son.bolum];
  return (
    <div className="ders-sayfa">
      <p className="ders-giris">
        Her ünite konuyu kısaca anlatır, Sanal Lab'daki deneylerle pekiştirir ve sonunda soru havuzundan seçilmiş
        kısa bir testle biter. Üniteler vize ve final konularına göre iki gruba ayrılmıştır. Bir bölümü bitirince sonundaki <strong>Bu bölümü bitirdim</strong>{" "}
        düğmesine bas; ilerlemen burada görünür.
      </p>
      {son && sonDers && sonBolum && (
        <a className="ders-devam" href={`${href({ page: "ders", hafta: son.hafta })}#${bolumId(son.bolum)}`}>
          <span className="ders-hafta">Kaldığın yer</span>
          <strong>{haftaAdi(sonDers)}: {sonBolum.baslik}</strong>
          <span className="ders-devam-ok">Devam et →</span>
        </a>
      )}
      {DONEMLER.map((donem) => (
        <section key={donem} aria-labelledby={`donem-${donem}`}>
          <h3 className="donem-baslik" id={`donem-${donem}`}>{DONEM_ADI[donem]} konuları</h3>
          <ol className="ders-listesi">
            {DERSLER.filter((d) => d.donem === donem).map((d) => {
              const lab = d.bolumler.filter((b) => b.lab).length;
              const biten = bitenSayisi(ilerleme, d);
              const hazir = d.bolumler.length > 0;
              return (
                <li key={d.hafta}>
                  <a href={href({ page: "ders", hafta: d.hafta })}>
                    <span className="ders-hafta">{haftaAdi(d)}</span>
                    <strong>{d.baslik}</strong>
                    <span className="hint">{d.ozet}</span>
                    <span className="ders-etiketler">
                      {hazir ? <span className="tag">{d.bolumler.length} bölüm</span> : <span className="tag">Hazırlanıyor</span>}
                      {lab > 0 && <span className="tag">{lab} lab deneyi</span>}
                      {d.test.length > 0 && <span className="tag">{d.test.length} soruluk test</span>}
                    </span>
                    {biten > 0 && <IlerlemeCubugu biten={biten} toplam={d.bolumler.length} />}
                  </a>
                </li>
              );
            })}
          </ol>
        </section>
      ))}
    </div>
  );
}

// Ders sayfasındaki sorular (bölüm sonu "Kendini dene" ve konu sonu testi) tek
// istekle yüklenir
type SoruDurumu = Map<string, Question> | "hata" | null;

function useSorular(ders: DersVerisi): [SoruDurumu, SoruDurumlari] {
  const [sorular, setSorular] = useState<SoruDurumu>(null);
  // Daha önce çözülen sorular kartta işaretlenir; sayfa açılırken bir kez alınır
  const [durumlar, setDurumlar] = useState<SoruDurumlari>({});
  useEffect(() => {
    setSorular(null);
    api.questions().then((liste) => setSorular(new Map(liste.map((q) => [q.id, q]))), () => setSorular("hata"));
    api.soruDurumlari().then(setDurumlar, () => setDurumlar({}));
  }, [ders]);
  return [sorular, durumlar];
}

function KendiniDene({ ids, sorular, durumlar }: { ids: string[]; sorular: SoruDurumu; durumlar: SoruDurumlari }) {
  if (!(sorular instanceof Map)) return null;
  const liste = ids.map((id) => sorular.get(id)).filter((q): q is Question => !!q);
  if (!liste.length) return null;
  return (
    <div className="kendini-dene">
      <h4>Kendini dene</h4>
      {liste.map((q, i) => (
        <QuestionCard key={q.id} q={q} n={i + 1} dersBagi={false} durum={durumlar[q.id]} />
      ))}
    </div>
  );
}

function KonuSonuTesti({ ders, sorular: hepsi, durumlar }: { ders: DersVerisi; sorular: SoruDurumu; durumlar: SoruDurumlari }) {
  if (hepsi === "hata") return <p className="bad">Sorular yüklenemedi.</p>;
  if (!hepsi) return <p className="empty">Yükleniyor…</p>;
  const sorular = ders.test.map((id) => hepsi.get(id)).filter((q): q is Question => !!q);
  if (sorular.length === 0) return <p className="empty">Bu ünitenin soruları henüz açılmadı.</p>;
  return (
    <>
      <p className="hint">
        Cevapların ilerlemene işlenir. Daha fazlası için{" "}
        <a href={href({ page: "sorular", hafta: ders.hafta })}>{ders.hafta}. ünitenin tüm sorularına</a> bak.
      </p>
      {sorular.map((q, i) => (
        <QuestionCard key={q.id} q={q} n={i + 1} dersBagi={false} durum={durumlar[q.id]} />
      ))}
    </>
  );
}

function DersSayfasi({ ders }: { ders: DersVerisi }) {
  // /ders/3#bolum-2 gibi bir adresle gelindiyse sayfa çizildikten sonra o bölüme kaydırılır
  useEffect(() => {
    if (location.hash) document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView();
  }, []);
  const [sorular, durumlar] = useSorular(ders);
  const { ilerleme, isaretle, sonYer } = useDersIlerleme();
  useSonBolum(ders.hafta, sonYer);
  const biten = bitenSayisi(ilerleme, ders);
  const testVar = ders.test.length > 0;
  const onceki = dersBul(ders.hafta - 1);
  const sonraki = dersBul(ders.hafta + 1);
  return (
    <div className="ders-sayfa">
      <header className="ders-ust">
        <span className="ders-hafta">{haftaAdi(ders)} · {DONEM_ADI[ders.donem]}</span>
        <h2>{ders.baslik}</h2>
        <p className="hint">{ders.ozet}</p>
        {ders.bolumler.length > 0 ? (
          <IlerlemeCubugu biten={biten} toplam={ders.bolumler.length} />
        ) : (
          <p className="empty">Bu ünitenin anlatımı hazırlanıyor. Bu arada <a href={href({ page: "sorular", hafta: ders.hafta })}>sorularına</a> bakabilirsin.</p>
        )}
      </header>
      {(ders.bolumler.length > 0 || testVar) && <nav className="ders-icindekiler" aria-label="Bu ünitede">
        <ol>
          {ders.bolumler.map((b, i) => {
            const bitti = bolumBittiMi(ilerleme, ders.hafta, i);
            return (
              <li key={b.baslik} className={bitti ? "bitti" : undefined}>
                <a href={`#${bolumId(i)}`}>{b.baslik}</a>
                {bitti && <span className="bitti-isareti" aria-label="bitirdin"> ✓</span>}
              </li>
            );
          })}
          {testVar && <li><a href="#test">Konu sonu testi</a></li>}
        </ol>
      </nav>}

      {ders.bolumler.map((b, i) => (
        <section key={b.baslik} id={bolumId(i)} className="ders-bolum">
          <h3>{inline(b.baslik, true)}</h3>
          <Markdown text={b.metin} terim />
          {b.lab && <LabBagi id={b.lab} />}
          {b.dene && <KendiniDene ids={b.dene} sorular={sorular} durumlar={durumlar} />}
          <BolumSonu
            bitti={bolumBittiMi(ilerleme, ders.hafta, i)}
            degistir={(bitti) => isaretle(ders.hafta, i, bitti)}
            sonraki={i + 1 < ders.bolumler.length ? { id: bolumId(i + 1), baslik: ders.bolumler[i + 1]!.baslik } : testVar ? { id: "test", baslik: "Konu sonu testi" } : null}
          />
        </section>
      ))}

      {testVar && (
        <section id="test" className="ders-bolum ders-test">
          <h3>Konu sonu testi</h3>
          <KonuSonuTesti ders={ders} sorular={sorular} durumlar={durumlar} />
        </section>
      )}

      <nav className="ders-gezinti" aria-label="Üniteler arasında">
        {onceki ? <a href={href({ page: "ders", hafta: onceki.hafta })}>← {haftaAdi(onceki)}: {onceki.baslik}</a> : <span />}
        {sonraki && <a href={href({ page: "ders", hafta: sonraki.hafta })}>{haftaAdi(sonraki)}: {sonraki.baslik} →</a>}
      </nav>
    </div>
  );
}

// Bölümle ilgili Sanal Lab deneyine bağlantı
function LabBagi({ id }: { id: string }) {
  const d = deneyBul(id);
  if (!d) return null;
  return (
    <p className="lab-bagi">
      <strong>Sanal Lab:</strong> <a href={href({ page: "lab", deney: d.id })}>{d.ad}</a> ile kendin dene.
    </p>
  );
}

// Bölümün sonundaki "Bu bölümü bitirdim" düğmesi; bitirilince sonraki bölüme bağlantı da verir
function BolumSonu({ bitti, degistir, sonraki }: { bitti: boolean; degistir: (bitti: boolean) => void; sonraki: { id: string; baslik: string } | null }) {
  return (
    <div className={`bolum-sonu${bitti ? " bitti" : ""}`}>
      {bitti ? (
        <>
          <span className="bolum-sonu-durum">✓ Bu bölümü bitirdin.</span>
          {sonraki && <a href={`#${sonraki.id}`}>Sıradaki: {sonraki.baslik} →</a>}
          <button className="bagli-dugme" onClick={() => degistir(false)}>Geri al</button>
        </>
      ) : (
        <button className="primary" onClick={() => degistir(true)}>Bu bölümü bitirdim</button>
      )}
    </div>
  );
}

// Ekranın üst kısmındaki bölüm "kaldığın yer" olarak kaydedilir
function useSonBolum(hafta: number, sonYer: (hafta: number, bolum: number) => void) {
  const kaydet = useRef(sonYer);
  kaydet.current = sonYer;
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const bolumler = [...document.querySelectorAll<HTMLElement>(".ders-bolum[id^='bolum-']")];
    const g = new IntersectionObserver(
      (girdiler) => {
        for (const e of girdiler) {
          if (!e.isIntersecting) continue;
          const sira = Number((e.target as HTMLElement).id.slice("bolum-".length)) - 1;
          if (sira >= 0) kaydet.current(hafta, sira);
        }
      },
      // Bölüm ekranın üstten %20-40'lık şeridine girince okunuyor sayılır
      { rootMargin: "-20% 0px -60% 0px" },
    );
    bolumler.forEach((b) => g.observe(b));
    return () => g.disconnect();
  }, [hafta]);
}

export function Ders({ hafta }: { hafta?: number }) {
  if (hafta === undefined) return <DersListesi />;
  const ders = dersBul(hafta);
  if (!ders) return <p className="empty">Böyle bir ünite yok. <a href="/ders">Tüm üniteler</a></p>;
  return <DersSayfasi key={hafta} ders={ders} />;
}
