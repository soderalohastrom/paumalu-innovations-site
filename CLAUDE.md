# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- **Start dev server**: `npm run dev` (runs on port 3000, auto-opens browser)
- **Build for production**: `npm run build` (TypeScript compile + Vite build)
- **Preview production build**: `npm run preview`
- **Lint code**: `npm run lint` (ESLint with TypeScript rules, zero warnings policy)

### Build Process
The build process uses Vite with code splitting:
- Vendor chunk: React and React-DOM
- Three chunk: Three.js and Vanta.js libraries
- Output directory: `dist/`

## Architecture Overview

This is a React + TypeScript single-page application optimized for Cloudflare Pages deployment with the following key architectural decisions:

### Tech Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite (with esbuild minification)
- **Routing**: React Router v7 for client-side navigation
- **Styling**: Tailwind CSS with custom animations
- **3D Background**: Vanta.js (Wave effect) with Three.js
- **Theme System**: React Context with localStorage persistence

### Key Components Architecture

#### Routing System (`src/App.tsx`)
- Uses React Router v7 for client-side routing
- Routes: `/` (home) and `/privacy-policy` (SMS compliance)
- SPA routing with fallback configured in `public/_redirects`
- Privacy policy accessible at `https://paumalu-innovations.com/privacy-policy`

#### Theme System (`src/providers/ThemeProvider.tsx`)
- Uses React Context for global theme state
- Stores preference in localStorage as `paumalu-theme`
- Detects system preference on first visit
- Applies theme via CSS classes on document root

#### Vanta Background (`src/components/VantaBackground.tsx`)
- Dynamically loads Three.js and Vanta.js scripts
- Uses MutationObserver to detect theme changes
- Adapts wave colors and properties based on light/dark theme
- Handles script loading states and error recovery

#### Contact Form (`src/components/ContactForm.tsx`)
- Includes SMS compliance opt-in language for 10DLC registration
- Form validation and accessibility features built-in

### File Structure Patterns
- `/src/components/` - React components
- `/src/hooks/` - Custom React hooks
- `/src/providers/` - Context providers
- `/public/` - Static assets and Cloudflare Pages configuration

## Cloudflare Pages Configuration

### Required Files
- `public/_headers` - Security headers and CSP configuration
- `public/_redirects` - SPA routing fallback to index.html
- `public/robots.txt` - SEO directives

### Deployment Settings
- Build command: `npm run build`
- Build output directory: `dist`
- Environment variables: Prefix with `VITE_` for client-side access

## SMS Compliance & 10DLC

### Contact Form Compliance
The contact form includes proper SMS opt-in language required for 10DLC registration:
- Clear opt-in checkbox with legal disclosure
- Links to privacy policy at `/privacy-policy`
- STOP/HELP instructions
- Message frequency disclosure

### Privacy Policy (`src/components/PrivacyPolicy.tsx`)
Complete SMS 10DLC compliant privacy policy including:
- No marketing sharing statements
- Mobile opt-in protection clauses
- Clear STOP/UNSUBSCRIBE/QUIT instructions
- Data collection and usage transparency
- Contact information for privacy questions
- Professional appearance for carrier approval

## Theme System Technical Details

### Implementation
- Theme detection via `window.matchMedia('(prefers-color-scheme: dark)')`
- Theme persistence in localStorage
- CSS class manipulation on `document.documentElement`
- Vanta.js background adapts colors and properties based on theme

### Custom CSS Variables
The theme system uses Tailwind's dark mode classes with custom color palette:
- Primary colors: Blue gradient scale
- Secondary colors: Teal gradient scale
- Glassmorphism effects with backdrop-blur

## Performance Optimizations

### Code Splitting
- Vendor chunk separation for React libraries
- Three.js/Vanta.js isolated in separate chunk
- Lazy loading of 3D effects

### Build Configuration
- ESBuild minification for faster builds
- Source maps disabled in production
- Manual chunk splitting for optimal caching

## Development Notes

### Vanta.js Integration
- Scripts are loaded dynamically via CDN
- Global window objects: `window.VANTA` and `window.THREE`
- Effect initialization is deferred until scripts load
- Proper cleanup on component unmount

### TypeScript Configuration
- Strict mode enabled with unused variable detection
- Modern ES2020 target with DOM types
- Bundler module resolution for Vite compatibility

### Known Issues
- Vanta.js requires global window objects (not ES modules)
- Three.js version must be compatible with Vanta.js
- Theme switching may cause brief flicker during Vanta color transitions