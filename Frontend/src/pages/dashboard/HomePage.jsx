import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import { ROLE_HOME } from '../../utils/roles.js';

export default function HomePage() {
  const { role } = useAuth();
  return <Navigate to={ROLE_HOME[role] || '/ingresar'} replace />;
}