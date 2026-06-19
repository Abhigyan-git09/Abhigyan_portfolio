import { ScrollReveal } from '../components/ui/ScrollReveal';

export function About() {
  return (
    <section id="about" className="py-[120px] px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-[80px]">
      <ScrollReveal direction="right" className="w-full md:w-1/2 flex justify-center relative">
        {/* Specimen Display */}
        <div className="relative flex items-center justify-center w-[310px] h-[310px]">
          {/* Rotating dashed ring */}
          <div className="absolute inset-0 border-2 border-dashed border-[rgba(0,255,213,0.2)] rounded-full animate-[spin_20s_linear_infinite]" />
          
          {/* Outer circle */}
          <div className="absolute w-[280px] h-[280px] border-2 border-[var(--border-active)] rounded-full shadow-[var(--glow-primary)] flex items-center justify-center overflow-hidden">
            <img src="/abhigyan_headshot.png" alt="Abhigyan Sinha" className="w-full h-full object-cover" />
          </div>

          {/* Orbiting tags */}
          {['AI/ML', 'Full-Stack', 'Researcher'].map((tag, i) => (
            <div 
              key={tag} 
              className="absolute w-full h-full animate-[spin_15s_linear_infinite]"
              style={{ animationDelay: `${i * -5}s` }}
            >
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--bg-glass)] backdrop-blur-[12px] border border-[var(--biolum-primary)] text-[var(--text-primary)] text-[0.7rem] px-3 py-1 rounded-lg uppercase tracking-wider whitespace-nowrap animate-[spin_15s_linear_infinite_reverse]"
                style={{ animationDelay: `${i * -5}s` }}
              >
                {tag}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal direction="left" className="w-full md:w-1/2">
        <div className="text-[var(--biolum-secondary)] tracking-[0.1em] text-xs font-inter mb-4 uppercase">
          // about.me
        </div>
        <h2 className="text-4xl font-syne font-bold text-[var(--text-primary)] mb-6" style={{ textShadow: '0 0 30px rgba(0,255,213,0.3)' }}>
          Navigating the Deep
        </h2>
        
        <div className="space-y-4 text-[var(--text-secondary)] font-inter leading-[1.8] mb-8">
          <p>
            I'm a final-year B.Tech Computer Science (AI & ML) student at Vellore Institute of Technology, Chennai, with a deep obsession for building things that are both technically rigorous and visually compelling.
          </p>
          <p>
            My research at IIT Jodhpur focused on deep learning architectures for sign language recognition — designing CNN-BiLSTM systems that can understand human gesture from raw video. Outside the lab, I build full-stack products from real-time safety platforms to AI-powered finance tools.
          </p>
          <p>
            When I'm not writing code, I'm probably thinking about how intelligence emerges from data.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[var(--border-subtle)]">
          <div>
            <div className="font-syne font-extrabold text-3xl text-[var(--biolum-gold)] mb-1" style={{ textShadow: 'var(--glow-gold)' }}>5+</div>
            <div className="font-inter text-sm text-[var(--text-secondary)]">Projects</div>
          </div>
          <div>
            <div className="font-syne font-extrabold text-3xl text-[var(--biolum-gold)] mb-1" style={{ textShadow: 'var(--glow-gold)' }}>8.74</div>
            <div className="font-inter text-sm text-[var(--text-secondary)]">CGPA</div>
          </div>
          <div>
            <div className="font-syne font-extrabold text-3xl text-[var(--biolum-gold)] mb-1" style={{ textShadow: 'var(--glow-gold)' }}>3</div>
            <div className="font-inter text-sm text-[var(--text-secondary)]">Research Months</div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
