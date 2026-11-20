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

/** How We Work: small team, three people working around one laptop */
export function TeamIllustration({ className = "" }: P) {
  return (
    <svg viewBox="0 0 200 120" className={`line-draw ${className}`} aria-hidden="true">
      {/* ideas floating above the team */}
      <rect x="62" y="14" width="14" height="14" rx="4" fill="#fcd34d" className="animate-wiggle" />
      <circle cx="138" cy="21" r="7" fill="#f472b6" className="animate-twinkle" style={{ animationDelay: "1s" }} />
      <Sparkle x={100} y={16} s={0.6} color="var(--color-brand-500)" />
      <g {...line} stroke="var(--color-ink)">
        <circle pathLength={1} style={d(0)} cx="45" cy="50" r="11" />
        <path pathLength={1} style={d(0.3)} d="M27 100c0-15 8-26 18-26s18 11 18 26" />
        <circle pathLength={1} style={d(0.15)} cx="155" cy="50" r="11" />
        <path pathLength={1} style={d(0.45)} d="M137 100c0-15 8-26 18-26s18 11 18 26" />
        <circle pathLength={1} style={d(0.1)} cx="100" cy="42" r="11" />
        <path pathLength={1} style={d(0.4)} d="M82 92c0-15 8-26 18-26s18 11 18 26" />
        {/* laptop in front of the middle person */}
        <rect pathLength={1} style={d(0.7)} x="78" y="72" width="44" height="26" rx="4" fill="white" />
        <path pathLength={1} style={d(0.9)} d="M14 100h172" />
      </g>
      <rect x="88" y="79" width="11" height="11" rx="3" fill="#6ee7b7" className="animate-twinkle" style={{ animationDuration: "3s" }} />
      <rect x="102" y="79" width="11" height="11" rx="3" fill="#7dd3fc" className="animate-twinkle" style={{ animationDuration: "3s", animationDelay: "0.6s" }} />
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
