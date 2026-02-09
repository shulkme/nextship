/**
 * Environment variables validation and type-safe access
 * This file ensures all required environment variables are present and typed correctly
 */

function getEnvVar(key: string, defaultValue?: string): string {
  const value = process.env[key];
  if (value === undefined || value === '') {
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    throw new Error(`Environment variable ${key} is not defined`);
  }
  return value;
}

function getEnvVarOptional(key: string, defaultValue?: string): string {
  return process.env[key] || defaultValue || '';
}

function getEnvNumber(key: string, defaultValue?: number): number {
  const value = process.env[key];
  if (value === undefined || value === '') {
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    throw new Error(`Environment variable ${key} is not defined`);
  }
  const num = Number(value);
  if (isNaN(num)) {
    throw new Error(`Environment variable ${key} must be a number, got: ${value}`);
  }
  return num;
}

/**
 * Type-safe environment variables
 */
export const env = {
  // App Configuration
  app: {
    name: getEnvVar('NEXT_PUBLIC_APP_NAME', 'NextShip'),
    baseUrl: getEnvVarOptional('NEXT_PUBLIC_BASE_URL'),
    apiDocUrl: getEnvVarOptional('NEXT_PUBLIC_API_DOC_URL'),
  },

  // Legal
  legal: {
    copyright: getEnvVar('NEXT_PUBLIC_COPYRIGHT', 'NextShip Inc.'),
    privacyPolicy: getEnvVar('NEXT_PUBLIC_PRIVACY_POLICY', '/privacy-policy'),
    serviceAgreement: getEnvVar('NEXT_PUBLIC_SERVICE_AGREEMENT', '/service-agreement'),
  },

  // API Configuration
  api: {
    baseUrl: getEnvVar('NEXT_PUBLIC_API_BASE_URL', '/'),
    timeout: getEnvNumber('NEXT_PUBLIC_API_TIMEOUT', 30000),
  },

  // Auth
  auth: {
    tokenKey: getEnvVar('NEXT_PUBLIC_TOKEN_KEY', 'token'),
  },

  // Upload Configuration
  upload: {
    imageAccept: getEnvVar('NEXT_PUBLIC_UPLOAD_IMAGE_ACCEPT', '.png,.jpg,.jpeg'),
    fileAccept: getEnvVar('NEXT_PUBLIC_UPLOAD_FILE_ACCEPT', '.png,.jpg,.jpeg,.pdf'),
    videoAccept: getEnvVar('NEXT_PUBLIC_UPLOAD_VIDEO_ACCEPT', '.mp4'),
    maxFileSize: getEnvNumber('NEXT_PUBLIC_UPLOAD_MAX_FILE_SIZE', 10485760), // 10MB
  },

  // Analytics
  analytics: {
    gtmId: getEnvVarOptional('NEXT_PUBLIC_GTM_ID'),
    gaId: getEnvVarOptional('NEXT_PUBLIC_GA_ID'),
    clarityProjectId: getEnvVarOptional('NEXT_PUBLIC_CLARITY_PROJECT_ID'),
  },

  // Development
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test',
} as const;

/**
 * Validate all required environment variables at startup
 * Call this in your root layout or app entry point
 */
export function validateEnv() {
  try {
    // Access all properties to trigger validation
    env.app.name;
    env.api.baseUrl;
    env.api.timeout;
    env.auth.tokenKey;
    console.log('✓ Environment variables validated successfully');
  } catch (error) {
    console.error('✗ Environment validation failed:', error);
    if (process.env.NODE_ENV === 'production') {
      throw error;
    }
  }
}
