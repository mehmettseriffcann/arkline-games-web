import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { Email, type LegalSection } from "../components/LegalPage";
import { COMPANY_NAME } from "../components/links";

export const metadata: Metadata = {
  title: "Terms of Service | Arkline Games",
  description: "The terms that apply when you play Arkline Games titles or use our website.",
};

const LAST_UPDATED = "November 18, 2026";

const PrivacyLink = () => (
  <Link href="/privacy" className="font-medium text-brand-600 underline underline-offset-2 hover:text-brand-700">
    Privacy Policy
  </Link>
);

const sections: LegalSection[] = [
  {
    id: "agreement",
    title: "Agreement to These Terms",
    body: (
      <>
        <p>
          These Terms of Service (&quot;Terms&quot;) form a binding agreement between you and {COMPANY_NAME}, a limited
          liability company established under the laws of the Republic of Türkiye (&quot;Arkline&quot;, &quot;we&quot;,
          &quot;us&quot;). They apply to our mobile games, our website and any related services (together, the
          &quot;Services&quot;).
        </p>
        <p>
          By downloading, installing, playing or otherwise using the Services you confirm that you have read and
          accepted these Terms and our <PrivacyLink />. If you do not agree, please do not use the Services.
        </p>
        <p>
          When you download our games from the Apple App Store or Google Play, the terms of that store also apply.
          If they conflict with these Terms on matters relating to the store, the store&apos;s terms prevail.
        </p>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "Who Can Use the Services",
    body: (
      <>
        <p>
          You must be at least 13 years old, or the minimum age required in your country (for example 16 in some EU
          countries), to use the Services. If you are under the age of majority where you live, your parent or legal
          guardian must review and accept these Terms on your behalf.
        </p>
        <p>
          Parents and guardians are responsible for their children&apos;s use of the Services, including any
          purchases made on their devices.
        </p>
      </>
    ),
  },
  {
    id: "accounts",
    title: "Game Accounts",
    body: (
      <>
        <p>
          Some games may create a guest profile automatically or let you connect a third-party account such as Apple
          Game Center or Google Play Games. You are responsible for keeping access to your device and connected
          accounts secure.
        </p>
        <p>
          Game profiles are personal. You may not sell, trade or transfer your profile or progress to anyone else. We
          may suspend or close profiles that break these Terms.
        </p>
      </>
    ),
  },
  {
    id: "license",
    title: "Your License to Use the Services",
    body: (
      <>
        <p>
          As long as you follow these Terms, we give you a personal, limited, non-exclusive, non-transferable and
          revocable license to use the Services for your own non-commercial entertainment.
        </p>
        <p>
          This license does not give you any ownership of the Services. You may not copy, modify, distribute, sell,
          rent or create derivative works from any part of the Services without our written permission.
        </p>
      </>
    ),
  },
  {
    id: "virtual-items",
    title: "Virtual Items & Purchases",
    body: (
      <>
        <p>
          Our games may offer virtual currency, boosters, lives, cosmetic items or other in-game content
          (&quot;Virtual Items&quot;), which you can earn by playing or buy with real money through the app store.
        </p>
        <ul>
          <li>
            Virtual Items have no real-world value. They cannot be exchanged for money and can only be used inside
            the game.
          </li>
          <li>When you buy a Virtual Item, you receive a limited license to use it in the game, not ownership.</li>
          <li>
            Purchases are processed by Apple or Google. Refund requests are handled under the refund policy of the
            store where you made the purchase.
          </li>
          <li>
            We may change, rebalance or remove Virtual Items as the game evolves. Where required by law, we will
            give you reasonable notice of significant changes.
          </li>
        </ul>
        <p>
          Nothing in these Terms limits any mandatory rights you may have as a consumer under the laws of your
          country, including Turkish Consumer Protection Law No. 6502.
        </p>
      </>
    ),
  },
  {
    id: "advertising",
    title: "Advertising",
    body: (
      <p>
        Our games may display advertising from third parties, including rewarded ads you can choose to watch for
        in-game benefits. We are not responsible for the content of third-party ads or for any products or services
        they promote. How advertising data is handled is described in our <PrivacyLink />.
      </p>
    ),
  },
  {
    id: "conduct",
    title: "Rules of Conduct",
    body: (
      <>
        <p>When using the Services, you agree not to:</p>
        <ul>
          <li>Use cheats, exploits, bots, modified clients or any unauthorised software.</li>
          <li>Reverse engineer, decompile or try to extract the source code of the Services.</li>
          <li>Interfere with or disrupt our servers, networks or the experience of other players.</li>
          <li>Harass, threaten or abuse other players or our team.</li>
          <li>Use the Services for any illegal purpose or in breach of these Terms.</li>
        </ul>
        <p>If you break these rules, we may suspend or end your access to the Services.</p>
      </>
    ),
  },
  {
    id: "feedback",
    title: "Feedback & Content You Send Us",
    body: (
      <p>
        If you send us feedback, ideas, player names or other content, you keep any rights you have in it. You
        allow us to use it, free of charge, to operate, improve and promote the Services. Please do not send us
        anything you do not have the right to share.
      </p>
    ),
  },
  {
    id: "ip",
    title: "Intellectual Property",
    body: (
      <p>
        The Services and all their content, including software, game design, artwork, characters, music, sound
        effects, text, names and logos, belong to Arkline or its licensors and are protected by Turkish and
        international copyright, trademark and other intellectual property laws. Any use not expressly permitted
        by these Terms is prohibited.
      </p>
    ),
  },
  {
    id: "availability",
    title: "Changes & Availability",
    body: (
      <p>
        We continually update our games. We may add, change or remove features, and we may suspend or discontinue
        a game or the Services, temporarily or permanently. We will try to give advance notice in the game or on our
        website before a game is permanently shut down.
      </p>
    ),
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    body: (
      <p>
        The Services are provided &quot;as is&quot; and &quot;as available&quot;. To the extent permitted by law, we make
        no warranties of any kind, express or implied, including that the Services will be uninterrupted,
        error-free or free of harmful components.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    body: (
      <>
        <p>
          To the extent permitted by law, Arkline is not liable for any indirect, incidental, special or
          consequential damages, or for loss of profits, data or goodwill, arising from your use of the Services.
        </p>
        <p>
          Our total liability to you for any claim relating to the Services is limited to the amount you paid us in
          the six (6) months before the claim. Nothing in these Terms excludes liability that cannot be excluded by
          law, such as liability for gross negligence or wilful misconduct.
        </p>
      </>
    ),
  },
  {
    id: "termination",
    title: "Termination",
    body: (
      <p>
        You can stop using the Services at any time by deleting our games. You can also ask us to delete your data
        through our{" "}
        <Link href="/data-deletion" className="font-medium text-brand-600 underline underline-offset-2">
          data deletion request form
        </Link>
        . We may suspend or end your access if you breach these Terms. Sections that by their nature should
        survive termination, such as intellectual property and limitation of liability, will continue to apply.
      </p>
    ),
  },
  {
    id: "law",
    title: "Governing Law & Disputes",
    body: (
      <>
        <p>
          These Terms are governed by the laws of the Republic of Türkiye. Any dispute arising from these Terms or
          the Services will be resolved by the courts and enforcement offices of Türkiye having jurisdiction at our
          registered seat.
        </p>
        <p>
          If you are a consumer, you may also apply to the consumer arbitration committees or consumer courts
          competent under Turkish law, and nothing in this section deprives you of the protection of mandatory laws
          of the country where you live.
        </p>
      </>
    ),
  },
  {
    id: "general",
    title: "General",
    body: (
      <>
        <p>
          If any part of these Terms is found to be invalid or unenforceable, the rest will remain in effect. Our
          failure to enforce any provision is not a waiver of our right to do so later. These Terms, together with
          our <PrivacyLink />, are the entire agreement between you and us about the Services.
        </p>
        <p>
          We may update these Terms from time to time. We will change the &quot;Last updated&quot; date above and, for
          significant changes, let you know in the game or on our website. If you keep using the Services after the
          changes take effect, you accept the updated Terms.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    body: (
      <>
        <p>If you have any questions about these Terms, please contact us:</p>
        <address className="not-italic rounded-2xl bg-neutral-50 p-5">
          <strong className="block text-ink">{COMPANY_NAME}</strong>
          Türkiye
          <br />
          Email: <Email />
        </address>
      </>
    ),
  },
];

export default function TermsPage() {
  return <LegalPage title="Terms of Service" lastUpdated={LAST_UPDATED} sections={sections} />;
}
