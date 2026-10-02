"use client";

// Peak style: white bg, image left, simple text right
export default function Culture() {
  return (
    <section id="culture" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Text */}
          <div>
            <p className="text-xs text-neutral-400 uppercase tracking-widest mb-5">Culture</p>
            <h2 className="text-4xl font-bold text-neutral-900 leading-tight mb-7">
              How we work.
            </h2>
            <p className="text-sm text-neutral-500 leading-relaxed mb-4">
              We work in small teams where everyone contributes directly to the product.
            </p>
            <p className="text-sm text-neutral-500 leading-relaxed mb-10">
              If you'd like to join us, we'd love to hear from you.
            </p>
            <a
              href="mailto:careers@arklinegames.com"
              className="inline-block text-sm font-medium bg-neutral-900 text-white px-6 py-3 hover:bg-neutral-700 transition-colors"
            >
              Get in touch
            </a>
          </div>

          {/* Image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80&auto=format&fit=crop"
            alt="Studio"
            className="w-full aspect-[4/3] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
