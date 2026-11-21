/**
 * @module src/components/feedback/ErrorState
 * @responsibility Error sereno con reintento.
 * @requirements RNF-06
 */
import { COPY } from '../../config/copy.es.js';

export default function ErrorState({ message, onRetry }) {
  return <div className="error-state" role="alert"><p>{message || COPY.errorGeneric}</p>{onRetry && <button className="btn btn--ghost" onClick={onRetry}>Reintentar</button>}</div>;
}
