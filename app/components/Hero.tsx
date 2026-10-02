import Image from "next/image";

// Gram / Peak style: full-bleed hero with one big statement and a single CTA,
// over a photo tinted with the brand colour, plus a few playful floating shapes
const shapes = [
  { cls: "left-[8%] top-[22%] h-16 w-16 rounded-2xl bg-amber-300", r: "-12deg", delay: "0s" },
  { cls: "right-[10%] top-[18%] h-20 w-20 rounded-full bg-pink-400", r: "0deg", delay: "1.2s" },
  { cls: "left-[14%] bottom-[18%] h-12 w-12 rounded-full bg-emerald-300", r: "0deg", delay: "2s" },
  { cls: "right-[16%] bottom-[22%] h-14 w-14 rounded-2xl bg-sky-300", r: "18deg", delay: "0.6s" },
  { cls: "left-[46%] top-[12%] h-8 w-8 rounded-lg bg-white/80", r: "30deg", delay: "1.6s" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[640px] h-[100svh] items-center justify-center overflow-hidden bg-brand-500">
      <Image
        src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1920&q=80&auto=format&fit=crop"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-brand-600/80 mix-blend-multiply" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(143,123,255,0.6)_0%,transparent_55%),radial-gradient(circle_at_80%_90%,rgba(72,36,204,0.7)_0%,transparent_50%)]" />

      {shapes.map((s, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`animate-float absolute hidden opacity-90 shadow-xl sm:block ${s.cls}`}
          style={{ ["--r" as string]: s.r, animationDelay: s.delay, transform: `rotate(${s.r})` }}
        />
      ))}

      <div className="relative z-10 max-w-3xl px-6 text-center">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">Mobile Game Studio</p>
        <h1 className="font-display text-5xl font-semibold leading-[1.05] text-white sm:text-6xl md:text-7xl">
          We make <br className="hidden sm:block" />
          mobile games.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-white/80 md:text-lg">
          A small team building puzzle games we enjoy playing ourselves.
        </p>
        <a
          href="#games"
          className="mt-10 inline-block rounded-full bg-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-brand-600 shadow-lg shadow-brand-700/30 transition hover:-translate-y-0.5 hover:shadow-xl"
        >
          See what we&apos;re working on
        </a>
      </div>

      <svg className="absolute bottom-0 left-0 w-full text-white" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
        <path fill="currentColor" d="M0 80V40c240 30 480 40 720 20s480-50 720-20v40Z" />
      </svg>
    </section>
  );
}
