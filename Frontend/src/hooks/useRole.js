/**
 * @module src/hooks/useRole
 * @responsibility Ayudas de visibilidad RBAC en el frontend.
 * @requirements RF-04, RNF-02
 */
import { useAuth } from '../context/AuthContext.jsx';

const ACTION_ROLES = {
  upload: ['admin', 'collaborator', 'client'],
  manageUsers: ['admin'],
  manageCatalog: ['admin', 'collaborator'],
  viewAudit: ['auditor', 'admin'],
  manageReports: ['admin', 'client'],
  viewReports: ['admin', 'client', 'auditor']
};

export default function useRole() {
  const { role } = useAuth();
  return {
    role,
    hasRole: (...roles) => Boolean(role && roles.includes(role)),
    can: (action) => Boolean(ACTION_ROLES[action]?.includes(role)),
    isAuditor: role === 'auditor'
  };
}
