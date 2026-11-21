/**
 * @module src/layouts/LegalLayout
 * @responsibility Documento legal legible con retorno al sitio público.
 * @requirements RF-19
 */
import { Link } from 'react-router-dom';

export default function LegalLayout({ children }) {
  return <main className="legal-layout"><Link to="/">Volver a MITIS</Link><article>{children}</article></main>;
}
