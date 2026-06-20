import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { JellyfishScene } from '../components/three/JellyfishScene';
import { TypewriterText } from '../components/ui/TypewriterText';
import { GlowButton } from '../components/ui/GlowButton';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.0, 0.0, 0.2, 1] as [number, number, number, number],
      }
    },
  };

  return (
    <section id="hero" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <JellyfishScene />
      
      <div className="relative z-10 flex flex-col items-center text-center px-6 mt-16 max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="text-[var(--text-secondary)] font-inter font-light text-xl mb-4">
            Hi, I'm
          </motion.div>
          
          <motion.h1 
            variants={itemVariants} 
            className="text-[var(--biolum-gold)] font-syne font-extrabold text-3xl sm:text-5xl md:text-[4.5rem] mb-6 tracking-tight leading-tight"
            style={{ textShadow: 'var(--glow-gold)' }}
          >
            Abhigyan Sinha
          </motion.h1>
          
          <motion.div variants={itemVariants} className="mb-6 h-10 flex items-center justify-center">
            <TypewriterText 
              words={["AI/ML Engineer", "Full-Stack Developer", "Deep Learning Researcher", "Creative Builder"]} 
              typingSpeed={100} 
            />
          </motion.div>
          
          <motion.p variants={itemVariants} className="text-[var(--text-secondary)] font-inter text-base md:text-lg max-w-[480px] leading-relaxed mb-10">
            Building intelligent systems that live at the intersection of AI and the web.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <GlowButton 
              variant="primary" 
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore My Work
            </GlowButton>
            
            <GlowButton 
              variant="secondary" 
              href="/resume_abhigyanSinha.pdf"
            >
              Download Resume
            </GlowButton>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 z-10 flex justify-center w-full opacity-50"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <ChevronDown size={32} className="text-[var(--biolum-primary)]" />
      </motion.div>
    </section>
  );
}
