PROJECT: Personal Portfolio Website — "Bioluminescent Deep Ocean" Theme
DEVELOPER: Abhigyan Sinha | AI/ML Engineer & Full-Stack Developer

════════════════════════════════════════════════════════════
SECTION 0 — AGENT INSTRUCTIONS (READ FIRST)
════════════════════════════════════════════════════════════

You are building a full-stack interactive personal portfolio website. 
Before writing any code, generate a complete task plan as an Artifact 
listing every component, page section, and animation system you will build.
Get confirmation before executing.

RULES YOU MUST NEVER BREAK:
- Never use random or placeholder colors outside the design system below
- Never use CSS animations where Framer Motion or GSAP is specified
- Never use more than 2 font families total
- Never add a section not listed in SECTION 4
- Never use box-shadow as a glow effect — use filter: drop-shadow() or 
  box-shadow with the exact glow values specified
- Never make layout decisions that weren't specified — ask first
- Commit after each completed section with a descriptive message
- Do not force push or rebase

════════════════════════════════════════════════════════════
SECTION 1 — TECH STACK (EXACT — DO NOT SUBSTITUTE)
════════════════════════════════════════════════════════════

Framework:        React 19 + Vite
Language:         TypeScript (strict mode)
Styling:          Tailwind CSS v4 (utility-first, no custom CSS files 
                  except globals.css for font imports and CSS variables)
3D Engine:        React Three Fiber (R3F) + Three.js + @react-three/drei
Scroll Engine:    GSAP + ScrollTrigger (for all scroll-based animations)
UI Animations:    Framer Motion (for component enter/exit, hover, 
                  page transitions)
Particles:        @tsparticles/react (for ambient ocean particle system)
Icons:            Lucide React only
Forms:            React Hook Form
Email:            EmailJS
Routing:          React Router v7
Linting:          ESLint + Prettier (configure before writing any component)

Install ALL dependencies before writing the first component.

════════════════════════════════════════════════════════════
SECTION 2 — DESIGN SYSTEM (ABSOLUTE — NO DEVIATIONS)
════════════════════════════════════════════════════════════

── COLOR PALETTE ──────────────────────────────────────────

CSS Variables (define in globals.css):

  --bg-void:          #020810    /* Page background — deepest ocean void */
  --bg-deep:          #040f1e    /* Section backgrounds */
  --bg-surface:       #071428    /* Card backgrounds */
  --bg-glass:         rgba(7, 20, 40, 0.6) /* Glassmorphism cards */

  --biolum-primary:   #00ffd5    /* Primary teal glow — main accent */
  --biolum-secondary: #00b4d8    /* Softer blue teal — secondary accent */
  --biolum-gold:      #ffd166    /* Warm gold bioluminescence — highlights */
  --biolum-violet:    #8b5cf6    /* Deep violet — rare deep-sea creature */
  --biolum-pink:      #f472b6    /* Bioluminescent pink — hover accents */

  --text-primary:     #e8f4f8    /* Near-white — main text */
  --text-secondary:   #7fb3c8    /* Muted blue-white — secondary text */
  --text-dim:         #3d6b80    /* Dimmed — placeholders, disabled */

  --border-subtle:    rgba(0, 255, 213, 0.08)
  --border-active:    rgba(0, 255, 213, 0.3)
  --glow-primary:     0 0 20px rgba(0, 255, 213, 0.4)
  --glow-gold:        0 0 20px rgba(255, 209, 102, 0.4)
  --glow-strong:      0 0 40px rgba(0, 255, 213, 0.6), 
                      0 0 80px rgba(0, 255, 213, 0.2)

── TYPOGRAPHY ─────────────────────────────────────────────

  Heading Font:   "Syne" (Google Fonts — weights 400, 700, 800)
  Body Font:      "Inter" (Google Fonts — weights 300, 400, 500, 600)

  Scale:
    h1: 4rem / font-weight 800 / letter-spacing -0.02em / Syne
    h2: 2.5rem / font-weight 700 / Syne
    h3: 1.5rem / font-weight 600 / Syne
    body: 1rem / font-weight 400 / line-height 1.7 / Inter
    small: 0.875rem / font-weight 400 / Inter
    label/tag: 0.75rem / font-weight 500 / uppercase / letter-spacing 0.1em

── SPACING ────────────────────────────────────────────────

  Base unit: 8px
  Sections: padding-top 120px, padding-bottom 120px
  Cards: padding 28px
  Grid gap: 24px
  Border radius: 16px for cards, 8px for tags, 50% for avatars

── GLASSMORPHISM CARD STYLE ───────────────────────────────

  Every card must use exactly this style:
    background: var(--bg-glass)
    backdrop-filter: blur(12px) saturate(1.5)
    border: 1px solid var(--border-subtle)
    border-radius: 16px
    transition: border-color 250ms ease, box-shadow 250ms ease

  On hover:
    border-color: var(--border-active)
    box-shadow: var(--glow-primary)

── EASING CURVES ──────────────────────────────────────────

  Standard:   cubic-bezier(0.4, 0, 0.2, 1)   — all UI transitions
  Enter:      cubic-bezier(0.0, 0.0, 0.2, 1)  — elements coming in
  Exit:       cubic-bezier(0.4, 0.0, 1, 1)    — elements leaving
  Spring:     Framer Motion spring — stiffness: 80, damping: 20

── GLOW RULES ─────────────────────────────────────────────

  - Headings: text-shadow: 0 0 30px rgba(0,255,213,0.3)
  - Active nav links: filter: drop-shadow(0 0 8px var(--biolum-primary))
  - CTA buttons: box-shadow: var(--glow-primary) on hover
  - Gold accents (name, stats): text-shadow: 0 0 20px rgba(255,209,102,0.5)
  - NEVER apply glow to body text

════════════════════════════════════════════════════════════
SECTION 3 — GLOBAL LAYOUT & NAVIGATION
════════════════════════════════════════════════════════════

NAVBAR (Fixed, top):
  - Background: rgba(2, 8, 16, 0.8) with backdrop-filter: blur(20px)
  - Left: "A.S" monogram logo in Syne 700, color: var(--biolum-primary), 
    subtle glow on hover
  - Right: Nav links — Home, About, Experience, Projects, Skills, Contact
  - Active link: var(--biolum-primary) color + drop-shadow glow
  - On scroll past 80px: add bottom border 1px solid var(--border-subtle)
  - Mobile: Hamburger menu with Framer Motion slide-down drawer
  - Smooth scroll to sections on click (use scrollIntoView with 
    behavior: 'smooth')

AMBIENT BACKGROUND LAYER (renders behind everything, z-index: 0):
  Build a persistent full-viewport background using @tsparticles/react:
  - ~180 particles total
  - Sizes: mix of 1px, 2px, 3px dots
  - Colors: 70% var(--biolum-secondary), 20% var(--biolum-primary), 
    10% var(--biolum-gold)
  - Opacity range: 0.1 to 0.6 (randomized per particle)
  - Movement: very slow upward drift, speed 0.3-0.8
  - Slight horizontal sway using sine wave offset
  - Twinkle effect: random opacity pulse every 2-5 seconds per particle
  - interactivity: on mouse hover, nearby particles (radius 120px) 
    gently drift away (repulse, distance: 80, duration: 0.8)
  - NO connecting lines between particles

DEPTH GRADIENT OVERLAYS:
  Create a fixed overlay layer with:
  - Top gradient: linear-gradient(to bottom, var(--bg-void) 0%, 
    transparent 15%) — creates depth ceiling
  - Bottom gradient: linear-gradient(to top, var(--bg-void) 0%, 
    transparent 15%) — creates depth floor
  These create the illusion of infinite ocean depth

════════════════════════════════════════════════════════════
SECTION 4 — PAGE SECTIONS (BUILD IN THIS EXACT ORDER)
════════════════════════════════════════════════════════════

──────────────────────────────────────────────────────────
4.1  HERO SECTION
──────────────────────────────────────────────────────────

Height: 100vh
Layout: Centered, single column

THREE.JS SCENE (takes full viewport):
  Build a React Three Fiber canvas as the hero background:
  - Create 3 large, slowly rotating bioluminescent jellyfish-like 
    geometric forms using IcosahedronGeometry or custom geometry
  - Each jellyfish: wireframe: false, MeshStandardMaterial with:
      emissive: #00ffd5, emissiveIntensity: 0.4, 
      color: #003d4d, transparent: true, opacity: 0.7
  - Animate them: slow Y-axis rotation (0.002 rad/frame), gentle 
    floating sine wave on Y position (amplitude 0.3, each at different 
    phase so they don't sync)
  - Add trailing "tendrils" using Line geometry — 8-12 thin lines 
    drooping below each jellyfish, animated with physics-like wave
  - PointLight: color #00ffd5, intensity 2, positioned at jellyfish center
  - AmbientLight: color #001a2e, intensity 0.5
  - Camera: position [0, 0, 8], fov 60
  - Canvas style: position absolute, inset 0, z-index 1, 
    pointerEvents: none

HERO TEXT (z-index 10, position relative):
  Line 1: "Hi, I'm" — Inter 300, var(--text-secondary), font-size 1.25rem
  Line 2: "Abhigyan Sinha" — Syne 800, 4.5rem, var(--biolum-gold),
           text-shadow: var(--glow-gold) — this is the name, make it 
           the visual anchor
  Line 3: Typewriter effect cycling through:
           "AI/ML Engineer" → "Full-Stack Developer" → 
           "Deep Learning Researcher" → "Creative Builder"
           Use a custom TypewriterText component with cursor blink.
           Color: var(--biolum-primary), Syne 600, 1.75rem
  Line 4: "Building intelligent systems that live at the intersection 
           of AI and the web."
           Inter 400, var(--text-secondary), max-width 480px, centered

  CTA BUTTONS (flex row, gap 16px, margin-top 40px):
    Primary: "Explore My Work" — 
      background: linear-gradient(135deg, #00ffd5 0%, #00b4d8 100%)
      color: #020810, font-weight 600, padding: 14px 32px, 
      border-radius 8px, box-shadow: var(--glow-primary) on hover
      onClick: smooth scroll to #projects

    Secondary: "Download Resume" — 
      border: 1px solid var(--border-active), color: var(--biolum-primary)
      background: transparent, padding: 14px 32px, border-radius 8px
      glow border on hover
      href: link to resume PDF

  SCROLL INDICATOR (bottom center, position absolute):
    Animated chevron-down icon from Lucide, opacity 0.5, 
    gentle bob animation (translateY -5px loop, 1.5s ease-in-out)

ENTRY ANIMATION (Framer Motion, staggered):
  All hero text elements fade up (y: 30 → 0, opacity: 0 → 1)
  Stagger: 0.15s between each line
  Duration: 0.8s each, easing: Enter curve

──────────────────────────────────────────────────────────
4.2  ABOUT SECTION
──────────────────────────────────────────────────────────

ID: "about"
Layout: Two columns (50/50), centered vertically, gap 80px

LEFT COLUMN — Visual:
  Create a "specimen display" effect:
  - Outer circle: 280px diameter, border: 2px solid var(--border-active),
    border-radius 50%, box-shadow: var(--glow-primary)
  - Rotating dashed ring: position absolute, slightly larger (310px), 
    border: 2px dashed rgba(0,255,213,0.2), border-radius 50%
    animate: rotate 360deg, 20s linear infinite
  - Place a professional avatar/profile illustration placeholder 
    (or initials "AS" in Syne 800, 4rem, var(--biolum-primary)) centered
  - Three floating "data tags" orbiting the circle using CSS animation:
    Tags: "AI/ML", "Full-Stack", "Researcher"
    Each tag: glassmorphism style, var(--biolum-primary) border, 
    small text, positioned at 120° intervals, orbit animation 15s

RIGHT COLUMN — Text:
  Label: "// about.me" — var(--biolum-secondary), letter-spacing 0.1em, 
         font-size 0.75rem
  Heading: "Navigating the Deep" — Syne 700, 2.5rem, var(--text-primary)
  
  Body paragraphs (Inter 400, var(--text-secondary), line-height 1.8):
    "I'm a final-year B.Tech Computer Science (AI & ML) student at 
    Vellore Institute of Technology, Chennai, with a deep obsession 
    for building things that are both technically rigorous and 
    visually compelling."
    
    "My research at IIT Jodhpur focused on deep learning architectures 
    for sign language recognition — designing CNN-BiLSTM systems that 
    can understand human gesture from raw video. Outside the lab, I 
    build full-stack products from real-time safety platforms to 
    AI-powered finance tools."
    
    "When I'm not writing code, I'm probably thinking about how 
    intelligence emerges from data."

  QUICK STATS (grid 3 columns, margin-top 32px):
    Each stat: number in Syne 800 2rem var(--biolum-gold), 
               label in Inter 400 0.8rem var(--text-secondary)
    Values: "5+" Projects | "8.74" CGPA | "3" Research Months

──────────────────────────────────────────────────────────
4.3  EXPERIENCE SECTION
──────────────────────────────────────────────────────────

ID: "experience"
Layout: Centered, max-width 800px

Section header (reusable SectionHeader component):
  Label: "// experience.log" 
  Title: "Depths Explored"

VERTICAL TIMELINE:
  Left side: a vertical line, 2px, 
    background: linear-gradient(to bottom, var(--biolum-primary), 
    var(--biolum-violet), transparent)
  
  Each entry has: 
    - Timeline dot: 12px circle, var(--biolum-primary), glow on hover
    - Connector line from dot to card
    - Card: glassmorphism style

  ENTRY 1 — IIT Jodhpur Research Intern:
    Title: "Research Intern"
    Organization: "IIT Jodhpur, Rajasthan"  
    Link: https://drive.google.com/file/d/1dD2uPQNPgKIi4J_wqPaSYx2teMe_545o/view
    Period: "May 2025 – Jul 2025"
    Type badge: "Research · Remote" — small pill, var(--biolum-violet) border
    Description: Bullet list with Lucide ChevronRight icons:
      · Developed CNN & hybrid 3D CNN-BiLSTM architectures for 
        word-level sign language recognition from video
      · Implemented TimeDistributed CNN-BiLSTM for real-time continuous 
        gesture analysis on unsegmented video streams  
      · Built attention-based optical flow network for dynamic gesture 
        motion recognition
      · Managed end-to-end ML pipeline on WLASL & IPN Hand datasets 
        with GPU-accelerated training under Dr. Gaurav Harit

  ENTRY 2 — Enactus VIT Chennai:
    Title: "Marketing & Sponsorship Lead"
    Organization: "Enactus VIT Chennai"
    Period: "Mar 2025 – Apr 2026  |  Member: Dec 2023 – Apr 2025"
    Type badge: "Leadership · Full-time"
    Description:
      · Led sponsorship acquisition and multi-channel marketing 
        campaigns for social entrepreneurship initiatives
      · Directed cross-functional teams across 2+ years, scaling 
        outreach and partner engagement

  SCROLL ANIMATION (GSAP ScrollTrigger):
    Timeline line draws itself downward as user scrolls into section
    Each entry card slides in from left (x: -40 → 0) with 
    opacity fade as it enters viewport

──────────────────────────────────────────────────────────
4.4  PROJECTS SECTION
──────────────────────────────────────────────────────────

ID: "projects"
Layout: Grid — 2 columns on desktop, 1 on mobile, gap 24px

Section header:
  Label: "// projects.explore"
  Title: "Things I've Built"

Build a reusable ProjectCard component. Each card:
  - Glassmorphism base style
  - TOP BAR: colored "depth indicator" bar, 3px height, full width, 
    border-radius top, unique color per project (see below)
  - HEADER: project title (Syne 600, 1.25rem, var(--text-primary)) + 
    icon links row (ExternalLink and Github icons from Lucide, 
    var(--biolum-secondary), glow on hover)
  - DESCRIPTION: 2-sentence max, Inter 400, var(--text-secondary)
  - TECH TAGS: flex wrap row, each tag:
      background: rgba(0,255,213,0.05)
      border: 1px solid var(--border-subtle)
      color: var(--biolum-primary)
      border-radius: 8px, padding 4px 10px, font-size 0.7rem uppercase
  - HOVER STATE: 
      border-color → var(--border-active)
      box-shadow → var(--glow-primary)
      top bar → glow intensifies (filter: brightness(1.3))
      slight scale(1.02) with Framer Motion layout animation

PROJECT DATA (use exactly in this order):

  1. AuraFi
     URL: https://aura-fi.vercel.app/
     Accent color: #ffd166 (gold)
     Description: "A full-stack personal finance platform with real-time 
     bank synchronisation via Plaid API, budget management, and 
     multi-currency analytics."
     Tags: Next.js, TypeScript, PostgreSQL, Prisma, Plaid API, Tailwind

  2. VisionFlow
     URL: https://vision-flow-one.vercel.app/login
     Accent color: #00ffd5 (primary teal)
     Description: "Real-time crowd safety analytics platform streaming 
     live telemetry at 60 FPS via WebSockets with automated anomaly 
     detection and incident lifecycle management."
     Tags: React, Node.js, WebSockets, PostgreSQL, Supabase, JWT

  3. StoryGen
     URL: https://story-gen-two.vercel.app/
     Accent color: #8b5cf6 (violet)
     Description: "AI-powered creative writing application generating 
     structured multi-chapter narratives from user prompts with 
     personal library management and PDF/Word export."
     Tags: React, Node.js, LLM Integration, Auth

  4. TrustFedSkin
     URL: null (no live demo)
     GitHub: null
     Accent color: #f472b6 (pink)
     FEATURED BADGE: Add "Research Project" badge in top-right corner 
     of card — var(--biolum-pink) border
     Description: "Trustworthy federated AI for 4-class skin cancer 
     classification achieving 96.9% accuracy & 0.94 uncertainty AUROC 
     across 5 medical datasets."
     Tags: PyTorch, Federated Learning, EfficientNet-B0, CORAL, MC Dropout

  5. GreenGuard
     URL: https://green-gaurd.vercel.app/
     Accent color: #00b4d8 (secondary teal)
     Description: "AI-driven greenwashing detection using Google Gemini 
     multimodal AI for product image analysis, ESG scoring, and 
     corporate network mapping."
     Tags: React, Node.js, Gemini API, WebSockets, OpenCorporates API

CARD ENTRANCE ANIMATION:
  Use GSAP ScrollTrigger: cards animate in with stagger 0.1s,
  each from y: 50, opacity: 0 → y: 0, opacity: 1
  Trigger: when 80% into viewport

──────────────────────────────────────────────────────────
4.5  SKILLS SECTION
──────────────────────────────────────────────────────────

ID: "skills"
Layout: Centered, max-width 900px

Section header:
  Label: "// skills.inventory"
  Title: "Capabilities & Tools"

Build a categorised skill display — NOT a bar chart, NOT percentages.

Group skills into 4 category blocks (2x2 grid on desktop):

  BLOCK 1 — "AI / Machine Learning"
  Accent: var(--biolum-primary)
  Skills: Python · PyTorch · TensorFlow · Deep Learning · Computer Vision
          CNNs · BiLSTM · Federated Learning · NLP · Generative AI
          Scikit-learn · Optical Flow · Uncertainty Quantification

  BLOCK 2 — "Full-Stack Development"
  Accent: var(--biolum-secondary)
  Skills: React · Next.js · Node.js · Express · TypeScript · JavaScript
          PostgreSQL · Prisma · REST APIs · WebSockets · JWT · Tailwind CSS

  BLOCK 3 — "Languages & CS Fundamentals"
  Accent: var(--biolum-violet)
  Skills: Python · C++ · Java · TypeScript · SQL · Data Structures
          Algorithms · System Design

  BLOCK 4 — "Cloud, Tools & Soft Skills"
  Accent: var(--biolum-gold)
  Skills: Git · Docker · Vercel · Supabase · Oracle Cloud · AWS · Linux
          Team Leadership · Marketing · Research Communication

Each block: glassmorphism card, accent-colored 3px top bar,
block title in Syne 600 with accent color.

Skills rendered as PILL TAGS inside each block.
On hover of each pill: background shifts to rgba of accent color at 15%,
border becomes accent color.

INTERACTIVE BEHAVIOR:
  Clicking a category title "focuses" that block — others reduce opacity 
  to 0.4, focused block scales(1.02). Click again to reset. 
  Use Framer Motion animate for this.

──────────────────────────────────────────────────────────
4.6  ACHIEVEMENTS & CERTIFICATIONS SECTION
──────────────────────────────────────────────────────────

ID: "achievements"
Layout: Centered, max-width 800px

Section header:
  Label: "// achievements.unlock"
  Title: "Milestones"

Display as a horizontal scrollable row on mobile, 
2-column grid on desktop.

Each achievement as a compact card — glassmorphism + accent left border:

  1. VITISH 2025 Winner
     Left border color: var(--biolum-gold)
     Icon: Trophy (Lucide)
     Title: "VITISH 2025 — Winner"
     Sub: "Selected among 50 teams to represent VIT Chennai at 
           Smart India Hackathon (SIH)"

  2. Oracle Cloud Infrastructure 2025 Certified Foundations Associate
     Left border color: var(--biolum-secondary)  
     Icon: Cloud (Lucide)
     Title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate"
     Sub: "Oracle Certified "
     Link: https://catalog-education.oracle.com/pls/certview/sharebadge?id=F2A0710115ABB8F8ECA2B880CB48D644F75C3493A1EFC50C8629D18DA66FBB60

  3. Neural Networks and Deep Learning
     Left border color: var(--biolum-primary)
     Icon: Brain (Lucide)
     Title: "Neural Networks and Deep Learning"
     Sub: "Coursera · deeplearning.ai"
     Link: https://www.coursera.org/account/accomplishments/records/JQCNNQINOLCZ

  4. C++ Programming — Beginner to Beyond
     Left border color: var(--biolum-violet)
     Icon: Code2 (Lucide)  
     Title: "Beginning C++ — Beginner to Beyond"
     Sub: "Udemy Certified"
     Link: https://ude.my/UC-4976d14f-27ca-4a4f-80ae-df206581a44e
     
  5. Introduction to Model Context Protocol
     Left border color: var(--biolum-pink)
     Icon: Sparkles (Lucide)
     Title: "Introduction to Model Context Protocol"
     Link: https://verify.skilljar.com/c/qdkrg7fmehyr


  6. Generative AI for Executives
     Left border color: var(--biolum-pink)
     Icon: Sparkles (Lucide)
     Title: "Generative AI for Executives"
     Sub: "AWS Skill Builder"

──────────────────────────────────────────────────────────
4.7  CONTACT SECTION
──────────────────────────────────────────────────────────

ID: "contact"
Layout: Two columns — left info, right form
Background: slightly lighter than void — var(--bg-deep)

LEFT SIDE:
  Label: "// contact.init"
  Title: "Let's Build Something"
  Body: "Whether it's a research collaboration, a product idea, 
         or just a conversation about AI and the web — I'm always 
         interested in what's on the horizon."

  Contact links (vertical stack, each with icon + link text):
    - Mail icon → sinhaabhigyan0910@gmail.com
    - Github icon → https://github.com/Abhigyan-git09
    - Linkedin icon → https://www.linkedin.com/in/abhigyan-sinha-b00914276/
    Each: flex row, gap 12px, var(--biolum-primary) icon, 
          var(--text-secondary) text, hover → text becomes primary color

RIGHT SIDE — Contact Form (React Hook Form + EmailJS):
  Fields: Name, Email, Message (textarea, 5 rows)
  Each field:
    background: var(--bg-surface)
    border: 1px solid var(--border-subtle)
    border-radius: 8px, padding 14px 16px
    color: var(--text-primary)
    placeholder color: var(--text-dim)
    on focus: border-color → var(--biolum-primary), 
              box-shadow → 0 0 0 3px rgba(0,255,213,0.1)
    
  Submit button: Same style as hero primary CTA
  On submit: 
    - Show loading spinner inside button
    - On success: show "Transmission received 🌊" toast notification
    - On error: show "Failed to send — please try email directly" toast

──────────────────────────────────────────────────────────
4.8  FOOTER
──────────────────────────────────────────────────────────

Minimal. Single row:
  Left: "© 2025 Abhigyan Sinha" — var(--text-dim), Inter 400, 0.875rem
  Center: "A.S" monogram (same as navbar)
  Right: Icon links — Github, LinkedIn, Mail — var(--text-dim), 
         hover → var(--biolum-primary) + drop-shadow glow

Border top: 1px solid var(--border-subtle)
Padding: 32px 0

════════════════════════════════════════════════════════════
SECTION 5 — PERFORMANCE RULES (ENFORCE ALL)
════════════════════════════════════════════════════════════

- Three.js canvas must use frameloop="demand" when not animating 
  (switch to "always" only for hero section)
- Lazy load all sections below the fold using React.lazy + Suspense
- All images: WebP format, specify width/height to prevent CLS
- Particles: cap at 180 total, pause when tab is not visible 
  (use Page Visibility API)
- GSAP ScrollTrigger: use "once: true" for entrance animations 
  (don't replay on scroll up)
- No animation should run at less than 60fps — test in Antigravity's 
  built-in browser on a throttled 4x CPU before marking any 
  section complete
- Font loading: use font-display: swap
- Install and configure vite-plugin-compression for gzip output

════════════════════════════════════════════════════════════
SECTION 6 — REUSABLE COMPONENTS TO BUILD FIRST
════════════════════════════════════════════════════════════

Build these before any page section. They will be used throughout:

1. SectionHeader — takes `label` and `title` props
2. GlassCard — takes `accentColor`, `children`, `hoverGlow` props
3. SkillPill — takes `label`, `accentColor` props
4. ProjectCard — as specified in 4.4
5. TypewriterText — takes `words[]` and `typingSpeed` props
6. ScrollReveal — wrapper component using GSAP ScrollTrigger, 
   takes `children`, `direction` ('up'|'left'|'right'), `delay` props
7. GlowButton — takes `variant` ('primary'|'secondary'), `href`, 
   `onClick`, `children` props
8. ToastNotification — success/error states

════════════════════════════════════════════════════════════
SECTION 7 — FILE STRUCTURE
════════════════════════════════════════════════════════════

src/
├── components/
│   ├── ui/           (reusable: GlassCard, GlowButton, SkillPill, 
│   │                  SectionHeader, TypewriterText, ScrollReveal, Toast)
│   ├── layout/       (Navbar, Footer)
│   └── three/        (JellyfishScene, ParticleBackground)
├── sections/         (Hero, About, Experience, Projects, Skills, 
│                      Achievements, Contact — one file each)
├── data/             (projects.ts, skills.ts, experience.ts, 
│                      achievements.ts — all content as typed constants)
├── hooks/            (useScrollProgress.ts, useReducedMotion.ts)
├── styles/           (globals.css — only fonts + CSS variables)
├── types/            (index.ts — all TypeScript interfaces)
└── utils/            (emailjs.ts, animations.ts — GSAP configs)

════════════════════════════════════════════════════════════
SECTION 8 — EXECUTION ORDER
════════════════════════════════════════════════════════════

Execute in this exact order. Open browser preview and verify 
each step before proceeding:

STEP 1: Scaffold Vite + React + TypeScript project
STEP 2: Install all dependencies (Section 1)
STEP 3: Configure ESLint, Prettier, Tailwind v4
STEP 4: Create globals.css with all CSS variables and font imports
STEP 5: Build all reusable components (Section 6) — DO NOT style 
        with placeholder/random colors, use only design system values
STEP 6: Build Navbar + Footer
STEP 7: Build ParticleBackground component — verify it renders 
        correctly in browser before proceeding
STEP 8: Build Hero section including Three.js JellyfishScene — 
        verify 60fps in browser
STEP 9: Build remaining sections in order: About → Experience → 
        Projects → Skills → Achievements → Contact
STEP 10: Add all scroll animations (GSAP ScrollTrigger pass)
STEP 11: Add page transitions and micro-interactions (Framer Motion pass)
STEP 12: Performance audit — lazy loading, compression, tab visibility
STEP 13: Mobile responsiveness pass — test all breakpoints
STEP 14: Final browser test — full scroll from top to bottom, 
         check all links, test contact form

After STEP 14, generate a completion Artifact listing:
- All sections built
- All links verified
- Performance metrics observed
- Any deviations from the spec (must be justified)