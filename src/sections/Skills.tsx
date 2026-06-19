import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/ui/SectionHeader';
import { SkillPill } from '../components/ui/SkillPill';

const skillsData = [
  {
    id: 'ai',
    title: 'AI / Machine Learning',
    accentColor: 'var(--biolum-primary)',
    skills: ['Python', 'PyTorch', 'TensorFlow', 'Deep Learning', 'Computer Vision', 'CNNs', 'BiLSTM', 'Federated Learning', 'NLP', 'Generative AI', 'Scikit-learn', 'Optical Flow', 'Uncertainty Quantification']
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Development',
    accentColor: 'var(--biolum-secondary)',
    skills: ['React', 'Next.js', 'Node.js', 'Express', 'TypeScript', 'JavaScript', 'PostgreSQL', 'Prisma', 'REST APIs', 'WebSockets', 'JWT', 'Tailwind CSS']
  },
  {
    id: 'langs',
    title: 'Languages & CS Fundamentals',
    accentColor: 'var(--biolum-violet)',
    skills: ['Python', 'C++', 'Java', 'TypeScript', 'SQL', 'Data Structures', 'Algorithms', 'System Design']
  },
  {
    id: 'tools',
    title: 'Cloud, Tools & Soft Skills',
    accentColor: 'var(--biolum-gold)',
    skills: ['Git', 'Docker', 'Vercel', 'Supabase', 'Oracle Cloud', 'AWS', 'Linux', 'Team Leadership', 'Marketing', 'Research Communication']
  }
];

export function Skills() {
  const [focusedId, setFocusedId] = useState<string | null>(null);

  return (
    <section id="skills" className="py-[120px] px-6 max-w-5xl mx-auto">
      <SectionHeader label="// skills.inventory" title="Capabilities & Tools" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        {skillsData.map((category) => {
          const isFocused = focusedId === category.id;
          const isDimmed = focusedId !== null && focusedId !== category.id;
          
          return (
            <motion.div
              key={category.id}
              animate={{ 
                opacity: isDimmed ? 0.4 : 1,
                scale: isFocused ? 1.02 : 1
              }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative bg-[var(--bg-glass)] backdrop-blur-[12px] saturate-150 border border-[var(--border-subtle)] rounded-2xl overflow-hidden p-7 transition-shadow"
              style={isFocused ? { boxShadow: 'var(--glow-primary)', borderColor: 'var(--border-active)' } : {}}
            >
              <div 
                className="absolute top-0 left-0 w-full h-[3px]"
                style={{ backgroundColor: category.accentColor }}
              />
              
              <h3 
                className="font-syne font-semibold text-xl cursor-pointer inline-block mb-6"
                style={{ color: category.accentColor }}
                onClick={() => setFocusedId(isFocused ? null : category.id)}
              >
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <SkillPill key={skill} label={skill} accentColor={category.accentColor} />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
