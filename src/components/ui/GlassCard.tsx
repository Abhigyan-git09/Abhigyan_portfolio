import type { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  accentColor?: string;
  hoverGlow?: boolean;
  className?: string;
}

export function GlassCard({ children, accentColor, hoverGlow = true, className = '' }: GlassCardProps) {
  return (
    <div 
      className={`relative group bg-[var(--bg-glass)] backdrop-blur-[12px] saturate-150 border border-[var(--border-subtle)] rounded-2xl transition-all duration-250 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${className}`}
      style={hoverGlow ? {
        '--hover-border': 'var(--border-active)',
        '--hover-shadow': 'var(--glow-primary)'
      } as React.CSSProperties : {}}
    >
      {accentColor && (
        <div 
          className="absolute top-0 left-0 w-full h-[3px] transition-all duration-250 group-hover:brightness-125"
          style={{ backgroundColor: accentColor }}
        />
      )}
      
      <div className="p-7 relative z-10">
        {children}
      </div>
      
      {/* Hover glow effect managed by css class injection and inline variables where possible */}
      {hoverGlow && (
        <div className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-250 group-hover:border group-hover:border-[var(--hover-border)] group-hover:shadow-[var(--hover-shadow)] opacity-0 group-hover:opacity-100" />
      )}
    </div>
  );
}
