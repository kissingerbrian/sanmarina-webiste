export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="bg-accent focus:ring-sun sr-only fixed top-3 left-3 z-[100] rounded-sm px-4 py-3 text-sm font-semibold text-white focus:not-sr-only focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--bg)] focus:outline-none"
    >
      Skip to main content
    </a>
  );
}
