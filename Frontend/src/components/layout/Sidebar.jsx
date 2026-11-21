/**
 * @module src/components/layout/Sidebar
 * @responsibility Navegación lateral filtrada por rol y acciones de sesión.
 * @requirements RF-04, RNF-06
 */
import { NavLink } from 'react-router-dom';
import { NAV_BY_ROLE } from '../../config/navigation.js';
import { ROLE_LABELS } from '../../utils/roles.js';
import { useAuth } from '../../context/AuthContext.jsx';

export default function Sidebar() {
  const { user, logout } = useAuth();
  const items = NAV_BY_ROLE[user?.role] || [];
  return (
    <aside className="dash-side">
      <div className="dash-brand">MITIS<small>sereno · eficaz</small></div>
      <nav className="dash-nav" aria-label="Navegación principal">
        {items.map((item) => <NavLink key={item.to} to={item.to} className={({ isActive }) => isActive ? 'active' : ''}>{item.label}</NavLink>)}
      </nav>
      <div className="dash-user">
        <div className="dash-user__avatar" aria-hidden="true">{user?.fullName?.slice(0, 1).toUpperCase() || 'M'}</div>
        <div className="dash-user__meta"><strong>{user?.fullName}</strong><span>{ROLE_LABELS[user?.role] || user?.role}</span></div>
        <button className="btn btn--ghost" style={{ marginLeft: 'auto', padding: '0.4rem 0.9rem' }} onClick={logout}>Salir</button>
      </div>
    </aside>
  );
}
