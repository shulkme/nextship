/**
 * User API Types
 */

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: string;
  status: 'active' | 'inactive' | 'banned';
  createdAt: string;
  updatedAt: string;
}

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
