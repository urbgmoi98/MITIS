/**
 * @module src/pages/public/ForbiddenPage
 * @responsibility Estado 403 sereno.
 * @requirements RNF-02
 */
import { Link } from 'react-router-dom';
export default function ForbiddenPage() { return <section className="auth-card"><h1>Acceso no disponible</h1><p>Esta sección no está disponible para tu rol.</p><Link to="/panel">Volver al panel</Link></section>; }
