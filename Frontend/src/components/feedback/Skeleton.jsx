/**
 * @module src/components/feedback/Skeleton
 * @responsibility Pulso suave de carga.
 * @requirements RNF-06
 */
export default function Skeleton({ lines = 3 }) {
  return <div className="skeleton" aria-label="Cargando">{Array.from({ length: lines }, (_, index) => <span key={index} />)}</div>;
}
