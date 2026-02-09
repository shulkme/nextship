/**
 * Auth API Types
 */

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoginParams {
  email: string;
  password: string;
  remember?: boolean;
}

export interface RegisterParams {
  email: string;
  password: string;
  name: string;
}

export interface LoginResponse {
  user: User;
  token: string;
  refreshToken: string;
  expiresIn: number;
}
