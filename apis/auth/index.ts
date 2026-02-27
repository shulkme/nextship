import type {
  HttpResponse,
  LoginParams,
  LoginResponse,
  RegisterParams,
  User,
} from '@/apis';
import request from '@/apis/request';

/**
 * Auth API Module
 */

/**
 * Login
 */
export const login = (data: LoginParams) => {
  return request.post<HttpResponse<LoginResponse>>('/auth/login', data);
};

/**
 * Register
 */
export const register = (data: RegisterParams) => {
  return request.post<HttpResponse<User>>('/auth/register', data);
};

/**
 * Logout
 */
export const logout = () => {
  return request.post<HttpResponse<null>>('/auth/logout');
};

/**
 * Get current user info
 */
export const getCurrentUser = () => {
  return request.get<HttpResponse<User>>('/auth/me');
};

/**
 * Refresh token
 */
export const refreshToken = (refreshToken: string) => {
  return request.post<HttpResponse<LoginResponse>>('/auth/refresh', {
    refreshToken,
  });
};

/**
 * Request password reset
 */
export const requestPasswordReset = (email: string) => {
  return request.post<HttpResponse<null>>('/auth/forgot-password', { email });
};

/**
 * Reset password
 */
export const resetPassword = (token: string, password: string) => {
  return request.post<HttpResponse<null>>('/auth/reset-password', {
    token,
    password,
  });
};
