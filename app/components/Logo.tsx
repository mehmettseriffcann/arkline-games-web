// Rounded wordmark with a small star accent, in the spirit of Dream / Circle logos
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-start font-display font-bold tracking-tight leading-none ${className}`}>
      arkline
      <svg viewBox="0 0 24 24" aria-hidden="true" className="ml-0.5 h-[0.45em] w-[0.45em] fill-current">
        <path d="M12 0c.8 6.4 5.6 11.2 12 12-6.4.8-11.2 5.6-12 12-.8-6.4-5.6-11.2-12-12C6.4 11.2 11.2 6.4 12 0Z" />
      </svg>
    </span>
  );
}
