/**
 * @module src/components/layout/Navbar
 * @responsibility Barra pública extraída.
 * @requirements RNF-06
 */
import { Link } from 'react-router-dom';

export default function Navbar() {
  return <header className="public-nav"><Link className="brand" to="/">MITIS</Link><nav><Link to="/privacidad">Privacidad</Link><Link to="/terminos">Términos</Link><Link to="/ingresar">Ingresar</Link></nav></header>;
}
