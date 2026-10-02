import Image from "next/image";
import { CAREERS_EMAIL } from "./links";

// Dream / Gram "Careers" block: image + pitch + single CTA on a brand-coloured card
export default function Careers() {
  return (
    <section id="careers" className="bg-white pb-24 md:pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid overflow-hidden rounded-[2rem] bg-brand-500 lg:grid-cols-2">
          <div className="p-10 md:p-16">
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Careers</h2>
            <p className="mt-5 font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
              Ready to join us?
            </p>
            <p className="mt-6 max-w-md leading-relaxed text-white/85">
              At Arkline, every team member has a genuine opportunity to shape the final product. If you want to grow
              with a young, ambitious studio, we&apos;d love to hear from you.
            </p>
            <a
              href={`mailto:${CAREERS_EMAIL}`}
              className="mt-10 inline-block rounded-full bg-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-brand-600 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Get in touch
            </a>
          </div>
          <div className="relative min-h-[280px]">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&auto=format&fit=crop"
              alt="Arkline Games studio"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
