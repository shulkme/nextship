/**
 * Shared User interface
 */
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: string;
  status?: 'active' | 'inactive' | 'banned';
  createdAt: string;
  updatedAt: string;
}

export interface HttpResponse<T> {
  code: number;
  msg: string;
  data: T;
}

export interface PageResult<T> {
  items: T[];
  total: number;
  page: number;
  size: number;
}

export interface PageInfinite<T> {
  items: T[];
  size: number;
  page: number;
  has_more: boolean;
  next_cursor: number;
}

export interface PageParams {
  page: number;
  size: number;
}

export interface ApiError {
  code: number;
  msg: string;
  data?: unknown;
}

export interface ApiErrorResponse {
  status: number;
  message: string;
  error?: unknown;
}
