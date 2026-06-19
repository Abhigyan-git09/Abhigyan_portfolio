import type { ReactNode } from 'react';

interface GlowButtonProps {
  variant?: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

export function GlowButton({ variant = 'primary', href, onClick, children, className = '' }: GlowButtonProps) {
  const isPrimary = variant === 'primary';
  
  const baseClasses = "inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-inter transition-all duration-250 ease-[cubic-bezier(0.4,0,0.2,1)]";
  
  const primaryClasses = "bg-gradient-to-br from-[#00ffd5] to-[#00b4d8] text-[#020810] font-semibold hover:shadow-[var(--glow-primary)]";
  const secondaryClasses = "bg-transparent border border-[var(--border-active)] text-[var(--biolum-primary)] hover:border-[var(--biolum-primary)] hover:shadow-[var(--glow-primary)]";
  
  const combinedClasses = `${baseClasses} ${isPrimary ? primaryClasses : secondaryClasses} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}
