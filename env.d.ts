/**
 * Environment Variables Type Definitions
 * This file provides IDE autocomplete and type checking for environment variables
 * Only includes variables that are actually defined in .env.example
 */

declare namespace NodeJS {
  interface ProcessEnv {
    // ============================================
    // Node.js Environment
    // ============================================
    readonly NODE_ENV: 'development' | 'production' | 'test';

    // ============================================
    // App Configuration
    // ============================================
    readonly NEXT_PUBLIC_APP_NAME?: string;
    readonly NEXT_PUBLIC_BASE_URL?: string;
    readonly NEXT_PUBLIC_API_DOC_URL?: string;

    // ============================================
    // Legal & Company Information
    // ============================================
    readonly NEXT_PUBLIC_COPYRIGHT?: string;
    readonly NEXT_PUBLIC_PRIVACY_POLICY?: string;
    readonly NEXT_PUBLIC_SERVICE_AGREEMENT?: string;
    readonly NEXT_PUBLIC_GITHUB_URL?: string;

    // ============================================
    // API Configuration
    // ============================================
    readonly NEXT_PUBLIC_API_BASE_URL?: string;
    readonly NEXT_PUBLIC_API_TIMEOUT?: string;

    // ============================================
    // Authentication
    // ============================================
    readonly NEXT_PUBLIC_TOKEN_KEY?: string;

    // ============================================
    // Internationalization (i18n)
    // ============================================
    readonly NEXT_PUBLIC_LOCALE_DEFAULT?: string;
    readonly NEXT_PUBLIC_LOCALE_COOKIE_KEY?: string;

    // ============================================
    // File Upload Configuration
    // ============================================
    readonly NEXT_PUBLIC_UPLOAD_IMAGE_ACCEPT?: string;
    readonly NEXT_PUBLIC_UPLOAD_FILE_ACCEPT?: string;
    readonly NEXT_PUBLIC_UPLOAD_VIDEO_ACCEPT?: string;
    readonly NEXT_PUBLIC_UPLOAD_MAX_FILE_SIZE?: string;

    // ============================================
    // Analytics & Tracking
    // ============================================
    readonly NEXT_PUBLIC_GTM_ID?: string;
    readonly NEXT_PUBLIC_GA_ID?: string;
    readonly NEXT_PUBLIC_CLARITY_PROJECT_ID?: string;
  }
}
