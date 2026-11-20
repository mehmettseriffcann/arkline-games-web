import Reveal from "./Reveal";
import { StudioIllustration } from "./Illustrations";

// Dream Games style: illustration left, uppercase section title + short copy right
export default function About() {
  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-brand-50">
          <StudioIllustration className="absolute inset-0 h-full w-full p-6" />
        </Reveal>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">About Us</h2>
          <p className="mt-5 font-display text-3xl font-semibold leading-tight md:text-4xl">
            A small, independent studio.
          </p>
          <p className="mt-6 leading-relaxed text-neutral-600">
            Arkline Games is an independent mobile game studio. We work as a small team where everyone is
            directly involved in the games we make.
          </p>
          <p className="mt-4 leading-relaxed text-neutral-600">
            We care about the details, try ideas early and learn from the people who play our games.
          </p>
        </div>
      </div>
    </section>
  );
}
