/**
 * @module src/routes/ProtectedRoute
 * @responsibility Exigir sesión válida; si no, redirige al login conservando
 *   la ruta de destino.
 * @requirements RF-02
 */
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import SlothLoader from '../components/feedback/SlothLoader.jsx';
import { COPY } from '../config/copy.es.js';

export default function ProtectedRoute() {
  const { isAuthenticated, booting } = useAuth();
  const location = useLocation();
  if (booting) return <SlothLoader text={COPY.loading} full />;
  if (!isAuthenticated) return <Navigate to="/ingresar" state={{ from: location }} replace />;
  return <Outlet />;
}