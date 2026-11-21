/**
 * @module src/routes/AppRouter
 * @responsibility Ensamblar rutas públicas, protegidas y por rol con Suspense.
 * @requirements RF-02, RF-04
 */
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './routeConfig.js';
import ProtectedRoute from './ProtectedRoute.jsx';
import RoleRoute from './RoleRoute.jsx';
import AuthLayout from '../layouts/AuthLayout.jsx';
import PublicLayout from '../layouts/PublicLayout.jsx';
import LegalLayout from '../layouts/LegalLayout.jsx';
import DashboardLayout from '../layouts/DashboardLayout.jsx';
import SlothLoader from '../components/feedback/SlothLoader.jsx';
import { COPY } from '../config/copy.es.js';

const LAYOUTS = {
  auth: AuthLayout, legal: LegalLayout, dashboard: DashboardLayout, default: PublicLayout
};

export default function AppRouter() {
  const renderWithLayout = (r) => {
    const Layout = LAYOUTS[r.layout || 'default'];
    const el = (
      <Suspense fallback={<SlothLoader text={COPY.loading} full />}>
        <r.component />
      </Suspense>
    );
    return <Layout>{el}</Layout>;
  };

  return (
    <Routes>
      {ROUTES.map((r) => {
        if (r.public) {
          return <Route key={r.path} path={r.path} element={renderWithLayout(r)} />;
        }
        return (
          <Route key={r.path} path={r.path} element={<ProtectedRoute />}>
            {r.roles
              ? <Route element={<RoleRoute allow={r.roles} />}>
                  <Route index element={renderWithLayout(r)} />
                </Route>
              : <Route index element={renderWithLayout(r)} />}
          </Route>
        );
      })}
    </Routes>
  );
}