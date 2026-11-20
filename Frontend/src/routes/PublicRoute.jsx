/**
 * @module src/routes/PublicRoute
 * @responsibility Rutas públicas: si ya hay sesión, redirige al inicio.
 */
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function PublicRoute() {
  const { isAuthenticated, booting } = useAuth();
  if (booting) return null;
  if (isAuthenticated) return <Navigate to="/panel" replace />;
  return <Outlet />;
}