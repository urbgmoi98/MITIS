/**
 * @module src/components/ui/Modal
 * @responsibility Diálogo accesible con Escape y cierre seguro.
 * @requirements RNF-06
 */
import { useEffect, useRef } from 'react';

export default function Modal({ open, onClose, title, children }) {
  const panel = useRef(null);
  useEffect(() => {
    if (!open) return undefined;
    const previous = document.activeElement;
    panel.current?.focus();
    const onKey = (event) => { if (event.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('keydown', onKey); previous?.focus(); };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="modal-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="modal glass" role="dialog" aria-modal="true" aria-label={title} tabIndex="-1" ref={panel}>
        <h2>{title}</h2>{children}
      </section>
    </div>
  );
}
