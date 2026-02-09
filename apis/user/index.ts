import request from '../request';
import type { HttpResponse, PageParams, PageResult } from '../types';
import type { UpdateProfileParams, User, UserListParams } from './types';

/**
 * User API Module
 */

/**
 * Get user list
 */
export const getUserList = (params: UserListParams & PageParams) => {
  return request.get<HttpResponse<PageResult<User>>>('/users', { params });
};

/**
 * Get user by ID
 */
export const getUserById = (id: string) => {
  return request.get<HttpResponse<User>>(`/users/${id}`);
};

/**
 * Update user profile
 */
export const updateProfile = (data: UpdateProfileParams) => {
  return request.put<HttpResponse<User>>('/users/profile', data);
};

/**
 * Update user avatar
 */
export const updateAvatar = (file: File) => {
  const formData = new FormData();
  formData.append('avatar', file);
  return request.post<HttpResponse<{ url: string }>>('/users/avatar', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

/**
 * Delete user
 */
export const deleteUser = (id: string) => {
  return request.delete<HttpResponse<null>>(`/users/${id}`);
};
