/**
 * Auth API Types
 */

import type { User } from '../types';

export type { User };

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
