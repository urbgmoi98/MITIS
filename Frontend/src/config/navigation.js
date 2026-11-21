/**
 * @module src/config/navigation
 * @responsibility Fuente única del menú lateral por rol.
 * @requirements RF-04, RNF-02
 */
import { ROLES } from '../utils/roles.js';

const account = [
  { to: '/cuenta/perfil', label: 'Mi perfil', icon: 'user' },
  { to: '/cuenta/privacidad', label: 'Privacidad', icon: 'shield' },
  { to: '/cuenta/baja', label: 'Baja de cuenta', icon: 'close' }
];

export const NAV_BY_ROLE = Object.freeze({
  [ROLES.ADMIN]: [
    { to: '/panel/admin', label: 'Panel', icon: 'home' },
    { to: '/ventas/cargar', label: 'Cargar CSV', icon: 'upload' },
    { to: '/ventas/historial', label: 'Historial CSV', icon: 'history' },
    { to: '/catalogo', label: 'Catálogo', icon: 'box' },
    { to: '/breidy', label: 'Breidy', icon: 'chat' },
    { to: '/agentes', label: 'Agentes', icon: 'spark' },
    { to: '/integraciones', label: 'Integraciones', icon: 'link' },
    { to: '/reportes', label: 'Reportes', icon: 'doc' },
    { to: '/admin/usuarios', label: 'Usuarios', icon: 'users' },
    { to: '/admin/agentes', label: 'Agentes y accesos', icon: 'shield' },
    { to: '/admin/solicitudes', label: 'Solicitudes', icon: 'doc' },
    { to: '/admin/automatizaciones', label: 'Automatizaciones', icon: 'flow' },
    ...account
  ],
  [ROLES.COLLABORATOR]: [
    { to: '/panel/colaborador', label: 'Panel', icon: 'home' },
    { to: '/ventas/cargar', label: 'Cargar CSV', icon: 'upload' },
    { to: '/ventas/historial', label: 'Historial CSV', icon: 'history' },
    { to: '/catalogo', label: 'Catálogo', icon: 'box' },
    { to: '/breidy', label: 'Breidy', icon: 'chat' },
    { to: '/agentes', label: 'Agentes', icon: 'spark' },
    { to: '/integraciones', label: 'Integraciones', icon: 'link' },
    ...account
  ],
  [ROLES.CLIENT]: [
    { to: '/panel/cliente', label: 'Panel', icon: 'home' },
    { to: '/ventas/cargar', label: 'Cargar CSV', icon: 'upload' },
    { to: '/ventas/historial', label: 'Historial CSV', icon: 'history' },
    { to: '/breidy', label: 'Breidy', icon: 'chat' },
    { to: '/agentes', label: 'Agentes', icon: 'spark' },
    { to: '/integraciones', label: 'Integraciones', icon: 'link' },
    { to: '/reportes', label: 'Reportes', icon: 'doc' },
    ...account
  ],
  [ROLES.AUDITOR]: [
    { to: '/panel/auditor', label: 'Panel', icon: 'home' },
    { to: '/auditoria/bitacoras', label: 'Bitácoras', icon: 'doc' },
    { to: '/auditoria/ejecuciones', label: 'Ejecuciones', icon: 'flow' },
    { to: '/auditoria/integraciones', label: 'Integraciones', icon: 'link' },
    { to: '/reportes', label: 'Reportes', icon: 'doc' },
    ...account
  ]
});
