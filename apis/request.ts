import { env } from '@/lib/env';
import { delToken, getToken } from '@/utils/token';
import axios, { type AxiosResponse } from 'axios';
import qs from 'qs';
import type { ApiError, ApiErrorResponse } from './types';

/**
 * request
 */
const request = axios.create({
  baseURL: env.api.baseUrl,
  timeout: env.api.timeout,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // 'Accept-Language': 'en-US',
  },
  // withCredentials: false,
  paramsSerializer: (params) => {
    return qs.stringify(params, {
      arrayFormat: 'repeat',
    });
  },
});

/**
 * request interceptor
 */
request.interceptors.request.use(
  (config) => {
    const token = getToken();
    // 携带token
    if (token) config.headers.Authorization = token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

/**
 * response interceptor
 */
request.interceptors.response.use(
  <T>(response: AxiosResponse<T>): T => {
    return response.data;
  },
  (error) => {
    if (error.response) {
      const status = error.response.status;

      // Handle 401 - Unauthorized
      if (status === 401) {
        delToken();
        // Only redirect on client side
        if (typeof window !== 'undefined') {
          window.location.replace(
            '/login?redirect=' + encodeURIComponent(window.location.href),
          );
        }
      }

      // Handle 429 - Too Many Requests
      if (status === 429) {
        return Promise.reject(error.response);
      }

      // Server error with structured response
      const responseData = error.response.data as ApiError;
      const apiError: ApiErrorResponse = {
        status: responseData.code || status,
        message: responseData.msg || 'An error occurred',
        error: responseData.data,
      };
      return Promise.reject(apiError);
    } else {
      // Error before request (network error, timeout, etc.)
      const apiError: ApiErrorResponse = {
        status: 0,
        message: error.message || 'Network error',
        error: error,
      };
      return Promise.reject(apiError);
    }
  },
);

export default request;
