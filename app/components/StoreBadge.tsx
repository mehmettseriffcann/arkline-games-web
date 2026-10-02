type Store = "apple" | "google";

const icons: Record<Store, React.ReactNode> = {
  apple: (
    <path d="M16.37 12.6c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.48.83-.72 0-1.82-.81-3-.79-1.54.02-2.96.9-3.76 2.28-1.6 2.78-.41 6.9 1.15 9.16.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.23-.02 2.01-1.12 2.76-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.4-.92-2.42-3.65ZM14.1 5.86c.63-.77 1.06-1.83.94-2.89-.91.04-2.01.61-2.66 1.37-.58.67-1.1 1.76-.96 2.8 1.01.08 2.05-.52 2.68-1.28Z" />
  ),
  google: <path d="M4 3.5v17l9.2-8.5L4 3.5Zm10.4 9.6 2.5 2.3-10.6 6 8.1-8.3Zm0-2.2L6.3 2.6l10.6 6-2.5 2.3Zm3.4 3.3L15.3 12l2.5-2.2 2.9 1.6c.7.4.7 1.2 0 1.6l-2.9 1.6Z" />,
};

// Circle.gs style store button. Rendered disabled until a store URL exists.
export default function StoreBadge({ store, href }: { store: Store; href?: string }) {
  const label = store === "apple" ? "App Store" : "Google Play";
  const caption = href ? (store === "apple" ? "Download on the" : "Get it on") : "Coming soon to";
  const content = (
    <>
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
        {icons[store]}
      </svg>
      <span className="text-left leading-tight">
        <span className="block text-[10px] opacity-75">{caption}</span>
        <span className="block text-sm font-semibold">{label}</span>
      </span>
    </>
  );
  const cls = "inline-flex items-center gap-2.5 rounded-xl bg-ink px-4 py-2 text-white";

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${cls} transition hover:bg-black`}>
      {content}
    </a>
  ) : (
    <span aria-disabled="true" className={`${cls} cursor-default opacity-60`}>
      {content}
    </span>
  );
}
