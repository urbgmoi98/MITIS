/**
 * @module src/hooks/useSessionTimeout
 * @responsibility Aviso previo y cierre limpio según exp del JWT.
 * @requirements RF-02, RNF-01, RNF-06
 */
import { useEffect, useMemo, useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { session } from '../utils/sessionStorage.js';

function readExpiration() {
  const token = session.getToken();
  if (!token) return null;
  try {
    const payload = JSON.parse(atob(token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')));
    return payload.exp ? payload.exp * 1000 : null;
  } catch { return null; }
}

export default function useSessionTimeout() {
  const { logout } = useAuth();
  const expiresAt = useMemo(readExpiration, []);
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    if (!expiresAt) return undefined;
    const warningTimer = setTimeout(() => setWarning(true), Math.max(0, expiresAt - Date.now() - 120000));
    const logoutTimer = setTimeout(logout, Math.max(0, expiresAt - Date.now()));
    return () => { clearTimeout(warningTimer); clearTimeout(logoutTimer); };
  }, [expiresAt, logout]);

  return { expiresAt, warning, dismissWarning: () => setWarning(false), logout };
}
