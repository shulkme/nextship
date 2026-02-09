# Quick Start Guide - After Optimizations

## 🚀 Getting Started

### 1. Environment Setup
```bash
# Copy environment template
cp .env.example .env

# Edit .env and fill in your values
nano .env
```

### 2. Install Dependencies
```bash
pnpm install
```

### 3. Run Type Check
```bash
pnpm type-check
```

### 4. Start Development
```bash
pnpm dev
```

---

## 📝 Common Usage Examples

### Using Environment Variables
```typescript
import { env } from '@/lib/env';

// Access typed environment variables
console.log(env.app.name);           // Type-safe
console.log(env.api.baseUrl);        // No more undefined!
console.log(env.api.timeout);        // Number type
```

### Making API Calls
```typescript
import { authApi, userApi } from '@/apis';

// Login
const login = async (email: string, password: string) => {
  try {
    const response = await authApi.login({ email, password });
    console.log('User:', response.user);
    console.log('Token:', response.token);
  } catch (error) {
    logger.error('Login failed', error);
  }
};

// Get user list
const getUsers = async () => {
  try {
    const response = await userApi.getUserList({
      page: 1,
      size: 10,
      keyword: 'test'
    });
    console.log('Users:', response.items);
  } catch (error) {
    logger.apiError('/users', 0, 'Failed to fetch users');
  }
};
```

### Using Logger
```typescript
import { logger } from '@/lib/logger';

// Different log levels
logger.debug('Debug message', { data: 'some data' });
logger.info('Info message');
logger.warn('Warning message');
logger.error('Error occurred', error);

// Specific loggers
logger.apiError('/api/users', 404, 'User not found');
logger.userAction('button_click', { button: 'submit' });
```

### Using Theme
```typescript
'use client';
import { useTheme } from '@/providers/theme';

function ThemeToggle() {
  const { mode, setMode, toggleMode, resolvedTheme } = useTheme();

  return (
    <div>
      <p>Current mode: {mode}</p>
      <p>Resolved theme: {resolvedTheme}</p>

      {/* Toggle between light/dark */}
      <button onClick={toggleMode}>Toggle Theme</button>

      {/* Set specific theme */}
      <button onClick={() => setMode('light')}>Light</button>
      <button onClick={() => setMode('dark')}>Dark</button>
      <button onClick={() => setMode('system')}>System</button>
    </div>
  );
}
```

### Error Boundary Usage
```typescript
import { ErrorBoundary } from '@/components';

function MyComponent() {
  return (
    <ErrorBoundary
      fallback={<div>Custom error UI</div>}
      onError={(error, errorInfo) => {
        logger.error('Component error', error, errorInfo);
      }}
    >
      <YourComponent />
    </ErrorBoundary>
  );
}
```

### Token Management
```typescript
import { getToken, setToken, delToken, hasToken } from '@/utils/token';

// Check if token exists
if (hasToken()) {
  console.log('User is authenticated');
}

// Get token
const token = getToken(); // Returns "Bearer xxx" or null

// Set token (Bearer prefix added automatically)
setToken('your-jwt-token');

// Delete token
delToken();
```

---

## 🛠️ Available Scripts

```bash
# Development
pnpm dev              # Start development server

# Building
pnpm build            # Build for production
pnpm start            # Start production server

# Code Quality
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix linting issues automatically
pnpm type-check       # Run TypeScript type checking
pnpm format           # Format code with Prettier
pnpm format:check     # Check code formatting

# Maintenance
pnpm clean            # Clean build artifacts
```

---

## 📁 Project Structure

```
nextship/
├── app/                    # Next.js app directory
│   ├── [locale]/          # Internationalized routes
│   ├── error.tsx          # Error handling
│   ├── global-error.tsx   # Global error handling
│   └── not-found.tsx      # 404 page
├── apis/                   # API layer
│   ├── auth/              # Auth APIs
│   ├── user/              # User APIs
│   ├── request.ts         # Axios instance
│   └── types.ts           # Common types
├── components/            # Reusable components
│   ├── error-boundary.tsx # Error boundary
│   ├── nprogress-bar/     # Progress bar
│   └── pager/             # Page wrapper
├── config/                # Configuration files
├── constants/             # App constants
├── hooks/                 # Custom React hooks
├── i18n/                  # Internationalization
├── icons/                 # Custom icons
├── lib/                   # Library wrappers
│   ├── env.ts             # Environment variables
│   └── logger.ts          # Logging utility
├── locales/               # Language files
├── providers/             # React context providers
│   ├── theme.tsx          # Theme provider
│   └── language.tsx       # Language provider
├── public/                # Static files
├── services/              # Business logic
├── types/                 # Global TypeScript types
├── utils/                 # Utility functions
└── .env.example           # Environment template
```

---

## 🎯 Best Practices

### 1. Always Use Type-Safe Environment Variables
```typescript
// ❌ Bad
const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL!;

// ✅ Good
import { env } from '@/lib/env';
const apiUrl = env.api.baseUrl;
```

### 2. Use Centralized API Modules
```typescript
// ❌ Bad
import request from '@/apis/request';
const response = await request.post('/auth/login', data);

// ✅ Good
import { authApi } from '@/apis';
const response = await authApi.login(data);
```

### 3. Use Logger Instead of Console
```typescript
// ❌ Bad
console.log('Error:', error);

// ✅ Good
import { logger } from '@/lib/logger';
logger.error('Operation failed', error);
```

### 4. Wrap Risky Components with Error Boundary
```typescript
// ✅ Good
<ErrorBoundary>
  <ComplexComponent />
</ErrorBoundary>
```

### 5. Check Environment Before Client-Only Code
```typescript
// ✅ Good
if (typeof window !== 'undefined') {
  localStorage.setItem('key', 'value');
}
```

---

## 🐛 Troubleshooting

### Type Errors
```bash
# Clear cache and rebuild
pnpm clean
rm -rf node_modules
pnpm install
pnpm type-check
```

### Theme Not Working
```bash
# Clear browser storage
# Go to DevTools > Application > Storage > Clear site data
```

### API Errors
```typescript
// Check if you're using the new API structure
import { authApi } from '@/apis'; // ✅ Correct
```

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Ant Design](https://ant.design/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

---

Happy coding! 🎉
