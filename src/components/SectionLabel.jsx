export default function SectionLabel({ children, number }) {
  return (
    <div className="chip mb-4 flex items-center gap-3 text-signal">
      {number && <span className="text-faint">{number} /</span>}
      <span className="uppercase tracking-[0.18em]">{children}</span>
    </div>
  );
}