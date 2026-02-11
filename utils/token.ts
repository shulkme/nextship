/**
 * Token key for storage
 */
const TOKEN_KEY = process.env.NEXT_PUBLIC_TOKEN_KEY || 'token';

/**
 * Check if code is running on client side
 */
const isClient = typeof window !== 'undefined';

/**
 * Get token from storage
 * Returns null on server side or if token doesn't exist
 */
export const getToken = (): string | null => {
  if (!isClient) {
    return null;
  }
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch (error) {
    console.error('Failed to get token:', error);
    return null;
  }
};

/**
 * Save token to storage
 * Automatically adds Bearer prefix if not present
 * @param token - JWT token string
 */
export const setToken = (token: string): void => {
  if (!isClient) {
    console.warn('Cannot set token on server side');
    return;
  }
  try {
    const bearerToken = token.startsWith('Bearer ') ? token : `Bearer ${token}`;
    localStorage.setItem(TOKEN_KEY, bearerToken);
  } catch (error) {
    console.error('Failed to set token:', error);
  }
};

/**
 * Delete token from storage
 */
export const delToken = (): void => {
  if (!isClient) {
    console.warn('Cannot delete token on server side');
    return;
  }
  try {
    localStorage.removeItem(TOKEN_KEY);
  } catch (error) {
    console.error('Failed to delete token:', error);
  }
};

/**
 * Check if token exists
 */
export const hasToken = (): boolean => {
  if (!isClient) {
    return false;
  }
  try {
    return !!localStorage.getItem(TOKEN_KEY);
  } catch (error) {
    console.error('Failed to check token:', error);
    return false;
  }
};

/**
 * Get token without Bearer prefix
 */
export const getRawToken = (): string | null => {
  const token = getToken();
  if (!token) {
    return null;
  }
  return token.replace('Bearer ', '');
};
