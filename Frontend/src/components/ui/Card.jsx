/**
 * @module src/components/ui/Card
 * @responsibility Contenedor de vidrio reutilizable.
 * @requirements RNF-06
 */
export default function Card({ title, sub, children, className = '' }) {
  return <article className={`glass ${className}`}>{title && <h3>{title}</h3>}<p className="sub">{sub}</p>{children}</article>;
}
