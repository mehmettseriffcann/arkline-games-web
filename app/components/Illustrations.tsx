// Hand-drawn style line illustrations used instead of photos.
// Strokes inside .ln groups (each with pathLength={1}) animate in via .line-draw in globals.css.

type P = { className?: string };
const d = (s: number) => ({ "--d": `${s}s` }) as React.CSSProperties;
const line = { className: "ln", fill: "none", strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" } as const;

function Sparkle({ x, y, s = 1, delay = 0, color = "currentColor" }: { x: number; y: number; s?: number; delay?: number; color?: string }) {
  return (
    // Position on the <g>: the CSS animation's transform would override a transform on the path itself
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path
        className="animate-twinkle"
        style={{ animationDelay: `${delay}s` }}
        fill={color}
        d="M0-10C1-3 3-1 10 0 3 1 1 3 0 10-1 3-3 1-10 0-3-1-1-3 0-10Z"
      />
    </g>
  );
}

/** Hero background: game-pieces doodles in white, drawn in and drifting */
export function HeroDoodles({ className = "" }: P) {
  return (
    <svg viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" className={`line-draw text-white ${className}`} aria-hidden="true">
      <g {...line} stroke="currentColor" strokeOpacity="0.55" strokeWidth="3.5">
        {/* wavy paths */}
        <path pathLength={1} style={d(0)} d="M-20 640C200 520 320 700 520 600S860 420 1020 520 1300 640 1460 520" />
        <path pathLength={1} style={d(0.3)} d="M-20 180C160 120 260 260 420 210S700 60 860 140" />
        {/* controller */}
        <g className="animate-float" style={{ animationDelay: "0.4s" }}>
          <path pathLength={1} style={d(0.4)} d="M1090 150h140c40 0 62 30 70 70l14 70c6 30-26 46-46 24l-34-38h-148l-34 38c-20 22-52 6-46-24l14-70c8-40 30-70 70-70Z" />
          <path pathLength={1} style={d(0.9)} d="M1110 220h40M1130 200v40" />
          <circle pathLength={1} style={d(1)} cx="1220" cy="208" r="7" />
          <circle pathLength={1} style={d(1.1)} cx="1246" cy="232" r="7" />
        </g>
        {/* puzzle piece */}
        <g className="animate-float" style={{ animationDelay: "1.4s" }}>
          <path
            pathLength={1}
            style={d(0.6)}
            d="M170 330h50c0-24 40-24 40 0h50v50c24 0 24 40 0 40v50h-50c0 24-40 24-40 0h-50v-50c-24 0-24-40 0-40Z"
          />
        </g>
        {/* heart */}
        <path pathLength={1} style={d(0.8)} className="animate-wiggle" d="M1210 560c-30-30-80 0-50 40l50 44 50-44c30-40-20-70-50-40Z" />
        {/* cube */}
        <g className="animate-float" style={{ animationDelay: "2.2s" }}>
          <path pathLength={1} style={d(1)} d="M300 620l60-32 60 32-60 32Z M300 620v64l60 32v-64 M420 620v64l-60 32" />
        </g>
        {/* tiles grid */}
        <g className="animate-float" style={{ animationDelay: "0.8s" }}>
          <rect pathLength={1} style={d(1.2)} x="980" y="610" width="44" height="44" rx="12" />
          <rect pathLength={1} style={d(1.3)} x="1036" y="610" width="44" height="44" rx="12" />
          <rect pathLength={1} style={d(1.4)} x="980" y="666" width="44" height="44" rx="12" />
        </g>
        <circle pathLength={1} style={d(1.2)} cx="560" cy="130" r="22" />
        <path pathLength={1} style={d(1.4)} d="M840 690l18 30h-36Z" />
      </g>
      <Sparkle x={640} y={240} s={1.2} />
      <Sparkle x={1340} y={420} delay={0.8} />
      <Sparkle x={120} y={560} s={0.8} delay={1.6} />
      <Sparkle x={900} y={110} s={0.9} delay={0.4} />
    </svg>
  );
}

/** About: a phone with a puzzle board, a pencil and floating tiles */
export function StudioIllustration({ className = "" }: P) {
  return (
    <svg viewBox="0 0 480 360" className={`line-draw ${className}`} role="img" aria-label="Illustration of a phone showing a puzzle game">
      <g {...line} stroke="var(--color-ink)">
        <rect pathLength={1} style={d(0)} x="170" y="40" width="140" height="270" rx="26" />
        <path pathLength={1} style={d(0.4)} d="M220 60h40" />
        <path pathLength={1} style={d(0.3)} d="M60 300h360" strokeOpacity="0.25" />
        {/* pencil */}
        <g className="animate-wiggle" style={{ animationDelay: "0.5s" }}>
          <path pathLength={1} style={d(0.8)} d="M360 120l40-40 22 22-40 40-30 8Z M392 88l22 22" />
        </g>
        {/* controller doodle */}
        <path pathLength={1} style={d(1)} d="M58 120h60c18 0 28 14 32 32l4 22c2 14-12 20-22 10l-14-14h-60l-14 14c-10 10-24 4-22-10l4-22c4-18 14-32 32-32Z" />
      </g>
      {/* board tiles */}
      {[
        [190, 90, "#fcd34d"], [240, 90, "#f472b6"], [190, 140, "#6ee7b7"],
        [240, 140, "var(--color-brand-400)"], [190, 190, "#7dd3fc"], [240, 190, "#fcd34d"],
      ].map(([x, y, c], i) => (
        <rect key={i} x={x as number} y={y as number} width="44" height="44" rx="12" fill={c as string} className="animate-twinkle" style={{ animationDelay: `${i * 0.3}s`, animationDuration: "4s" }} />
      ))}
      <g {...line} stroke="var(--color-ink)">
        <rect pathLength={1} style={d(1.2)} x="214" y="252" width="52" height="22" rx="11" />
      </g>
      {/* floating tiles */}
      <rect x="350" y="200" width="40" height="40" rx="11" fill="#f472b6" className="animate-float" style={{ ["--r" as string]: "14deg" }} />
      <rect x="96" y="210" width="32" height="32" rx="9" fill="#7dd3fc" className="animate-float" style={{ ["--r" as string]: "-10deg", animationDelay: "1s" }} />
      <Sparkle x={130} y={70} color="var(--color-brand-500)" />
      <Sparkle x={420} y={250} s={0.8} delay={1} color="#f59e0b" />
      <Sparkle x={340} y={60} s={0.7} delay={0.5} color="var(--color-brand-400)" />
    </svg>
  );
}

/** How We Work: small team */
export function TeamIllustration({ className = "" }: P) {
  return (
    <svg viewBox="0 0 200 120" className={`line-draw ${className}`} aria-hidden="true">
      <g {...line} stroke="var(--color-ink)">
        <circle pathLength={1} style={d(0)} cx="60" cy="46" r="16" />
        <path pathLength={1} style={d(0.3)} d="M30 104c0-20 14-34 30-34s30 14 30 34" />
        <circle pathLength={1} style={d(0.2)} cx="140" cy="46" r="16" />
        <path pathLength={1} style={d(0.5)} d="M110 104c0-20 14-34 30-34s30 14 30 34" />
        <path pathLength={1} style={d(0.8)} d="M86 30c8-10 20-10 28 0" strokeOpacity="0.4" />
      </g>
      <path className="animate-wiggle" fill="#f472b6" d="M100 16c-6-6-16 0-10 8l10 8 10-8c6-8-4-14-10-8Z" />
    </svg>
  );
}

/** How We Work: attention to detail */
export function DetailIllustration({ className = "" }: P) {
  return (
    <svg viewBox="0 0 200 120" className={`line-draw ${className}`} aria-hidden="true">
      <rect x="44" y="30" width="34" height="34" rx="9" fill="#fcd34d" />
      <rect x="84" y="30" width="34" height="34" rx="9" fill="#6ee7b7" />
      <rect x="44" y="70" width="34" height="34" rx="9" fill="#7dd3fc" />
      <g {...line} stroke="var(--color-ink)">
        <rect pathLength={1} style={d(0)} x="84" y="70" width="34" height="34" rx="9" />
        <g className="animate-float">
          <circle pathLength={1} style={d(0.4)} cx="134" cy="56" r="24" />
          <path pathLength={1} style={d(0.9)} d="M151 73l22 22" />
        </g>
      </g>
      <Sparkle x={134} y={56} s={0.8} color="var(--color-brand-500)" />
    </svg>
  );
}

/** How We Work: learning from players */
export function FeedbackIllustration({ className = "" }: P) {
  return (
    <svg viewBox="0 0 200 120" className={`line-draw ${className}`} aria-hidden="true">
      <g {...line} stroke="var(--color-ink)">
        <path pathLength={1} style={d(0)} d="M30 24h84a12 12 0 0 1 12 12v30a12 12 0 0 1-12 12H62l-18 16V78H30a12 12 0 0 1-12-12V36a12 12 0 0 1 12-12Z" />
        <path pathLength={1} style={d(0.6)} d="M120 104l18-22 16 12 26-34" />
        <path pathLength={1} style={d(1)} d="M168 60h12v12" />
      </g>
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${46 + i * 26} 51) scale(0.7)`}>
          <path
            className="animate-twinkle"
            style={{ animationDelay: `${i * 0.3}s` }}
            fill="#f59e0b"
            d="M0-12l3.5 7.5 8.5 1-6.2 5.8 1.6 8.4L0 6.5-7.4 10.7-5.8 2.3-12-3.5l8.5-1Z"
          />
        </g>
      ))}
    </svg>
  );
}
