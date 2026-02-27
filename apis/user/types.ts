/**
 * User API Types
 */

import type { User } from '@/apis/types';

export type { User };

export interface UserListParams {
  keyword?: string;
  role?: string;
  status?: 'active' | 'inactive' | 'banned';
}

export interface UpdateProfileParams {
  name?: string;
  avatar?: string;
  bio?: string;
}
