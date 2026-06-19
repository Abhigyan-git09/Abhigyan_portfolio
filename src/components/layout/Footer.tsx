import { Code2, Briefcase, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative mt-24">
      {/* Glow line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--biolum-primary)] to-transparent opacity-50 shadow-[var(--glow-primary)]"></div>
      
      <div className="bg-[var(--bg-glass)] backdrop-blur-md border-t border-[var(--border-active)] py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="font-syne font-bold text-3xl text-[var(--text-primary)] hover:text-[var(--biolum-primary)] hover:drop-shadow-[0_0_12px_var(--biolum-primary)] transition-all cursor-pointer tracking-wider" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            &lt;Abhi/&gt;
          </div>
          
          <div className="flex gap-8">
            <a href="https://github.com/Abhigyan-git09" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--biolum-primary)] hover:drop-shadow-[0_0_12px_var(--biolum-primary)] hover:-translate-y-1 transition-all">
              <Code2 size={24} />
            </a>
            <a href="https://www.linkedin.com/in/abhigyan-sinha-b00914276/" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--biolum-primary)] hover:drop-shadow-[0_0_12px_var(--biolum-primary)] hover:-translate-y-1 transition-all">
              <Briefcase size={24} />
            </a>
            <a href="mailto:sinhaabhigyan0910@gmail.com" className="text-[var(--text-secondary)] hover:text-[var(--biolum-primary)] hover:drop-shadow-[0_0_12px_var(--biolum-primary)] hover:-translate-y-1 transition-all">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
