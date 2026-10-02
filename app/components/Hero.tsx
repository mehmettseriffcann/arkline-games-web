"use client";

// Gram Games style: full-screen dark video/image hero, centered bold slogan
export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex flex-col items-center justify-center overflow-hidden bg-neutral-950">
      {/* Background photo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1920&q=80&auto=format&fit=crop"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />

      {/* Gradient overlay - fade to black at bottom like Gram */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-neutral-950" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
          We make<br />mobile games.
        </h1>
        <p className="text-base text-white/50 max-w-sm mx-auto leading-relaxed">
          Arkline Games is a mobile game studio.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a href="#games" className="text-sm font-medium text-white border border-white/30 px-6 py-3 hover:border-white/70 transition-colors">
            Our Games
          </a>
          <a href="#about" className="text-sm text-white/50 hover:text-white transition-colors">
            Learn more →
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-white/20" />
      </div>
    </section>
  );
}
