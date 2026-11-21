/**
 * @module src/components/feedback/SessionExpiryModal
 * @responsibility Aviso de cierre próximo de sesión.
 * @requirements RF-02, RNF-06
 */
import Modal from '../ui/Modal.jsx';
import { COPY } from '../../config/copy.es.js';

export default function SessionExpiryModal({ open, onDismiss, onLogout }) {
  return <Modal open={open} onClose={onDismiss} title="Sesión por finalizar"><p>{COPY.sessionEnding}</p><div className="actions"><button className="btn btn--ghost" onClick={onLogout}>Cerrar sesión</button><button className="btn btn--primary" onClick={onDismiss}>Seguir conectado</button></div></Modal>;
}
