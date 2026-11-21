/**
 * @module src/pages/public/NotFoundPage
 * @responsibility Estado 404 sereno.
 * @requirements RNF-06
 */
import { Link } from 'react-router-dom';
export default function NotFoundPage() { return <section className="auth-card"><h1>Página no encontrada</h1><p>Esta dirección no está disponible.</p><Link to="/">Volver al inicio</Link></section>; }
