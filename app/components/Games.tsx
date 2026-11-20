"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import StoreBadge from "./StoreBadge";
import { games } from "./gameData";

// Circle.gs style showcase: one game per slide (icon, name, pitch, store badge, phone mockup),
// browsed sideways with arrow buttons, dots or swipe.
export default function Games() {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => setIndex(Math.round(el.scrollLeft / el.clientWidth));
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (i: number) => {
    const el = track.current;
    if (!el) return;
    const next = (i + games.length) % games.length;
    el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
  };

  const arrow =
    "grid h-12 w-12 place-items-center rounded-full bg-white text-brand-600 shadow-lg shadow-brand-700/10 transition hover:bg-brand-500 hover:text-white";

  return (
    <section id="games" className="bg-brand-50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">Our Games</h2>
            <p className="mt-5 font-display text-3xl font-semibold leading-tight md:text-4xl">Puzzle games for everyone.</p>
            <p className="mt-5 leading-relaxed text-neutral-600">
              Colourful, relaxing puzzles you can pick up any time. All our games are free to play on Google Play.
            </p>
          </div>
          <div className="flex gap-3">
            <button type="button" aria-label="Previous game" onClick={() => goTo(index - 1)} className={arrow}>
              <ChevronLeft size={22} />
            </button>
            <button type="button" aria-label="Next game" onClick={() => goTo(index + 1)} className={arrow}>
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        <div
          ref={track}
          aria-roledescription="carousel"
          className="no-scrollbar mt-12 flex snap-x snap-mandatory overflow-x-auto rounded-[2rem]"
        >
          {games.map((g, i) => (
            <article
              key={g.slug}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${games.length}: ${g.name}`}
              className="w-full shrink-0 snap-center"
            >
              <div className="grid h-full items-center gap-12 overflow-hidden rounded-[2rem] bg-white p-8 shadow-xl shadow-brand-700/5 md:grid-cols-2 md:p-14">
                <div>
                  <div className="flex items-center gap-4">
                    <Image
                      src={`/games/${g.slug}-icon.png`}
                      alt={`${g.name} icon`}
                      width={80}
                      height={80}
                      className="h-16 w-16 rounded-2xl shadow-md md:h-20 md:w-20"
                    />
                    <div>
                      <span className="inline-block rounded-full bg-brand-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-600">
                        {g.genre}
                      </span>
                      <h3 className="mt-1.5 font-display text-2xl font-semibold leading-tight md:text-3xl">{g.name}</h3>
                    </div>
                  </div>
                  <p className="mt-6 max-w-md leading-relaxed text-neutral-600">{g.tagline}</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <StoreBadge store="google" href={g.googlePlay} />
                  </div>
                </div>

                <div className="relative flex justify-center">
                  <div className={`absolute inset-x-6 inset-y-10 rounded-full bg-gradient-to-br ${g.accent} opacity-60 blur-3xl`} />
                  <div className="relative aspect-[9/19] w-52 overflow-hidden rounded-[2.5rem] border-[10px] border-ink bg-ink shadow-2xl md:w-60">
                    <Image
                      src={`/games/${g.slug}-shot.png`}
                      alt={`${g.name} gameplay screenshot`}
                      fill
                      sizes="240px"
                      className="object-cover"
                    />
                    <div className="absolute left-1/2 top-2 h-5 w-20 -translate-x-1/2 rounded-full bg-ink" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {games.map((g, i) => (
            <button
              key={g.slug}
              type="button"
              aria-label={`Show ${g.name}`}
              aria-current={i === index}
              onClick={() => goTo(i)}
              className={`h-2.5 rounded-full transition-all ${i === index ? "w-8 bg-brand-500" : "w-2.5 bg-brand-100 hover:bg-brand-400"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
