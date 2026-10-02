import Image from "next/image";
import { Users, Sparkles, LineChart } from "lucide-react";

// Peak "How We Work" style: short intro, photo strip and three value cards
const values = [
  {
    icon: Users,
    title: "Small team",
    text: "Everyone contributes directly to the game. We keep things simple and talk to each other a lot.",
  },
  {
    icon: Sparkles,
    title: "Attention to detail",
    text: "We take our time to polish the small things: how a level feels, how a button sounds.",
  },
  {
    icon: LineChart,
    title: "Learning from players",
    text: "We test early, listen to feedback and keep improving step by step.",
  },
];

const photos = [
  { id: "1531482615713-2afd69097998", alt: "Two people working together at a laptop" },
  { id: "1600880292203-757bb62b4baf", alt: "Colleagues celebrating with a high five" },
  { id: "1556761175-b413da4baf72", alt: "Team working in an open office" },
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

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">
          {photos.map(({ id, alt }, i) => (
            <div key={id} className={`relative aspect-[4/3] overflow-hidden rounded-3xl ${i === 2 ? "hidden md:block" : ""}`}>
              <Image
                src={`https://images.unsplash.com/photo-${id}?w=900&q=80&auto=format&fit=crop`}
                alt={alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {values.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl border border-neutral-100 bg-neutral-50 p-8 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500 text-white">
                <Icon size={22} />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
