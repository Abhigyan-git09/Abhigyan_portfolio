import { SectionHeader } from '../components/ui/SectionHeader';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { Trophy, Cloud, Brain, Code2, Network, Cpu, CloudCog, BarChart, ExternalLink } from 'lucide-react';

const achievementsData = [
  {
    id: 1,
    title: 'VITISH 2025 — Winner',
    sub: 'Selected among 900+ teams to represent VIT Chennai at Smart India Hackathon (SIH)',
    borderColor: 'var(--biolum-gold)',
    icon: Trophy
  },
  {
    id: 2,
    title: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
    sub: 'Oracle Certified',
    link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=F2A0710115ABB8F8ECA2B880CB48D644F75C3493A1EFC50C8629D18DA66FBB60',
    borderColor: 'var(--biolum-secondary)',
    icon: Cloud
  },
  {
    id: 3,
    title: 'Neural Networks and Deep Learning',
    sub: 'Coursera · deeplearning.ai',
    link: 'https://www.coursera.org/account/accomplishments/records/JQCNNQINOLCZ',
    borderColor: 'var(--biolum-primary)',
    icon: Brain
  },
  {
    id: 4,
    title: 'Beginning C++ — Beginner to Beyond',
    sub: 'Udemy Certified',
    link: 'https://ude.my/UC-4976d14f-27ca-4a4f-80ae-df206581a44e',
    borderColor: 'var(--biolum-violet)',
    icon: Code2
  },
  {
    id: 5,
    title: 'Introduction to Model Context Protocol',
    link: 'https://verify.skilljar.com/c/qdkrg7fmehyr',
    borderColor: 'var(--biolum-pink)',
    icon: Network
  },
  {
    id: 6,
    title: 'Generative AI for Executives',
    sub: 'AWS Skill Builder',
    borderColor: 'var(--biolum-gold)',
    icon: Cpu
  },
  {
    id: 7,
    title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    sub: 'Oracle Certified',
    link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=76F480FC7F939451ACFED2ED0EEE13AEEAFEBAC20EF857E03A7DB63B612A6941',
    borderColor: 'var(--biolum-primary)',
    icon: CloudCog
  },
  {
    id: 8,
    title: 'Deloitte Australia - Data Analytics Job Simulation',
    sub: 'Forage',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_4za5wYkeue8bko8Ca_1751446228344_completion_certificate.pdf',
    borderColor: 'var(--biolum-secondary)',
    icon: BarChart
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-[120px] px-6 max-w-4xl mx-auto">
      <SectionHeader label="// achievements.unlock" title="Milestones" />

      <div className="mt-16 flex overflow-x-auto md:grid md:grid-cols-2 gap-6 pb-6 snap-x snap-mandatory hide-scrollbar">
        {achievementsData.map((achievement, index) => {
          const Icon = achievement.icon;
          const content = (
            <div
              className="min-w-[280px] md:min-w-0 w-full flex-shrink-0 snap-center bg-[var(--bg-glass)] backdrop-blur-[12px] border border-[var(--border-subtle)] rounded-xl p-6 relative overflow-hidden transition-all hover:border-[var(--border-active)] hover:shadow-[var(--glow-primary)] group h-full"
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-1"
                style={{ backgroundColor: achievement.borderColor }}
              />
              <div className="flex gap-4 items-start">
                <div
                  className="p-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[var(--border-subtle)] text-[var(--text-primary)] transition-colors group-hover:bg-[rgba(255,255,255,0.05)]"
                  style={{ color: achievement.borderColor }}
                >
                  <Icon size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-syne font-semibold text-lg text-[var(--text-primary)] mb-1 leading-snug">
                    {achievement.title}
                  </h3>
                  {achievement.sub && (
                    <p className="font-inter text-sm text-[var(--text-secondary)] mb-2">
                      {achievement.sub}
                    </p>
                  )}
                  {achievement.link && (
                    <div className="inline-flex items-center gap-1 text-xs font-inter text-[var(--biolum-primary)] opacity-0 group-hover:opacity-100 transition-opacity">
                      View Credential <ExternalLink size={12} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );

          if (achievement.link) {
            return (
              <ScrollReveal key={achievement.id} direction="up" delay={index * 0.1}>
                <a href={achievement.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                  {content}
                </a>
              </ScrollReveal>
            );
          }

          return (
            <ScrollReveal key={achievement.id} direction="up" delay={index * 0.1}>
              {content}
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
