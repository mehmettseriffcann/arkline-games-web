"use client";

// Dream Games style: two-column editorial layout
export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&auto=format&fit=crop"
            alt="Team"
            className="w-full aspect-[4/3] object-cover"
          />

          {/* Right: text */}
          <div>
            <p className="text-xs text-neutral-400 uppercase tracking-widest mb-5">About Us</p>
            <h2 className="text-4xl font-bold text-neutral-900 leading-tight mb-7">
              Building mobile games people love.
            </h2>
            <p className="text-sm text-neutral-500 leading-relaxed mb-4">
              We develop high-quality mobile games focused on fun gameplay
              and engaging experiences for players worldwide.
            </p>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Our goal is to combine technology and creativity to create
              games that stand the test of time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
