"use client";

// Gram Games / Dream Games footer style
export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          <div>
            <p className="font-bold text-white text-sm mb-3">Arkline Games</p>
            <p className="text-xs text-neutral-600 max-w-xs leading-relaxed">
              A mobile game studio.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="text-xs text-neutral-700 uppercase tracking-widest mb-5">Studio</p>
              <ul className="space-y-3">
                {[["About", "#about"], ["Games", "#games"], ["Culture", "#culture"]].map(([l, h]) => (
                  <li key={l}>
                    <a href={h} className="text-xs text-neutral-500 hover:text-white transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs text-neutral-700 uppercase tracking-widest mb-5">Contact</p>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:info@arklinegames.com" className="text-xs text-neutral-500 hover:text-white transition-colors">
                    info@arklinegames.com
                  </a>
                </li>
                <li>
                  <a href="mailto:careers@arklinegames.com" className="text-xs text-neutral-500 hover:text-white transition-colors">
                    careers@arklinegames.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-900 pt-8 flex flex-col sm:flex-row justify-between gap-4">
          <p className="text-xs text-neutral-700">© {new Date().getFullYear()} Arkline Games</p>
          <div className="flex gap-6">
            <span className="text-xs text-neutral-700 hover:text-neutral-500 cursor-pointer transition-colors">Privacy</span>
            <span className="text-xs text-neutral-700 hover:text-neutral-500 cursor-pointer transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
