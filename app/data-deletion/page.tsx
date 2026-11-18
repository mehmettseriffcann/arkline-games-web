import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { Email, type LegalSection } from "../components/LegalPage";
import DeletionForm from "./DeletionForm";
import { SUPPORT_EMAIL } from "../components/links";

export const metadata: Metadata = {
  title: "Data Deletion Request | Arkline Games",
  description: "Ask Arkline Games to delete the personal data we hold about you.",
};

const sections: LegalSection[] = [
  {
    id: "overview",
    title: "Your Right to Deletion",
    body: (
      <p>
        You can ask us to delete the personal data we hold about you at any time, free of charge. This right is
        provided under the Turkish Personal Data Protection Law (KVKK), the GDPR and other applicable privacy
        laws. See our{" "}
        <Link href="/privacy" className="font-medium text-brand-600 underline underline-offset-2">
          Privacy Policy
        </Link>{" "}
        for more on how we handle your data.
      </p>
    ),
  },
  {
    id: "what-is-deleted",
    title: "What Gets Deleted",
    body: (
      <>
        <ul>
          <li>Your game profile, progress and in-game items stored on our servers.</li>
          <li>Device and usage data linked to your player ID.</li>
          <li>Support emails and other messages you have sent us.</li>
        </ul>
        <p>
          We may keep a limited amount of data where the law requires it, for example purchase records needed for
          tax and accounting, or data needed to handle a legal claim. Such data is kept only as long as required
          and is not used for any other purpose.
        </p>
        <p>
          Purchases are processed by Apple or Google, and we cannot delete records held by them. Deleting our game
          from your device alone does not delete data stored on our servers.
        </p>
      </>
    ),
  },
  {
    id: "how-it-works",
    title: "How It Works",
    body: (
      <ol>
        <li>Fill in the form below, or email us at <Email address={SUPPORT_EMAIL} /> with the subject &quot;Data Deletion Request&quot;.</li>
        <li>We may contact you to verify that the data belongs to you.</li>
        <li>We complete your request within 30 days and confirm by email once it is done.</li>
      </ol>
    ),
  },
  {
    id: "ads",
    title: "Advertising Data",
    body: (
      <p>
        Advertising partners may hold data linked to your device&apos;s advertising ID. You can reset or delete this ID
        at any time in your device settings (iOS: Settings → Privacy &amp; Security → Tracking; Android: Settings →
        Google → Ads), which unlinks previously collected advertising data from your device.
      </p>
    ),
  },
  {
    id: "request-form",
    title: "Request Form",
    body: <DeletionForm />,
  },
];

export default function DataDeletionPage() {
  return <LegalPage title="Data Deletion Request" sections={sections} />;
}
