import Image from "next/image";

// Dream Games style: image left, uppercase section title + short copy right
export default function About() {
  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80&auto=format&fit=crop"
            alt="The Arkline Games team working together"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

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
