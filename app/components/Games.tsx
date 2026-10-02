"use client";

// Circle.gs style: simple "Our Games" section - empty/coming soon state
export default function Games() {
  return (
    <section id="games" className="py-24 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-xs text-neutral-600 uppercase tracking-widest mb-4">Games</p>
          <h2 className="text-4xl font-bold text-white">Our Games</h2>
        </div>

        {/* Empty state - clean, like Circle.gs placeholder */}
        <div className="border border-neutral-800 flex flex-col items-center justify-center py-32 text-center">
          <div className="w-12 h-px bg-neutral-700 mb-8" />
          <p className="text-sm text-neutral-600">Coming soon.</p>
          <div className="w-12 h-px bg-neutral-700 mt-8" />
        </div>
      </div>
    </section>
  );
}
