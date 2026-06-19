import { useEffect, useState } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { tsParticles } from '@tsparticles/engine';

export function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    loadSlim(tsParticles).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 pointer-events-none z-0"
      options={{
        fpsLimit: 60,
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
            },
          },
          modes: {
            repulse: {
              distance: 120,
              duration: 0.8,
            },
          },
        },
        particles: {
          color: {
            value: ["#00b4d8", "#00ffd5", "#ffd166"], // 70%, 20%, 10% handled by weight if possible, but slim doesn't support array weight easily, so just pass colors.
          },
          links: {
            enable: false,
          },
          move: {
            direction: "top",
            enable: true,
            outModes: {
              default: "out",
            },
            random: false,
            speed: { min: 0.3, max: 0.8 },
            straight: false,
          },
          number: {
            value: 180,
            density: {
              enable: true,
            },
          },
          opacity: {
            value: { min: 0.1, max: 0.6 },
            animation: {
              enable: true,
              speed: 0.5,
              sync: false,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
          wobble: {
            enable: true,
            distance: 5,
            speed: 2
          }
        },
        detectRetina: true,
      }}
    />
  );
}
