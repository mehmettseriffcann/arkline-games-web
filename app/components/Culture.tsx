import Reveal from "./Reveal";
import { TeamIllustration, DetailIllustration, FeedbackIllustration } from "./Illustrations";

// Peak "How We Work" style: short intro and three illustrated value cards
const values = [
  {
    art: TeamIllustration,
    title: "Small team",
    text: "Everyone contributes directly to the game. We keep things simple and talk to each other a lot.",
  },
  {
    art: DetailIllustration,
    title: "Attention to detail",
    text: "We take our time to polish the small things: how a level feels, how a button sounds.",
  },
  {
    art: FeedbackIllustration,
    title: "Learning from players",
    text: "We test early, listen to feedback and keep improving step by step.",
  },
];

export default function Culture() {
  return (
    <section id="culture" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">How We Work</h2>
          <p className="mt-5 font-display text-3xl font-semibold leading-tight md:text-4xl">
            A few things we care about.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {values.map(({ art: Art, title, text }) => (
            <Reveal key={title} className="rounded-3xl border border-neutral-100 bg-neutral-50 p-8 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="rounded-2xl bg-white">
                <Art className="h-32 w-full" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
