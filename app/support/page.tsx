import type { Metadata } from "next";
import Link from "next/link";
import { Mail, ChevronDown } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SUPPORT_EMAIL } from "../components/links";

export const metadata: Metadata = {
  title: "Support | Arkline Games",
  description: "Get help with Arkline Games: purchases, progress, ads and your data.",
};

const link = "font-medium text-brand-600 underline underline-offset-2 hover:text-brand-700";

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "I made a purchase but didn't receive my item.",
    a: (
      <>
        First, make sure you&apos;re connected to the internet and restart the game. If the item still hasn&apos;t
        arrived, email us with your Player ID and the purchase receipt from Apple or Google, and we&apos;ll sort it
        out.
      </>
    ),
  },
  {
    q: "How can I get a refund?",
    a: (
      <>
        Purchases are processed by the App Store or Google Play, so refunds are handled by them. You can request one
        at{" "}
        <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer" className={link}>
          reportaproblem.apple.com
        </a>{" "}
        (iOS) or through your{" "}
        <a href="https://play.google.com/store/account/orderhistory" target="_blank" rel="noopener noreferrer" className={link}>
          Google Play order history
        </a>{" "}
        (Android).
      </>
    ),
  },
  {
    q: "I lost my progress. Can you restore it?",
    a: (
      <>
        Progress may be lost if the game is deleted or you switch devices without connecting Game Center or Google
        Play Games. Email us with your Player ID, device and roughly how far you had progressed, and we&apos;ll check
        what we can do.
      </>
    ),
  },
  {
    q: "Where can I find my Player ID?",
    a: <>If available, you can find it in the game&apos;s Settings screen. Including it helps us find your account faster.</>,
  },
  {
    q: "How do I limit personalised ads?",
    a: (
      <>
        On iOS go to Settings → Privacy &amp; Security → Tracking. On Android go to Settings → Google → Ads and delete
        or reset your advertising ID. See our <Link href="/privacy" className={link}>Privacy Policy</Link> for details.
      </>
    ),
  },
  {
    q: "How do I delete my data?",
    a: (
      <>
        Use our <Link href="/data-deletion" className={link}>data deletion request form</Link> and we&apos;ll handle
        it within 30 days.
      </>
    ),
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen">
      <Navbar alwaysSolid />
      <main className="bg-white pt-16">
        <header className="bg-brand-50">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">Support</p>
            <h1 className="mt-4 font-display text-4xl font-semibold md:text-5xl">How can we help?</h1>
            <p className="mt-4 max-w-xl leading-relaxed text-neutral-600">
              Check the common questions below. If you can&apos;t find an answer, send us an email and we&apos;ll get back
              to you as soon as we can.
            </p>
          </div>
        </header>

        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:py-20 lg:grid-cols-[1fr_340px] lg:gap-16">
          <section aria-labelledby="faq">
            <h2 id="faq" className="font-display text-2xl font-semibold">
              Frequently asked questions
            </h2>
            <div className="mt-6 divide-y divide-neutral-100 rounded-3xl border border-neutral-100">
              {faqs.map(({ q, a }) => (
                <details key={q} className="group p-6 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
                    {q}
                    <ChevronDown size={18} className="shrink-0 text-brand-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 leading-relaxed text-neutral-600">{a}</p>
                </details>
              ))}
            </div>
          </section>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl bg-brand-500 p-8 text-white">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15">
                <Mail size={22} />
              </div>
              <h2 className="mt-6 font-display text-2xl font-semibold">Contact support</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                To help us respond quickly, please include the game name, your Player ID, device model and a short
                description of the issue. Screenshots are welcome.
              </p>
              <a
                href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("Support Request")}`}
                className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-brand-600 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Email us
              </a>
              <p className="mt-4 text-sm text-white/85">{SUPPORT_EMAIL}</p>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
