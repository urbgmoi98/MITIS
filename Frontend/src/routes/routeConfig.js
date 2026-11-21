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
  { path: '/ventas/cargar', layout: 'dashboard', roles: ['admin', 'collaborator', 'client'], component: lazy(() => import('../pages/sales/UploadCsvPage.jsx')) },
  { path: '/ventas/historial', layout: 'dashboard', roles: ['admin', 'collaborator', 'client'], component: lazy(() => import('../pages/sales/UploadHistoryPage.jsx')) },
  { path: '/catalogo', layout: 'dashboard', roles: ['admin', 'collaborator'], component: lazy(() => import('../pages/sales/CatalogPage.jsx')) },
  { path: '/breidy', layout: 'dashboard', roles: ['admin', 'collaborator', 'client'], component: lazy(() => import('../pages/breidy/BreidyPage.jsx')) },
  { path: '/breidy/historial', layout: 'dashboard', roles: ['admin', 'collaborator', 'client'], component: lazy(() => import('../pages/breidy/BreidyHistoryPage.jsx')) },
  { path: '/agentes', layout: 'dashboard', roles: ['admin', 'collaborator', 'client', 'auditor'], component: lazy(() => import('../pages/agents/AgentsHubPage.jsx')) },
  { path: '/agentes/lector-facturas', layout: 'dashboard', roles: ['admin', 'collaborator'], component: lazy(() => import('../pages/agents/InvoiceReaderPage.jsx')) },
  { path: '/agentes/analista-margen', layout: 'dashboard', roles: ['admin', 'client'], component: lazy(() => import('../pages/agents/MarginAnalystPage.jsx')) },
  { path: '/agentes/narrador-reportes', layout: 'dashboard', roles: ['admin', 'client'], component: lazy(() => import('../pages/agents/ReportNarratorPage.jsx')) },
  { path: '/agentes/chat-documentos', layout: 'dashboard', roles: ['admin', 'collaborator'], component: lazy(() => import('../pages/agents/DocumentChatPage.jsx')) },
  { path: '/agentes/asistente-soporte', layout: 'dashboard', component: lazy(() => import('../pages/agents/SupportAssistantPage.jsx')) },
  { path: '/agentes/cumplimiento', layout: 'dashboard', roles: ['admin', 'client', 'auditor'], component: lazy(() => import('../pages/agents/CompliancePage.jsx')) },
  { path: '/agentes/mapa-csv', layout: 'dashboard', roles: ['admin', 'collaborator', 'client'], component: lazy(() => import('../pages/agents/CsvMapperPage.jsx')) },
  { path: '/agentes/pulso-sereno', layout: 'dashboard', roles: ['admin', 'client'], component: lazy(() => import('../pages/agents/SerenePulsePage.jsx')) },
  { path: '/integraciones', layout: 'dashboard', roles: ['admin', 'collaborator', 'client'], component: lazy(() => import('../pages/integrations/ExchangeRedirect.jsx')) },
  { path: '/integraciones/tipo-cambio', layout: 'dashboard', roles: ['admin', 'collaborator', 'client'], component: lazy(() => import('../pages/integrations/ExchangeRatePage.jsx')) },
  { path: '/integraciones/contribuyentes', layout: 'dashboard', roles: ['admin', 'collaborator', 'client'], component: lazy(() => import('../pages/integrations/TaxpayerLookupPage.jsx')) },
  { path: '/reportes', layout: 'dashboard', roles: ['admin', 'client', 'auditor'], component: lazy(() => import('../pages/reports/ReportsPage.jsx')) },
  { path: '/reportes/generar', layout: 'dashboard', roles: ['admin', 'client'], component: lazy(() => import('../pages/reports/ReportGeneratorPage.jsx')) },
  { path: '/admin/usuarios', layout: 'dashboard', roles: ['admin'], component: lazy(() => import('../pages/admin/UsersPage.jsx')) },
  { path: '/admin/agentes', layout: 'dashboard', roles: ['admin'], component: lazy(() => import('../pages/admin/AgentsAdminPage.jsx')) },
  { path: '/admin/solicitudes', layout: 'dashboard', roles: ['admin'], component: lazy(() => import('../pages/admin/DataRequestsPage.jsx')) },
  { path: '/admin/automatizaciones', layout: 'dashboard', roles: ['admin'], component: lazy(() => import('../pages/admin/AutomationsPage.jsx')) },
  { path: '/auditoria/bitacoras', layout: 'dashboard', roles: ['auditor', 'admin'], component: lazy(() => import('../pages/auditor/AuditLogsPage.jsx')) },
  { path: '/auditoria/ejecuciones', layout: 'dashboard', roles: ['auditor', 'admin'], component: lazy(() => import('../pages/auditor/AgentExecutionsPage.jsx')) },
  { path: '/auditoria/integraciones', layout: 'dashboard', roles: ['auditor', 'admin'], component: lazy(() => import('../pages/auditor/IntegrationLogsPage.jsx')) },
  { path: '/cuenta/perfil', layout: 'dashboard', component: lazy(() => import('../pages/account/ProfilePage.jsx')) },
  { path: '/cuenta/privacidad', layout: 'dashboard', component: lazy(() => import('../pages/account/PrivacyCenterPage.jsx')) },
  { path: '/cuenta/baja', layout: 'dashboard', component: lazy(() => import('../pages/account/DeleteAccountPage.jsx')) },
  { path: '*', public: true, component: lazy(() => import('../pages/public/NotFoundPage.jsx')) }
];