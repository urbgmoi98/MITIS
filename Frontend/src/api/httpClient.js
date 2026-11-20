/**
 * @module src/api/httpClient
 * @responsibility Instancia axios con JWT en cabecera, manejo sereno de errores
 *   y redirección limpia al expirar la sesión (401).
 * @requirements RF-02, RNF-06
 */
import axios from 'axios';
import env from '../config/env.js';
import { session } from '../utils/sessionStorage.js';

const httpClient = axios.create({ baseURL: env.apiUrl, timeout: 15000 });

httpClient.interceptors.request.use((config) => {
  const token = session.getToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

let onSessionExpired = () => {};
export function setSessionExpiredHandler(fn) { onSessionExpired = fn; }

httpClient.interceptors.response.use(
  (res) => res.data,
  (err) => {
    if (err.response?.status === 401) {
      session.clear();
      onSessionExpired();
    }
    const message = err.response?.data?.message
      || 'Algo no salió como esperábamos. Inténtalo de nuevo.';
    return Promise.reject(Object.assign(new Error(message), {
      status: err.response?.status,
      code: err.response?.data?.code,
      details: err.response?.data?.details
    }));
  }
);

export default httpClient;