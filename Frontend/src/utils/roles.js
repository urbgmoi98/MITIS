/**
 * @module src/utils/roles
 * @responsibility Constantes y ayudas de roles del frontend.
 * @requirements RF-04
 */
export const ROLES = Object.freeze({
  ADMIN: 'admin', COLLABORATOR: 'collaborator', CLIENT: 'client', AUDITOR: 'auditor'
});

export const ROLE_HOME = Object.freeze({
  [ROLES.ADMIN]: '/panel/admin',
  [ROLES.CLIENT]: '/panel/cliente',
  [ROLES.COLLABORATOR]: '/panel/colaborador',
  [ROLES.AUDITOR]: '/panel/auditor'
});

/** Menú lateral dinámico por rol (RF-04). */
export const NAV_BY_ROLE = Object.freeze({
  [ROLES.ADMIN]: [
    { to: '/panel/admin', label: 'Panel', icon: 'home' },
    { to: '/ventas/cargar', label: 'Cargar CSV', icon: 'upload' },
    { to: '/catalogo', label: 'Catálogo', icon: 'box' },
    { to: '/breidy', label: 'Breidy', icon: 'chat' },
    { to: '/agentes', label: 'Agentes', icon: 'spark' },
    { to: '/reportes', label: 'Reportes', icon: 'doc' },
    { to: '/integraciones', label: 'Integraciones', icon: 'link' },
    { to: '/admin/usuarios', label: 'Usuarios', icon: 'users' },
    { to: '/admin/agentes', label: 'Agentes y accesos', icon: 'shield' },
    { to: '/admin/automatizaciones', label: 'Automatizaciones', icon: 'flow' }
  ],
  [ROLES.CLIENT]: [
    { to: '/panel/cliente', label: 'Panel', icon: 'home' },
    { to: '/ventas/cargar', label: 'Cargar CSV', icon: 'upload' },
    { to: '/breidy', label: 'Breidy', icon: 'chat' },
    { to: '/reportes', label: 'Reportes', icon: 'doc' },
    { to: '/integraciones', label: 'Integraciones', icon: 'link' }
  ],
  [ROLES.COLLABORATOR]: [
    { to: '/panel/colaborador', label: 'Panel', icon: 'home' },
    { to: '/ventas/cargar', label: 'Cargar CSV', icon: 'upload' },
    { to: '/catalogo', label: 'Catálogo', icon: 'box' },
    { to: '/breidy', label: 'Breidy', icon: 'chat' },
    { to: '/agentes', label: 'Agentes', icon: 'spark' }
  ],
  [ROLES.AUDITOR]: [
    { to: '/panel/auditor', label: 'Panel', icon: 'home' },
    { to: '/auditoria/bitacoras', label: 'Bitácoras', icon: 'doc' },
    { to: '/auditoria/ejecuciones', label: 'Ejecuciones de agentes', icon: 'flow' },
    { to: '/auditoria/integraciones', label: 'Integraciones', icon: 'link' }
  ]
});