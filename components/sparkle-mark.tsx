export default function SparkleMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`sparkle-mark ${className}`}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M32 5v15m0 24v15M5 32h15m24 0h15M13 13l11 11m16 16 11 11m0-38L40 24M24 40 13 51"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}
