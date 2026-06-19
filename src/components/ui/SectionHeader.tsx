
interface SectionHeaderProps {
  label: string;
  title: string;
}

export function SectionHeader({ label, title }: SectionHeaderProps) {
  return (
    <div className="flex flex-col items-center justify-center mb-16 text-center">
      <span className="text-[var(--biolum-secondary)] text-sm tracking-[0.1em] uppercase font-medium mb-4">
        {label}
      </span>
      <h2 
        className="text-[var(--text-primary)] text-4xl md:text-5xl font-syne font-bold"
        style={{ textShadow: '0 0 30px rgba(0,255,213,0.3)' }}
      >
        {title}
      </h2>
    </div>
  );
}
