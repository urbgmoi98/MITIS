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

export const ROLE_LABELS = Object.freeze({
  [ROLES.ADMIN]: 'Administrador',
  [ROLES.COLLABORATOR]: 'Colaborador',
  [ROLES.CLIENT]: 'Cliente',
  [ROLES.AUDITOR]: 'Auditor'
});