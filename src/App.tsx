import React, { Suspense } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ParticleBackground } from './components/three/ParticleBackground';
import { DepthGradientOverlays } from './components/layout/DepthGradientOverlays';
import { Hero } from './sections/Hero';
import { About } from './sections/About';

const Experience = React.lazy(() => import('./sections/Experience').then(module => ({ default: module.Experience })));
const Projects = React.lazy(() => import('./sections/Projects').then(module => ({ default: module.Projects })));
const Skills = React.lazy(() => import('./sections/Skills').then(module => ({ default: module.Skills })));
const Achievements = React.lazy(() => import('./sections/Achievements').then(module => ({ default: module.Achievements })));
const Contact = React.lazy(() => import('./sections/Contact').then(module => ({ default: module.Contact })));

function App() {
  return (
    <>
      <ParticleBackground />
      <DepthGradientOverlays />
      <Navbar />
      
      <main className="relative z-10 flex flex-col w-full">
        <Hero />
        <About />
        
        <Suspense fallback={<div className="h-[200px] flex items-center justify-center text-[var(--biolum-primary)] opacity-50 font-inter text-sm tracking-wider uppercase">Loading section...</div>}>
          <Experience />
          <Projects />
          <Skills />
          <Achievements />
          <Contact />
        </Suspense>
      </main>
      
      <Footer />
    </>
  );
}

export default App;
