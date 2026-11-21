/**
 * @module src/components/ui/Tag
 * @responsibility Etiqueta serena por módulo.
 * @requirements RNF-06
 */
export default function Tag({ tone = 'sage', children }) {
  return <span className={`tag tag--${tone}`}>{children}</span>;
}
