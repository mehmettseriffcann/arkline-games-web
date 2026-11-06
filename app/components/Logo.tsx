// Rounded wordmark, in the spirit of Dream / Circle logos
export default function Logo({ className = "" }: { className?: string }) {
  return <span className={`inline-flex font-display font-bold tracking-tight leading-none ${className}`}>arkline</span>;
}
