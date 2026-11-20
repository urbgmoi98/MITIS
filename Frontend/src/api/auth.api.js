/**
 * @module src/api/auth.api
 * @responsibility Llamadas de autenticación al backend.
 * @requirements RF-01, RF-02, RF-03
 */
import httpClient from './httpClient.js';

export const authApi = {
  login: (payload) => httpClient.post('/auth/login', payload),
  register: (payload) => httpClient.post('/auth/register', payload),
  forgotPassword: (payload) => httpClient.post('/auth/forgot-password', payload),
  resetPassword: (payload) => httpClient.post('/auth/reset-password', payload),
  me: () => httpClient.get('/auth/me'),
  logout: () => httpClient.post('/auth/logout')
};