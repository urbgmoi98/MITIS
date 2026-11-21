/**
 * @module src/components/feedback/EmptyState
 * @responsibility Estado vacío sereno.
 * @requirements RNF-06
 */
import { COPY } from '../../config/copy.es.js';

export default function EmptyState({ action }) {
  return <div className="empty-state"><img src="/sloth-silhouette.svg" alt="" /><p>{COPY.empty}</p>{action}</div>;
}
