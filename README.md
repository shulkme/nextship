<div align="center">
<a href="https://github.com/shulkme/nextship">
    <picture>
      <img alt="NextShip logo" src="public/images/logo.png" height="256" style="height: 128px">
    </picture>
</a>
<h1>NextShip</h1>
<p>🚀 A production-ready Next.js starter template for building SaaS and global products</p>
<p>基于 Next.js 快速构建出海项目的生产级模版</p>

<a href="https://react.dev/"><img src="https://img.shields.io/badge/-React%2019-0f60f8?style=flat-square&logo=react&logoColor=white&labelColor=black" alt="React"/></a>
<a href="https://nextjs.org/"><img src="https://img.shields.io/badge/-Next.js%2016-0f60f8?style=flat-square&logo=nextdotjs&logoColor=white&labelColor=black" alt="Next.js"/></a>
<a href="https://ant.design/"><img src="https://img.shields.io/badge/-Ant%20Design%206-0f60f8?labelColor=black&logo=antdesign&logoColor=white&style=flat-square" alt="AntDesign"/></a>
<a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/-TypeScript-0f60f8?style=flat-square&logo=typescript&logoColor=white&labelColor=black" alt="Typescript"/></a>
<a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/-Tailwind%20CSS%204-0f60f8?style=flat-square&logo=tailwindcss&logoColor=white&labelColor=black" alt="Tailwindcss"/></a>
<img src="https://img.shields.io/badge/License-MIT-0f60f8?style=flat-square" alt="License"/>

<p>
  <a href="#features">Features</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#documentation">Documentation</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#contributing">Contributing</a>
</p>
</div>

---

## ✨ Features

### 🎨 Modern UI
- **Ant Design 6** - Professional component library with 50+ components
- **Tailwind CSS 4** - Utility-first CSS framework
- **Dark Mode** - System/light/dark theme support with smooth transitions
- **Responsive** - Mobile-first design, works on all devices

### 🌍 Internationalization
- **next-intl** - Type-safe internationalization
- **Multiple Languages** - Built-in support for English and Chinese
- **Easy to Extend** - Add new languages in minutes
- **Route-based** - Clean URLs like `/en/dashboard`, `/zh/dashboard`

### 🔐 Authentication Ready
- **Token Management** - Secure token storage and handling
- **API Integration** - Pre-configured Axios with interceptors
- **Error Handling** - Comprehensive error boundaries and logging
- **SSR Compatible** - Works seamlessly with server-side rendering

### 🏗️ Best Practices
- **TypeScript First** - 100% TypeScript with strict mode
- **Type-Safe Env** - Validated environment variables
- **Modular API Layer** - Organized API calls by domain
- **Error Tracking Ready** - Built-in logger with Sentry support
- **Code Quality** - ESLint, Prettier, and Git hooks configured

### ⚡ Developer Experience
- **Fast Refresh** - Instant feedback during development
- **pnpm** - Fast, disk space efficient package manager
- **Organized Structure** - Clear separation of concerns
- **Helpful Scripts** - Lint, format, type-check, and more
- **AI-Friendly** - Includes `CLAUDE.md` for AI assistants

### 📦 Production Ready
- **Optimized Build** - Automatic code splitting and optimization
- **Error Boundaries** - Graceful error handling at all levels
- **Logging System** - Centralized logging for debugging
- **Environment Config** - Easy configuration for different environments

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or 20+
- pnpm 8+ (recommended) or npm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/shulkme/nextship.git
cd nextship

# Copy environment variables
cp .env.example .env

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

### First Steps

1. **Configure Environment**: Edit `.env` file with your settings
2. **Explore the Code**: Check out the [project structure](#project-structure)
3. **Read the Docs**: See [Documentation](#documentation) section
4. **Build Something**: Start by editing `app/[locale]/(web)/page.tsx`

---

## 📖 Documentation

- **[CLAUDE.md](./CLAUDE.md)** - For AI assistants (Claude Code, Cursor, etc.)
- **[Quick Start Guide](./docs/QUICK_START.md)** - Common usage examples
- **[Optimization Summary](./OPTIMIZATION_SUMMARY.md)** - Recent improvements and migration guide
- **[Environment Variables](./.env.example)** - Complete environment configuration guide

---

## 🛠️ Available Scripts

```bash
# Development
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm start            # Start production server

# Code Quality
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix linting issues
pnpm type-check       # TypeScript type checking
pnpm format           # Format code with Prettier
pnpm format:check     # Check code formatting

# Maintenance
pnpm clean            # Clean build artifacts
```

---

## 📂 Tech Stack

### Core
- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety

### UI & Styling
- **[Ant Design 6](https://ant.design/)** - Component library
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management

### State & Data
- **[Axios](https://axios-http.com/)** - HTTP client
- **[ahooks](https://ahooks.js.org/)** - React hooks library
- **[dayjs](https://day.js.org/)** - Date manipulation

### Internationalization
- **[next-intl](https://next-intl-docs.vercel.app/)** - Type-safe i18n

### Developer Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[pnpm](https://pnpm.io/)** - Package manager

---

## 📁 Project Structure

```
nextship/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Internationalized routes
│   │   ├── (app)/         # Protected admin/dashboard routes
│   │   └── (web)/         # Public marketing routes
│   ├── actions/           # Server actions
│   └── error.tsx          # Error handling pages
│
├── apis/                  # API layer (modular)
│   ├── auth/             # Authentication APIs
│   ├── user/             # User management APIs
│   ├── request.ts        # Axios instance
│   └── types.ts          # Common types
│
├── components/           # Reusable components
│   ├── error-boundary.tsx
│   ├── nprogress-bar/
│   └── pager/
│
├── config/              # Configuration
│   └── theme.ts         # Ant Design theme
│
├── constants/           # App constants
├── hooks/               # Custom React hooks
├── i18n/                # Internationalization setup
├── icons/               # Custom icons
├── lib/                 # Utilities & wrappers
│   ├── env.ts          # Type-safe environment variables
│   └── logger.ts       # Centralized logging
│
├── locales/            # Translation files
│   ├── en.json
│   └── zh.json
│
├── providers/          # React Context providers
│   ├── theme.tsx
│   └── language.tsx
│
├── services/           # Business logic
├── types/              # Global TypeScript types
├── utils/              # Utility functions
└── public/             # Static assets
```

For detailed structure explanation, see [CLAUDE.md](./CLAUDE.md).

---

## 🎯 Key Features Explained

### Type-Safe Environment Variables

```typescript
import { env } from '@/lib/env';

// ✅ Type-safe and validated
const apiUrl = env.api.baseUrl;
const timeout = env.api.timeout; // number type
```

### Modular API Layer

```typescript
import { authApi, userApi } from '@/apis';

// Clean, organized API calls
const response = await authApi.login({ email, password });
const users = await userApi.getUserList({ page: 1, size: 10 });
```

### Theme Management

```typescript
import { useTheme } from '@/providers/theme';

const { mode, setMode, toggleMode } = useTheme();
// Supports: 'light' | 'dark' | 'system'
```

### Internationalization

```typescript
import { useTranslations } from 'next-intl';

const t = useTranslations();
const title = t('app.page.dashboard.title');
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style and conventions
- Run `pnpm lint:fix` and `pnpm format` before committing
- Ensure `pnpm type-check` passes
- Add documentation for new features
- For AI assistants: Read [CLAUDE.md](./CLAUDE.md) first

---

## 🐛 Bug Reports

Found a bug? Please [open an issue](https://github.com/shulkme/nextship/issues) with:
- Clear title and description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Your environment (OS, Node version, etc.)

---

## 💡 Feature Requests

Have an idea? We'd love to hear it! [Open an issue](https://github.com/shulkme/nextship/issues) with:
- Clear description of the feature
- Use cases and benefits
- Any implementation ideas

---

## 🙏 Acknowledgments

This project is built with amazing open-source technologies:
- [Next.js](https://nextjs.org/) - The React Framework
- [Ant Design](https://ant.design/) - Enterprise UI Design Language
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS Framework
- [next-intl](https://next-intl-docs.vercel.app/) - Internationalization
- And many more... see [package.json](./package.json)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

## 🌟 Star History

If you find this project useful, please consider giving it a star ⭐️

---

## 📮 Contact

- **GitHub**: [@shulkme](https://github.com/shulkme)
- **Issues**: [GitHub Issues](https://github.com/shulkme/nextship/issues)

---

<div align="center">
  <p>Made with ❤️ by the NextShip Team</p>
  <p>
    <a href="https://github.com/shulkme/nextship">GitHub</a> •
    <a href="https://github.com/shulkme/nextship/issues">Issues</a> •
    <a href="./CLAUDE.md">AI Guide</a>
  </p>
</div>

---

## 🌐 Browser Support

| [![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png)](http://godban.github.io/browsers-support-badges/) | [![Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png)](http://godban.github.io/browsers-support-badges/) |
| --- | --- | --- | --- |
| Latest 2 versions | Latest 2 versions | Latest 2 versions | Latest 2 versions |


