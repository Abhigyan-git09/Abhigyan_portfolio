import type { ProjectData } from '../components/ui/ProjectCard';

export const projects: ProjectData[] = [
  {
    title: 'AuraFi',
    url: 'https://aura-fi.vercel.app/',
    accentColor: '#ffd166',
    description: 'A full-stack personal finance platform with real-time bank synchronisation via Plaid API, budget management, and multi-currency analytics.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Plaid API', 'Tailwind']
  },
  {
    title: 'VisionFlow',
    url: 'https://vision-flow-one.vercel.app/login',
    accentColor: '#00ffd5',
    description: 'Real-time crowd safety analytics platform streaming live telemetry at 60 FPS via WebSockets with automated anomaly detection and incident lifecycle management.',
    tags: ['React', 'Node.js', 'WebSockets', 'PostgreSQL', 'Supabase', 'JWT']
  },
  {
    title: 'StoryGen',
    url: 'https://story-gen-two.vercel.app/',
    accentColor: '#8b5cf6',
    description: 'AI-powered creative writing application generating structured multi-chapter narratives from user prompts with personal library management and PDF/Word export.',
    tags: ['React', 'Node.js', 'LLM Integration', 'Auth']
  },
  {
    title: 'TrustFedSkin',
    url: null,
    github: null,
    accentColor: '#f472b6',
    featuredBadge: 'Research Project',
    description: 'Trustworthy federated AI for 4-class skin cancer classification achieving 96.9% accuracy & 0.94 uncertainty AUROC across 5 medical datasets.',
    tags: ['PyTorch', 'Federated Learning', 'EfficientNet-B0', 'CORAL', 'MC Dropout']
  },
  {
    title: 'GreenGuard',
    url: 'https://green-gaurd.vercel.app/',
    accentColor: '#00b4d8',
    description: 'AI-driven greenwashing detection using Google Gemini multimodal AI for product image analysis, ESG scoring, and corporate network mapping.',
    tags: ['React', 'Node.js', 'Gemini API', 'WebSockets', 'OpenCorporates API']
  }
];
