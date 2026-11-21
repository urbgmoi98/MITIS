/**
 * @module src/layouts/AuthLayout
 * @responsibility Contenedor sereno para formularios de autenticación.
 * @requirements RF-01, RF-02, RF-03, RNF-06
 */
export default function AuthLayout({ children }) {
  return <div className="auth-wrap">{children}</div>;
}