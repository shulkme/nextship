import { useMemo } from 'react';

export type Platform = 'mac' | 'windows' | 'linux' | 'other';

/**
 * Detect user's operating system platform (pure function)
 */
function detectPlatform(): Platform {
  if (typeof window === 'undefined') return 'other';

  const userAgent = window.navigator.userAgent.toLowerCase();

  if (userAgent.includes('mac')) {
    return 'mac';
  }
  if (userAgent.includes('win')) {
    return 'windows';
  }
  if (userAgent.includes('linux')) {
    return 'linux';
  }

  return 'other';
}

/**
 * Detect user's operating system platform
 * @returns Platform type
 */
export function usePlatform(): Platform {
  // Use useMemo to compute platform once and cache it
  return useMemo(() => detectPlatform(), []);
}

/**
 * Check if current platform is Mac
 */
export function useIsMac(): boolean {
  return usePlatform() === 'mac';
}
