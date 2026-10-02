import { Users, Sparkles, LineChart } from "lucide-react";

// Peak "How We Work" style: short intro + three value cards
const values = [
  {
    icon: Users,
    title: "Small teams, real ownership",
    text: "Everyone contributes directly to the product. No layers, no hand-offs, just people building games together.",
  },
  {
    icon: Sparkles,
    title: "Quality over quantity",
    text: "We would rather ship one game players love for years than ten they forget in a week.",
  },
  {
    icon: LineChart,
    title: "Data-informed creativity",
    text: "Bold ideas, validated by players. We test, measure and iterate until every detail feels right.",
  },
];

export default function Culture() {
  return (
    <section id="culture" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">How We Work</h2>
          <p className="mt-5 font-display text-3xl font-semibold leading-tight md:text-4xl">
            People are at the core of everything we do.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
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
