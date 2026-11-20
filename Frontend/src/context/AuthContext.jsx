/**
 * @module src/context/AuthContext
 * @responsibility Estado de sesión: usuario, rol, token en memoria con respaldo
 *   en sessionStorage, login/logout y expiración.
 * @requirements RF-02, RNF-01, RNF-06
 */
import { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react';
import { authApi } from '../api/auth.api.js';
import { session } from '../utils/sessionStorage.js';
import { setSessionExpiredHandler } from '../api/httpClient.js';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => session.getUser());
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    setSessionExpiredHandler(() => setUser(null));
    const token = session.getToken();
    if (!token) { setBooting(false); return; }
    authApi.me()
      .then((res) => { setUser(res.data); session.setUser(res.data); })
      .catch(() => session.clear())
      .finally(() => setBooting(false));
  }, []);

  const login = useCallback(async (email, password) => {
    const res = await authApi.login({ email, password });
    session.setToken(res.data.token);
    session.setUser(res.data.user);
    setUser(res.data.user);
    return res.data.user;
  }, []);

  const logout = useCallback(async () => {
    try { await authApi.logout(); } catch { /* la sesión local se cierra igual */ }
    session.clear();
    setUser(null);
  }, []);

  const value = useMemo(() => ({
    user, role: user?.role, booting, login, logout,
    isAuthenticated: Boolean(user)
  }), [user, booting, login, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth debe usarse dentro de AuthProvider');
  return ctx;
}