import { useEffect, useRef } from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { GlassCard } from '../components/ui/GlassCard';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Experience() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lineRef.current) {
      gsap.fromTo(lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: 'top',
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: lineRef.current,
            start: 'top 80%',
            once: true
          }
        }
      );
    }
  }, []);

  return (
    <section id="experience" className="py-16 md:py-[120px] px-6 max-w-4xl mx-auto">
      <SectionHeader label="// experience.log" title="Depths Explored" />

      <div className="relative mt-16 pl-6 md:pl-0">
        {/* Vertical line */}
        <div
          ref={lineRef}
          className="absolute left-6 md:left-[50%] top-0 bottom-0 w-[2px] -ml-[1px]"
          style={{ background: 'linear-gradient(to bottom, var(--biolum-primary), var(--biolum-violet), transparent)' }}
        />

        <div className="space-y-16">
          {/* Entry 1 */}
          <ScrollReveal direction="left" className="relative flex flex-col md:flex-row md:justify-between md:odd:flex-row-reverse group">
            <div className="absolute left-[-24px] md:left-[50%] top-6 w-3 h-3 rounded-full bg-[var(--biolum-primary)] -ml-[6px] shadow-[var(--glow-primary)] transition-all duration-300 group-hover:scale-125 group-hover:shadow-[var(--glow-strong)] z-10" />

            <div className="md:w-[45%] w-full">
              <GlassCard className="h-full hover:-translate-y-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-syne text-xl font-bold text-[var(--text-primary)]">Research Intern</h3>
                  <div className="border border-[var(--biolum-violet)] text-[var(--biolum-violet)] text-[0.65rem] uppercase tracking-wider px-2 py-1 rounded-full whitespace-nowrap ml-2">
                    Research · Remote
                  </div>
                </div>
                <div className="font-inter text-[var(--biolum-secondary)] text-sm mb-1">
                  <a href="https://drive.google.com/file/d/1dD2uPQNPgKIi4J_wqPaSYx2teMe_545o/view" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--biolum-primary)] hover:underline">IIT Jodhpur, Rajasthan</a>
                </div>
                <div className="font-inter text-[var(--text-dim)] text-xs mb-4">May 2025 – Jul 2025</div>

                <ul className="space-y-2 font-inter text-sm text-[var(--text-secondary)]">
                  <li className="flex gap-2 items-start"><ChevronRight size={16} className="text-[var(--biolum-primary)] shrink-0 mt-0.5" /> <span>Developed CNN & hybrid 3D CNN-BiLSTM architectures for word-level sign language recognition from video</span></li>
                  <li className="flex gap-2 items-start"><ChevronRight size={16} className="text-[var(--biolum-primary)] shrink-0 mt-0.5" /> <span>Implemented TimeDistributed CNN-BiLSTM for real-time continuous gesture analysis on unsegmented video streams</span></li>
                  <li className="flex gap-2 items-start"><ChevronRight size={16} className="text-[var(--biolum-primary)] shrink-0 mt-0.5" /> <span>Built attention-based optical flow network for dynamic gesture motion recognition</span></li>
                  <li className="flex gap-2 items-start"><ChevronRight size={16} className="text-[var(--biolum-primary)] shrink-0 mt-0.5" /> <span>Managed end-to-end ML pipeline on WLASL & IPN Hand datasets with GPU-accelerated training under Dr. Gaurav Harit</span></li>
                </ul>
              </GlassCard>
            </div>
          </ScrollReveal>

          {/* Entry 2 */}
          <ScrollReveal direction="right" delay={0.2} className="relative flex flex-col md:flex-row md:justify-between md:even:flex-row group">
            <div className="absolute left-[-24px] md:left-[50%] top-6 w-3 h-3 rounded-full bg-[var(--biolum-primary)] -ml-[6px] shadow-[var(--glow-primary)] transition-all duration-300 group-hover:scale-125 group-hover:shadow-[var(--glow-strong)] z-10" />

            <div className="md:w-[45%] w-full">
              <GlassCard className="h-full hover:-translate-y-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-syne text-xl font-bold text-[var(--text-primary)]">Marketing & Sponsorship Lead</h3>
                  <div className="border border-[var(--biolum-secondary)] text-[var(--biolum-secondary)] text-[0.65rem] uppercase tracking-wider px-2 py-1 rounded-full whitespace-nowrap ml-2">
                    Leadership · Full-time
                  </div>
                </div>
                <div className="font-inter text-[var(--biolum-secondary)] text-sm mb-1">
                  Enactus VIT Chennai
                </div>
                <div className="font-inter text-[var(--text-dim)] text-xs mb-4">Mar 2025 – Apr 2026 | Member: Dec 2023 – Mar 2025</div>

                <ul className="space-y-2 font-inter text-sm text-[var(--text-secondary)]">
                  <li className="flex gap-2 items-start"><ChevronRight size={16} className="text-[var(--biolum-primary)] shrink-0 mt-0.5" /> <span>Led sponsorship acquisition and multi-channel marketing campaigns for social entrepreneurship initiatives</span></li>
                  <li className="flex gap-2 items-start"><ChevronRight size={16} className="text-[var(--biolum-primary)] shrink-0 mt-0.5" /> <span>Directed cross-functional teams across 2+ years, scaling outreach and partner engagement</span></li>
                </ul>
              </GlassCard>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
