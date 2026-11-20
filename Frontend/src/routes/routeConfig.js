/**
 * @module src/routes/routeConfig
 * @responsibility Configuración central de rutas: ruta → componente → roles.
 * @requirements RF-04, RNF-02
 */
import { lazy } from 'react';

export const ROUTES = [
  { path: '/', public: true, component: lazy(() => import('../pages/public/LandingPage.jsx')) },
  { path: '/ingresar', public: true, layout: 'auth', component: lazy(() => import('../pages/public/LoginPage.jsx')) },
  { path: '/registro', public: true, layout: 'auth', component: lazy(() => import('../pages/public/RegisterPage.jsx')) },
  { path: '/recuperar', public: true, layout: 'auth', component: lazy(() => import('../pages/public/ForgotPasswordPage.jsx')) },
  { path: '/restablecer-contrasena', public: true, layout: 'auth', component: lazy(() => import('../pages/public/ResetPasswordPage.jsx')) },
  { path: '/privacidad', public: true, layout: 'legal', component: lazy(() => import('../pages/public/PrivacyPolicyPage.jsx')) },
  { path: '/terminos', public: true, layout: 'legal', component: lazy(() => import('../pages/public/TermsPage.jsx')) },
  { path: '/prohibido', public: true, component: lazy(() => import('../pages/public/ForbiddenPage.jsx')) },
  { path: '/panel', layout: 'dashboard', component: lazy(() => import('../pages/dashboard/HomePage.jsx')) },
  { path: '/panel/admin', layout: 'dashboard', roles: ['admin'], component: lazy(() => import('../pages/dashboard/AdminDashboardPage.jsx')) },
  { path: '/panel/cliente', layout: 'dashboard', roles: ['client'], component: lazy(() => import('../pages/dashboard/OwnerDashboardPage.jsx')) },
  { path: '/panel/colaborador', layout: 'dashboard', roles: ['collaborator'], component: lazy(() => import('../pages/dashboard/StaffDashboardPage.jsx')) },
  { path: '/panel/auditor', layout: 'dashboard', roles: ['auditor'], component: lazy(() => import('../pages/dashboard/AuditorDashboardPage.jsx')) },
  // TODO(Segundo avance): ventas, breidy, agentes, integraciones, reportes, admin, auditoría
  { path: '*', public: true, component: lazy(() => import('../pages/public/NotFoundPage.jsx')) }
];