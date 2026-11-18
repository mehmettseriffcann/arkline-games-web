import Navbar from "./Navbar";
import Footer from "./Footer";
import { CONTACT_EMAIL } from "./links";

export type LegalSection = { id: string; title: string; body: React.ReactNode };

export const Email = ({ address = CONTACT_EMAIL }: { address?: string }) => (
  <a href={`mailto:${address}`} className="font-medium text-brand-600 underline underline-offset-2 hover:text-brand-700">
    {address}
  </a>
);

// Shared layout for Privacy, Terms and Data Deletion: header, sticky contents list, numbered sections
export default function LegalPage({
  title,
  lastUpdated,
  sections,
  children,
}: {
  title: string;
  lastUpdated?: string;
  sections: LegalSection[];
  children?: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Navbar alwaysSolid />
      <main className="bg-white pt-16">
        <header className="bg-brand-50">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">Legal</p>
            <h1 className="mt-4 font-display text-4xl font-semibold md:text-5xl">{title}</h1>
            {lastUpdated && <p className="mt-4 text-sm text-neutral-500">Last updated: {lastUpdated}</p>}
          </div>
        </header>

        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[240px_1fr] lg:gap-16 md:py-20">
          <nav aria-label="Table of contents" className="lg:sticky lg:top-24 lg:self-start">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-400">Contents</p>
            <ol className="space-y-2.5 text-sm">
              {sections.map(({ id, title }, i) => (
                <li key={id}>
                  <a href={`#${id}`} className="text-neutral-600 transition-colors hover:text-brand-600">
                    <span className="mr-2 tabular-nums text-neutral-400">{i + 1}.</span>
                    {title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="max-w-3xl space-y-14 leading-relaxed text-neutral-700 [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-ink [&_li]:pl-1 [&_p]:mt-4 [&_strong]:text-ink [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ol]:mt-3 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5">
            {sections.map(({ id, title, body }, i) => (
              <section key={id} id={id} className="scroll-mt-24">
                <h2 className="font-display text-2xl font-semibold text-ink">
                  <span className="mr-2 text-brand-500">{i + 1}.</span>
                  {title}
                </h2>
                <div className="[&>address]:mt-4">{body}</div>
              </section>
            ))}
            {children}
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
