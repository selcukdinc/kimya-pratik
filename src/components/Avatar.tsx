// Avatar çizimleri. Hepsi currentColor ile çizilir: zemin rengi seçilmemişse
// temanın yazı rengini alır, seçilmişse açık zeminin üzerinde koyu kalır.
// Kimlik listesi shared/avatarlar.ts'te.

import type { ReactNode } from "react";
import { AVATARLAR } from "../../shared/avatarlar";

const L = ({ d }: { d: string }) => <path d={d} />;
const C = ({ x, y, r = 3 }: { x: number; y: number; r?: number }) => <circle cx={x} cy={y} r={r} />;

// Kutunun içinde ya da yanında kısa yazılar (z⁻¹, ADC, Σ ...)
function T({ x, y, s = 9, children }: { x: number; y: number; s?: number; children: string }) {
  return (
    <text
      x={x}
      y={y}
      fontSize={s}
      textAnchor="middle"
      dominantBaseline="central"
      fill="currentColor"
      stroke="none"
      fontFamily="ui-monospace, Menlo, Consolas, monospace"
      fontWeight={700}
    >
      {children}
    </text>
  );
}

const kutu = (x: number, y: number, w: number, h: number) => <rect x={x} y={y} width={w} height={h} rx={2} />;

// Periyodik tablo kutusu: köşede atom numarası, ortada simge
const element = (simge: string, z: string) => (
  <>
    {kutu(8, 8, 32, 32)}
    <T x={14} y={14} s={6}>{z}</T>
    <T x={24} y={27} s={simge.length > 1 ? 14 : 17}>{simge}</T>
  </>
);

const CIZIMLER: Record<string, ReactNode> = {
  // Laboratuvar
  erlenmeyer: <><L d="M19 6 H29 M20 6 V18 L9 40 H39 L28 18 V6" /><L d="M14 31 H34" /></>,
  beher: <><L d="M10 8 H38 M12 8 V40 H36 V8" /><L d="M12 24 H36 M30 14 H36 M32 19 H36" /></>,
  "deney-tupu": <><L d="M19 4 H31 M20 4 V38 A5 5 0 0 0 30 38 V4" /><L d="M20 26 H30" /><C x={25} y={33} r={1.4} /></>,
  balon: <><L d="M21 4 H27 M22 4 V18 M26 4 V18" /><circle cx={24} cy={31} r={13} /><L d="M12 32 H36" /></>,
  mezur: <><L d="M18 6 H30 M19 6 V40 H29 V6 M14 40 H34" /><L d="M19 14 H23 M19 20 H25 M19 26 H23 M19 32 H25" /></>,
  pipet: <><L d="M22 4 V14 M26 4 V14 M22 14 Q16 22 22 30 M26 14 Q32 22 26 30 M22 30 V40 L24 44 L26 40 V30" /></>,
  huni: <><L d="M8 10 H40 L27 26 V42 M8 10 L21 26 V42" /><L d="M14 16 H34" /></>,
  bunzen: <><L d="M16 42 H32 M20 42 V22 H28 V42 M20 30 H14" /><L d="M24 18 Q18 12 24 4 Q30 12 24 18" /></>,
  termometre: <><L d="M21 30 V8 A3 3 0 0 1 27 8 V30" /><circle cx={24} cy={36} r={6} /><L d="M24 33 V18 M27 12 H30 M27 18 H30 M27 24 H30" /></>,
  terazi: <><L d="M24 6 V40 M14 42 H34 M8 12 H40" /><L d="M8 12 L4 24 H12 Z M40 12 L36 24 H44 Z" /></>,
  mikroskop: <><L d="M10 42 H38 M26 42 V36 M18 36 H34 M20 8 L28 28 M18 6 H24 M30 26 A10 10 0 0 0 26 14" /><L d="M27 30 L31 28" /></>,
  gozluk: <><circle cx={15} cy={26} r={8} /><circle cx={33} cy={26} r={8} /><L d="M23 25 Q24 22 25 25 M7 24 L3 18 M41 24 L45 18" /></>,
  // Atom ve molekül
  atom: <><ellipse cx={24} cy={24} rx={19} ry={7} /><ellipse cx={24} cy={24} rx={19} ry={7} transform="rotate(60 24 24)" /><ellipse cx={24} cy={24} rx={19} ry={7} transform="rotate(-60 24 24)" /><C x={24} y={24} /></>,
  "orbital-p": <><L d="M24 24 C14 16 14 4 24 4 C34 4 34 16 24 24 C14 32 14 44 24 44 C34 44 34 32 24 24" /><L d="M6 24 H42" /></>,
  "elektron-bulutu": <><C x={24} y={24} r={3} />{[[14, 14], [33, 12], [38, 26], [30, 37], [15, 35], [9, 24], [22, 9], [36, 33], [20, 40], [12, 18]].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r={1.3} fill="currentColor" stroke="none" />)}</>,
  benzen: <><L d="M24 6 L39.6 15 V33 L24 42 L8.4 33 V15 Z" /><circle cx={24} cy={24} r={9} /></>,
  su: <><circle cx={24} cy={20} r={8} /><circle cx={11} cy={34} r={5} /><circle cx={37} cy={34} r={5} /><L d="M18 25 L14 30 M30 25 L34 30" /><T x={24} y={20} s={8}>O</T></>,
  dortyuzlu: <><L d="M24 6 L8 36 L30 42 Z M24 6 L40 32 L30 42 M8 36 L40 32" /><C x={24} y={28} r={2} /></>,
  dogrusal: <><circle cx={8} cy={24} r={5} /><circle cx={24} cy={24} r={6} /><circle cx={40} cy={24} r={5} /><L d="M13 22 H18 M13 26 H18 M30 22 H35 M30 26 H35" /></>,
  kristal: <><L d="M10 16 H30 V36 H10 Z M18 8 H38 V28 H30 M10 16 L18 8 M30 16 L38 8 M30 36 L38 28" /><C x={24} y={22} r={2} /></>,
  // Elementler
  "el-h": element("H", "1"),
  "el-c": element("C", "6"),
  "el-o": element("O", "8"),
  "el-n": element("N", "7"),
  "el-na": element("Na", "11"),
  "el-fe": element("Fe", "26"),
  "el-au": element("Au", "79"),
  "el-he": element("He", "2"),
  // Olaylar
  alev: <><L d="M24 44 C12 44 10 32 16 24 C18 30 22 30 21 22 C20 14 26 8 28 4 C30 14 38 20 36 32 C35 40 30 44 24 44" /><L d="M24 40 C20 40 19 34 23 30 C24 34 28 34 27 38" /></>,
  damla: <><L d="M24 4 C24 4 10 22 10 30 A14 14 0 0 0 38 30 C38 22 24 4 24 4" /><L d="M17 31 A7 7 0 0 0 23 38" /></>,
  kabarcik: <><circle cx={16} cy={32} r={7} /><circle cx={31} cy={22} r={5} /><circle cx={22} cy={12} r={3} /><circle cx={36} cy={36} r={3} /></>,
  miknatis: <><L d="M10 8 V24 A14 14 0 0 0 38 24 V8 H30 V24 A6 6 0 0 1 18 24 V8 Z" /><L d="M10 14 H18 M30 14 H38" /></>,
  pil: <><rect x={8} y={14} width={30} height={20} rx={2} /><L d="M38 20 H42 V28 H38 M14 24 H20 M17 21 V27 M27 24 H33" /></>,
  ph: <><rect x={18} y={4} width={12} height={40} rx={1} /><L d="M18 14 H30 M18 24 H30 M18 34 H30" /><T x={24} y={39} s={6}>pH</T></>,
};

interface Props {
  id: string | null;
  bg?: string | null;
  size?: number;
  title?: string;
}

export function Avatar({ id, bg, size = 32, title }: Props) {
  const cizim = id ? CIZIMLER[id] : undefined;
  const ad = title ?? (id ? AVATARLAR.find((a) => a.id === id)?.ad : undefined) ?? "Avatar";
  return (
    <svg
      className="avatar"
      viewBox="0 0 48 48"
      width={size}
      height={size}
      role="img"
      aria-label={ad}
      style={bg ? { background: bg, color: "#1f1f1f" } : undefined}
    >
      <title>{ad}</title>
      <g fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
        {cizim ?? <T x={24} y={25} s={22}>?</T>}
      </g>
    </svg>
  );
}

export const avatarVar = (id: string) => id in CIZIMLER;
