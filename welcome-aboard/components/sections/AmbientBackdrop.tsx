/**
 * Ambient page backdrop (Figma 32:5, 32:6, 32:7).
 * A 2.5% hairline grid plus two blurred aurora washes — pure CSS, no images.
 */
export function AmbientBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-x-0 top-0 bottom-[160px] grid-lines" />
      <div className="absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-aurora-indigo blur-[140px]" />
      <div className="absolute right-10 -bottom-[160px] h-[350px] w-[500px] rounded-full bg-aurora-teal blur-[130px]" />
    </div>
  );
}