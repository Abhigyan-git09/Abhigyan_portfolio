import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);

      // Section spy
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPos = window.scrollY + 200; // offset
      
      sections.forEach(section => {
        if (section && section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[rgba(2,8,16,0.8)] backdrop-blur-[20px] border-b border-[var(--border-subtle)] py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          className="font-syne font-bold text-2xl text-[var(--biolum-primary)] cursor-pointer hover:drop-shadow-[0_0_8px_var(--biolum-primary)] transition-all"
          onClick={() => scrollToSection('hero')}
        >
          &lt;Abhi/&gt;
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`font-inter text-sm uppercase tracking-wider transition-all duration-250 ${
                activeSection === link.id
                  ? 'text-[var(--biolum-primary)] drop-shadow-[0_0_8px_var(--biolum-primary)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--biolum-primary)]'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-[var(--text-primary)]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-[rgba(2,8,16,0.95)] backdrop-blur-[20px] border-b border-[var(--border-subtle)]"
          >
            <div className="flex flex-col px-6 py-6 gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left font-inter text-lg uppercase tracking-wider transition-all duration-250 ${
                    activeSection === link.id
                      ? 'text-[var(--biolum-primary)] drop-shadow-[0_0_8px_var(--biolum-primary)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--biolum-primary)]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
