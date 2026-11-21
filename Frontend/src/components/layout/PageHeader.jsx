/**
 * @module src/components/layout/PageHeader
 * @responsibility Encabezado consistente de página.
 * @requirements RNF-06
 */
export default function PageHeader({ eyebrow, title, sub, actions }) {
  return <header className="panel-head"><div>{eyebrow && <p className="panel-head__eyebrow">{eyebrow}</p>}<h1>{title}</h1>{sub && <p className="panel-head__sub">{sub}</p>}</div>{actions}</header>;
}
