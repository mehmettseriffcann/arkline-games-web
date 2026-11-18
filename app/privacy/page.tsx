import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { Email, type LegalSection } from "../components/LegalPage";
import { COMPANY_NAME } from "../components/links";

export const metadata: Metadata = {
  title: "Privacy Policy | Arkline Games",
  description: "How Arkline Games collects, uses and protects personal data.",
};

const LAST_UPDATED = "November 18, 2026";

const sections: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    body: (
      <>
        <p>
          This Privacy Policy explains how Arkline Games (&quot;Arkline&quot;, &quot;we&quot;, &quot;us&quot;) collects, uses,
          shares and protects personal data when you play our mobile games, visit our website, contact our support
          team or otherwise interact with us (together, the &quot;Services&quot;).
        </p>
        <p>
          Please read this policy carefully. By using the Services you acknowledge that your personal data will be
          processed as described here. If you do not agree, please do not use the Services.
        </p>
      </>
    ),
  },
  {
    id: "controller",
    title: "Who We Are",
    body: (
      <>
        <p>
          The data controller responsible for your personal data under the Turkish Personal Data Protection Law No.
          6698 (&quot;KVKK&quot;), the EU and UK General Data Protection Regulation (&quot;GDPR&quot;) and other applicable laws
          is:
        </p>
        <address className="not-italic rounded-2xl bg-neutral-50 p-5">
          <strong className="block text-ink">{COMPANY_NAME}</strong>
          Türkiye
          <br />
          Email: <Email />
        </address>
      </>
    ),
  },
  {
    id: "data-we-collect",
    title: "Data We Collect",
    body: (
      <>
        <h3>Data collected automatically</h3>
        <ul>
          <li>Device identifiers, such as advertising IDs (IDFA on iOS, GAID on Android) and app-specific IDs.</li>
          <li>Device information, such as model, operating system, language, time zone and network type.</li>
          <li>Approximate location derived from your IP address (country or city level).</li>
          <li>Gameplay and usage data, such as sessions, levels played, progress and in-game actions.</li>
          <li>Crash reports, diagnostics and performance data.</li>
          <li>Purchase records, such as which in-app items were bought and when.</li>
        </ul>
        <h3>Data you give us</h3>
        <ul>
          <li>Your name and email address and the content of your messages when you contact us.</li>
          <li>Any information you choose to share in surveys, feedback or on our social media channels.</li>
        </ul>
        <p>
          Payments for in-app purchases are processed by Apple or Google. We do not receive or store your card
          number or other payment details.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How We Use Your Data",
    body: (
      <>
        <p>We use personal data to:</p>
        <ul>
          <li>Provide and operate our games, save your progress and deliver purchased items.</li>
          <li>Respond to support requests and communicate with you.</li>
          <li>Understand how our games are played so we can fix bugs and improve them.</li>
          <li>Show advertising in our games, including personalised ads where permitted.</li>
          <li>Detect and prevent fraud, cheating and abuse, and keep our Services secure.</li>
          <li>Comply with legal obligations and enforce our terms.</li>
        </ul>
      </>
    ),
  },
  {
    id: "legal-bases",
    title: "Legal Bases for Processing",
    body: (
      <>
        <p>Depending on the context, we rely on one or more of the following legal bases under KVKK and GDPR:</p>
        <ul>
          <li>
            <strong>Performance of a contract:</strong> to provide the games and features you request.
          </li>
          <li>
            <strong>Legitimate interests:</strong> to analyse and improve our Services, keep them secure and show
            non-personalised advertising.
          </li>
          <li>
            <strong>Consent:</strong> for personalised advertising and certain tracking, where required by law. You
            can withdraw consent at any time.
          </li>
          <li>
            <strong>Legal obligation:</strong> to meet tax, accounting and other legal requirements.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "advertising",
    title: "Advertising & Your Choices",
    body: (
      <>
        <p>
          Our games may be free to play and supported by advertising. Our advertising partners may use device
          identifiers and usage data to show ads that are more relevant to you and to measure their performance.
        </p>
        <p>You can limit personalised advertising at any time through your device settings:</p>
        <ul>
          <li>
            <strong>iOS:</strong> Settings → Privacy &amp; Security → Tracking, and turn off tracking for our apps.
          </li>
          <li>
            <strong>Android:</strong> Settings → Google → Ads (or Settings → Privacy → Ads), and delete or reset
            your advertising ID.
          </li>
        </ul>
        <p>You will still see ads after opting out, but they will be less tailored to you.</p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Sharing Your Data",
    body: (
      <>
        <p>We do not sell your personal data. We share it only with:</p>
        <ul>
          <li>Service providers that host our infrastructure, store data or provide customer support tools.</li>
          <li>Analytics and crash reporting providers that help us understand and improve our games.</li>
          <li>Advertising and ad mediation partners that serve ads in our games.</li>
          <li>Platform providers such as Apple and Google, for distribution and purchases.</li>
          <li>Authorities or other parties where required by law or to protect our rights and users.</li>
          <li>A buyer or successor in connection with a merger, acquisition or sale of assets.</li>
        </ul>
        <p>
          Some of these partners are located outside Türkiye and the European Economic Area. When we transfer data
          internationally, we rely on safeguards permitted by KVKK and GDPR, such as standard contractual clauses.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies on Our Website",
    body: (
      <p>
        Our website may use cookies and similar technologies that are necessary for it to work and, where
        applicable, to understand how visitors use it. You can block or delete cookies in your browser settings;
        some parts of the website may not work properly if you do.
      </p>
    ),
  },
  {
    id: "retention",
    title: "Data Retention & Security",
    body: (
      <>
        <p>
          We keep personal data only for as long as needed for the purposes described in this policy, or longer if
          required by law. When data is no longer needed, we delete or anonymise it.
        </p>
        <p>
          We use reasonable technical and organisational measures to protect your data. However, no method of
          transmission or storage is completely secure, and we cannot guarantee absolute security.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your Rights",
    body: (
      <>
        <h3>Under KVKK (Article 11)</h3>
        <p>You have the right to:</p>
        <ul>
          <li>Learn whether your personal data is processed and request information about it.</li>
          <li>Learn the purpose of processing and whether it is used accordingly.</li>
          <li>Know the third parties, in Türkiye or abroad, to whom your data is transferred.</li>
          <li>Request correction of incomplete or inaccurate data, and deletion or destruction of your data.</li>
          <li>Object to results against you arising from analysis made exclusively by automated systems.</li>
          <li>Claim compensation for damages arising from unlawful processing.</li>
        </ul>
        <h3>Under GDPR (EEA and UK)</h3>
        <p>
          You have the right to access, correct, delete or port your data, to restrict or object to processing,
          to withdraw consent at any time, and to lodge a complaint with your local data protection authority.
        </p>
        <h3>United States residents</h3>
        <p>
          Depending on your state (for example California, Virginia or Colorado), you may have the right to know,
          access, correct and delete your personal information, and to opt out of targeted advertising. We will not
          discriminate against you for exercising these rights.
        </p>
        <p>
          To exercise any of these rights, email us at <Email />. To request deletion of your data, you can also
          use our{" "}
          <Link href="/data-deletion" className="font-medium text-brand-600 underline underline-offset-2">
            data deletion request form
          </Link>
          . We may need to verify your identity before
          responding, and we will reply within the time limits set by applicable law.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: (
      <p>
        Our Services are not directed at children under 13 (or the higher minimum age in your country, such as 16
        in some EU countries). We do not knowingly collect personal data from children below that age. If you
        believe a child has provided us with personal data, please contact us at <Email /> and we will delete it.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. When we do, we will change the &quot;Last updated&quot; date
        above and, where the changes are significant, notify you in our games or on our website.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    body: (
      <p>
        If you have any questions about this Privacy Policy or how we handle your data, contact {COMPANY_NAME} at{" "}
        <Email />.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" lastUpdated={LAST_UPDATED} sections={sections} />;
}
