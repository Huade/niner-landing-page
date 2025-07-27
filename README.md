# Niner Research Landing Page

A modern, responsive landing page for Niner Research built with React, TypeScript, Vite, and Tailwind CSS v4.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **GSAP** - Animations

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at http://localhost:5173

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.tsx  # Navigation bar
│   ├── Hero.tsx       # Hero section with canvas animation
│   ├── Problem.tsx    # Problem statement section
│   ├── Solution.tsx   # Solution section
│   ├── Results.tsx    # Results/case studies
│   ├── Industries.tsx # Industries section
│   ├── FAQ.tsx        # FAQ section
│   └── Footer.tsx     # Footer
├── App.tsx            # Main app component
├── main.tsx          # Entry point
└── index.css         # Global styles and Tailwind imports
```

## Features

- Fully responsive design
- TypeScript for type safety
- Tailwind CSS v4 for styling
- GSAP animations
- Interactive canvas particles in hero section
- Smooth scroll navigation
- Mobile-friendly navigation menu