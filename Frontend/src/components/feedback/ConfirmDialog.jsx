/**
 * @module src/components/feedback/ConfirmDialog
 * @responsibility Confirmación deliberada sobre Modal.
 * @requirements RF-21, RNF-06
 */
import Modal from '../ui/Modal.jsx';
import { COPY } from '../../config/copy.es.js';

export default function ConfirmDialog({ open, onClose, onConfirm, title = 'Confirmar acción' }) {
  return <Modal open={open} onClose={onClose} title={title}><p>{COPY.confirmDelete}</p><div className="actions"><button className="btn btn--ghost" onClick={onClose}>Cancelar</button><button className="btn btn--primary" onClick={onConfirm}>Confirmar</button></div></Modal>;
}
