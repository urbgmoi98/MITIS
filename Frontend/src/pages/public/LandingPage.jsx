/**
 * @module src/pages/public/LandingPage
 * @responsibility Presentación serena y llamadas a ingreso/registro.
 * @requirements RNF-06
 */
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button.jsx';

export default function LandingPage() {
  return <main className="landing"><section className="glass"><p className="panel-head__eyebrow">Gestión serena</p><h1>Entiende tu operación sin perder la calma</h1><p>MITIS organiza tus ventas, indicadores y documentos para que tomes mejores decisiones.</p><div className="actions"><Link to="/registro"><Button>Crear cuenta</Button></Link><Link to="/ingresar"><Button variant="ghost">Ingresar</Button></Link></div></section></main>;
}
