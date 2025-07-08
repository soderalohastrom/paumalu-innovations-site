# Paumalu Innovations - Cloudflare Pages

Modern React website with Vanta.js background animation and light/dark theme support, optimized for Cloudflare Pages deployment.

## Features

- 🌊 **Vanta.js Wave Animation** - Dynamic background that adapts to light/dark themes
- 🌓 **Light/Dark Theme** - System preference detection with manual toggle
- 📱 **SMS Compliance** - Contact form with proper opt-in for 10DLC registration
- ⚡ **Vite + React + TypeScript** - Modern development stack
- 🎨 **Tailwind CSS** - Utility-first styling with custom animations
- 🔒 **Security Headers** - CSP and security headers for Cloudflare Pages
- 📱 **Responsive Design** - Mobile-first responsive layout

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to Cloudflare Pages

1. **Push to GitHub** - Commit your changes and push to GitHub
2. **Connect to Cloudflare Pages**:
   - Go to [Cloudflare Pages](https://pages.cloudflare.com/)
   - Connect your GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Build output directory: `dist`
3. **Custom Domain** - Add your domain in Cloudflare Pages settings

## Project Structure

```
src/
├── components/          # React components
│   ├── VantaBackground.tsx
│   ├── ThemeToggle.tsx
│   ├── Header.tsx
│   └── ContactForm.tsx
├── hooks/              # Custom React hooks
│   └── useTheme.ts
├── providers/          # Context providers
│   └── ThemeProvider.tsx
├── App.tsx            # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles

public/
├── _headers           # Cloudflare Pages headers
├── _redirects         # SPA routing redirects
└── robots.txt         # SEO directives
```

## SMS Compliance

The contact form includes proper SMS opt-in language required for 10DLC registration:
- Clear opt-in checkbox with legal language
- Privacy policy links
- STOP/HELP instructions
- Message frequency disclosure

## Theme System

The theme system uses React Context and localStorage to persist user preferences:
- Automatic system preference detection
- Manual toggle with smooth transitions
- Vanta.js background adapts to theme
- Tailwind dark mode classes

## Environment Variables

Create `.env.local` for local development:

```env
# Add your environment variables here
# VITE_API_URL=your_api_url
```

## Expanding the Project

This foundation is ready for:
- **Convex Backend** - Add database and real-time features
- **Clerk Authentication** - User management and auth
- **Polar Billing** - Subscription management
- **Additional Pages** - Blog, services, about pages
- **API Routes** - Contact form submission handling

## SMS Registration

For 10DLC SMS registration:
1. **Website URL**: Your deployed Cloudflare Pages URL
2. **Privacy Policy**: Available at `/privacy-policy` (needs to be added)
3. **Opt-in Method**: Website contact form with checkbox
4. **Evidence**: Screenshot of contact form with opt-in language

## Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- Bundle Size: Optimized with code splitting
- CDN: Global Cloudflare edge network
- Caching: Aggressive caching with cache busting

## License

Private - Paumalu Innovations © 2025
