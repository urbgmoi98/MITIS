/**
 * @module src/layouts/DashboardLayout
 * @responsibility Sidebar de vidrio con menú dinámico por rol + barra superior.
 * @requirements RF-04, RNF-06
 */
import Sidebar from '../components/layout/Sidebar.jsx';
import SessionExpiryModal from '../components/feedback/SessionExpiryModal.jsx';
import useSessionTimeout from '../hooks/useSessionTimeout.js';

export default function DashboardLayout({ children }) {
  const sessionTimeout = useSessionTimeout();

  return (
    <div className="dash">
      <Sidebar />
      <main className="dash-main">{children}</main>
      <SessionExpiryModal open={sessionTimeout.warning} onDismiss={sessionTimeout.dismissWarning} onLogout={sessionTimeout.logout} />
    </div>
  );
}