import { useState } from 'react';

interface SkillPillProps {
  label: string;
  accentColor: string;
}

export function SkillPill({ label, accentColor }: SkillPillProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="inline-flex items-center justify-center px-3 py-1 text-[0.7rem] uppercase tracking-[0.1em] font-inter font-medium rounded-lg transition-all duration-250 cursor-default"
      style={{
        backgroundColor: isHovered ? `color-mix(in srgb, ${accentColor} 15%, transparent)` : 'rgba(0, 255, 213, 0.05)',
        border: `1px solid ${isHovered ? accentColor : 'var(--border-subtle)'}`,
        color: isHovered ? accentColor : 'var(--biolum-primary)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label}
    </div>
  );
}
