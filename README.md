# AgentX - Enterprise Agentic AI Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-purple)](https://vitejs.dev/)

> Privacy-first, globally compliant enterprise AI platform. Deploy intelligent AI agents for workflow automation, customer service, and business operations.

## 🌟 Features

- **AI Voice Agents** - Intelligent voice calling agents for customer service
- **AI Chat Agents** - Conversational AI for instant customer support
- **AI Avatars** - Visual AI representatives for enhanced engagement
- **RAG Data Retrieval** - Advanced retrieval-augmented generation
- **Workflow Automation** - End-to-end process automation
- **HIPAA & GDPR Compliant** - Enterprise-grade security and compliance
- **24/7 Availability** - Always-on intelligent automation
- **10x Efficiency** - Dramatically improved productivity
- **70% Cost Reduction** - Significant operational savings

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- (Optional) Supabase account for database features

### Installation

```bash
# Clone the repository
git clone https://github.com/asifshah14/dash.git
cd dash

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Configure your environment variables in .env
# SUPABASE_URL=your_supabase_url
# SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Development

```bash
# Start development server
npm run dev

# The app will be available at http://localhost:5000
```

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📦 Tech Stack

### Frontend
- **React 18.3** - Modern UI library
- **TypeScript 5.5** - Type-safe development
- **Vite 5.4** - Lightning-fast build tool
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

### Backend
- **Express 4.21** - Web application framework
- **Drizzle ORM** - Type-safe database ORM
- **Supabase** - Backend-as-a-Service
- **Zod** - Schema validation

### DevOps & Tooling
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **TypeScript ESLint** - TypeScript linting
- **tsx** - TypeScript execution

## 📁 Project Structure

```
dash/
├── client/                 # Frontend React application
│   ├── public/            # Static assets
│   │   ├── robots.txt     # SEO crawler instructions
│   │   ├── sitemap.xml    # Site structure for search engines
│   │   ├── manifest.json  # PWA manifest
│   │   └── security.txt   # Security policy
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── contexts/      # React contexts (Theme, etc.)
│   │   ├── hooks/         # Custom React hooks
│   │   ├── utils/         # Utility functions
│   │   ├── App.tsx        # Main app component
│   │   ├── main.tsx       # App entry point
│   │   └── index.css      # Global styles
│   └── index.html         # HTML template
├── server/                # Backend Express application
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Database operations
│   └── vite.ts           # Vite integration
├── shared/               # Shared types and schemas
│   └── schema.ts         # Database schemas
├── .env.example          # Environment variables template
├── netlify.toml          # Netlify deployment config
├── vercel.json           # Vercel deployment config
├── vite.config.ts        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎨 Key Components

### ErrorBoundary
Catches and handles React errors gracefully with user-friendly error messages.

### LoadingSpinner
Provides loading states with multiple size options and full-screen mode.

### ThemeContext
Manages light/dark theme with system preference detection and localStorage persistence.

### SEO Components
- Structured data for search engines
- Open Graph and Twitter Card meta tags
- Comprehensive FAQ schema

## 🔒 Security

We take security seriously. If you discover a security vulnerability, please send an email to security@agentx.ai. See [security.txt](client/public/security.txt) for more details.

## 🌐 Deployment

### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

The `vercel.json` configuration is already set up.

### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

The `netlify.toml` configuration includes:
- Build settings
- Security headers
- Cache control
- Redirects for SPA routing

### Manual Deployment

```bash
# Build the project
npm run build

# The build output will be in:
# - dist/public (frontend)
# - dist/server (backend)
```

## 🧪 Testing

```bash
# Type checking
npm run typecheck

# Linting
npm run lint
```

## 📊 Performance Optimizations

- **Code Splitting** - Automatic route-based code splitting
- **Font Optimization** - Preloaded web fonts with fallback
- **Image Optimization** - Lazy loading and responsive images
- **CSS Optimization** - Purged unused Tailwind classes
- **Caching Strategy** - Aggressive caching for static assets
- **Resource Hints** - DNS prefetch and preconnect
- **PWA Support** - Offline capability with service workers

## 🎯 SEO Features

- ✅ Semantic HTML5 structure
- ✅ Meta tags (Open Graph, Twitter Cards)
- ✅ Structured data (JSON-LD)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Mobile-responsive design
- ✅ Fast load times
- ✅ Accessibility (ARIA labels, skip links)

## 🔧 Environment Variables

Create a `.env` file based on `.env.example`:

```env
# Supabase Configuration
SUPABASE_URL=your_supabase_url_here
SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Alternative variable names (for compatibility)
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Server Configuration
PORT=5000
NODE_ENV=production
```

## 📱 Mobile Responsiveness

- Touch-friendly UI (44px minimum touch targets)
- Responsive breakpoints: 640px, 768px, 1024px, 1280px
- Mobile-optimized animations
- Viewport meta tag optimization
- Prevention of text size adjustment on orientation change
- Hardware-accelerated transitions

## 🎨 Design System

### Colors
- **Primary Blue**: #0F62FE
- **Teal**: #06B6D4
- **Emerald**: #10B981
- **Coral**: #F97316
- **Dark Background**: #0A0E1A
- **Light Background**: #FFFFFF

### Typography
- **Sans Serif**: Inter (300, 400, 500, 600, 700, 800)
- **Display**: Playfair Display (600, 700, 800)

### Animations
- Smooth scroll behavior
- Scroll-reveal effects
- Hover transitions
- Loading states
- Glassmorphism effects

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)
- Powered by [Vite](https://vitejs.dev/)

## 📞 Support

For support, email support@agentx.ai or visit our [website](https://agentx.ai).

## 🔗 Links

- **Website**: https://agentx.ai
- **LinkedIn**: https://www.linkedin.com/company/agentx
- **Instagram**: https://www.instagram.com/agentx

---

Made with ❤️ by the AgentX Team
