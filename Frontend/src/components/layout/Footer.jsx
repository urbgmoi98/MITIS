/**
 * @module src/components/layout/Footer
 * @responsibility Avisos legales globales.
 * @requirements RF-19
 */
import { Link } from 'react-router-dom';

export default function Footer() {
  return <footer className="public-footer"><span>MITIS no sustituye al contador ni emite estados financieros legales.</span><nav><Link to="/privacidad">Privacidad</Link><Link to="/terminos">Términos</Link></nav></footer>;
}
