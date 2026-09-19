import type { ReactNode } from 'react'

export type ArtVariant = 'diary' | 'docmind' | 'stock' | 'atelier' | 'recipe' | 'outreach'

const shared = {
  stroke: 'var(--text)',
  accent: 'var(--accent)',
}

function Frame({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 240 160" className="work-art-svg" role="presentation" aria-hidden="true">
      <rect x="0" y="0" width="240" height="160" fill="var(--bg-alt)" />
      {children}
    </svg>
  )
}

function Diary() {
  return (
    <Frame>
      <path
        d="M40 46 C58 38, 78 38, 96 44 L96 118 C78 112, 58 112, 40 120 Z"
        fill="none"
        stroke={shared.stroke}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M152 44 C170 38, 190 38, 200 46 L200 120 C190 112, 170 112, 152 118 Z"
        fill="none"
        stroke={shared.stroke}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M96 44 C112 50, 136 50, 152 44" fill="none" stroke={shared.stroke} strokeWidth="1.6" />
      <path d="M96 118 C112 112, 136 112, 152 118" fill="none" stroke={shared.stroke} strokeWidth="1.6" />
      {[64, 78, 92].map((y) => (
        <line key={y} x1="50" y1={y} x2="88" y2={y - 4} stroke={shared.stroke} strokeWidth="1.1" opacity="0.55" />
      ))}
      {[64, 78, 92].map((y) => (
        <line key={y} x1="160" y1={y - 4} x2="192" y2={y} stroke={shared.stroke} strokeWidth="1.1" opacity="0.55" />
      ))}
      <circle cx="176" cy="30" r="9" fill="none" stroke={shared.accent} strokeWidth="1.6" />
      <path d="M182 26a7 7 0 1 0 0 10 8 8 0 1 1 0-10Z" fill={shared.accent} stroke="none" />
    </Frame>
  )
}

function DocMind() {
  return (
    <Frame>
      <rect x="46" y="52" width="62" height="78" rx="4" fill="none" stroke={shared.stroke} strokeWidth="1.4" transform="rotate(-6 77 91)" opacity="0.5" />
      <rect x="50" y="46" width="62" height="78" rx="4" fill="none" stroke={shared.stroke} strokeWidth="1.4" transform="rotate(-2 81 85)" opacity="0.75" />
      <rect x="54" y="40" width="62" height="78" rx="4" fill="var(--bg-alt)" stroke={shared.stroke} strokeWidth="1.6" />
      <line x1="64" y1="56" x2="106" y2="56" stroke={shared.stroke} strokeWidth="1.2" opacity="0.6" />
      <line x1="64" y1="66" x2="106" y2="66" stroke={shared.stroke} strokeWidth="1.2" opacity="0.6" />
      <line x1="64" y1="76" x2="92" y2="76" stroke={shared.stroke} strokeWidth="1.2" opacity="0.6" />
      <circle cx="160" cy="60" r="4" fill={shared.accent} />
      <circle cx="188" cy="76" r="4" fill="none" stroke={shared.stroke} strokeWidth="1.4" />
      <circle cx="168" cy="98" r="4" fill="none" stroke={shared.stroke} strokeWidth="1.4" />
      <circle cx="196" cy="112" r="4" fill={shared.accent} />
      <line x1="118" y1="70" x2="156" y2="61" stroke={shared.stroke} strokeWidth="1.1" opacity="0.6" />
      <line x1="160" y1="60" x2="188" y2="76" stroke={shared.stroke} strokeWidth="1.1" opacity="0.6" />
      <line x1="188" y1="76" x2="168" y2="98" stroke={shared.stroke} strokeWidth="1.1" opacity="0.6" />
      <line x1="168" y1="98" x2="196" y2="112" stroke={shared.stroke} strokeWidth="1.1" opacity="0.6" />
      <circle cx="188" cy="42" r="12" fill="none" stroke={shared.stroke} strokeWidth="1.4" opacity="0.55" />
      <line x1="197" y1="51" x2="206" y2="60" stroke={shared.stroke} strokeWidth="1.4" opacity="0.55" strokeLinecap="round" />
    </Frame>
  )
}

function Stock() {
  const bars = [
    { x: 56, h: 28, up: false },
    { x: 82, h: 46, up: true },
    { x: 108, h: 20, up: false },
    { x: 134, h: 58, up: true },
    { x: 160, h: 34, up: false },
    { x: 186, h: 50, up: true },
  ]
  const base = 122
  return (
    <Frame>
      <line x1="40" y1={base} x2="204" y2={base} stroke={shared.stroke} strokeWidth="1.2" opacity="0.5" />
      {bars.map((b) => (
        <g key={b.x}>
          <line x1={b.x + 5} y1={base - b.h - 10} x2={b.x + 5} y2={base - b.h + 10} stroke={b.up ? shared.accent : shared.stroke} strokeWidth="1.1" opacity={b.up ? 0.9 : 0.55} />
          <rect
            x={b.x}
            y={base - b.h}
            width="10"
            height={Math.max(b.h - 10, 10)}
            fill={b.up ? shared.accent : 'var(--bg-alt)'}
            stroke={b.up ? shared.accent : shared.stroke}
            strokeWidth="1.3"
            opacity={b.up ? 0.85 : 0.7}
          />
        </g>
      ))}
      <path
        d="M56 88 L82 70 L108 96 L134 58 L160 82 L186 66"
        fill="none"
        stroke={shared.stroke}
        strokeWidth="1.1"
        strokeDasharray="2 4"
        opacity="0.5"
      />
    </Frame>
  )
}

function Atelier() {
  return (
    <Frame>
      <path d="M120 34 L120 44" stroke={shared.stroke} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M96 58 C96 46, 144 46, 144 58 L120 44 Z" fill="none" stroke={shared.stroke} strokeWidth="1.6" strokeLinejoin="round" />
      <path
        d="M96 58 L58 84 L72 96 L84 88 L84 128 C84 132 88 134 92 134 L148 134 C152 134 156 132 156 128 L156 88 L168 96 L182 84 L144 58 Z"
        fill="none"
        stroke={shared.stroke}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <line x1="98" y1="70" x2="98" y2="110" stroke={shared.stroke} strokeWidth="1" opacity="0.4" />
      <line x1="142" y1="70" x2="142" y2="110" stroke={shared.stroke} strokeWidth="1" opacity="0.4" />
      <path
        d="M186 42 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3 Z"
        fill={shared.accent}
      />
      <circle cx="52" cy="60" r="3" fill={shared.accent} />
    </Frame>
  )
}

function Recipe() {
  return (
    <Frame>
      <rect x="54" y="36" width="132" height="92" rx="6" fill="none" stroke={shared.stroke} strokeWidth="1.6" />
      <line x1="54" y1="56" x2="186" y2="56" stroke={shared.stroke} strokeWidth="1.3" opacity="0.6" />
      <line x1="70" y1="72" x2="126" y2="72" stroke={shared.stroke} strokeWidth="1.1" opacity="0.5" />
      <line x1="70" y1="82" x2="118" y2="82" stroke={shared.stroke} strokeWidth="1.1" opacity="0.5" />
      <line x1="70" y1="92" x2="122" y2="92" stroke={shared.stroke} strokeWidth="1.1" opacity="0.5" />
      <line x1="70" y1="102" x2="110" y2="102" stroke={shared.stroke} strokeWidth="1.1" opacity="0.5" />
      <g stroke={shared.accent} strokeWidth="1.6" strokeLinecap="round" fill="none">
        <line x1="152" y1="70" x2="152" y2="112" />
        <line x1="146" y1="70" x2="146" y2="80" />
        <line x1="152" y1="70" x2="152" y2="80" />
        <line x1="158" y1="70" x2="158" y2="80" />
        <path d="M146 70 C146 78, 158 78, 158 70" />
        <path d="M172 70 C166 70, 166 88, 172 88 C178 88, 178 70, 172 70 Z" />
        <line x1="172" y1="88" x2="172" y2="112" />
      </g>
    </Frame>
  )
}

function Outreach() {
  return (
    <Frame>
      <rect x="46" y="52" width="120" height="70" rx="5" fill="none" stroke={shared.stroke} strokeWidth="1.6" />
      <path d="M46 56 L106 96 L166 56" fill="none" stroke={shared.stroke} strokeWidth="1.5" strokeLinejoin="round" />
      <g transform="translate(150 66) rotate(18)">
        <path d="M0 20 L46 0 L34 12 L46 0 L26 30 L20 10 Z" fill={shared.accent} stroke={shared.accent} strokeWidth="1" strokeLinejoin="round" />
      </g>
      <circle cx="196" cy="118" r="2.5" fill={shared.stroke} opacity="0.5" />
      <circle cx="204" cy="126" r="2" fill={shared.stroke} opacity="0.35" />
    </Frame>
  )
}

export default function ProjectArt({ variant }: { variant: ArtVariant }) {
  switch (variant) {
    case 'diary':
      return <Diary />
    case 'docmind':
      return <DocMind />
    case 'stock':
      return <Stock />
    case 'atelier':
      return <Atelier />
    case 'recipe':
      return <Recipe />
    case 'outreach':
      return <Outreach />
    default:
      return null
  }
}
