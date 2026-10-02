import StoreBadge from "./StoreBadge";

// Circle.gs style showcase: app icon + name + pitch + store badges, phone mockup beside it.
// Add real titles here as they launch.
export default function Games() {
  return (
    <section id="games" className="bg-brand-50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">Our Games</h2>
          <p className="mt-5 font-display text-3xl font-semibold leading-tight md:text-4xl">
            What we&apos;re working on.
          </p>
          <p className="mt-5 leading-relaxed text-neutral-600">
            We&apos;re currently working on our first game. More details will follow as it gets closer to release.
          </p>
        </div>

        <div className="mt-16 grid items-center gap-12 overflow-hidden rounded-[2rem] bg-white p-8 shadow-xl shadow-brand-700/5 md:grid-cols-2 md:p-14">
          <div>
            <div className="flex items-center gap-4">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-amber-300 to-pink-400 shadow-md">
                <span className="font-display text-2xl font-bold text-white">?</span>
              </div>
              <div>
                <span className="inline-block rounded-full bg-brand-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-600">
                  In development
                </span>
                <h3 className="mt-1.5 font-display text-2xl font-semibold">Our first title</h3>
              </div>
            </div>
            <p className="mt-6 max-w-md leading-relaxed text-neutral-600">
              A colourful puzzle game about sorting, matching and clearing. It&apos;s still early, so stay tuned for
              updates.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <StoreBadge store="apple" />
              <StoreBadge store="google" />
            </div>
          </div>

          {/* Phone mockup */}
          <div className="flex justify-center">
            <div className="relative aspect-[9/19] w-56 rounded-[2.5rem] border-[10px] border-ink bg-gradient-to-b from-brand-400 to-brand-700 shadow-2xl md:w-64">
              <div className="absolute left-1/2 top-2 h-5 w-20 -translate-x-1/2 rounded-full bg-ink" />
              <div className="absolute inset-x-5 top-16 grid grid-cols-3 gap-3">
                {["bg-amber-300", "bg-pink-400", "bg-sky-300", "bg-emerald-300", "bg-white/90", "bg-amber-300", "bg-sky-300", "bg-pink-400", "bg-emerald-300"].map(
                  (c, i) => (
                    <span key={i} className={`aspect-square rounded-xl shadow-md ${c}`} />
                  ),
                )}
              </div>
              <p className="absolute inset-x-0 bottom-10 text-center font-display text-lg font-semibold text-white">Coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
