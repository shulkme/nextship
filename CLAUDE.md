# NextShip - Claude Code Project Guide

> **For AI Assistants**: This file contains essential project context to help you understand and work with this codebase effectively.

## 🎯 Project Overview

**NextShip** is a production-ready Next.js starter template designed for rapid SaaS and overseas product development. It provides a complete foundation with authentication, internationalization, theming, and modern development tooling.

**Key Characteristics**:
- **Framework**: Next.js 16 with App Router (React 19)
- **Language**: TypeScript (strict mode)
- **UI Library**: Ant Design 6.x + Tailwind CSS 4.x
- **State Management**: React Context (no Redux)
- **API Layer**: Axios with centralized configuration
- **Styling**: Ant Design themes + Tailwind utilities
- **I18n**: next-intl with locale-based routing
- **Package Manager**: pnpm (required)

---

## 📁 Project Structure

```
nextship/
├── app/                      # Next.js App Router
│   ├── [locale]/            # Internationalized routes
│   │   ├── (app)/           # Admin/dashboard pages (needs auth)
│   │   └── (web)/           # Public marketing pages
│   ├── actions/             # Server actions
│   ├── error.tsx            # Error boundary page
│   └── not-found.tsx        # 404 page
│
├── apis/                    # API layer (client-side)
│   ├── auth/               # Auth API module
│   ├── user/               # User API module
│   ├── request.ts          # Axios instance with interceptors
│   └── types.ts            # Shared API types
│
├── components/             # Reusable React components (client-side)
│   ├── error-boundary.tsx  # React Error Boundary
│   ├── nprogress-bar/      # Page loading indicator
│   └── pager/              # Page layout wrapper
│
├── config/                 # Configuration files
│   └── theme.ts            # Ant Design theme config
│
├── constants/              # Application constants
├── hooks/                  # Custom React hooks
├── i18n/                   # Internationalization setup
│   ├── config.ts           # Supported locales
│   ├── routing.ts          # Next-intl routing config
│   └── request.ts          # Server-side i18n
│
├── icons/                  # Custom icon components
├── lib/                    # Library wrappers and utilities
│   ├── env.ts              # Type-safe environment variables
│   └── logger.ts           # Centralized logging
│
├── locales/                # Translation files
│   ├── en.json             # English translations
│   └── zh.json             # Chinese translations
│
├── providers/              # React Context providers
│   ├── theme.tsx           # Theme management (dark/light/system)
│   └── language.tsx        # Language management
│
├── services/               # Business logic layer
├── types/                  # Global TypeScript types
├── utils/                  # Utility functions
│   ├── classname.ts        # Tailwind class merger
│   └── token.ts            # Auth token management
│
└── public/                 # Static assets
    └── images/
```

---

## 🎨 Code Conventions

### Import Order
Imports are organized and auto-sorted by Prettier:
```typescript
// 1. React/Next.js core
import React from 'react';
import { useRouter } from 'next/navigation';

// 2. Third-party libraries
import { Button } from 'antd';
import dayjs from 'dayjs';

// 3. Internal modules (with @/ alias)
import { env } from '@/lib/env';
import { authApi } from '@/apis';
import { useTheme } from '@/providers/theme';
import type { User } from '@/apis/auth/types';
```

### File Naming
- **Components**: PascalCase for component files, kebab-case for folders
  - `Button.tsx`, `components/nprogress-bar/index.tsx`
- **Utilities**: camelCase - `token.ts`, `classname.ts`
- **Types**: camelCase - `types.ts`
- **Constants**: camelCase file, UPPER_CASE exports - `constants/routes.ts`

### Component Structure
```typescript
'use client'; // Only if client component

import type { FC, ReactNode } from 'react';

interface MyComponentProps {
  title: string;
  children?: ReactNode;
  onAction?: () => void;
}

/**
 * Component description
 * @param props - Component props
 */
const MyComponent: FC<MyComponentProps> = ({ title, children, onAction }) => {
  // Hooks first
  const [state, setState] = useState('');
  const { theme } = useTheme();

  // Event handlers
  const handleClick = () => {
    onAction?.();
  };

  // Render
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default MyComponent;
```

### TypeScript Guidelines
- **Use type imports**: `import type { User } from '@/types'`
- **No `any`**: Use `unknown` or proper types
- **No non-null assertions (`!`)**: Use proper checks or optional chaining
- **Interface over Type**: Prefer `interface` for object shapes
- **Strict mode**: All strict TypeScript options are enabled

---

## 🔧 Key Patterns

### 1. Environment Variables
**Always use the type-safe env helper:**
```typescript
// ❌ DON'T
const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL!;

// ✅ DO
import { env } from '@/lib/env';
const apiUrl = env.api.baseUrl;
```

### 2. API Calls
**Use centralized API modules:**
```typescript
// ❌ DON'T
import request from '@/apis/request';
const response = await request.post('/auth/login', data);

// ✅ DO
import { authApi } from '@/apis';
const response = await authApi.login(data);
```

**Error handling:**
```typescript
import { logger } from '@/lib/logger';
import type { ApiErrorResponse } from '@/apis/types';

try {
  const response = await authApi.login({ email, password });
  // Handle success
} catch (error) {
  const apiError = error as ApiErrorResponse;
  logger.error('Login failed', apiError);
  // Handle error
}
```

### 3. Theme Management
```typescript
'use client';
import { useTheme } from '@/providers/theme';

function MyComponent() {
  const { mode, setMode, toggleMode, resolvedTheme } = useTheme();

  // mode: 'light' | 'dark' | 'system'
  // resolvedTheme: actual theme ('light' or 'dark')

  return (
    <button onClick={toggleMode}>
      Current: {resolvedTheme}
    </button>
  );
}
```

### 4. Internationalization
```typescript
// Server component
import { getTranslations } from 'next-intl/server';

export default async function Page() {
  const t = await getTranslations();
  return <h1>{t('app.page.dashboard.title')}</h1>;
}

// Client component
'use client';
import { useTranslations } from 'next-intl';

export default function Component() {
  const t = useTranslations();
  return <h1>{t('app.page.dashboard.title')}</h1>;
}
```

### 5. Logging
```typescript
import { logger } from '@/lib/logger';

// Development only
logger.debug('Debug info', { userId: 123 });

// Always logged
logger.info('User logged in', { userId: 123 });
logger.warn('Rate limit approaching');
logger.error('Operation failed', error);

// Specialized
logger.apiError('/api/users', 404, 'Not found');
logger.userAction('button_click', { button: 'submit' });
```

### 6. Token Management
```typescript
import { getToken, setToken, delToken, hasToken } from '@/utils/token';

// Check authentication
if (hasToken()) {
  // User is authenticated
}

// Get token (includes "Bearer " prefix)
const token = getToken();

// Set token (Bearer prefix added automatically)
setToken('jwt-token-here');

// Clear token
delToken();
```

---

## 🚨 Critical Rules

### 1. Server vs Client Components
- **Default to Server Components** unless you need:
  - Browser APIs (localStorage, window)
  - Event handlers (onClick, onChange)
  - React hooks (useState, useEffect)
  - Context consumers (useTheme, useLanguage)
- **Mark client components** with `'use client'` directive at the top

### 2. SSR Compatibility
**Always check for browser environment when using browser APIs:**
```typescript
// ❌ DON'T
localStorage.setItem('key', 'value');
window.location.href = '/';

// ✅ DO
if (typeof window !== 'undefined') {
  localStorage.setItem('key', 'value');
  window.location.href = '/';
}
```

### 3. Route Groups
- `(app)/` - Protected routes (admin/dashboard)
- `(web)/` - Public routes (marketing pages)
- These parentheses don't appear in URLs

### 4. Styling Approach
- **Ant Design components**: Use built-in props and theme config
- **Layout/spacing**: Use Tailwind utility classes
- **Custom styles**: Use Tailwind or CSS modules, avoid inline styles
- **Theme tokens**: Defined in `config/theme.ts` and synced with Tailwind

### 5. Error Handling
- **Component errors**: Wrap with `<ErrorBoundary>`
- **Page errors**: Handled by `app/error.tsx`
- **API errors**: Use try-catch with logger
- **User-facing errors**: Use Ant Design `message` or `notification`

---

## 🔄 Common Tasks

### Add a New API Endpoint
1. Create types in `apis/[module]/types.ts`
2. Add function in `apis/[module]/index.ts`
3. Export from `apis/index.ts`

Example:
```typescript
// apis/user/types.ts
export interface CreateUserParams {
  name: string;
  email: string;
}

// apis/user/index.ts
export const createUser = (data: CreateUserParams) => {
  return request.post<HttpResponse<User>>('/users', data);
};
```

### Add a New Page
1. Create file in `app/[locale]/(app)/` or `app/[locale]/(web)/`
2. Add translations in `locales/en.json` and `locales/zh.json`
3. Add route constants in `constants/routes.ts` (if needed)

### Add a Translation Key
1. Add to `locales/en.json`
2. Add to `locales/zh.json` (same structure)
3. Use with `t('key.path')`

### Add Environment Variable
1. Add to `.env.example` with description
2. Add to `lib/env.ts` with type and validation
3. Use via `env.xxx.yyy`

---

## 🧪 Development Workflow

### Before Starting
```bash
# Check environment
pnpm type-check

# Check linting
pnpm lint

# Check formatting
pnpm format:check
```

### Making Changes
```bash
# Auto-fix issues
pnpm lint:fix
pnpm format

# Run development server
pnpm dev
```

### Before Committing
```bash
# Full check
pnpm type-check && pnpm lint && pnpm format:check

# Build test
pnpm build
```

---

## 📦 Dependencies

### Core
- `next` - Framework
- `react` / `react-dom` - UI library
- `typescript` - Type safety
- `antd` - Component library
- `tailwindcss` - Utility-first CSS
- `next-intl` - Internationalization
- `next-themes` - Theme management

### Utilities
- `axios` - HTTP client
- `ahooks` - React hooks library
- `dayjs` - Date manipulation
- `qs` - Query string parsing
- `clsx` / `tailwind-merge` - Class name utilities
- `radash` - Modern lodash alternative

### Icons
- `@remixicon/react` - Icon library

---

## ⚠️ Known Limitations

1. **No SSR for theme**: Theme initializes on client to avoid hydration mismatch
2. **Token in localStorage**: Consider httpOnly cookies for production
3. **No tests yet**: Testing setup is a TODO
4. **Mock API**: APIs in `apis/` are examples, replace with real endpoints

---

## 🔐 Security Considerations

1. **Tokens**: Stored in localStorage (client-side only). Consider migrating to httpOnly cookies.
2. **Environment Variables**: Client-side vars are public. Never put secrets in `NEXT_PUBLIC_*`.
3. **API CORS**: Configure properly in production.
4. **CSP**: Add Content Security Policy headers in production.

---

## 🎯 When Making Changes

### Adding Features
1. Check existing patterns in similar files
2. Follow the project structure
3. Add proper TypeScript types
4. Add error handling
5. Add logging where appropriate
6. Update translations if user-facing
7. Test in both light and dark themes
8. Test in both languages (en/zh)

### Modifying Existing Code
1. Preserve existing patterns unless improving them
2. Update related types if changing interfaces
3. Check for usages across the codebase
4. Don't remove error handling or logging
5. Maintain backward compatibility when possible

### Debugging Issues
1. Check browser console for errors
2. Check Next.js terminal output
3. Verify environment variables in `lib/env.ts`
4. Check API request/response in Network tab
5. Verify theme and language settings

---

## 📚 Helpful Resources

- **Next.js App Router**: https://nextjs.org/docs/app
- **Ant Design**: https://ant.design/components/overview/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **next-intl**: https://next-intl-docs.vercel.app/
- **TypeScript**: https://www.typescriptlang.org/docs/

---

## 🤝 For AI Assistants

### When Asked to Add Features
1. Always check existing similar implementations first
2. Follow established patterns strictly
3. Use the centralized utilities (env, logger, APIs)
4. Add proper TypeScript types
5. Consider SSR compatibility
6. Add error boundaries for risky components
7. Test suggestions mentally against the conventions above

### When Asked to Debug
1. Check if it's an SSR issue (server vs client)
2. Verify environment variables are properly set
3. Check theme compatibility (light/dark)
4. Verify internationalization works for both locales
5. Look for browser console errors first

### When Asked to Refactor
1. Preserve existing public APIs
2. Update all usages across the codebase
3. Maintain test compatibility (when tests exist)
4. Update related documentation
5. Keep the same code style and patterns

### Communication
- Be concise and direct
- Provide code examples using actual project patterns
- Reference specific files when explaining
- Mention potential gotchas or edge cases
- Suggest related improvements if obvious

---

**Last Updated**: 2026-02-09
**Version**: 0.1.0
**Maintainer**: NextShip Team

---

*This file is specifically designed for AI assistants like Claude Code. Keep it updated as the project evolves.*
