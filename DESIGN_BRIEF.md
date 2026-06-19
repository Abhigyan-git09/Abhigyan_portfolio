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
