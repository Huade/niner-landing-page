# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Niner Research landing page built with React, TypeScript, Vite, and Tailwind CSS v4. A modern, responsive marketing site with GSAP animations.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production (TypeScript check + Vite build)
npm run build

# Preview production build
npm run preview
```

## Architecture

### Tech Stack
- **React 18** with TypeScript for type safety
- **Vite** as build tool with fast HMR
- **Tailwind CSS v4** (alpha) configured via @tailwindcss/vite plugin
- **GSAP** for animations and scroll-triggered effects

### Component Structure
The app follows a single-page layout with section components:
- `Navigation.tsx` - Fixed navigation with mobile menu support
- `Hero.tsx` - Landing section with rotating badge animations
- `Problem.tsx` - Card-based layout with GSAP ScrollTrigger animations
- `Solution.tsx` - Solution presentation
- `Results.tsx` - Case studies and outcomes
- `Industries.tsx` - Industry coverage with icons
- `FAQ.tsx` - Expandable FAQ items
- `Footer.tsx` - Footer with links and social media

### Key Patterns
1. **Animation Strategy**: GSAP animations initialized in useEffect hooks with proper cleanup
2. **Path Aliasing**: `@/` maps to `src/` directory
3. **TypeScript Config**: Strict mode enabled with unused variable checking
4. **CSS Architecture**: Tailwind utilities imported in app.css, no component-specific CSS files

### Important Notes
- No linting or testing setup currently exists
- TypeScript compilation happens during build via `tsc`
- All animations use GSAP refs and timelines for performance
- Mobile-first responsive design throughout