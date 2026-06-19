# Abhigyan Sinha - Professional Portfolio

## Overview
A high-performance, single-page application built to showcase software engineering projects, technical experience, and core competencies. The application serves as an interactive resume and direct contact portal.

## Design and Theme
The portfolio utilizes a highly customized "Bioluminescent Deep Ocean" design system. The user interface is anchored by deep, dark backgrounds representing the oceanic void, sharply contrasted with vibrant, glowing neon accents in teal, gold, violet, and pink. The visual architecture relies heavily on glassmorphism panels, layered depth gradients, and smooth, staggered entrance animations that trigger dynamically as the user scrolls.

## Core Features
- **Responsive Navigation**: A sticky, blur-backed navigation bar with smooth scrolling logic and an active section spy mechanism.
- **Interactive Environment**: A custom Three.js scene rendering an interactive jellyfish model in the hero section, accompanied by dynamic particle overlays configured via tsParticles.
- **Performance Optimized**: Critical above-the-fold content loads instantly. All below-the-fold components utilize React.lazy and Suspense for efficient code splitting. The production build is additionally compressed via gzip.
- **Secure Contact Integration**: A fully functional contact form utilizing EmailJS, secured by environment variables, to deliver user inquiries directly to a private inbox without exposing API credentials.
- **Fluid Animations**: Complex timeline sequencing, entrance delays, and physics-based reveals orchestrated through Framer Motion and GSAP.

## Technical Stack
- **Frontend Framework**: React 19, Vite, TypeScript
- **Styling**: Tailwind CSS v4, Vanilla CSS
- **Animation & 3D**: Framer Motion, GSAP, Three.js, React Three Fiber, tsParticles
- **Form Management & Integration**: React Hook Form, EmailJS
- **Iconography**: Lucide React

## Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abhigyan-git09/Abhigyan_portfolio.git
   cd Abhigyan_portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env.local` file in the root directory and provide your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

## Build for Production
To generate an optimized, gzipped production build, run:
```bash
npm run build
```
The output will be available in the `dist` directory.
