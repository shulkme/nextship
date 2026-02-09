# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned
- Test framework setup (Jest + React Testing Library)
- CI/CD pipeline (GitHub Actions)
- Pre-commit hooks (husky + lint-staged)
- Component library documentation (Storybook)
- E2E tests (Playwright)

---

## [0.1.0] - 2026-02-09

### Added

#### Core Features
- **Next.js 16** with App Router and React 19
- **TypeScript** strict mode configuration
- **Ant Design 6** component library integration
- **Tailwind CSS 4** utility-first styling
- **Internationalization** with next-intl (English and Chinese)
- **Dark Mode** with system/light/dark theme support
- **Responsive Design** mobile-first approach

#### Project Structure
- Organized directory structure (apis, components, config, etc.)
- Modular API layer (auth, user modules)
- Centralized providers (theme, language)
- Custom hooks directory
- Constants and types directories
- Services layer for business logic

#### Developer Experience
- **Type-safe environment variables** (`lib/env.ts`)
- **Centralized logging** system (`lib/logger.ts`)
- **Error boundaries** at multiple levels
- **Comprehensive error handling** (error.tsx, global-error.tsx, not-found.tsx)
- **ESLint configuration** with strict rules
- **Prettier** code formatting
- **npm scripts** for common tasks

#### Documentation
- Comprehensive README.md
- CLAUDE.md for AI assistants (Claude Code, Cursor, etc.)
- CONTRIBUTING.md with contribution guidelines
- Quick Start Guide (`docs/QUICK_START.md`)
- Optimization Summary document
- Environment variable template (`.env.example`)

#### Components
- NProgressBar - Page loading indicator
- Pager - Page layout wrapper
- ErrorBoundary - React error boundary
- Sidebar - Navigation sidebar with theme toggle

#### API Layer
- Axios instance with interceptors
- Request/response type definitions
- Auth API module (login, register, logout, etc.)
- User API module (CRUD operations)
- Centralized API exports

#### Utilities
- Token management (localStorage with SSR safety)
- Classname utility (clsx + tailwind-merge)
- Type-safe environment variables
- Centralized logger

#### Configuration
- Ant Design theme configuration (light/dark)
- Tailwind CSS configuration
- ESLint with TypeScript and React rules
- Prettier with import organization
- TypeScript strict configuration

### Changed
- **Theme System**: Simplified to use only next-themes (removed redundant state management)
- **Token Storage**: Added SSR compatibility and error handling
- **API Requests**: Fixed SSR compatibility issues with window usage
- **Error Handling**: Structured error types for better type safety

### Security
- Environment variable validation
- Token storage with client-side checks
- Type-safe API error handling
- Ready for httpOnly cookie migration

---

## Version History

### [0.1.0] - 2026-02-09
Initial release with core features and optimizations

---

## Migration Guides

### Migrating from Initial Setup

If you cloned the project before optimizations:

1. **Environment Variables**:
   ```bash
   cp .env.example .env
   ```
   Update imports from `process.env` to `env` from `@/lib/env`

2. **API Calls**:
   Update direct axios calls to use API modules:
   ```typescript
   // Old
   import request from '@/apis/request';

   // New
   import { authApi } from '@/apis';
   ```

3. **Theme**:
   No changes needed - API remains compatible

4. **Logging**:
   Replace console.log with logger:
   ```typescript
   // Old
   console.error('Error:', error);

   // New
   import { logger } from '@/lib/logger';
   logger.error('Error occurred', error);
   ```

---

## Links

- [Repository](https://github.com/shulkme/nextship)
- [Issues](https://github.com/shulkme/nextship/issues)
- [Pull Requests](https://github.com/shulkme/nextship/pulls)

---

## Contributors

Thanks to all contributors who helped make this project better!

- [@shulkme](https://github.com/shulkme) - Creator and maintainer

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
