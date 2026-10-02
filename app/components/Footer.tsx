import Logo from "./Logo";
import { navLinks, CONTACT_EMAIL } from "./links";

// Dream Games style: compact footer that repeats the nav, plus contact and legal links
export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div>
            <a href="#" aria-label="Arkline Games home" className="text-3xl text-white">
              <Logo />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              A small, independent mobile game studio.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-wider text-white/50">Studio</p>
              <ul className="space-y-3">
                {navLinks.map(({ label, href }) => (
                  <li key={href}>
                    <a href={href} className="text-sm text-white/75 transition-colors hover:text-white">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-wider text-white/50">Contact</p>
              <ul className="space-y-3">
                {[CONTACT_EMAIL].map((email) => (
                  <li key={email}>
                    <a href={`mailto:${email}`} className="text-sm text-white/75 transition-colors hover:text-white">
                      {email}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/50">© {new Date().getFullYear()} Arkline Games</p>
          <div className="flex gap-6">
            <a href={`mailto:${CONTACT_EMAIL}?subject=Privacy`} className="text-xs text-white/50 transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href={`mailto:${CONTACT_EMAIL}?subject=Terms`} className="text-xs text-white/50 transition-colors hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
