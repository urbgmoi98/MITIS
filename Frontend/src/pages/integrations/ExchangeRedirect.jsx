/**
 * @module src/pages/integrations/ExchangeRedirect
 * @responsibility Redirección de integración a tipo de cambio.
 * @requirements RF-14
 */
import { Navigate } from 'react-router-dom';
export default function ExchangeRedirect() { return <Navigate to="/integraciones/tipo-cambio" replace />; }
