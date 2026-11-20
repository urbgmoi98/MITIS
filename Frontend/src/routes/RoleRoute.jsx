/**
 * @module src/routes/RoleRoute
 * @responsibility Exigir uno de los roles permitidos (la autorización real
 *   siempre ocurre también en el backend).
 * @requirements RF-04, RF-18, RNF-02
 */
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function RoleRoute({ allow = [] }) {
  const { role } = useAuth();
  const location = useLocation();
  if (!allow.includes(role)) return <Navigate to="/prohibido" state={{ from: location }} replace />;
  return <Outlet />;
}