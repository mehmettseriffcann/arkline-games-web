"use client";

import { useState } from "react";
import { SUPPORT_EMAIL } from "../components/links";

// No backend yet: the form builds a pre-filled email to SUPPORT_EMAIL and opens the visitor's mail app.
export default function DeletionForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = [
      "Data deletion request",
      "",
      `Email: ${f.get("email")}`,
      `Game: ${f.get("game") || "-"}`,
      `Player ID: ${f.get("playerId") || "-"}`,
      `Platform: ${f.get("platform")}`,
      `Request: ${f.get("scope")}`,
      "",
      `Details: ${f.get("details") || "-"}`,
    ].join("\n");
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("Data Deletion Request")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100";
  const label = "block text-sm font-semibold text-ink";

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-5 rounded-3xl border border-neutral-100 bg-neutral-50 p-6 md:p-8">
      <div>
        <label htmlFor="email" className={label}>
          Email address <span className="text-brand-500">*</span>
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className={field} />
        <p className="mt-1.5 text-xs text-neutral-500">We&apos;ll use this only to confirm and follow up on your request.</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="game" className={label}>
            Game
          </label>
          <input id="game" name="game" type="text" className={field} />
        </div>
        <div>
          <label htmlFor="platform" className={label}>
            Platform <span className="text-brand-500">*</span>
          </label>
          <select id="platform" name="platform" required defaultValue="" className={field}>
            <option value="" disabled>
              Select…
            </option>
            <option>iOS</option>
            <option>Android</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="playerId" className={label}>
          Player ID
        </label>
        <input id="playerId" name="playerId" type="text" className={field} />
        <p className="mt-1.5 text-xs text-neutral-500">
          If available, you can find it in the game&apos;s Settings screen. It helps us locate your data.
        </p>
      </div>

      <fieldset>
        <legend className={label}>
          What would you like us to do? <span className="text-brand-500">*</span>
        </legend>
        <div className="mt-3 space-y-2.5 text-sm">
          {["Delete all my personal data and game progress", "Delete only the data linked to my email (support history)"].map(
            (v, i) => (
              <label key={v} className="flex cursor-pointer items-start gap-3">
                <input type="radio" name="scope" value={v} required defaultChecked={i === 0} className="mt-1 accent-brand-500" />
                <span>{v}</span>
              </label>
            ),
          )}
        </div>
      </fieldset>

      <div>
        <label htmlFor="details" className={label}>
          Additional details
        </label>
        <textarea id="details" name="details" rows={4} className={field} />
      </div>

      <label className="flex cursor-pointer items-start gap-3 text-sm">
        <input type="checkbox" required className="mt-1 accent-brand-500" />
        <span>I understand that deletion is permanent and my game progress and purchases cannot be restored.</span>
      </label>

      <button
        type="submit"
        className="rounded-full bg-brand-500 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-brand-600"
      >
        Send request
      </button>

      {sent && (
        <p role="status" className="rounded-xl bg-brand-50 p-4 text-sm text-brand-700">
          Your email app should now open with the request filled in. Please press send there. If nothing opened,
          email us directly at <a href={`mailto:${SUPPORT_EMAIL}`} className="font-semibold underline">{SUPPORT_EMAIL}</a>.
        </p>
      )}
    </form>
  );
}
