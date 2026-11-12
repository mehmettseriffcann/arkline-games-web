// Arkline wordmark. public/logo.png is used as a mask so the logo takes the current text colour.
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="Arkline"
      className={`inline-block h-[1em] aspect-[1274/330] bg-current align-middle ${className}`}
      style={{
        maskImage: "url(/logo.png)",
        WebkitMaskImage: "url(/logo.png)",
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
      }}
    />
  );
}
